<template>
  <div class="star-list pt-5">
    <div v-if="filteredStars.length" class="row">
      <StarItem
        v-for="(star, index) in filteredStars"
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
  name: 'StarList',
  props: ['filteredStars']
}
</script>
