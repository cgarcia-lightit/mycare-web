<template>
  <div>
    <h3 v-show="label !== ''" class="mb-4 font-semibold text-gray-900">
      {{ label }}
    </h3>
    <ul
      class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200
               sm:flex"
    >
      <li v-for="(option, prop, index ) in options" :key="index" class="list-item-radio">
        <input-radio
          :label="option.label"
          :name="id"
          :value="option.value"
          @changeOption="changeOption"
          :required="required"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GroupRadio',
  props: {
    options: {
      type: Array,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false,
      default: ''
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      optionSelected: ''
    }
  },
  watch: {
    optionSelected (val) {
      this.$emit('input', val)
    },
    value (val) {
      this.optionSelected = val
    }
  },
  methods: {
    changeOption (value) {
      this.optionSelected = value
    }
  }
})
</script>

<style scoped>
  .list-item-radio {
    @apply w-full border-b border-gray-200 sm:border-b-0 sm:border-r
  }
</style>
