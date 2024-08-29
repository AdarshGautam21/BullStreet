'use client'
import React, { useState } from "react";
import FormField from "./FormField";
import Button from "./Button";
import CreateButton from "../components/createButton";
import CreateToken from "@/functions/createToken";

const CoinForm: React.FC = () => {
  const [formData, setFormData] = useState<any>({
    name: "",
    ticker: "",
    description: "",
    image: null, // Stores the image file
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setFormData((prevData: any) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    if (formData.image) {
      const updatedFile: any = await formData.image ? new File([formData.image], formData.name, { type: formData.image.type }) : null;

      console.log("Selected file:", formData.image.name);
      CreateToken(formData.name, updatedFile)    // Implement form submission logic here
    }
  };

  return (
    <form
      className="flex flex-col px-6 py-7 mt-5 max-w-full text-xs rounded-xl bg-neutral-900 w-[498px] max-md:px-5"
      onSubmit={handleSubmit}
    >
      <FormField
        label="Name"
        placeholder="Coin Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <FormField
        label="Ticker"
        placeholder="Ticker Name"
        name="ticker"
        value={formData.ticker}
        onChange={handleInputChange}
      />
      <FormField
        label="Description"
        placeholder="Description about your coin"
        isTextArea
        name="description"
        value={formData.description}
        onChange={handleInputChange}
      />
      <FormField
        label="Image"
        placeholder="Upload"
        isFileUpload
        name="image"
        onChange={handleFileChange}
        value={formData.image ? formData.image.name : ""}
      />
      <Button
        text="Show more options"
        className="flex gap-1.5 self-start px-1.5 py-1 mt-5 font-semibold text-white rounded-md bg-neutral-800"
      >
        <span className="grow">Show more options</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5047ef5a8ca0f32d7c9001bccf9c0229e789cb045c8699cd7a3cd9625d7d831b?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
          alt=""
          className="object-contain shrink-0 my-auto aspect-[1.83] w-[11px]"
        />
      </Button>
      {/* <Button
        text="Create Your COIN"
        className="px-16 py-3 mt-5 text-lg font-bold text-center text-white bg-green-500 rounded-lg max-md:px-5 max-md:max-w-full"
        type="submit"
      /> */}
      <CreateButton 
      text="Create Your COIN"
      className="px-16 py-3 mt-5 text-lg font-bold text-center text-white bg-green-500 rounded-lg max-md:px-5 max-md:max-w-full"
      type="submit" 
      />
    </form>
  );
};

export default CoinForm;
