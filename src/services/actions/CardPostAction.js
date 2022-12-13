import axios from "axios";
export function getCards(data) {


    return axios.get("https://jsonplaceholder.typicode.com/photos/").
        then((response) => { return response });
}
export function getPostList(data) {
    return axios.get("https://jsonplaceholder.typicode.com/posts/").
        then((response) => { return response });
}
export function getPost(data) {
    return axios.get("https://jsonplaceholder.typicode.com/posts/" + data).
        then((response) => { return response });
}
