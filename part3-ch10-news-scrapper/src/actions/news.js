export const GET_NEWS_LIST_REQUEST = 'GET_NEWS_LIST_REQUEST'
export const GET_NEWS_LIST_SUCCESS = 'GET_NEWS_LIST_SUCCESS'
export const GET_NEWS_LIST_FAILURE = 'GET_NEWS_LIST_FAILURE'

export const getNewsList = (query) => (dispatch) => {
    dispatch({type: GET_NEWS_LIST_REQUEST});

    // client id: 
    // client secret: 

    // setTimeout(() => {
    //     dispatch({type:GET_NEWS_LIST_SUCCESS})
    // }, 2000);

    fetch(`https://openapi.naver.com/v1/search/news.json?query=${decodeURIComponent(query)}`,
    {
        headers:  {
            'X-Naver-Client-ID': '',
            'X-Naver-Client-Secret': ''
        }
    })
    .then((result)=> {
        return result.json();
    })
    .then((result)=>{
        dispatch({type: GET_NEWS_LIST_SUCCESS, result})
    })
    .catch((ex)=>{
        dispatch({type: GET_NEWS_LIST_FAILURE, ex})
    })
}