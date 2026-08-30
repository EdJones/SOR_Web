<template>
  <nav class="mobile-nav d-md-none">
    <div class="container-fluid">
      <div class="row align-items-center py-2">
        <div class="col-6">
          <router-link to="/" class="text-decoration-none">
            <h5 class="mb-0 text-primary">SOR App</h5>
          </router-link>
        </div>
        <div class="col-6 text-end">
          <div class="dropdown">
            <button
              class="btn btn-outline-secondary btn-sm dropdown-toggle"
              type="button"
              id="mobileMenu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Menu
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="mobileMenu">
              <li><router-link class="dropdown-item" to="/">Home</router-link></li>
              <li>
                <router-link class="dropdown-item" to="/open-source">Open Source</router-link>
              </li>
              <li><router-link class="dropdown-item" to="/privacy">Privacy</router-link></li>
              <li><router-link class="dropdown-item" to="/ten-skills">Ten Skills</router-link></li>
              <li><router-link class="dropdown-item" to="/timeline">Timeline</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MobileNav",
};
</script>

<style scoped>
.mobile-nav {
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.dropdown-menu {
  min-width: 200px;
}

.dropdown-item {
  padding: 0.75rem 1rem;
  font-size: 1rem;
}

.dropdown-item:hover {
  background-color: #e9ecef;
}
</style>
