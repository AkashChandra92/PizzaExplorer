const initialState = [
  {
    id: 1,
    name: "Pizza Margarita",
    description: "Minimalism is key!",
  },
  {
    id: 2,
    name: "Pizza Napoletana",
    description: "Like Margarita, but without the basil.",
  },
  {
    id: 3,
    name: "Pizza Bianca",
    description: "Did somebody say oil?",
  },
];

export default function pizzaListReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PIZZA": {
      // => Ask yourself: what is action.payload?
      console.log("This is the reducer running");
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          description: "",
        },
      ];
    }
    default: {
      return state;
    }
  }
}
