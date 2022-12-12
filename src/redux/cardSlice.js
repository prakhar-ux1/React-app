import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    cardList: []
}

const cardSlice = createSlice(
    {
        name: "cardList",
        initialState,
        reducers: {
            //this is action
            getCardListAPI(state, action) {
                state.cardList = action.payload;
            },
            addItem(state, action) {
                state.cardList.push(action.payload);
            },
            removeItem(state, action) {
                state.cardList = state.cardList.filter((item) => (item.id !== action.payload));
            },
            sortById(state, action) {
                state.cardList.sort((a, b) => (a.id > b.id) ? 1 : -1);
            },
            sortByAsc(state, action) {
                state.cardList.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
            },
            sortByDesc(state, action) {
                state.cardList.sort((a, b) => (a.title > b.title) ? -1 : ((b.title > a.title) ? 1 : 0))
            },
            modifyItem(state, action) {
                let index = state.cardList.findIndex((element) => element.id == action.payload.id);
                state.cardList[index] = action.payload;
            }

        }
    }
)
export const { getCardListAPI, removeItem, sortByAsc, sortByDesc, modifyItem, addItem, sortById } = cardSlice.actions;
export default cardSlice.reducer;