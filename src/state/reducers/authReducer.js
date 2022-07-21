
const auth = {};

export const authReducer = (state = auth, action)=>{
    console.log(action.payload);
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
            return ((Object.keys(state)).length) ? true : false;;
        }
    }
}