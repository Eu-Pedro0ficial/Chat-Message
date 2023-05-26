const isUserLoggedIn = ():boolean => {
  const userJson = localStorage.getItem('user');
  const user = userJson ? JSON.parse(userJson) : null
  return user !== null
}
export default isUserLoggedIn;