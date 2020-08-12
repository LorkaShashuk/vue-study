<template>
  <div class="task2">
    <h1>Task #2</h1>
    <button
      class="task2__button"
      @click.left.prevent="pressedButtonLeft"
      @click.right.prevent="pressedButtonRight"
    >which of the mouse buttons was pressed</button>

    <h2 class="task2__text">
      You have pressed
      <span class="task2__text__request">{{button}}</span> button
    </h2>

    <button class="task2__button task2__button--second" @click="showTime">what the time is now</button>

    <h2 class="task2__text">
      Now is:
      <span class="task2__text__request">{{ time }}</span>
    </h2>
  </div>
</template>



<script>
export default {
  name: "Data",
  data() {
    return {
      button: "...",
      time: "..."
    };
  },
  methods: {
    pressedButtonLeft: function() {
      this.button = "left";
    },
    pressedButtonRight: function() {
      this.button = "right";
    },
    showTime: function() {
      this.time = new Date();
    }
  }
};
</script>

<style lang="scss">
.task2 {
  width: 700px;
  height: 500px;
  background-color: lemonchiffon;
  margin: 50px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &__button {
    padding: 20px 40px;
    text-transform: uppercase;
    margin-top: 80px;
    cursor: pointer;

    &--second {
      margin-top: 25px;
    }
  }

  &__text {
    margin-top: 15px;

    &__request {
      color: red;
    }
  }
}
</style>

