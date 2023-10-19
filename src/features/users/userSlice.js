import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./userService";
import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css'


export const registerUser = createAsyncThunk(
    "auth/register",
    async (userData, thunkAPI) => {
        try {
            return await authService.register(userData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const loginUser = createAsyncThunk(
    "auth/login",
    async (userData, thunkAPI) => {
        try {
            return await authService.login(userData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const getProductWishList = createAsyncThunk(
    "user/wishlist",
    async (thunkAPI) => {
        try {
            return await authService.getWishList();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const addToCart = createAsyncThunk(
    "user/add-to-cart",
    async (cartData, thunkAPI) => {
        try {
            return await authService.addProductToCart(cartData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const getCart = createAsyncThunk(
    "user/get-cart",
    async (data, thunkAPI) => {
        try {
            return await authService.getAddedCart(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const deleteCart = createAsyncThunk(
    "user/delete-cart",
    async (data, thunkAPI) => {
        try {
            return await authService.removeFromCart(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const quantityCart = createAsyncThunk(
    "user/cart-quantity",
    async (cartDetail, thunkAPI) => {
        try {
            return await authService.quantityFromCart(cartDetail);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const createAnOrder = createAsyncThunk(
    "user/order-create",
    async (orderDetails, thunkAPI) => {
        try {
            return await authService.createOrder(orderDetails);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const getMyOrder = createAsyncThunk(
    "user/order-get",
    async (data, thunkAPI) => {
        try {
            return await authService.getOrder(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const updateProfile = createAsyncThunk(
    "user/pofile-update",
    async (data, thunkAPI) => {

        try {
            return await authService.editProfile(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const userDetails = createAsyncThunk(
    "user/details",
    async (thunkAPI) => {
        try {
            return await authService.itsMe();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const forgetPassword = createAsyncThunk(
    "user/forget-password",
    async (data, thunkAPI) => {
        try {
            return await authService.passwordToken(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const resetPassword = createAsyncThunk(
    "user/reset-password",
    async (data, thunkAPI) => {
        try {
            return await authService.resetToken(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const emptyCart = createAsyncThunk(
    "user/empty-cart",
    async (thunkAPI) => {
        try {
            return await authService.cartClear();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
const getCustomerFromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;

const initialState = {
    user: getCustomerFromLocalStorage,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.userRegistered = action.payload;
                if (state.isSuccess === true) {
                    toast.info("User Registered Successfully .");
                }
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(action.payload.response.data.message);
                }
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.user = action.payload;
                if (state.isSuccess === true) {
                    toast.info("User Logged In Successfully .");
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
                if (state.isError === true) {
                    toast.error(action.payload.response.data.message);
                }
            })
            .addCase(getProductWishList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProductWishList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.wishlist = action.payload;
            })
            .addCase(getProductWishList.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(action.payload.response.data.message);
                } state.isLoading = true;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.addedCart = action.payload;
                if (state.isSuccess === true) {
                    toast.info("Product added to cart successfully.");
                }
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(action.payload.response.data.message);
                }
            })
            .addCase(getCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.getCartDetails = action.payload;
            })
            .addCase(getCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(action.error);
                }
            })
            .addCase(deleteCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.emptyCart = action.payload;
                if (state.isSuccess === true) {
                    toast.error("Deleted products successfully .");
                }
            })
            .addCase(deleteCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(action.payload.response.data.message);
                } state.isLoading = true;
            })
            .addCase(quantityCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.updateQuantity = action.payload;
                if (state.isSuccess === true) {
                    toast.info("Updated quantity successfully .");
                }
            })
            .addCase(quantityCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(createAnOrder.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.order = action.payload;
                if (state.isSuccess === true) {
                    toast.info("Your order generated successfully .");

                }
            })
            .addCase(createAnOrder.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(action.payload.response.data.message);
                } state.isLoading = true;
            })
            .addCase(getMyOrder.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.getOrders = action.payload;
            })
            .addCase(getMyOrder.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(action?.payload?.response?.data?.message);
                } state.isLoading = true;
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.userUpdate = action.payload;
                let currentUserData = JSON.parse(localStorage.getItem("customer"))
                let newData = {
                    _id: currentUserData?._id,
                    token: currentUserData?.token,
                    firstname: action?.payload?.user?.firstname,
                    lastname: action?.payload?.user?.lastname,
                    email: action?.payload?.user?.email,
                    mobile: action?.payload?.user?.mobile,
                }
                console.log(newData);
                localStorage.setItem("customer", JSON.stringify(newData));
                state.user = newData;
                toast.info("User updated successfully .");
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(action.payload.response.data.message);
                }
            })
            .addCase(userDetails.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(userDetails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.myDetails = action.payload;
            })
            .addCase(userDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(action.payload.response.data.message);
                }
            })
            .addCase(forgetPassword.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(forgetPassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.token = action.payload;
                if (state.isSuccess === true) {
                    toast.info("Check your mail to reset password ! .");
                }
            })
            .addCase(forgetPassword.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(action.payload.response.data.message);
                }
            })
            .addCase(resetPassword.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.token = action.payload;
                if (state.isSuccess === true) {
                    toast.info("Your password reset successfully, please login.");
                }
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(action.payload.response.data.message);
                }
            })
            .addCase(emptyCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(emptyCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.emptyCart = action.payload;
            })
            .addCase(emptyCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(action.payload.response.data.message);
                }
            });
    },
});
export const { restart } = authSlice.actions
export default authSlice.reducer;
