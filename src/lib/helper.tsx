export const getToken = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
};

export const getUserId = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('user_id');
  }
  return null;
};