<template>
  <main>
    <div class="container pt-4">
      <div class="row align-items-center">
        <div class="col-lg-8">
          <h1>{{ this.title }}</h1>
          <p class="lead">{{ this.description }}</p>
        </div>
        <div class="col-lg-4">
          <div class="d-lg-none d-xl-block pt-4"></div>
          <h3>Filters</h3>
          <div class="d-inline-flex">
            <button class="btn btn-link btn-xs p-0" @click="togglePlanet">
              <span class="badge badge-toggle badge-success mr-2 py-1 px-2 rounded"
                :style="planetFilter ? 'filter: drop-shadow(0 0 6px #3fb618)' : null">
                Planet
              </span>
            </button>
            <button class="btn btn-link btn-xs p-0" @click="toggleGasGiant">
              <span class="badge badge-toggle badge-warning mr-2 py-1 px-2 rounded"
                :style="gasGiantFilter ? 'filter: drop-shadow(0 0 6px #ff7518)' : null">
                Gas Giant
              </span>
            </button>
            <button class="btn btn-link btn-xs p-0" @click="toggleTerrestrial">
              <span class="badge badge-toggle badge-danger mr-2 py-1 px-2 rounded"
                :style="terrestrialFilter ? 'filter: drop-shadow(0 0 6px #ff0039)' : null">
                Terrestrial
              </span>
            </button>
            <button class="btn btn-link btn-xs p-0" @click="toggleMoons">
              <span class="badge badge-toggle badge-info mr-2 py-1 px-2 rounded"
                :style="moonsFilter ? 'filter: drop-shadow(0 0 6px #9954bb)' : null">
                Moons
              </span>
            </button>
          </div>
        </div>
      </div>
      <StarList :filteredStars="filteredStars" />
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: 'Stars',
      description: 'A list of all of the planets from the Solar System.',
      stars: this.$store.state.stars,
      planetFilter: (this.$store.state.filter == 'planet' ? true : false),
      gasGiantFilter: (this.$store.state.filter == 'gasGiant' ? true : false),
      terrestrialFilter: (this.$store.state.filter == 'terrestrial' ? true : false),
      moonsFilter: (this.$store.state.filter == 'moons' ? true : false)
    }
  },
  methods: {
    togglePlanet() {
      this.planetFilter = !this.planetFilter;
      this.gasGiantFilter = this.terrestrialFilter = this.moonsFilter = false;
    },
    toggleGasGiant() {
      this.gasGiantFilter = !this.gasGiantFilter;
      this.planetFilter = this.terrestrialFilter = this.moonsFilter = false;
    },
    toggleTerrestrial() {
      this.terrestrialFilter = !this.terrestrialFilter;
      this.planetFilter = this.gasGiantFilter = this.moonsFilter = false;
    },
    toggleMoons() {
      this.moonsFilter = !this.moonsFilter;
      this.planetFilter = this.gasGiantFilter = this.terrestrialFilter = false;
    }
  },
  computed: {
    filteredStars() {
      let filteredStars = [];
      if (this.planetFilter) {
        filteredStars = this.stars;
        this.$store.commit('setFilter', 'planet');
      }
      if (this.gasGiantFilter) {
        // Jupiter, Neptune, Saturn, Uranus
        filteredStars.push(this.stars[1], this.stars[4], this.stars[5], this.stars[6]);
        this.$store.commit('setFilter', 'gasGiant');
      }
      else if (this.terrestrialFilter) {
        // Earth, Mars, Mercury, Venus
        filteredStars.push(this.stars[0], this.stars[2], this.stars[3], this.stars[7]);
        this.$store.commit('setFilter', 'terrestrial');
      }
      else if (this.moonsFilter) {
        // Earth, Jupiter, Mars, Neptune, Saturn, Uranus
        filteredStars.push(this.stars[0], this.stars[1], this.stars[2], this.stars[4], this.stars[5], this.stars[6]);
        this.$store.commit('setFilter', 'moons');
      }
      return filteredStars;
    }
  }
}
</script>

<style scoped>
.btn.btn-link {
  outline: none;
  box-shadow: none;
}
.badge {
  transition: 0.2s;
}
.badge-toggle:hover {
  transform: scale(1.2);
}
</style>
