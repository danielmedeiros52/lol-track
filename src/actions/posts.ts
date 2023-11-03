import api from '@/api/api';

export const postCreatePost = (data: any) =>
  api.posts
    .postCreatePost(data)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

export const getPosts = () =>
  api.posts
    .getPosts()
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

export const postCreateComment = (data: any) =>
  api.posts.comments
    .postCommentOnPost(data)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

export const listPostComments = (id: any) =>
  api.posts.comments
    .getPostComments(id)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

export const deleteComment = (comment_id: any, post_id: any) =>
  api.posts.comments
    .deleteComment(comment_id, post_id)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

export const deletePost = (id: any) =>
  api.posts
    .deletePost(id)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

export const likePost = (id: any) =>
  api.posts.likes
    .likePost(id)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

export const unlikePost = (id: any) =>
  api.posts.likes
    .unlikePost(id)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

export const savePost = (id: any) =>
  api.posts.saves
    .savePost(id)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

export const unsavePost = (id: any) =>
  api.posts.saves
    .unsavePost(id)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

export const editComment = (postId: string, commentId: number, data: any) =>
  api.posts.comments
    .patchComment(postId, commentId, data)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

export const editPost = (postId: string, data: any) =>
  api.posts
    .patchPost(postId, data)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));
