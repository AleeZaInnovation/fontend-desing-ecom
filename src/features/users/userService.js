import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const register = async (userData) => {
  const response = await axios.post(`${base_url}user/register`, userData);
  if (response.data) {
    return response.data;
  }
};

const login = async (userData) => {
  const response = await axios.post(`${base_url}user/login`, userData);
  if (response.data) {
    localStorage.setItem("customer", JSON.stringify(response.data));
  }
  return response.data;
};

const getWishList = async () => {
  const response = await axios.get(`${base_url}user/wishlist`, config);
  if (response.data) {
    return response.data;
  }
};

const addProductToCart = async (cartData) => {
  const response = await axios.post(`${base_url}user/cart`, cartData, config);
  if (response.data) {
    return response.data;
  }
};

const getAddedCart = async (data) => {
  const response = await axios.get(`${base_url}user/cart`, data);
  // console.log(config)
  if (response.data) {
    return response.data;
  }
};

const removeFromCart = async (data) => {
  const response = await axios.delete(`${base_url}user/cart/${data.id}`, data.config2);
  if (response.data) {
    return response.data;
  }
};

const quantityFromCart = async (cartDetail) => {
  console.log(cartDetail);
  const response = await axios.put(`${base_url}user/cart-quantity/${cartDetail.id}/${cartDetail.quantity}`, "", config);
  if (response.data) {
    return response.data;
  }
};

const createOrder = async (orderDetails) => {
  const response = await axios.post(`${base_url}user/order`, orderDetails, config);
  if (response.data) {
    return response.data;
  }
};

const getOrder = async (data) => {
  const response = await axios.get(`${base_url}user/order`, data);
  if (response.data) {
    return response.data;
  }
};

const editProfile = async (data) => {
  console.log(data)
  const response = await axios.put(`${base_url}user/me/update`, data.data, data.config2);
  if (response.data) {
    return response.data;
  }
};

const itsMe = async () => {
  const response = await axios.get(`${base_url}user/me/`, config);
  if (response.data) {
    return response.data;
  }
};

const passwordToken = async (data) => {
  const response = await axios.post(`${base_url}user/password/forget`, data);
  if (response.data) {
    return response.data;
  }
};

const cartClear = async () => {
  const response = await axios.delete(`${base_url}user/empty-cart`, config);
  if (response.data) {
    return response.data;
  }
};


const resetToken = async (data) => {
  const response = await axios.put(`${base_url}user/password/reset/${data.token}`, { password: data?.password });
  if (response.data) {
    return response.data;
  }
};


const authService = {
  register,
  login,
  getWishList,
  addProductToCart,
  getAddedCart,
  removeFromCart,
  quantityFromCart,
  createOrder,
  getOrder,
  editProfile,
  itsMe,
  passwordToken,
  resetToken,
  cartClear,
};

export default authService;
