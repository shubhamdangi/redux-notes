const redux = require("redux");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const Buy_cake = "buy cake for me";
const Buy_icecream = "have to buy icecream";

function chill() {
  return {
    type: Buy_icecream,
    info: "you have to buy icecream bro",
  };
}

function buy() {
  return {
    type: Buy_cake,
    info: "first redux action",
  };
}

const cakeState = {
  numOfCakes: 20,
};

const icecreamState = {
  numOfIcecreams: 20,
};

const cakereducer = (state = cakeState, action) => {
  switch (action.type) {
    case Buy_cake:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const icecreamreducer = (state = icecreamState, action) => {
  switch (action.type) {
    case Buy_icecream:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };

    default:
      return state;
  }
};

const root = combineReducers({
  cake: cakereducer,
  ice: icecreamreducer,
});
const store = createStore(root);

console.log("state situation", store.getState());
store.subscribe(() => console.log("subscribed", store.getState()));

store.dispatch(buy());
store.dispatch(buy());
store.dispatch(chill());
store.dispatch(chill());
