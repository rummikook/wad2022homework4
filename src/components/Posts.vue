<template>
  <div class="posts">
    <!--väga algne-->
    <li v-for="post in posts" :key="post.id">
      {{post.authorName}}
      {{post.createTime}}
      {{post.body}}
      {{post.picture}}
    </li>
  </div>
</template>

<script>
// prg vale, peab olema store/index.js state'is
import postsData from "@/assets/posts.json";

export default {
  name: 'Posts',
  data() {
    return {
      posts: postsData,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
