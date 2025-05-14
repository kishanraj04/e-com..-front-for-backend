import React, { useState } from "react";
import { useAddNewProductMutation } from "../../../api/apiCallingForProduct";
import {toast} from 'react-toastify'
const initialState = {
  qty: 0,
  title: "",
  description: "",
  category: "",
  price: "",
  discountPercentage: "",
  rating: 0,
  stock: "",
  tags: "",
  brand: "",
  sku: "",
  weight: "",
  dimensions: {
    width: "",
    height: "",
    depth: "",
  },
  warrantyInformation: "",
  shippingInformation: "",
  availabilityStatus: "",
  returnPolicy: "",
  minimumOrderQuantity: "",
  images: [],
  thumbnail: null,
};

const CreateProductForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [createProd] = useAddNewProductMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("dimensions.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        dimensions: {
          ...prev.dimensions,
          [key]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      images: files,
    }));
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      thumbnail: file,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();

  for (const key in formData) {
    if (["images", "thumbnail", "dimensions"].includes(key)) continue;
    data.append(key, formData[key]);
  }

  for (const dim in formData.dimensions) {
    data.append(`dimensions.${dim}`, formData.dimensions[dim]);
  }

  if (formData.thumbnail) {
    data.append("thumbnail", formData.thumbnail);
  }

  formData.images.forEach((file) => {
    data.append("images", file);
  });
  
  const response = await createProd(data);
  console.log("res ",response);
  if(response?.data?.success){
    toast.success("product created")
  }
};


  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Product</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Title" name="title" value={formData.title} onChange={handleChange} required />
          <Input label="Category" name="category" value={formData.category} onChange={handleChange} required />
        </div>

        <Input
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          textarea
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Input label="Price" name="price" type="number" value={formData.price} onChange={handleChange} required />
          <Input label="Stock" name="stock" type="number" value={formData.stock} onChange={handleChange} required />
          <Input label="Qty" name="qty" type="number" value={formData.qty} onChange={handleChange} />
          <Input label="Discount (%)" name="discountPercentage" type="number" value={formData.discountPercentage} onChange={handleChange} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input label="Brand" name="brand" value={formData.brand} onChange={handleChange} />
          <Input label="SKU" name="sku" value={formData.sku} onChange={handleChange} />
          <Input label="Weight" name="weight" type="number" value={formData.weight} onChange={handleChange} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input label="Width" name="dimensions.width" type="number" value={formData.dimensions.width} onChange={handleChange} />
          <Input label="Height" name="dimensions.height" type="number" value={formData.dimensions.height} onChange={handleChange} />
          <Input label="Depth" name="dimensions.depth" type="number" value={formData.dimensions.depth} onChange={handleChange} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input label="Warranty Info" name="warrantyInformation" value={formData.warrantyInformation} onChange={handleChange} />
          <Input label="Shipping Info" name="shippingInformation" value={formData.shippingInformation} onChange={handleChange} />
          <Input label="Availability Status" name="availabilityStatus" value={formData.availabilityStatus} onChange={handleChange} />
        </div>

        <Input label="Tags (comma-separated)" name="tags" value={formData.tags} onChange={handleChange} />

        {/* File Uploads */}
        <div>
          <label className="block font-medium mb-1">Upload Images (Multiple)</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {formData.images.length > 0 && (
            <ul className="text-sm text-gray-600 mt-2 list-disc pl-5">
              {formData.images.map((file, idx) => (
                <li key={idx}>{file.name}</li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">Thumbnail</label>
          <input
            type="file"
            accept="image/*"
            name="thumbnail"
            onChange={handleThumbnailChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {formData.thumbnail && (
            <p className="text-sm text-gray-600 mt-2">Selected: {formData.thumbnail.name}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Return Policy" name="returnPolicy" value={formData.returnPolicy} onChange={handleChange} />
          <Input
            label="Minimum Order Quantity"
            name="minimumOrderQuantity"
            type="number"
            value={formData.minimumOrderQuantity}
            onChange={handleChange}
          />
        </div>

        <div className="text-center pt-4">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
            Submit Product
          </button>
        </div>
      </form>
    </div>
  );
};

// Updated Input component
const Input = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  textarea = false,
}) => {
  return (
    <div>
      <label className="block font-medium mb-1">{label}</label>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none h-24"
        />
      ) : (
        <input
          type={type}
          name={name}
          {...(type !== "file" && { value })}
          onChange={onChange}
          required={required}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
        />
      )}
    </div>
  );
};

export default CreateProductForm;
