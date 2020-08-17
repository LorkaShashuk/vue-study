<template>
  <div class="task1">
    <input ref="input" type="number" @blur="changeData" />
    <p>The number is: {{ text }}</p>
    <button @click="increaseCount">increase</button>
    <button @click="reduceCounte">reduce</button>
  </div>
</template>

<script>
export default {
  name: "Data",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    increaseCount() {
      this.text += 1;
    },

    reduceCounte() {
      this.text -= 1;
    },

    changeData() {
      this.text = +this.$refs.input.value;
      this.$refs.input.value = "";
    },
  },
};
</script>

<style lang="scss">
* {
  list-style: none;
}
.task1 {
  width: 500px;
  height: 300px;
  margin: 50px 0;
  padding-top: 25px;
  background-color: honeydew;
}

button {
  margin: 15px;
  padding: 10px 20px;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
