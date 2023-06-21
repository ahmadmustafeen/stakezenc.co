import {createContext, Context} from 'react';

interface MyContextType {
  data: {
    isLoggedIn: boolean;
  };
  setContextData: (newData: {isLoggedIn: boolean}) => void;
}

const MyContext: Context<MyContextType> = createContext<MyContextType>({
  data: {
    isLoggedIn: false,
  },
  setContextData: () => {},
});

export default MyContext;
