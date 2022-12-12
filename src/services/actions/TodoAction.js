import axios from "axios";
import { Post } from "../Constants/index";

export function getposts(data) {


    return axios.get("https://jsonplaceholder.typicode.com/todos")
    // then((response) => { return response });
}