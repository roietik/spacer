<template>
  <div class="wrapper">
      <div class="search">
          <label for="search">Search</label>
          <input id="search" name="search" type="text">
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'search',
};
</script>

<style lang="scss" scoped>
    .wrapper {
        display:flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
        padding: 30px;
        width: 100%;

    }
    .search {
        display: flex;
        flex-direction: column;
        width: 250px;

        label {
            text-align: left;
        }

        input {
            height: 30px;
            border: 0;
            border-bottom: 2px solid #000;
        }
    }
</style>
