<template>
  <div class="container d-flex flex-column justify-content-center align-items-center">
    <h1 class="status-code">{{ error.statusCode }}</h1>
    <br />
    <span class="pb-5">{{ error.message }}</span>
    <div class="row">
      <button type="button" class="btn btn-primary mr-3" onclick="window.location.reload();">
        <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'redo' }" />
        &nbsp;Retry
      </button>
      <button type="button" class="btn btn-secondary" onclick="window.history.back();">
        <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'arrow-left' }" />
        &nbsp;Go Back
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'index', // you can even set a custom layout for the error page
}
</script>

<style scoped>
.container {
  height: 100vh;
}
.status-code {
  font-size: 8.5rem;
}
.button--grey {
  margin-left: 0;
}
</style>
