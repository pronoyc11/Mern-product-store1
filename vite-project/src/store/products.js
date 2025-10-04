/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { create } from "zustand";
import base from "../../back_link";
const apiUrl = import.meta.env.VITE_API_URL;

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please fill all the fields" };
    }
    const res = await fetch(`${apiUrl}/api/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    set((state) => ({ products: [...state.products, data.data] }));
    return { success: true, message: "Product created successfully." };
  },
  fetchProducts: async () => {
    const res = await fetch(`${apiUrl}/api/products`);
    const data = await res.json();
    set({ products: data.data });
    return { success: true, message: "All the product is got successfully." };
  },
  updateProduct: async (updatedProduct, id) => {
    // console.log(JSON.stringify(updatedProduct));
    const res = await fetch(`${apiUrl}/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    const data = await res.json();
    console.log("At products.js,36 :", data);
    if (!data.success) {
      return { success: false, message: data.message };
    }
    set((state) => ({
      products: state.products.map((product) =>
        product._id === id ? data.data : product
      ),
    }));
    return { success: true, message: "Product updated successfully" };
  },
  deleteProducts: async (id) => {
    const res = await fetch(`${apiUrl}/api/products/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (!data.success) return { success: false, message: "Could not delete" };

    set((state) => ({
      products: state.products.filter((product) => product._id != id),
    }));
    return { success: true, message: data.message };
  },
}));
