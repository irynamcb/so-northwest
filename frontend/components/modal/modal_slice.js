import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    modal: null
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, { payload }) => {
            state.modal = payload
        },
        closeModal: (state, { payload }) => {
            state.modal = null
        }
    }
})

export const {
    openModal,
    closeModal

} = modalSlice.actions

export const modalSelector = state => state.modal;
export default modalSlice.reducer;