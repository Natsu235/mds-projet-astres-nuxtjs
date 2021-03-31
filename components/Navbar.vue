<template>
  <header>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark shadow-sm">
      <div class="container">
        <NuxtLink class="navbar-brand text-white d-inline-flex align-items-center font-weight-bold" to="/stars">
          <PlanetIcon />
          &nbsp;&nbsp;{{ this.name }}
        </NuxtLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <NuxtLink class="nav-link" to="/stars">Home</span></NuxtLink>
            </li>
            <li class="nav-item active">
              <NuxtLink class="nav-link" to="/favorites">Favorites</span></NuxtLink>
            </li>
          </ul>
        </div>
        <!--
        <NuxtLink class="text-white" to="/favorites">
          <fa v-tooltip="'Show Favorites'" class="my-favorites-icon" :icon="{ prefix: 'fas', iconName: 'star' }" />
        </NuxtLink>
        -->
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      name: 'The Solar System',
    }
  },
}
</script>

<style scoped>
header {
  padding-top: 72px;
}
.globe-icon {
  font-size: 1.5rem;
}
.nav-link {
  color: #c8c9ca !important;
}
.nav-link:hover,
.nav-link:focus {
  color: white !important;
}
.my-favorites-icon {
  font-size: 1.5rem;
}
.my-favorites-icon:hover {
  color: #ffc107 !important;
  transition: 0.3s;
}
</style>
