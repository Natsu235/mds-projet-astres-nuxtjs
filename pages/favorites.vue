<template>
  <main>
    <div class="container pt-5">
      <h1>{{ this.title }}</h1>
      <p class="lead">{{ this.description }}</p>
      <FavoriteList />
    </div>
    <BackButton />
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: 'Favorites',
      description: 'All of your favorite planets are listed here.'
    }
  }
}
</script>
