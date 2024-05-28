const setToken = (token) => {
    localStorage.setItem('token', token);
  };

  const getToken = () => {
    return localStorage.getItem('token');
  };

  const logout = () => {
    localStorage.removeItem('token');
  };

  export {
    setToken,
    getToken,
    logout
  }