app.component('BsFileInput', {
    props: {
        id : {
            type: String,
            default: 'file-input-' + Math.floor(Math.random() * 10e16),
        },
        modelValue: {
            type: File,
        },
    },

    emits: ['update:modelValue'],

    methods: {
        updateFile(event) {
            this.$emit('update:modelValue', event.target.files[0])
        }
    },

    template: `
        <div class="custom-file b-form-file">
            <input type="file" :id="id" class="custom-file-input" 
                 @change="updateFile" style="z-index: -5;">
            <label :for="id" data-browse="Browse" class="custom-file-label">
                <span class="d-block form-file-text" style="pointer-events: none;">{{ this.modelValue ? this.modelValue.name : 'No file chosen'}}</span>
            </label>
        </div>
    `
})
