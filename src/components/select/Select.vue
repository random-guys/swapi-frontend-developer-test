<template>
  <div class="select">
    <div class="select-description">{{ description }}</div>
    <div>
      <select>
        <option class="selected" v-for="(option, index) in options" v-bind:key="index">
          {{ option.detail }}
        </option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Select',
  props: ['description', 'options'],
  data() {
    return {};
  },
};
</script>
<style scoped>
.select {
  display: flex;
  align-items: center;
  margin-right: 2rem;
}

.select-description {
  font-weight: 400;
  font-size: 1.1rem;
}

.select-categories {
  margin: 2rem 7rem;
  display: flex;
}

select {
  outline: none;
  font-size: 1rem;
  border: 0.1rem solid #2c3e50;
  border-radius: 0.3rem;
  padding: 0.6rem 3.2rem;
  margin-left: 1rem;
}
</style>
