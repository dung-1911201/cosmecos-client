import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { product } from "../../data";
import { publicRequest } from '../../requestMethod';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
	const response = await publicRequest.get('/product');
	return response.data;
});

export const fetchSingleProduct = createAsyncThunk('products/fetchSingleProducts', async (productId) => {
	const response = await publicRequest.get(`/product/${productId}`);
	return response.data;
});

const productSlice = createSlice({
	name: 'products',
	initialState: {
		isFetching: false,
		listProducts: [],
		singleProducts: {},
		listProductsClone: [],
		filterKey: {
			price_new: ''
		}
	},
	reducers: {
		filterProduct(state, action) {
			state.listProducts = state.listProductsClone;

			if (action.payload.type === 'color') {
				state.filterKey.color = action.payload.value;
			} else {
				state.filterKey.price_new = action.payload.value;
			}

			state.listProducts = state.listProducts.filter((item) => {
				return state.filterKey.color !== '' ? item.color.includes(state.filterKey.color) : item;
			});

			if (state.filterKey.price_new !== '' && state.filterKey.price_new === 'Expensive') {
				state.listProducts = state.listProducts.sort((x, y) => {
					return y.price_new - x.price_new;
				});
			} else if (state.filterKey.price_new !== '' && state.filterKey.price_new === 'Cheap') {
				state.listProducts = state.listProducts.sort((x, y) => {
					return x.price_new - y.price_new;
				});
			}
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.listProducts = [];
			state.listProductsClone = [];
			state.listProducts.push(...action.payload);
			state.listProductsClone.push(...action.payload);
			localStorage.setItem('products', JSON.stringify(state.listProducts));
		});
		// builder.addCase(fetchSingleProduct.pending,(state,action)=>{
		//     state.isFetching = true;
		// })
		builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
			state.singleProducts = { ...action.payload };
			state.isFetching = false;
		});
	}
});

export const { filterProduct } = productSlice.actions;
export default productSlice.reducer;
