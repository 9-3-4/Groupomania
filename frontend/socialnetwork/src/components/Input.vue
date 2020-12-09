<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control has-icons-left has-icons-right">
      <input
        :class="['input', isDanger ? 'is-danger' : '']"
        type="text"
        :value="modelValue"
        @input="(e) => $emit('update:modelValue', e.target.value)"
        v-bind="$attrs"
      />
      <span class="icon is-small is-left">
        <i :class="['fas', icon]"></i>
      </span>
      <p class="help is-danger">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>

export default {
  props:{
  modelValue: String,
  label: String,
  icon: String,
  errorMessage: String,
  isDanger: Boolean,
 }
};


</script>
<style>
.label{
  font-weight: bold;
}
input.input{
  background: #e4d1d3;
  width: 250px;
  height: 40px;
  border: none;
  border-radius: 10px;
  text-align: center;
}
</style>
