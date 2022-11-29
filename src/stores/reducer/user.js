const initialState = {
  data: {},
  isLoading: false,
  isLoadingUpdate: false,
  isError: false,
  message: "",
  messageUpdate: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_BY_ID_PENDING":
      return {
        ...state,
        data: {},
        isLoading: true,
        isError: false,
        message: "Loading...",
      };

    case "GET_USER_BY_ID_REJECTED":
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: true,
        message: action.payload.response.data.message,
      };

    case "GET_USER_BY_ID_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data[0],
        isLoading: false,
        isError: false,
        message: action.payload.data.msg,
      };
    case "EDIT_USER_PENDING":
      return {
        ...state,
        isLoadingUpdate: true,
        isError: false,
        messageUpdate: "Loading...",
      };

    case "EDIT_USER_REJECTED":
      return {
        ...state,
        isLoadingUpdate: false,
        isError: true,
        messageUpdate: action.payload.response.data.message,
      };
    case "EDIT_USER_FULFILLED":
      return {
        ...state,
        isLoadingUpdate: false,
        isError: false,
        messageUpdate: action.payload.data.msg,
      };
    default: {
      return state;
    }
  }
};

export default user;
