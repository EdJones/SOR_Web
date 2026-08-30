<template>
  <div id="app">
    <MobileNav />
    <router-view />
  </div>
</template>

<script>
import MobileNav from "./components/MobileNav.vue";

export default {
  name: "App",
  components: {
    MobileNav,
  },
};
</script>

<style>
#app {
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
    "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

/* Mobile-friendly improvements */
@media (max-width: 768px) {
  body {
    padding: 1rem 0.5rem !important;
  }

  .container-fluid {
    padding-left: 0.75rem !important;
    padding-right: 0.75rem !important;
  }

  /* Improve touch targets */
  .btn {
    min-height: 44px;
    padding: 0.75rem 1rem;
  }

  /* Better spacing for mobile */
  .mb-5 {
    margin-bottom: 2rem !important;
  }

  .py-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  /* Improve image responsiveness */
  img {
    max-width: 100%;
    height: auto;
  }

  /* Better text sizing for mobile */
  h1,
  .h1 {
    font-size: 1.75rem !important;
  }

  h2,
  .h2 {
    font-size: 1.5rem !important;
  }

  h3,
  .h3 {
    font-size: 1.25rem !important;
  }

  /* Improve button layout on mobile */
  .d-flex.flex-column.flex-sm-row {
    gap: 0.75rem !important;
  }

  /* Better spacing for app store badges */
  .row.g-3 {
    margin-bottom: 1rem !important;
  }
}

/* Improve overall spacing and readability */
.lead {
  font-size: 1.1rem;
  font-weight: 400;
}

/* Better focus states for accessibility */
.btn:focus,
a:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

/* Smooth transitions */
.btn,
a {
  transition: all 0.2s ease-in-out;
}

/* Improve card-like sections */
.bg-light {
  background-color: #f8f9fa !important;
  border: 1px solid #e9ecef;
}

.rounded {
  border-radius: 0.375rem !important;
}
</style>
