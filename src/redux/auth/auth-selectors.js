const getUserName = state => state.auth.user.name;
const getIsLoggedIn = state => state.auth.isLoggedIn;

const authSelectors = {
    getUserName,
    getIsLoggedIn,
};

export default authSelectors;
