<template>
</template>

<script lang="ts">
    import {ref, defineComponent} from 'vue';
    import Confetti from 'vue-confetti/src/confetti.js';

    export default defineComponent({
        setup() {
            const confetti = ref(new Confetti());

            return {
                confetti,
            };
        },
        mounted() {
            const config : Partial<ConfettiConfig> = {
                defaultType: 'heart',
                defaultSize: 20,
                defaultColors: ['DodgerBlue', 'OliveDrab', 'Gold', 'pink', 'SlateBlue', 'lightblue', 'Violet', 'PaleGreen', 'SteelBlue', 'SandyBrown', 'Chocolate', 'Crimson'],
            };

            this.confetti.start(config);
            setTimeout(() => {
                this.confetti.stop();
            }, 5000);
        },
    });
</script>
