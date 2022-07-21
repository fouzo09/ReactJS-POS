
export const SET_AUTH = (credentials)=>{
    return {
        type: 'SET_AUTH',
        payload: credentials
    }
}

export const GET_AUTH = ()=>{
    return {
        type: 'GET_AUTH'
    }
}

export const LOGOUT = ()=>{
    return {
        type: 'LOGOUT'
    }
}
