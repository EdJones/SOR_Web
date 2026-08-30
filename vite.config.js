import { defineConfig, lazyPlugins } from "vite-plus";
import vue from "@vitejs/plugin-vue";

// Pre-Vue static pages, superseded by src/views/*.vue and not referenced
// anywhere; excluded from fmt/lint since their inherited markup doesn't parse.
// Also excludes vendored Bootstrap CSS and auto-generated JSON data exports,
// which shouldn't be reformatted.
const legacyIgnorePatterns = [
  "dist/**",
  "open_source.html",
  "timeline.html",
  "ten_skills.html",
  "privacy.html",
  "xps.html",
  "assets/css/starter.css",
  "src/assets/css/starter.css",
  "assets/JSON/xps.json",
  "assets/JSON/xps_iffy.json",
];

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    ignorePatterns: legacyIgnorePatterns,
  },
  lint: {
    ignorePatterns: legacyIgnorePatterns,
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
  plugins: lazyPlugins(() => [vue()]),
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
  },
});
