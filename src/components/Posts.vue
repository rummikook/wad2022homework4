<template>
  <main>
    <button button v-on:click="resetLikes()">Reset Likes</button>
    <article v-for="post in postList" :key="post.id">
      <ul className="articleHeader">
        <li><img src="@/assets/user.png" width="40" height="40" /></li>
        <li>{{post.createTime.substring(11,16) + " " + post.createTime.substring(0, 10)}}</li>
      </ul>
      <div className="postText">{{post.body}}</div>
      <img v-if="post.picture!=''" :src="require('@/assets/' + post.picture)" />
      <div className="likes">Likes: {{post.likes}}</div>
      <button className="likeButton" button v-on:click="addLike(post.id)"><img src="@/assets/like.png" width="40" height="40"/></button>
    </article>
  </main>
</template>

<script>
export default {
  name: "Posts",
  data: function() {return {}},
  computed: {
    postList() {
    return this.$store.state.postList
    }
  },
  methods: {
    addLike: function(postId) {
      this.$store.commit("addLike", postId)
    },
    resetLikes: function() {
      this.$store.commit("resetLikes")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
	display: flex;
	flex-direction: column;
	align-items: center
}

article {
	display: flex;
	background-color:	#D3D3D3;
	border-radius: 10px;
	width: 50%;
	padding: 1em;
	flex-direction: column;
	margin: 1em;
}

.articleHeader {
	justify-content: space-between;
  margin: 2px;
	padding: 2px;
	list-style: none;
	display: flex;
	flex-direction: row;
}

ul + div {
  font-weight: bold;
}

.postText {
  text-align: left;
  margin-top: 1em;
  margin-bottom: 1em;
}

.likes {
  text-align: left;
}

.likeButton {
  width: 4em;
  margin-top: 1em;
}

@media (max-width: 800px) {
	article {
		width: 95%;
	}
	footer {
		display: none;
	}
}
</style>
