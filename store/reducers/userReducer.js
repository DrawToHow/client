let initState = {
  lat: null,
  lng: null,
  cityCountry: null
};

const userReducer = (state = initState, action) => {

  switch (action.type) {
    case 'USER_POSITION_LOADING':
      return {
        ...state,
        loading: true,
        error: false
      }

    case 'USER_POSITION_SUCCESS':
      return {
        ...state,
        lat: action.lat,
        lng: action.lng,
        cityCountry: action.cityCountry,
        loading: false,
        error: false
      }
    case 'USER_POSIITON_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
        errorData: action.errorData
      }
    default:
      return state
  }

}

export default userReducer;
