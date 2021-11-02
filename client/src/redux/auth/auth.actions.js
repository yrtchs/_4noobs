import AuthActionTypes from "./auth.types";
import { api } from "../../api/api";

export const signInRequestAsync = (username, password) => async (dispatch) => {
  dispatch(signInRequest());
  try {
    const res = await api.post("/auth/sign-in", {
      username: username,
      password: password,
    });
    dispatch(signInRequestSuccess(res.data));
  } catch (err) {
    dispatch(signInRequestFailure());
  }
};

export const signInRequest = () => ({
  type: AuthActionTypes.SIGN_IN_REQUEST,
});

export const signInRequestSuccess = (payload) => ({
  type: AuthActionTypes.SIGN_IN_SUCCESS,
  payload,
});

export const signInRequestFailure = (errorMessage) => ({
  type: AuthActionTypes.SIGN_IN_FAILURE,
  payload: errorMessage,
});
