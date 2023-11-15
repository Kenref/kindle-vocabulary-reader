import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		// include: ["src/tests/**/*.test.jsx", "backend/tests/**/*.test.js"],
		globals: true,
		environment: "jsdom",
		setupFiles: "/backend/tests/setup.js",
	},
});
