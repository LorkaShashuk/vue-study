<template>
  <div class="shoppingList">
    <ul>
      <li
        v-for="fructs in fruitsList "
        :key="fructs.id"
        v-on:click=" onClick"
      >Фрукт: {{fructs.title}} кількість: {{fructs.caunt}}</li>
    </ul>
  </div>
</template>



<script>
export default {
  name: "Data",
  data() {
    return {
      fruitsList: [
        {
          id: 0,
          title: "Aplle",
          caunt: 10
        },
        {
          id: 1,
          title: "Orange",
          caunt: 15
        },
        {
          id: 2,
          title: "Banan",
          caunt: 20
        }
      ]
    };
  },
  methods: {
    onClick: function(event) {
      event.target.style.color = "red";
    }
  }
};
</script>

<style lang="sass" scoped>
</style>

