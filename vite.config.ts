import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import Components from "unplugin-vue-components/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    visualizer({
      template: "sunburst",
    }),
    Components({
      dts: "./src/components.d.ts",
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.join(__dirname, "./src"),
      },
    ],
  },
});
