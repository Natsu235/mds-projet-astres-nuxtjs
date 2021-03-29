<template>
  <main>
    <div class="container pt-4">
      <h1>{{ this.title }}</h1>
      <p class="lead">{{ this.description }}</p>
      <StarList />
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: 'Stars',
      description : 'A list of all of the planets from the Solar System.'
    }
  }
}
</script>
