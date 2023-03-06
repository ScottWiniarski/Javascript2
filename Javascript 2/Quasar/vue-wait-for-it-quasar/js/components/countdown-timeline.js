app.component('CountdownTimeline', {
    props: {
        timers: {
            type: Array,
            required: true,
        }
    },

    computed: {
        upcoming() {
            return this.timers.filter((item) => {
                return item.date > Date.now();
            }).sort((a, b) => {
                return a.date - b.date;
            });
        },
        expired() {
            return this.timers.filter((item) => {
                return item.date <= Date.now();
            }).sort((a, b) => {
                return b.date - a.date;
            });
        }
    },

    template: `
    <div class="q-px-lg q-pb-md">
        <q-timeline>
            <q-timeline-entry heading>Still Waiting<animated-ellipses /></q-timeline-entry>
            <countdown-timeline-entry 
                        v-for="timer in upcoming" 
                        :timer="timer" 
                        :key="timer.id"
                        color="positive" 
                        icon="schedule"
                        />
            
            <q-timeline-entry heading>Expired</q-timeline-entry>
            <countdown-timeline-entry 
                        v-for="timer in expired" 
                        :timer="timer" 
                        :key="timer.id"
                        color="red-9"  
                        icon="highlight_off" 
                        />
                        
            <q-timeline-entry heading><!-- spacer to finish out timeline--></q-timeline-entry>
        </q-timeline>
    </div>
    `
})
