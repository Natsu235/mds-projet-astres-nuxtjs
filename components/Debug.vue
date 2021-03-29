<template>
  <div v-if="isDev" class="debug container pt-4">
    <hr class="mb-5">
    <h4>Debug Mode is enabled</h4>
    <br />
    <button class="btn btn-warning mr-3" data-toggle="collapse" data-target="#storeContent" aria-expanded="false" aria-controls="storeContent">
      <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'search' }" />
      &nbsp;Check Store State
    </button>
    <button class="btn btn-danger" @click="emptyStore">
      <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'trash' }" />
      &nbsp;Empty Store
    </button>
    <div class="collapse pt-5" id="storeContent">
      <div class="border border-black bg-secondary">
        <span class="source-header d-block text-right text-muted">store/index.js</span>
        <br />
        <pre class="text-white">{{ storeOutput }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dev: process.env.NODE_ENV !== 'production'
    }
  },
  methods: {
    emptyStore() {
      this.$store.commit('emptyStore');
    }
  },
  computed: {
    storeOutput() {
      return JSON.stringify(this.$store.state, null, 2);
    },
    isDev() {
      return this.dev;
    }
  }
}
</script>

<style scoped>
pre {
  max-height: 500px;
}
.source-header {
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
