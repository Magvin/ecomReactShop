
import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
    currentUser: null,
    errorMessage: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
        case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                errorMessage: null
            }
        case UserActionTypes.GOOGLE_SIGN_IN_ERROR:
        case UserActionTypes.EMAIL_SIGN_IN_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state;
    }
    
}

export default userReducer;