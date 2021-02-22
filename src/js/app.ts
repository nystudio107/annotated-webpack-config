import App from '@vue/App.vue';
import { createApp } from 'vue';

// App main
const main = async () => {
    // Async load the Vue 3 APIs we need from the Vue ESM
    // Create our vue instance
    const app = createApp(App);

    // Mount the app
    const root = app.mount('#component-container');

    return root;
};

// Execute async function
main().then( (root) => {
});

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
    module.hot.accept();
}
