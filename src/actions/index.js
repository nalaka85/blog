import _ from 'lodash';
import jsonPlaceholder from'../apis/jsonPlaceholder';

export const fetchPostsAndUsers =() => async (dispatch,getState) => {
 console.log ('going to fetch posts');
   await dispatch(fetchPosts());
   //console.log(getState().posts);
  const userIds =_.uniq (_.map(getState().posts,'userId'));
  // console.log('got it');
 //console.log(userIds);
userIds.forEach(id => dispatch(fetchUser(id)));
//await 
// _.chain(getState().posts)
//  .map('userId')
//  .uniq()
//  .forEach(id => dispatch(fetchUser(id)))
//  .value()
};




export const fetchPosts =  () =>  async dispatch => {
   const response = await jsonPlaceholder.get('/posts');
    
   dispatch({ type: 'FETCH_POSTS' , payload: response.data})
   // return{
  //    type: 'FETCH_POSTS',
 //     payload: response
};

 //export const fetchUser = id =>  async dispatch => {
  
   //const response  =await jsonPlaceholder.get('./users/' +id) 
   //ES2015
 
//   const response  = await jsonPlaceholder.get(`/users/${id}`) ;
//    dispatch({type:'FETCH_USER', payload: response.data});


// export const fetchUser = function(id) {
//    return  _.memoize( async function(dispatch) {
//    //const response  =await jsonPlaceholder.get('./users/' +id) 
//    //ES2015
//   const response  = await jsonPlaceholder.get(`/users/${id}`) ;
//    dispatch({type:'FETCH_USER', payload: response.data});
//    });
   
//};

 export const fetchUser = id => async  dispatch => {
   const response  = await jsonPlaceholder.get(`/users/${id}`) ;
    dispatch({type:'FETCH_USER', payload: response.data});
};


 // Memoize
// export const fetchUser = id =>  dispatch => {
     
//       _fetchuUser(id,dispatch);
  
//    };
// const _fetchuUser =  _.memoize(async(id,dispatch) => {
//    const response  = await jsonPlaceholder.get(`/users/${id}`) ;
//    dispatch({type:'FETCH_USER', payload: response.data});
// });