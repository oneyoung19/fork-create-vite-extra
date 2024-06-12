import { defineConfig } from 'npm:vite@^5.2.13'
import { svelte } from 'npm:@sveltejs/vite-plugin-svelte@^3.1.1'

import 'npm:svelte@^4.2.18'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()]
})
