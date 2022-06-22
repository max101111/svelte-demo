import adapter from '@sveltejs/adapter-node';
import copy from 'rollup-plugin-copy'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        alias: {
            $components: 'src/components'
        },
        vite: {
            mode: process.env.VITE_MODE,
            plugins: [
                copy({
                    targets: [
                        { src: 'node_modules/tinymce/*', dest: 'public/tinymce' },
                    ]
                }),
            ]
        }
    }
};

export default config;
