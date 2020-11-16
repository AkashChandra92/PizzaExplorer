// `null` means that no pizza is selected
const initialState = null

export default function selectedPizzaReducer(state = initialState, action) {
  switch (action.type) {
    case "SELECT_PIZZA": {
      console.log("This is coming to the selected pizza reducer",action.payload)
      // => Ask yourself: what is action.payload?
      return action.payload;
    }
    case "UNSELECT_PIZZA": {
      return null;
    }
    default: {
      return state;
    }
  }
}