export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
export const selectIsLoading = state => state.auth.isLoading;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectUserEmail = state => state.auth.user.email;
export const selectUserToken = state => state.auth.token;