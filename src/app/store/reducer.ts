import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import schoolReducer from './slices/school'

const reducer = combineReducers({
   school:  schoolReducer
})

export default reducer;