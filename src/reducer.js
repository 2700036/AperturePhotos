const initialState = {
  cards: [],
  isLoading: true,
  openedPopup: {},
  error: null
}

export default (state = initialState, { type, payload }) => {  
  switch (type) {

  case 'FETCH_WEATHER_SUCCESS':
    return { ...state,
      isLoading: true, 
      cards: [...state.cards, payload] }
  

  default:
    return state
  }
}
