
const auth = {};

export const authReducer = (state = auth, action)=>{
    switch(action.type){
        case 'SET_AUTH': {
            return state = action.payload;
        }
        case 'GET_AUTH': {
            return state;
        }
        case 'IS_LOGGED': {
            return (state.length) ? true : false;
        }
        case 'LOGOUT': {
            return state = [];
        }
        default: {
            return state;
        }
    }
}