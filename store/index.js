export const state = () => ({
    star: {},
    stars: [],
    favorites: [],
})

export const mutations = {
    // Set currently selected star
    setStar(state, star) {
        state.star = star;
    },
    // Set all of the stars into the store
    setStars(state, stars) {
        state.stars = stars;
    },
    // Add a given star to the favorites
    addToFavorites(state, star) {
        state.favorites.push(star);
    },
    // Remove a given star from the favorites
    removeFromFavorites(state, star) {
        var index = state.favorites.indexOf(star);
        if (index > -1) {
            state.favorites.splice(index, 1);
        }
    },
    // Empty all previously saved data from the store
    emptyStore(state) {
        state.star = {};
        state.stars = [];
        state.favorites = [];
    }
}
