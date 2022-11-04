const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  message: "",
};

const resetPasswordU = (state = initialState, action) => {
  switch (action.type) {
    case "RESET_PASSWORD_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };

    case "RESET_PASSWORD_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };

    case "RESET_PASSWORD_REJECTED":
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: action.payload.response.data.message,
      };

    default: {
      return state;
    }
  }
};

export default resetPasswordU;
