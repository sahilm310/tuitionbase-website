// @ts-check
import { defineConfig } from "astro/config";
import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
    site: "https://tuitionbase.co.uk",
    integrations: [relativeLinks()],
    compressHTML: true,
    // Do not override global Content-Type headers — let Astro/Vite set appropriate types
});
