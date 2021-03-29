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
  data() {
    return {
      APIs: ['https://api.nuxtjs.dev/planets', 'https://api.le-systeme-solaire.net/rest/bodies'],
      actions: ['setStars', 'setBodies']
    }
  },
  // Fetch data from APIs
  async fetch() {
    /*
    if (!this.$store.state.stars.length && !this.$store.state.bodies.length) {
      APIs.forEach(async (API, index) => {
        let data = await fetch(API).then((res) => res.json());
        this.$store.commit(actions[index], data);
      })
    }
    */
    if (!this.$store.state.stars.length) {
      let data = await fetch(this.APIs[0]).then((res) => res.json());
      this.$store.commit(this.actions[0], data);
    }
    if (!this.$store.state.bodies.length) {
      let data = await fetch(this.APIs[1]).then((res) => res.json());
      this.$store.commit(this.actions[1], data);
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
