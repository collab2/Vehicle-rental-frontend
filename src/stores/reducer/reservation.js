const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  message: "",
};

const reservation = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_RESERVATION_PENDING":
      return {
        ...state,
        data: {},
        isLoading: true,
        isError: false,
        message: "Loading...",
      };

    case "ADD_RESERVATION_REJECTED":
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: true,
        message: action.payload.response.data,
      };

    case "ADD_RESERVATION_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };

    default: {
      return state;
    }
  }
};

export default reservation;
