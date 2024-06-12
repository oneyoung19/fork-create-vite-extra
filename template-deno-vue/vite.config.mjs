import { defineConfig } from 'npm:vite@^5.2.13'
import vue from 'npm:@vitejs/plugin-vue@^5.0.5'

import 'npm:vue@^3.4.27'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})
