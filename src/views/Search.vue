<template>
  <div class="wrapper">
    <h2>This is an about page</h2>
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
        <span class="label-name">Name</span>
      </label>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

const API = 'https://images-api.nasa.gov';
console.log(API);

export default {
  name: 'search',
  data() {
    return {
      searchValue: '',
    };
  },
  methods: {
    handleInput() {
    //   console.log(`handleInput: ${e.target.value}`);
      console.log(`handleInput: ${this.searchValue}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Rubik:300,300i,400,400i,500,500i,700,700i,900,900i&display=swap&subset=latin-ext");

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
</style>
