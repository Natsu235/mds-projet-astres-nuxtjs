<template>
  <div class="favorite-list pt-5">
    <div v-if="favorites.length" class="row">
      <StarItem
        v-for="(star, index) in favorites"
        :star="star"
        :index="index"
        :key="index" />
    </div>
    <div v-else class="pt-3">
      <span class="text-muted">Nothing to display.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FavoriteList',
  computed: {
    favorites() {
      return this.$store.state.favorites;
    }
  }
}
</script>
