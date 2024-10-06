import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
        return {...state, errorMessage: action.payload};
    default:
      return state;
  }
};

const signup = dispatch => {
    return async (postdata, callback) => {
        try {
            const {email, password} = postdata;
            console.log('email: ', email);
            console.log('password: ', password);
            await  jsonServer.post('/signup', {email, password}, {
                'Content-Type': 'application/json'
            }).then((response) => {
                console.log('response.data: ', response.data);
            });
            
            if (callback) {
                callback();
            }

            // dispatch({ type: 'delete', payload: id });
        } catch (err) {
            console.log('err: '. err.data);
            dispatch({type: 'add_error', payload: `Something wrong in saving the data!`});
        }
        // make api request
        //jsonServer.post('/signup', );
        // if we signed up, modify state, and say authenticated

        

        // if signed up fails inform the error
    } 
}


const signin = (dispatch) => {
    return ({email, password}) => {
        // make api request

        // if we signed up, modify state, and say authenticated

        // if signed up fails inform the error
    } 
}



export const { Context, Provider } = createDataContext(
    authReducer,
  { signin, signup },
  {isSignedIn: false, errorMessage: ''}
);
