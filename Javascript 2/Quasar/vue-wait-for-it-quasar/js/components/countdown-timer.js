const MS_PER_DAY = 1000 * 60 * 60 * 24;
const MS_PER_HOUR = 1000 * 60 * 60;
const MS_PER_MINUTE = 1000 * 60;
const MS_PER_SECOND = 1000;

app.component('CountdownTimer', {
    data(){
        return {
            timeRemaining: this.date - Date.now(),
        }
    },

    props: {
        date: {
            type: Date,
            required: true,
        }
    },

    computed: {
        days(){
            let days = this.timeRemaining / MS_PER_DAY;
            return this.timeRemaining > 0 ? Math.floor(days) : Math.abs(Math.ceil(days));
        },
        hours(){
            let hours = (this.timeRemaining % MS_PER_DAY) / MS_PER_HOUR;
            return this.timeRemaining > 0 ? Math.floor(hours) : Math.abs(Math.ceil(hours));
        },
        minutes(){
            let minutes = (this.timeRemaining % MS_PER_HOUR) / MS_PER_MINUTE;
            return this.timeRemaining > 0 ? Math.floor(minutes) : Math.abs(Math.ceil(minutes));
        },
        seconds(){
            let seconds = (this.timeRemaining % MS_PER_MINUTE) / MS_PER_SECOND;
            return this.timeRemaining > 0 ? Math.floor(seconds) : Math.abs(Math.ceil(seconds));
        }
    },

    mounted(){
        // update the countdown every 1 second
        setInterval(() => {
            // update time remaining
            this.timeRemaining = this.date - Date.now();
        }, 1000);
    },

    template: `
        <div class="countdown-timer">
            <ul v-if="timeRemaining > 0">
                <li><span class="days">{{ days }}</span>Days</li>
                <li><span class="hours">{{ hours }}</span>Hours</li>
                <li><span class="minutes">{{ minutes }}</span>Minutes</li>
                <li><span class="seconds">{{ seconds }}</span>Seconds</li>
            </ul>
            <div v-else class="expired">
                <template v-if="days">{{ days }} {{ days > 1 ? 'days' : 'day' }} ago</template>
                <template v-else-if="hours">{{ hours }} {{ hours > 1 ? 'hours' : 'hour' }} ago</template>
                <template v-else-if="minutes">{{ minutes }} {{ minutes > 1 ? 'minutes' : 'minute' }} ago</template>
                <template v-else>{{ seconds }} {{ seconds > 1 ? 'seconds' : 'second' }} ago</template>
            </div>
        </div>
    `
})
