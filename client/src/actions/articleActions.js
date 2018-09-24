import axios from 'axios';
import { GET_ARTICLE, ARTICLE_LOADING, GET_ERRORS, GET_ALL_ARTICLES } from './types';

// Get current profile
// export const getCurrentProfile = () => {
//     return (dispatch) => {
//         dispatch(setProfileLoading());
//         axios.get('/api/profile')
//             .then(res => {
//                 dispatch({
//                     type: GET_PROFILE,
//                     payload: res.data,
//                 });
//             })
//             .catch(err => {
//                 console.log(err);
//                 dispatch({
//                     type: GET_PROFILE,
//                     payload: {},
//                 });
//             });
//     };
// };

export const getArticleById = (id) => {
    return (dispatch) => {
        // could reuse this
        dispatch(setProfileLoading());
        axios.get(`/api/articles/${id}`)
            .then(res => {
                dispatch({
                    type: GET_ARTICLE,
                    payload: res.data,
                });
            })
            .catch(err => {
                dispatch({
                    type: GET_ARTICLE,
                    payload: { msg: 'NOT FOUND' },
                });
            });
    };
};

export const getArticleByTitle = (title) => {
    return (dispatch) => {
        // could reuse this
        dispatch(setProfileLoading());
        axios.get(`/api/articles/title/${title}`)
            .then(res => {
                dispatch({
                    type: GET_ARTICLE,
                    payload: res.data,
                });
            })
            .catch(err => {
                dispatch({
                    type: GET_ARTICLE,
                    payload: { msg: 'NOT FOUND' },
                });
            });
    };
};

// Get all articles
export const getArticles = () => {
    return (dispatch) => {
        dispatch(setProfileLoading());
        axios.get('/api/articles')
            .then(res => {
                dispatch({
                    type: GET_ALL_ARTICLES,
                    payload: res.data,
                });
            })
            .catch(err => {
                dispatch({
                    type: GET_ALL_ARTICLES,
                    payload: null,
                });
            });
    };
};

// Profile loading
export const setProfileLoading = () => {
    return {
        type: ARTICLE_LOADING
    };
};

// // Clear profile
// export const clearProfile = () => {
//     return {
//         type: CLEAR_CURRENT_PROFILE
//     };
// };

// Create profile
// to do, not export it for now
const createArticle = (profile, history) => {
    return (dispatch) => {
        axios.post('/api/profile', profile)
            .then(res => {
                dispatch({
                    type: GET_ERRORS,
                    payload: {},
                });
                history.push('/dashboard');
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data,
                });
            });
    };
};


// export const deleteAccount = () => {
//     return (dispatch) => {
//         if (window.confirm('Are you sure? This can NOT be undone!')) {
//             axios.delete('api/profile')
//                 .then(res => {
//                     dispatch(logoutUser());
//                     dispatch(clearProfile());
//                 })
//                 .catch(err => {
//                     // wierd
//                     dispatch({
//                         type: GET_ERRORS,
//                         payload: err.response.data,
//                     });
//                 });
//         }
//     }
// };
