import {createContext, Context} from 'react';

interface MyContextType {
  data: {
    isLoggedIn: boolean;
    user: any;
    apiLoader: boolean;
  };
  setContextData: (newData: {
    isLoggedIn: boolean;
    user: any;
    apiLoader: boolean;
  }) => void;
}

const MyContext: Context<MyContextType> = createContext<MyContextType>({
  data: {
    isLoggedIn: false,
    user: null,
    apiLoader: false,
  },
  setContextData: () => {},
});

export default MyContext;
