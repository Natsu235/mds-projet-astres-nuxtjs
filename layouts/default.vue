<template>
  <div class="content position-relative bg-light">
    <Navbar />
    <Nuxt />
    <Debug />
    <Footer />
  </div>
</template>

<script>
export default {
  // Fetch data from API
  async fetch() {
    if (!this.$store.state.stars.length) {
      var data = await fetch('https://api.nuxtjs.dev/planets').then((res) => res.json());
      this.$store.commit('setStars', data);
    }
  }
}
</script>

<style scoped>
main {
  min-height: 680px;
  -webkit-animation: fadein 0.4s;   /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 0.4s;      /* Firefox < 16 */
  -ms-animation: fadein 0.4s;       /* Internet Explorer */
  -o-animation: fadein 0.4s;        /* Opera < 12.1 */
  animation: fadein 0.4s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>
