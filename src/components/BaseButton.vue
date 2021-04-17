<template>
  <button @click="buttonClick" class="btn" :class="[bgcolor, txtcolor]">
    <slot>{{ msg }} </slot>
  </button>
</template>
<script>
export default {
  props: ['bgcolor', 'txtcolor', 'msg'],

  emits: ['btn-click'],

  methods: {
    buttonClick() {
      this.$emit('btn-click', {
        msg: this.msg
      })
    }
  }
}
</script>
