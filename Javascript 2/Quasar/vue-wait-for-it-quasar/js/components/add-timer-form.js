app.component('AddTimerForm', {
    data() {
       return {
            newTimer: {} // data defaults set by resetForm()
        }
    },

    methods: {
        addTimer(){
            // TODO: validate

            // create new timer
            let dateString = this.newTimer.dateInput + ' ' + (this.newTimer.showTime ? this.newTimer.timeInput : '00:00');
            let timer = new Timer(this.newTimer.title, dateString, this.newTimer.legendary );

            // emit new timer
            this.$emit('add-timer', timer);

            // clear form
            this.resetForm();
        },

        resetForm(){
            this.newTimer = {
                title: '',
                dateInput: '',
                timeInput: '',
                showTime: false,
                legendary: false,
            }

            // TODO: have the datepicker default to today, so we don't need to validate
            this.$refs.datePicker?.setToday();
        }
    },

    mounted(){
        this.resetForm();
    },

    // TODO: create form using quasar
    template: `
    <q-form
      @submit.prevent="addTimer"
      class="q-mx-md"
    >
        <h4 class="q-my-md">New Timer</h4>
        
        
        <q-input
            filled
            label="What are you waiting for?"
            type="text"
            v-model="newTimer.title"
            class="full-width"
            lazy-rules
            :rules = "[val => val && val.length > 0 ]"
        /><br>
        

        <q-date
            v-model="newTimer.dateInput"
            placeholder="YYYY-MM-DD"
            class="full-width"
            ref="datePicker"
            no-unset:
        />


        <div class="q-my-sm">
          <q-toggle v-model="newTimer.showTime" label="Time of Day" />
          <q-time
              v-show="newTimer.showTime"
              v-model="newTimer.timeInput"
              class="full-width"
          />
        </div>
        
        <div class="q-my-sm">
            <q-toggle v-model="newTimer.legendary" label="Legendary" />
            <div v-show="newTimer.legendary">
                <img src="images/barney.png" class="full-width">
            </div>
        </div>
        
        <div class="q-my-sm">
            <q-btn label="Add It" type="submit" color="primary" class="full-width"/>
        </div>
    </q-form>
    `
})
