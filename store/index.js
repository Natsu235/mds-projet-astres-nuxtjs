export const state = () => ({
  star: {},
  stars: [],
  bodies: [],
  favorites: [],
  filter: 'planet'
})

export const mutations = {
  // Set currently selected star
  setStar(state, star) {
    state.star = star;
  },
  // Set all of the stars into the store (API 1)
  setStars(state, stars) {
    state.stars = stars;
  },
  // Set all of the bodies into the store (API 2)
  setBodies(state, bodies) {
    state.bodies = bodies;
  },
  // Add a given star to the favorites
  addToFavorites(state, star) {
    state.favorites.push(star);
  },
  // Remove a given star from the favorites
  removeFromFavorites(state, star) {
    let index = state.favorites.indexOf(star);
    if (index > -1) {
      state.favorites.splice(index, 1);
    }
  },
  // Set currently selected filter
  setFilter(state, filter) {
    state.filter = filter;
  },
  // Empty all previously saved data from the store
  emptyStore(state) {
    state.star = {};
    state.stars = [];
    state.bodies = [];
    state.favorites = [];
    state.filter = 'planet';
  }
}
