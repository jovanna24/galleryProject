import React, { useState, useEffect, createContext, Children } from 'react';

// create Context 
const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  return (
    <CursorContext.Provider value={'this is the cursor context'}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
