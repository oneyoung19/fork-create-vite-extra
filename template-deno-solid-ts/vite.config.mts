import { defineConfig } from 'npm:vite@^5.2.13'
import solid from 'npm:vite-plugin-solid@^2.10.2'

import 'npm:solid-js@^1.8.17'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [solid()]
})
