<template>
  <div>
    <Search />
      <div class="title">
        <div class="title-details">Starwars Characters</div>
        <div class="line"></div>
      </div>
    <div class="select-group">
      <Select description="FILTER" :options="filterOptions"/>
      <Select description="VIEW" :options="viewOptions"/>
    </div>
  </div>
</template>
<script>
import Search from './search/Search';
import Select from './select/Select';

export default {
  name: 'Home',
  data() {
    return {
      filterOptions: [{ detail: 'Male' }],
      viewOptions: [{ detail: 'Grid' }],
    };
  },
  components: {
    Search,
    Select,
  },
};
</script>
<style scoped >
.title {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 4rem;
}

.title-details {
  font-size: 2.0rem;
  font-weight: bold;
}

.title .line {
  height: 0.4rem;
  background-color: #2c3e50;
  width: 7rem;
  margin: 0 auto;
  margin-top: 1rem;
}

.select-group {
  margin: 2rem 7rem;
  display: flex;
}
</style>
