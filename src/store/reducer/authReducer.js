import { AUTH_FLOW } from "../action/authAction";

const initialAuthState = {
  status: false,
  userId: "",
  name: "",
  email: "",
  token: "",
};

const reducer = (state = initialAuthState, action) => {
  if (action.type === AUTH_FLOW) {
    return {
      status: action.data.status,
      userId: action.data.userId,
      name: action.data.name,
      email: action.data.email,
      token: action.data.token,
    };
  } else return state;
};

export default reducer;
