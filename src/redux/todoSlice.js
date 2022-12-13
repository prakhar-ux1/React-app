import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todoList: []
}

const todoSlice = createSlice(
    {
        name: "todoList",
        initialState,
        reducers: {
            getTodoListAPI(state, action) {
                state.todoList = action.payload;
            },
            addItem(state, action) {
                state.todoList.push(action.payload);
            },
            removeItem(state, action) {
                state.todoList = state.todoList.filter((item) => (item.id !== action.payload));
            },
            changeItemStatus(state, action) {
                const index = state.todoList.findIndex(element => {
                    return element.id === action.payload;
                })
                state.todoList.at(index).completed = !state.todoList.at(index).completed;
            }
        }
    }
)
export const { getTodoListAPI, addItem, removeItem, changeItemStatus } = todoSlice.actions;
export default todoSlice.reducer;