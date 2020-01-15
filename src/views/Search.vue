<template>
  <div class="wrapper">
    <h2>This is a search page</h2>
    <div class="form">
      <input
        class="content-name"
        type="text"
        name="name"
        required
        autocomplete="off"
        v-model="searchValue"
        @input="handleInput"
      />
      <label for="name">
        <span class="label-name">Search</span>
      </label>
    </div>
    <ul class="listing">
        <li v-for="item in results" :key="item.data[0].nasa_id" >
            <p>{{ item.data[0].description }}</p>
        </li>
    </ul>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import axios from 'axios';
import debounce from 'lodash.debounce';

const API = 'https://images-api.nasa.gov/search';
console.log(API);

export default {
  name: 'search',
  data() {
    return {
      searchValue: '',
      results: [],
    };
  },
  methods: {
    // eslint-disable-next-line
    handleInput: debounce(function() {
      axios
        .get(`${API}?q=${this.searchValue}&media_type=image`)
        .then((response) => {
          this.results = response.data.collection.items;
          console.log(response.data.collection.items);
          return true;
        })
        .catch(error => console.log(error));
    }, 500),
  },
};
</script>

<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css?family=Rubik:300,300i,400,400i,500,500i,700,700i,900,900i&display=swap&subset=latin-ext');

body {
  font-family: "Rubik", sans-serif;
}

.debug {
  background: #ff000024;
  border: 2px dotted red;
}

.form {
  position: relative;
  width: 400px;
  height: 48px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;

  input {
    width: 100%;
    height: 30px;
    padding-top: 15px;
    z-index: 2;
    border: none;
    font-size: 16px;
    outline: none;
  }

  label {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 1px solid #000;
    overflow: hidden;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 100%;
      height: 100%;
      border-bottom: 3px solid #42b983;
      transform: translateX(-100%);
      transition: all 0.3s ease;
    }
  }
}

.label-name {
  position: absolute;
  bottom: 6px;
  left: 0;
  transition: all 0.3s ease;
}

.form input {
  &:focus + label,
  &:valid + label {
    border-bottom: 1px solid #42b983;
    transition: all 0.4s ease;
  }
  &:focus + label .label-name,
  &:valid + label .label-name {
    transform: translateY(-130%);
    font-size: 14px;
    color: #42b983;
  }

  &:focus + label:after,
  &:valid + label:after {
    transform: translateX(0);
  }
}
.listing {
    list-style-type: none;
}
</style>
