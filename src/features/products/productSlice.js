import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";
import { toast } from "react-toastify";

export const getAllProducts = createAsyncThunk(
    "product/get",
    async (data, thunkAPI) => {
        try {
            return await productService.getProducts(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const getAProduct = createAsyncThunk(
    "product/get-a-product",
    async (id, thunkAPI) => {
        try {
            return await productService.getSingleProduct(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const addToWishList = createAsyncThunk(
    "product/add-to-wishlist",
    async (proId, thunkAPI) => {
        try {
            return await productService.addToWishList(proId);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const addRating = createAsyncThunk(
    "product/add-rating",
    async (data, thunkAPI) => {
        try {
            return await productService.ratingProduct(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)


const initialState = {
    product: "",
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.product = action.payload;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(action.payload.response.data.message);
                }
            })
            .addCase(addToWishList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addToWishList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.addToWishList = action.payload;
                state.message = "Product added to wishlist !"
            })
            .addCase(addToWishList.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(action.payload.response.data.message);
                }
            })
            .addCase(getAProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.singleProduct = action.payload;
            })
            .addCase(getAProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(action.payload.response.data.message);
                }
            })
            .addCase(addRating.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addRating.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.rating = action.payload;
                if (state.isSuccess === true) {
                    toast.info("Rating added to product successfully.");
                }
            })
            .addCase(addRating.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(action.payload.response.data.message);
                }
            })
    },
});
export default productSlice.reducer;
