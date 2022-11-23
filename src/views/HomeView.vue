<template>
  <div className="home">
    <Posts />
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from '@/components/Posts.vue'

export default {
  components: {
    Posts
  }
}
</script>