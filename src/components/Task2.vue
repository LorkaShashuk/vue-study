<template>
  <div>
    <h1>{{ text }}</h1>

    <ul>
      <li
        v-for="(item, index) in shopingList"
        :key="index"
      >{{index + 1}}. {{item.title}}: {{item.counte}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Text2",
  props: {
    text: String
  },
  data() {
    return {
      shopingList: [
        {
          id: 0,
          title: "apple",
          counte: 10
        },
        {
          id: 1,
          title: "kiwi",
          counte: 20
        },
        {
          id: 2,
          title: "banana",
          counte: 15
        },
        {
          id: 3,
          title: "peach",
          counte: 10
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
h1 {
  color: red;
}
</style>