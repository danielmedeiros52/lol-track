import axios from './axios';

const apiroutes = {
  payment: {
    createPayment: (data: any) => axios.post('/payments/payment/', data),
    createMembership: (data: any) => axios.post('/payments/create-membership/', data)
  },
  template: {
    getTemplate: () => axios.get('/template/')
  },
  authentication: {
    postRegister: (data: any) => axios.post('/users/', data),
    login: (data: any) => axios.post('/users/login/', data),
    logout: (data: any) => axios.post('/users/logout/', data),
    changePassword: (data: any) => axios.post('/users/change-password/', data),
    token: (data: any) => axios.post('/users/token/', data),
    refreshToken: (data: any) => axios.post('/users/token/refresh/', data),
    verifyToken: (data: any) => axios.post('/users/token/verify/', data),
    loginSSO: (data: any) => axios.post('/users/social-login/', data)
  },
  user: {
    getUserById: (id: string) => axios.get(`/users/${id}`),
    // getUserByText: (params: UserRequestApiFilter) => axios.get(`/users/filter/?`, { params }),
    getConnections: () => axios.get('/users/connections/'),
    connections: (params: any) => axios.get('/users/connections/', { params }),
    deleteConnection: (id: number) => axios.delete(`/users/connections/${id}`),
    inviteConnection: (target_user: string) => axios.post(`/users/connections/`, { target_user }),
    recommendations: (params: any) => axios.get('/users/recommendations/', { params }),
    deleteConnectionById: (id: number) => axios.delete(`/users/connections/${id}/`),
    updateConnectionById: (id: number, status: string) => axios.put(`/users/connections/${id}/`, { status })
    
  },
  profile: {
    patchUserProfile: ({ id, data }: { id: string; data: any }) =>
      axios.patch(`/users/${id}/`, data)
  },
  qualifications: {
    postUserQualification: (data: any) => axios.post('/users/qualification/', data),
    deleteUserQualification: (id: number) => axios.delete(`/users/qualification/${id}`)
  },
  posts: {
    getPosts: () => axios.get('/posts/'),
    postCreatePost: (data: any) => axios.post('/posts/', data),
    patchPost: (postId: string, data: any) => axios.patch(`/posts/${postId}/`, data),
    deletePost: (id: number) => axios.delete(`/posts/${id}/`),
    likes: {
      likePost: (id: number) => axios.post(`/posts/${id}/like_post/`),
      unlikePost: (id: number) => axios.post(`/posts/${id}/unlike_post/`)
    },
    saves: {
      savePost: (id: number) => axios.post(`/posts/${id}/save_post/`),
      unsavePost: (id: number) => axios.post(`/posts/${id}/unsave_post/`)
    },
    comments: {
      postCommentOnPost: (data: any) => axios.post('/posts/comments/', data),
      getPostComments: (id: any) => axios.get(`/posts/comments/?post_id=${id}`),
      patchComment: (postId: string, commentId: number, data: any) =>
        axios.patch(`/posts/comments/${commentId}/?post_id=${postId}`, data),
      deleteComment: (comment_id: any, post_id: any) =>
        axios.delete(`/posts/comments/${comment_id}/?post_id=${post_id}`)
    }
  }
};

export default apiroutes;
