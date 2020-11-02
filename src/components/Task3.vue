<template>
  <div class="task3">
    <h1>Task #3</h1>
    <form id="fructs" action="#" @submit.prevent="changeColor">
      <div>
        <label for="num">Type fructs number:</label>
        <input ref="num" id="num" type="text" @input="checkValue" />
      </div>
      <div>
        <label for="text">You have typed:</label>
        <input ref="text" id="text" type="text" @input="checkTitle" />
      </div>
      <button form="fructs">Submit</button>
    </form>

    <ul>
      <li v-for="(item, index) in fructs" :key="index">
        <p v-if="item.isChecked" style="border: 3px solid green">{{item.id}}. {{item.title}}</p>
        <p v-else>{{item.id}}. {{item.title}}</p>
      </li>
    </ul>
  </div>
</template>



<script>
export default {
  name: "Data",
  data() {
    return {
      fructs: [
        {
          id: 1,
          title: "kiwi",
          isChecked: false
        },
        {
          id: 2,
          title: "apple",
          isChecked: false
        },
        {
          id: 3,
          title: "banana",
          isChecked: false
        },
        {
          id: 4,
          title: "nut",
          isChecked: false
        },
        {
          id: 5,
          title: "orange",
          isChecked: false
        },
        {
          id: 6,
          title: "cherry",
          isChecked: false
        }
      ]
    };
  },
  methods: {
    checkFormById: function() {
      for (let i = 0; i < this.fructs.length; i++) {
        if (this.fructs[i].id == this.$refs.num.value) {
          this.$refs.text.value = this.fructs[i].title;
          this.fructs[i].isChecked = true;
        }
      }
      if (!this.$refs.num.value) {
        this.$refs.text.value = "error, type right number";
      }
    },
    checkFormByTitle: function() {
      for (let i = 0; i < this.fructs.length; i++) {
        if (this.fructs[i].title == this.$refs.text.value) {
          this.$refs.num.value = this.fructs[i].id;
          this.fructs[i].isChecked = true;
        }
      }
    },
    checkValue: function() {
      for (let i = 0; i < this.fructs.length; i++) {
        this.fructs[i].isChecked = false;
      }
      this.checkFormById();
    },
    checkTitle: function() {
      for (let i = 0; i < this.fructs.length; i++) {
        this.fructs[i].isChecked = false;
      }
      this.checkFormByTitle();
    },
    changeColor: function() {
      this.checkFormById();

      this.$refs.text.value = "";
      this.$refs.num.value = "";
    }
  }
};
</script>

<style lang="scss">
.task3 {
  width: 700px;
  height: auto;
  background-color: lemonchiffon;
  margin: 50px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

form div {
  width: 100%;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

form button {
  width: 50%;
  margin-top: 20px;
  padding: 5px;
  align-self: center;
}

input {
  margin-left: 20px;
}

ul {
  margin: 50px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

li p {
  margin: 5px;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 15%;
}
</style>

