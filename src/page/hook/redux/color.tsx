import React, { createContext, useReducer } from "react";

export const ColorContext = createContext({});

export const updateColor = "updata";

const reducer = (state, action) => {
  console.log("1111111");
  switch (action.type) {
    case updateColor:
      return action.color;
    default:
      return state;
  }
};

export const Color = props => {
  const [color, dispatch] = useReducer(reducer, "黑色");

  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      {props.children}
    </ColorContext.Provider>
  );
};
