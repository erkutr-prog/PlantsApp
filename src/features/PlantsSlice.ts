import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPlants } from "../models/MainScreen";
import api from "../utils/Requests";

export type PlantListState = {
    plants: IPlants[]  | null,
    loading: boolean,
    error: boolean
}

const initialState: PlantListState = {
    plants: [],
    loading: false,
    error: false
}

export const fetchPlants = createAsyncThunk(
    'fetchPlants',
    async () => {
        const response = await api.get(`getCategories`);
        if (response !== undefined) {
            return response.data.data
        } else {
            throw Error('Error loading plants data.')
        }
    }
)

const plantListSlice = createSlice({
    name: 'plantList',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlants.fulfilled, (state, action) => {
                state.plants = action.payload
            })
    }
})

export default plantListSlice.reducer