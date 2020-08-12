<template>
  <div class="task1">
    <h1>Task #1</h1>
    <form action="#" method="get" class="task1__form" id="color-form" @submit.prevent="changeColor">
      <input name="color-form" type="text" class="task1__form__input" v-model="color" />
      <button type="submit" form="color-form" class="task1__form__button">submit</button>
    </form>
    <h2>
      You have typed:
      <span class="typedText"></span>
    </h2>
  </div>
</template>



<script>
export default {
  name: "Data",
  data() {
    return {
      color: ""
    };
  },
  computed: {
    changeColor: function(event) {
      let formContainer = document.querySelector(".task1");
      formContainer.style.backgroundColor = `${this.color}`;

      let typedText = document.querySelector(".typedText");
      typedText.innerHTML = this.color;
      if (this.color == "red") {
        typedText.style.color = "white";
      } else {
        typedText.style.color = "red";
      }

      let input = document.querySelector(".task1__form__input");
      input.value = "";
    }
  }
};
</script>

<style lang="scss">
.task1 {
  width: 500px;
  height: 500px;
  background-color: lemonchiffon;
  margin: 50px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &__form {
    margin: 30px 0;

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
}
</style>

