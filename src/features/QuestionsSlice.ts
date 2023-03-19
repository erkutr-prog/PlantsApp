import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IQuestions } from "../models/MainScreen";
import api from "../utils/Requests";

export type QuestionListState = {
    questions: IQuestions[] | null,
    loading: boolean,
    error: boolean
}

const initialState: QuestionListState = {
    questions: [],
    loading: false,
    error: false
}

export const fetchQuestions = createAsyncThunk(
    'fetchQuestions',
    async () => {
        const response = await api.get(`getQuestions`);
        if (response !== undefined) {
            return response.data
        } else {
            throw Error('Error loading questions data.')
        }
    }
)
 
const questionListSlice = createSlice({
    name: 'questionlist',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuestions.fulfilled, (state, action) => {
                state.questions = action.payload
            })
    }
})

export default questionListSlice.reducer