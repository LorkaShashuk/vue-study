<template>
  <div class="task2">
    <h1>Task #2</h1>
    <ul class="task2__list">
      <li v-for="(item, index) in list" :key="item.id" :title="item.tip">
        {{index + 1}}.
        <a target="_blank" :href="item.link">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>



<script>
export default {
  name: "Data",
  data() {
    return {
      list: [
        {
          id: 0,
          title: "Google",
          tip: "Click to visit Google",
          link: "https://www.google.ru/"
        },
        {
          id: 1,
          title: "Facebook",
          tip: "Click to visit Facebook",
          link: "https://www.facebook.com/"
        },
        {
          id: 2,
          title: "YouTube",
          tip: "Click to visit YouTube",
          link: "https://www.youtube.com/"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" >
* {
  list-style: none;
}
.task2 {
  width: 500px;
  height: 300px;
  margin: 50px 0;
  padding-top: 25px;
  background-color: honeydew;

  &__list {
    height: 120px;
    margin-top: 25px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
}
</style>

