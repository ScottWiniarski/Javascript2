const app = Vue.createApp({
    data(){
        return {
            timers: [
                new Timer('Oktoberfest', '2022-09-24 00:00', true),
                new Timer('Halloween', '2022-10-31 00:00'),
                new Timer('Labor Day', '2022-09-05 00:00'),
                new Timer('Fall Break', '2022-10-10 00:00'),
                new Timer('Ted Mosby\'s Birthday', '2023-04-25 00:00', true),
                new Timer('Graduation', '2023-05-20 10:00'),
            ],
            rightDrawerOpen: false,
        }
    },

    methods: {
        toggleRightDrawer() {
            this.rightDrawerOpen = !this.rightDrawerOpen;
        },

        addTimer(timer){
            this.timers.push(timer);
        },

        openNewTimerForm(){
            this.toggleRightDrawer();
        }
    }
})


