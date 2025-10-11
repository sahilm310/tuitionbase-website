// @ts-check
import { defineConfig } from 'astro/config';
import relativeLinks from 'astro-relative-links';

// https://astro.build/config
export default defineConfig({
    integrations: [relativeLinks()],
    server: {
        headers: {
            'Content-Type': 'text/html; charset=utf-8'
        }
    }
});