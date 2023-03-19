import { combineReducers, configureStore } from "@reduxjs/toolkit";
import PlantsSlice from "../features/PlantsSlice";
import QuestionsSlice from "../features/QuestionsSlice";

const rootReducer = combineReducers({
    questionList: QuestionsSlice,
    plantList: PlantsSlice
})

export type RootState = ReturnType<typeof rootReducer>


export type AppDispatch = typeof store.dispatch

const store = configureStore({
    reducer: rootReducer
})

export default store