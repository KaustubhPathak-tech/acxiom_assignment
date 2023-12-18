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