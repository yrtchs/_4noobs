import AuthActionTypes from "./auth.types";

const initialState = {
  data: {
    token: "",
    isUserLoggedIn: false,
  },
  isFetching: false,
  errorMessage: null,
  message: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.SIGN_IN_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case AuthActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: {
          token: action.payload.token,
          isUserLoggedIn: true,
        },
      };

    case AuthActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
