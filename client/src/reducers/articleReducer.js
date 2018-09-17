import { GET_ARTICLE, ARTICLE_LOADING, GET_ALL_ARTICLES } from '../actions/types';

const initialState = {
    article: null,
    articles: null,
    loading: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLE:
            return {
                ...state,
                article: action.payload,
                loading: false
            }
        case GET_ALL_ARTICLES:
            return {
                ...state,
                articles: action.payload,
                loading: false
            }
        case ARTICLE_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}