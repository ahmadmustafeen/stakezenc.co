import React, {useState, ReactNode} from 'react';
import AuthContext from './authContext';

interface MyProviderProps {
  children: ReactNode;
}

const MyProvider = ({children}: MyProviderProps) => {
  const [data, setData] = useState<any>(null);

  const setContextData = (newData: any) => {
    setData(newData);
  };

  return (
    <AuthContext.Provider value={{data, setContextData}}>
      {children}
    </AuthContext.Provider>
  );
};

export default MyProvider;
