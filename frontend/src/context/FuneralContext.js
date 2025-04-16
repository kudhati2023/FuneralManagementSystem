import React, { createContext, useContext, useReducer } from 'react';

const FuneralContext = createContext();

const initialState = {
  deceasedRecords: [],
  burialOrders: [],
  payments: [],
  tasks: [],
  notifications: [],
  loading: false,
  error: null,
};

function funeralReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_DECEASED_RECORDS':
      return { ...state, deceasedRecords: action.payload };
    case 'SET_BURIAL_ORDERS':
      return { ...state, burialOrders: action.payload };
    case 'SET_PAYMENTS':
      return { ...state, payments: action.payload };
    case 'SET_TASKS':
      return { ...state, tasks: action.payload };
    case 'SET_NOTIFICATIONS':
      return { ...state, notifications: action.payload };
    default:
      return state;
  }
}

export function FuneralProvider({ children }) {
  const [state, dispatch] = useReducer(funeralReducer, initialState);

  return (
    <FuneralContext.Provider value={{ state, dispatch }}>
      {children}
    </FuneralContext.Provider>
  );
}

export function useFuneralContext() {
  const context = useContext(FuneralContext);
  if (!context) {
    throw new Error('useFuneralContext must be used within a FuneralProvider');
  }
  return context;
}