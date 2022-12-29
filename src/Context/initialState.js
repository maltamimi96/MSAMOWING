export const initialState = {
  loggedInUser: sessionStorage.getItem("user") || null,
}
