import { FETCH_POSTS, NEW_POST } from "./types";

export function fetchPosts() {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: FETCH_POSTS,
          payload: data,
        })
      );
  };
}

export function createPost(post) {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: NEW_POST,
          payload: data,
        })
      );
  };
}
