<template>
  <main>
    <div class="container pt-5">
      <div class="row">
        <div class="col-lg-6">
          <h1>{{ starName }}</h1>
          <h2 class="text-muted">{{ starRadius }}</h2>
          <br />
          <h3 class="text-muted">
            <fa :icon="{ prefix: 'fas', iconName: 'map-marker-alt' }" />
            &nbsp;{{ starDistance }}
          </h3>
        </div>
        <div class="col-lg-6">
          <div class="d-lg-none pt-5"></div>
          <img class="float-lg-right text-muted" :src="starPreview" alt="Preview unavailable" height="200" />
        </div>
      </div>
      <div class="pt-5">
        <p class="lead">{{ starDescription }}</p>
      </div>
      <div v-if="hasMoons" class="pt-3">
        <p class="lead"><u>Moons:</u> {{ starMoons }}</p>
      </div>
    </div>
    <BackButton />
  </main>
</template>

<script>
export default {
//  async asyncData({ params }) {
//    const starName = params.star // En appelant /abc, le slug sera "abc".
//    return { starName }
//  },
  computed: {
    starName() {
      return this.$store.state.star.title == null ? 'Star Name' : this.$store.state.star.title;
    },
    starRadius() {
      return this.$store.state.star.radius == null ? '?????? km' : this.$store.state.star.radius;
    },
    starDistance() {
      return this.$store.state.star.distanceFromSun == null ? '?????? km from the Sun' : this.$store.state.star.distanceFromSun + ' from the Sun';
    },
    starDescription() {
      return this.$store.state.star.description == null ? 'No description.' : this.$store.state.star.description;
    },
    starPreview() {
      return this.$store.state.star.image == null ? '/planet-1.png' : this.$store.state.star.image;
    },
    hasMoons() {
      switch(this.$store.state.star.slug) {
        case('mercury'):
        case('venus'):
          return false;
        default:
          return true;
      }
    },
    // Reference: static/moons-of-solar-system-v7.jpg
    starMoons() {
      switch(this.$store.state.star.slug) {
        case('earth'):
          return 'Moon';
        case('mars'):
          return 'Phobos, Deimos';
        case('jupiter'):
          return 'Io, Europa, Ganymede, Callisto';
        case('saturn'):
          return 'Mimas, Euceladus, Tethys, Dione, Rhea, Titan, Hyperion, Iapetus, Phoebe';
        case('uranus'):
          return 'Puck, Miranda, Ariel, Umbriel, Titania, Oberon';
        case('neptune'):
          return 'Proteus, Triton, Nereid';
        default:
          return 'None';
      }
    }
  }
}
</script>
