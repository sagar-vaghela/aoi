import { HIDE_POP_UP, SHOW_POP_UP } from "../lib/constants";
import initialState from "./initialState";

const popupReducer = (state = initialState.popup, action) => {
  switch (action.type) {

    case SHOW_POP_UP:
      return {
        ...state,
        popup: action.payload,
      };

    case HIDE_POP_UP:
      return {
        ...state,
        popup: {},
      };

    default:
      return state;
  }
};
export default popupReducer;