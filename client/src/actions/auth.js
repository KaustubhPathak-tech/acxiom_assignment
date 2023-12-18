import * as api from "../api";
export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: "SIGNUP", data });
    //   dispatch(getCart());
    //   dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/user/");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: "LOGIN", data });
    navigate("/user/");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
