<template>
  <div class="task1">
    <h1>Task #1</h1>
    <form action="#" method="get" class="task1__form" id="whatColor">
      <input ref="input" type="text" class="task1__form__input" />
      <button
        class="task1__form__button"
        form="whatColor"
        type="submit"
        @click.prevent="changeText"
      >submit</button>
    </form>

    <h2>You have typed:</h2>

    <template v-if="color == 'red'">
      <h2 :class="color">{{color}}</h2>
    </template>

    <template v-else-if="color == 'green'">
      <h2 :class="color">{{color}}</h2>
    </template>

    <template v-else-if="color == 'blue'">
      <h2 :class="color">{{color}}</h2>
    </template>

    <template v-else-if="color == 'yellow'">
      <h2 :class="color">{{color}}</h2>
    </template>

    <template v-else-if="!color">
      <h2 :class="color">{{color}}</h2>
    </template>

    <template v-else>
      <h2>{{color}}</h2>
      <h3>!!! color not found</h3>
    </template>
  </div>
</template>



<script>
export default {
  name: "Data",
  data() {
    return {
      color: "",
      availableColors: ["red", "green", "blue", "yellow"]
    };
  },
  methods: {
    changeText: function() {
      this.color = this.$refs.input.value;
    }
  }
};
</script>

<style lang="scss" >
.task1 {
  width: 500px;
  height: 300px;
  margin: 50px 0;
  padding-top: 25px;
  background-color: honeydew;

  &__form {
    margin: 25px 0;

    &__input {
      height: 50px;
      width: 200px;
      margin-right: 20px;
      padding: 10px;
    }
    &__button {
      padding: 15px 20px;
      text-transform: uppercase;
      cursor: pointer;
    }
  }

  .red {
    background-color: red;
  }

  .green {
    background-color: green;
  }

  .blue {
    background-color: blue;
  }

  .yellow {
    background-color: yellow;
  }
}
</style>

