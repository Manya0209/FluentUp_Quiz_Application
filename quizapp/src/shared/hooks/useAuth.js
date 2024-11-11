import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = async (name, password) => {
    try {
      const response = await axios.post('/login', { name, password });
      const token = response.data.token;
      setToken(token);
      localStorage.setItem('token', token);
      if (!user) { 
        await getUserProfile(name);
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const getUserProfile = async (name) => {
    try {
      const response = await axios.get('/profile/' + name, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return { token, user, error, login, logout, getUserProfile };
};

export default useAuth;