import { createSlice } from "@reduxjs/toolkit";

import { dispatch } from "..";

const initialState = {
    error: null,
    schools: []
};

const slice = createSlice({
    name: 'school',
    initialState,
    reducers: {
        hasError(state, action) {
            state.error = action.payload
        },

        getSchoolsSuccess(state, action) {
            state.schools = action.payload;
        }
    }
})

export default slice.reducer;

export function getSchools() {
    return async () => {
        try {
            const response = await fetch('/api/school');
            const { schools } = await response.json();
            dispatch(slice.actions.getSchoolsSuccess(schools));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    }
}