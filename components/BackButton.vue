<template>
  <div class="container pt-5">
    <div class="d-flex justify-content-end">
      <button class="btn btn-primary float-right" onclick="window.history.back();">
        Go Back&nbsp;
        <fa :icon="{ prefix: 'fas', iconName: 'arrow-right' }" />
      </button>
    </div>
  </div>
</template>
