import { Actions } from "../types";

export const getUserData = () => {
  return async (dispatch) => {
    dispatch({ type: Actions.GET_USER });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) =>
        dispatch({ type: Actions.GET_USER_SUCCESS, payload: json })
      );
  };
};

export const deleteUserData=(data)=>{
  return {
    type:Actions.DELETE_USER_SUCCESS,
    payload:data.id
  }
}

export const submitUserData=(data)=>{
  return{
    type:Actions.SUBMIT_USER,
    payload:data
  }
}
