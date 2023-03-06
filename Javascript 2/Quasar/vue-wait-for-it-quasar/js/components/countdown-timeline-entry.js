app.component('CountdownTimelineEntry', {
    props: {
        timer: {
            type: Object,
            required: true,
        }
    },

    computed: {
        formattedDate() {
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            };

            return this.timer.date.toLocaleString('en-US', options);
        },
    },

    // TODO: add popup-edit capabilities
    template: `
        <q-timeline-entry :title="timer.title" :subtitle="formattedDate" :class="{'legendary': timer.legendary}">
            <div class="row">
                <div>
                    <img v-if="timer.legendary" src="images/barney.png" class="barney">
                </div>
                <div>
                    <countdown-timer :date="timer.date"></countdown-timer>
                    <h6 v-if="timer.legendary" class="barney-slogan text-warning">It's {{ timer.date > Date.now() ? 'gonna be' : 'was' }} LEGEN<span class="wait-for-it">&mdash;wait for it&mdash;</span>DARY!</h6>
                </div>
            </div>
        </q-timeline-entry>
    `
})
