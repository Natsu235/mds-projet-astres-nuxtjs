<template>
  <div class="star-list pt-4">
    <div v-if="stars.length" class="row">
      <StarItem
        v-for="(star, index) in stars"
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
  computed: {
    stars() {
      return this.$store.state.stars;
    }
  }
}
</script>
