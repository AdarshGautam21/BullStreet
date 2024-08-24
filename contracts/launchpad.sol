// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract MemecoinLaunchpad is ERC20, Ownable, ReentrancyGuard {
    uint256 public constant INITIAL_SUPPLY = 1000000 * 10 ** 18; // 1 million tokens
    uint256 public tokenPrice; // Price per token in wei
    uint256 public stakingRewardRate; // Reward rate for staked ETH
    address public referralContract; // Address for referral management
    mapping(address => uint256) public stakedETH;
    mapping(address => uint256) public referralRewards;

    event TokensPurchased(
        address indexed buyer,
        uint256 amount,
        address indexed referrer
    );
    event StakedETH(address indexed staker, uint256 amount);
    event UnstakedETH(address indexed staker, uint256 amount);
    event ReferralRewardPaid(address indexed referrer, uint256 reward);

    constructor(
        string memory name,
        string memory symbol,
        uint256 _tokenPrice,
        uint256 _stakingRewardRate,
        address initialOwner
    ) ERC20(name, symbol) Ownable(initialOwner) {
        _mint(address(this), INITIAL_SUPPLY);
        tokenPrice = _tokenPrice;
        stakingRewardRate = _stakingRewardRate;
    }

    // Function to set referral contract
    function setReferralContract(address _referralContract) external onlyOwner {
        referralContract = _referralContract;
    }

    // Function to buy tokens with optional referral
    function buyTokens(
        uint256 tokenAmount,
        address referrer
    ) external payable nonReentrant {
        require(
            msg.value == tokenAmount * tokenPrice,
            "Incorrect ETH amount sent"
        );

        uint256 balance = balanceOf(address(this));
        require(balance >= tokenAmount, "Not enough tokens available");

        if (referrer != address(0) && referrer != msg.sender) {
            uint256 referralReward = msg.value / 10; // 10% referral reward
            payable(referrer).transfer(referralReward);
            referralRewards[referrer] += referralReward;
            emit ReferralRewardPaid(referrer, referralReward);
        }

        _transfer(address(this), msg.sender, tokenAmount);
        emit TokensPurchased(msg.sender, tokenAmount, referrer);
    }

    // Function to stake ETH and mint new tokens based on staked amount
    function stakeETH() external payable nonReentrant {
        require(msg.value > 0, "Must stake more than 0 ETH");

        stakedETH[msg.sender] += msg.value;
        uint256 mintedTokens = msg.value * stakingRewardRate;
        _mint(msg.sender, mintedTokens);

        emit StakedETH(msg.sender, msg.value);
    }

    // Function to unstake ETH (no penalty for this example)
    function unstakeETH(uint256 amount) external nonReentrant {
        require(stakedETH[msg.sender] >= amount, "Insufficient staked amount");

        stakedETH[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);

        emit UnstakedETH(msg.sender, amount);
    }

    // Function to withdraw ETH from the contract (only owner)
    function withdrawETH() external onlyOwner nonReentrant {
        payable(owner()).transfer(address(this).balance);
    }

    // Function to withdraw unsold tokens
    function withdrawUnsoldTokens() external onlyOwner nonReentrant {
        uint256 unsoldTokens = balanceOf(address(this));
        _transfer(address(this), owner(), unsoldTokens);
    }

    // Function to set the token price
    function setTokenPrice(uint256 newPrice) external onlyOwner {
        tokenPrice = newPrice;
    }

    // Function to set the staking reward rate
    function setStakingRewardRate(uint256 newRate) external onlyOwner {
        stakingRewardRate = newRate;
    }

    // Additional functions to link social media accounts for community referrals
    struct SocialMedia {
        string telegram;
        string twitter;
    }
    mapping(address => SocialMedia) public socialMediaAccounts;

    // Function to set social media accounts
    function setSocialMediaAccounts(
        string memory telegram,
        string memory twitter
    ) external {
        socialMediaAccounts[msg.sender] = SocialMedia(telegram, twitter);
    }

    // Function to get social media accounts
    function getSocialMediaAccounts(
        address user
    ) external view returns (string memory, string memory) {
        SocialMedia memory accounts = socialMediaAccounts[user];
        return (accounts.telegram, accounts.twitter);
    }
}
