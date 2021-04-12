import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const SignUp = () => {
  const { isAuthenticated, error } = useContext(AuthContext);
  return <div>{isAuthenticated ? 'HEllo' : 'not auth'}</div>;
};

export default SignUp;
