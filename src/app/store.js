import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/users/userSlice';
import productSlice from '../features/products/productSlice';
import blogSlice from '../features/blogs/blogSlice';
import contactSlice from '../features/contact/contactSlice';


export const store = configureStore({
  reducer: {
    auth: userSlice,
    product: productSlice,
    blog: blogSlice,
    contact: contactSlice,
  },
});
