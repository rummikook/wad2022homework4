<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/login">Login</router-link>
    </nav>
    <router-view/>
</template>

<style scoped>

nav {
    text-align: left;
    padding: 30px;
    background-color:	#bdbdbd;
    border-radius: 10px;
    margin-top: 0;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
