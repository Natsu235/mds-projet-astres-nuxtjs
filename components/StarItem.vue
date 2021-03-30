<template>
  <div class="star-item col-lg-4">
    <div class="card border-muted rounded mb-3">
      <!--<div class="card-header">Header</div>-->
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col-9">
            <div class="d-inline-flex">
              <!-- Star Attributes -->
              <span class="badge badge-success mr-2 py-1 px-2 rounded">Planet</span>
              <span v-if="isGas" class="badge badge-warning mr-2 py-1 px-2 rounded">Gas Giant</span>
              <span v-else class="badge badge-danger mr-2 py-1 px-2 rounded">Terrestrial</span>
              <span v-if="hasMoons" class="badge badge-info mr-2 py-1 px-2 rounded">Moons</span>
            </div>
          </div>
          <div class="col-3">
            <!-- Favorite Icon (Active) -->
            <button v-if="favorites.includes(star)" class="btn btn-link btn-xs text-black float-right p-0" type="button" @click="removeFromFavorites">
              <fa class="fav-icon text-warning pt-1" :icon="{ prefix: 'fas', iconName: 'star' }" style="font-size: 24px;" />
            </button>
            <!-- Favorite Icon (Inactive) -->
            <button v-else class="btn btn-link btn-xs text-black float-right p-0" type="button" @click="addToFavorites">
              <fa class="fav-icon pt-1" :icon="{ prefix: 'far', iconName: 'star' }" style="font-size: 24px;" />
            </button>
          </div>
        </div>
        <hr class="mb-3">
        <div class="row">
          <div class="col-9">
            <!-- Star Name -->
            <h4 class="card-title">{{ starName }}</h4>
            <!-- Star Radius -->
            <p class="card-subtitle mb-2 text-muted">
              {{ starRadius }}
            </p>
          </div>
          <div class="col-3">
            <!-- Star Preview -->
            <img class="float-right" :src="starPreview" :alt="starName" height="50" />
          </div>
        </div>
        <!-- Star Description -->
        <p class="card-text text-justify">
          {{ starDescription | truncate }}
        </p>
        <NuxtLink class="text-muted float-right stretched-link mb-0" :to="starLink" @click.native="setStar">Read more 
          <fa :icon="{ prefix: 'fas', iconName: 'chevron-right' }" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StarItem',
  props: ['star'],
  methods: {
    setStar() {
      this.$store.commit('setStar', this.star);
    },
    addToFavorites() {
      this.$store.commit('addToFavorites', this.star);
    },
    removeFromFavorites() {
      this.$store.commit('removeFromFavorites', this.star);
    }
  },
  computed: {
    favorites() {
      return this.$store.state.favorites;
    },
    starName() {
      return this.star.title == null ? 'Star Name' : this.star.title;
    },
    starRadius() {
      return this.star.radius == null ? '?????? km' : this.star.radius;
    },
    starDescription() {
      return this.star.description == null ? 'No description.' : this.star.description;
    },
    starPreview() {
      return this.star.image == null ? '/planet-1.png' : '/planet-1.png'; //this.star.image
    },
    starLink() {
      return this.star.title == null ? '#' : this.star.title.toLowerCase();
    },
    isGas() {
      switch(this.star.slug) {
        case('jupiter'):
        case('saturn'):
        case('uranus'):
        case('neptune'):
          return true;
        default:
          return false;
      }
    },
    hasMoons() {
      switch(this.star.slug) {
        case('mercury'):
        case('venus'):
          return false;
        default:
          return true;
      }
    }
  },
  filters: {
    truncate(string) {
      return string.substring(0, 200) + '..';
    }
  }
}
</script>

<style scoped>
.card {
  max-width: 340px;
}
.card:hover {
  background-color: rgba(0, 0, 0, 0.03);
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  cursor: pointer;
}
.card-text {
  margin-bottom: 10px;
}
.btn {
  z-index: 2;
  position: relative;
  color: black;
}
.btn:hover {
  color: #ffc107 !important;
  transition: 0.2s;
}
.btn.btn-link {
  outline: none;
  box-shadow: none;
}
.fav-icon:hover,
.fav-icon:active {
  filter: drop-shadow(0 0 8px #ffa500);
  transition: 0.3s;
}
</style>
