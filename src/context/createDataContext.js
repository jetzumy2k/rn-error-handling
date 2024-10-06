import React, { useReducer } from 'react';

export default (reducer, actions, defaulState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaulState);
    const boundActions      = {};
    // actions === { addBlogPost: (dispatch) => { return () => {} } }
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
