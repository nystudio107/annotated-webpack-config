import styles from '../css/app.pcss';

// App main
const main = async () => {
    // Import our CSS
    //const Styles = await import(/* webpackChunkName: "styles" */ '../css/app.pcss');
    // Async load the vue module
    const { default: Vue } = await import(/* webpackChunkName: "vue" */ 'vue');
    // Create our vue instance
    const vm = new Vue({
        el: "#app",
        components: {
            'confetti': () => import(/* webpackChunkName: "confetti" */ '../vue/Confetti.vue'),
        },
        data: {
        },
        methods: {
        },
        mounted() {
        },
    });
};
// Execute async function
main().then( (value) => {
});
