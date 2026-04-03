import API from "../api/axios";

// GET ALL
export const getProducts = async () => {
  const res = await API.get("/products");
  return res.data;
};

// GET SINGLE
export const getProductById = async (id) => {
  const res = await API.get(`/products/${id}`);
  return res.data;
};

// CREATE (Admin + Cloudinary)
export const createProduct = async (formData) => {
  const res = await API.post("/products", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};