import React, { createContext, useEffect, useReducer } from 'react';
import jwtDecode from 'jwt-decode';
import LoadingScreen from '../components/LoadingScreen';
import axios from '../utilities/axios';

const initialAuthState = {
  isAuthenticated: false,
  isInitialised: false,
};

const isValidToken = (token) => {
  if (!token) {
    return false;
  }

  const decoded = jwtDecode(token);
  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

const setSession = (token) => {
  if (token) {
    localStorage.setItem('token', token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common.Authorization;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INITIALISE': {
      const { isAuthenticated } = action.payload;

      return {
        ...state,
        isAuthenticated,
        isInitialised: true,
      };
    }
    case 'LOGIN': {
      return {
        ...state,
        isAuthenticated: true,
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        isAuthenticated: false,
      };
    }

    default: {
      return { ...state };
    }
  }
};

const AuthContext = createContext({
  ...initialAuthState,
  method: 'JWT',
  login: () => Promise.resolve(),
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  const login = async (username, password) => {
    const response = await axios.post(`/auth/login_check`, { username, password });
    const { token } = response.data.payload;
    setSession(token);
    dispatch({
      type: 'LOGIN',
      payload: {},
    });
  };

  const logout = () => {
    setSession(null);
    dispatch({ type: 'LOGOUT' });
  };

  useEffect(() => {
    const initialise = async () => {
      try {
        const token = window.localStorage.getItem('token');

        if (token && isValidToken(token)) {
          setSession(token);

          dispatch({
            type: 'INITIALISE',
            payload: {
              isAuthenticated: true,
            },
          });
        } else {
          dispatch({
            type: 'INITIALISE',
            payload: {
              isAuthenticated: false,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: 'INITIALISE',
          payload: {
            isAuthenticated: false,
          },
        });
      }
    };

    initialise();
  }, []);

  if (!state.isInitialised) {
    return <LoadingScreen />;
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'JWT',
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
