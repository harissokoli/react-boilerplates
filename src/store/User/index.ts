import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import API from 'api/client';

import { User } from 'types/User';

interface UserState {
	user: User | undefined;
	isLoggedIn: boolean;
}

const initialState: UserState = {
	user: undefined,
	isLoggedIn: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<undefined | User>) => {
			state.user = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUserById.pending, (state, action) => {
			console.log('fetchUserById.pending state:', state);
			console.log('fetchUserById.pending action:', action);
			// Do something while request is being sent and still no answer from API
		});
		builder.addCase(fetchUserById.fulfilled, (state, action) => {
			console.log('fetchUserById.fulfilled state:', state);
			console.log('fetchUserById.fulfilled action:', action);
			// Do something after request is fulfilled
		});
		builder.addCase(fetchUserById.rejected, (state, action) => {
			console.log('fetchUserById.rejected state:', state);
			console.log('fetchUserById.rejected action:', action);
			// Do something after request is rejected
		});
	},
});

export const fetchUserById = createAsyncThunk('user/fetchUserById', async (userId: number) => {
	return await API.authRequest({
		method: 'get',
		url: `/user/${userId}`,
	});
});

const persistConfig = {
	key: 'user',
	storage: storage,
	// Both commented means persist everything in this reducer
	// Do not persist this field
	// blacklist: ['isLoggedIn'],
	// Persist only this field
	// whitelist: ['isLoggedIn'],
};

export const { setUser } = userSlice.actions;

export const userReducer = persistReducer(persistConfig, userSlice.reducer);
// export const userReducer = userSlice.reducer;
