import { INCREMENT, DECREMENT, CARDLISTS } from "../Constants/index"
let initialState = {
    value: 0,
    cardLists: []

}
//export function reducer(state=initialState,action)
export function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case INCREMENT:
            return {
                ...state, value: payload + 1

            }
            break;
        case DECREMENT:
            return { ...state, value: payload - 1 }
            break;
        case CARDLISTS:
            return {
                ...state, cardLists: payload
            }
            break;
        default:
            break;

    }
}