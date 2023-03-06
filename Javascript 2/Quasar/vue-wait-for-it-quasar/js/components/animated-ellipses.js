app.component('AnimatedEllipses', {
    data(){
        return {
            dots: [],
        }
    },

    mounted(){
        setInterval(() => {
            this.dots.push('.');

            if(this.dots.length > 3){
                this.dots = []
            }
        }, 1000);
    },

    template: `
        <span class="ellipses">
            <template v-for="dot in dots">{{ dot }}</template>
        </span>
    `


})
