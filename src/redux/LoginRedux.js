import {createReducer, createActions} from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
    loginRequest: ['mobile', 'password', 'errorCallback'],
    loginSuccess: ['token', 'user'],
    loginFailure: ['error'],
    registerFailure: ['error'],
    register: ['mobile', 'password', 'confirm_password','citycode'],
    update: ['user'],
    logout: null,
    loginThree:['access_token','id','loginType','citycode']
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    user: null,
    error: null,
    fetching: false,
    registerFetching: false,
    token: null,
    registerError: null
})

/* ------------- Reducers ------------- */

// we're attempting to login
export const request = (state) => state.merge({fetching: true, error: null})

export const apiLogin = (state) => state.merge({fetching: true, error: null})

export const loginThree=(state)=>state.merge({fetching:true,error:null})

// we've successfully logged in
export const success = (state, {token, user}) =>
    state.merge({fetching: false, registerFetching: false, error: null, token, user})

export const update = (state, {user}) =>
    state.merge({fetching: false, registerFetching: false, error: null, user})

// we've had a problem logging in
export const failure = (state, {error}) =>
    state.merge({fetching: false, registerFetching: false, error})

export const registerFailure = (state, {registerError}) =>
    state.merge({registerFetching: false, registerError})

// we've logged out
export const logout = (state) => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.LOGIN_REQUEST]: request,
    [Types.LOGIN_SUCCESS]: success,
    [Types.LOGIN_FAILURE]: failure,
    [Types.REGISTER_FAILURE]: registerFailure,
    [Types.REGISTER]: request,
    [Types.LOGOUT]: logout,
    [Types.UPDATE]: update,
    [Types.LOGIN_THREE]:loginThree
})

/* ------------- Selectors ------------- */

// Is the current user logged in?
export const isLoggedIn = (loginState) => loginState.user !== null
