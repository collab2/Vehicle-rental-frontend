const initialState = {
  allData: {},
  data: {},
  isLoading: false,
  isError: false,
  message: "",
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT_PENDING":
      return {
        ...state,
        allData: {},
        isLoading: true,
        isError: false,
        message: "Loading...",
      };

    case "GET_PRODUCT_REJECTED":
      return {
        ...state,
        allData: {},
        isLoading: false,
        isError: true,
        message: action.payload.response.data,
      };

    case "GET_PRODUCT_FULFILLED":
      return {
        ...state,
        allData: action.payload.data.data,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };

    case "ADD_PRODUCT_PENDING":
      return {
        ...state,
        data: {},
        isLoading: true,
        isError: false,
        message: "Loading...",
      };

    case "ADD_PRODUCT_REJECTED":
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: true,
        message: action.payload.response.data,
      };

    case "ADD_PRODUCT_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };

    case "GET_PRODUCT_BY_ID_PENDING":
      return {
        ...state,
        data: {},
        isLoading: true,
        isError: false,
        message: "Loading...",
      };

    case "GET_PRODUCT_BY_ID_REJECTED":
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: true,
        message: action.payload.response.data,
      };

    case "GET_PRODUCT_BY_ID_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data[0],
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };

    case "EDIT_PRODUCT_PENDING":
      return {
        ...state,
        data: {},
        isLoading: true,
        isError: false,
        message: "Loading...",
      };

    case "EDIT_PRODUCT_REJECTED":
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: true,
        message: action.payload.response.data,
      };

    case "EDIT_PRODUCT_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };

    case "DELETE_PRODUCT_PENDING":
      return {
        ...state,
        data: {},
        isLoading: true,
        isError: false,
        message: "Loading...",
      };

    case "DELETE_PRODUCT_REJECTED":
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: true,
        message: action.payload.response.data,
      };

    case "DELETE_PRODUCT_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };

    case "DELETE_IMAGE_PRODUCT_PENDING":
      return {
        ...state,
        data: {},
        isLoading: true,
        isError: false,
        message: "Loading...",
      };

    case "DELETE_IMAGE_PRODUCT_REJECTED":
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: true,
        message: action.payload.response.data,
      };

    case "DELETE_IMAGE_PRODUCT_FULFILLED":
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

export default product;
