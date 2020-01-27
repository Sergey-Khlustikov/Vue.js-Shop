<template>
  <div class="form-group">
    <label>{{name}}
      <transition name="fade" appear>
        <template  v-if="activated">
          <transition name="fade"  mode="out-in">
            <i v-if="isValid" key="valid" class="fas fa-check-circle text-success"/>
            <i v-if="!isValid" key="invalid" class="fas fa-times-circle text-danger"/>
          </transition>
        </template>
      </transition>
    </label>
    <input type="text" class="form-control"
           :value="value"
           @input="onInput"
           :id="name.toLowerCase()"
    />
  </div>
</template>

<script>

export default {
  props: ['name', 'value', 'pattern'],
  data () {
    return {
      activated: this.value !== ''
    }
  },
  methods: {
    onInput (e) {
      this.activated = true
      this.$emit('input', {
        value: e.target.value,
        valid: this.pattern.test(e.target.value)

      })
    }
  },
  computed: {
    isValid () {
      return this.pattern.test(this.value)
    }
  }
}
</script>
