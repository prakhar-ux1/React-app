import { INCREMENT, DECREMENT } from "../Constants/index";
import * as posts from './TodoAction';
import * as cards from "./CardPostAction"
function increment(data) {
    return {
        type: INCREMENT,
        payload: data
    }
}
function decrement(data) {
    return {
        type: DECREMENT,
        payload: data
    }
}
export default {
    increment,
    decrement,
    ...posts,
    ...cards

}