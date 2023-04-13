<template>
  <div class="col-md-6">
    <label :for="'sli' + label" class="form-label">{{ label }}</label>
    <input :id="'sli' + label"
           type="text" class="form-control" required
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
    >
    <div class="invalid-feedback">
      Please enter the {{ label }}.
    </div>
  </div>
</template>

<script>
export default {
  name: "UniModalDetails.vue",
  props: {
    label: {type: String},
    modelValue: {}
  },
}
</script>

<style scoped>

</style>