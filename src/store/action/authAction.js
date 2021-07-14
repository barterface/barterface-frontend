export const AUTH_FLOW = "AUTH_FLOW";

export const authFlow = (status, userId, name, email, token) => {
  return {
    type: AUTH_FLOW,
    data: {
      status: status,
      userId: userId,
      name: name,
      email: email,
      token: token,
    },
  };
};
