import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const ProductUpdateForm = () => {
  const {state} = useLocation()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price:"",
    discountPercentage:"",
    rating:"",
    stock: "",
    tags: [],
    brand: '',
    sku: '',
    weight: "",
    dimensions: { width: '', height: '' },
    warrantyInformation: '',
    shippingInformation: '',
    availabilityStatus: '',
    returnPolicy: '',
    minimumOrderQuantity: "",
    meta: { createdBy: '', lastUpdated: '' },
  });

 useEffect(() => {
  if (state) {
    setFormData((prev) => {
      const updated = { ...prev };

      Object.keys(state).forEach((key) => {
        if (typeof state[key] === 'object' && !Array.isArray(state[key]) && state[key] !== null) {
          updated[key] = { ...updated[key], ...state[key] };
        } else {
          updated[key] = state[key];
        }
      });

      return updated;
    });
  }
}, [state]);


  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith('dimensions.')) {
      const key = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        dimensions: { ...prev.dimensions, [key]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleArrayChange = (e, field, index) => {
    const newArray = [...formData[field]];
    newArray[index] = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: newArray }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
  };

  const renderInput = (label, name, type = 'text', readOnly = false) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        readOnly={readOnly}
        className="w-full border rounded px-3 py-2 text-sm"
      />
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow space-y-6 mt-10"
    >
      <h2 className="text-2xl font-bold">Update Product</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderInput('Title', 'title')}
        {renderInput('Category', 'category')}
        {renderInput('Brand', 'brand')}
        {renderInput('SKU', 'sku')}
        {renderInput('Price', 'price', 'number')}
        {renderInput('Discount (%)', 'discountPercentage', 'number')}
        {renderInput('Rating', 'rating', 'number')}
        {renderInput('Stock', 'stock', 'number')}
        {renderInput('Weight (g)', 'weight', 'number')}
        {renderInput('Availability', 'availabilityStatus')}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 text-sm h-24"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
        <div className="grid grid-cols-3 gap-2">
          {formData.tags.map((tag, idx) => (
            <input
              key={idx}
              value={tag}
              onChange={(e) => handleArrayChange(e, 'tags', idx)}
              className="border rounded px-3 py-2 text-sm"
              placeholder={`Tag ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Dimensions (cm)</label>
        <div className="grid grid-cols-3 gap-2">
          {['width', 'height'].map((dim,idx) => (
            <input
              key={idx}
              name={`dimensions.${dim}`}
              value={formData.dimensions[dim]}
              onChange={handleChange}
              className="border rounded px-3 py-2 text-sm"
              placeholder={dim}
            />
          ))}
        </div>
      </div>

      {renderInput('Warranty Information', 'warrantyInformation')}
      {renderInput('Shipping Information', 'shippingInformation')}
      {renderInput('Return Policy', 'returnPolicy')}

    

      <button
        type="submit"
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Update
      </button>
    </form>
  );
};

export default ProductUpdateForm;
