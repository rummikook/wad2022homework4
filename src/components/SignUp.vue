<template>
    <div class="app">
        <p v-if="error.length">
            <b>Please correct the following errors:</b>
            <ul>
                <li v-for="e in error" v-bind:key="e.id">{{e}}</li>
            </ul>
        </p>
        <form @submit="signup">
            <p>
                <input type="email" placeholder="Email">
            </p>
            <p>
                <input type="password" placeholder="Password" v-model="pw">
            </p>
            <button type="submit">Signup</button>
        </form>
    </div>
</template>
<script>
export default {
    name:'SignUp',
    data()
    {
        return {
            error: [],
            pw:null
        }
    },
    methods:{
        signup(e)
        {
            if(this.pw)
            {
                console.log("login function called")
            }
            this.error=[];
            if(!this.pw)
            {
                this.error.push("password is required")
            }
            console.warn("errors",this.error)
            e.preventDefault()
        }
    }
}
</script>

<style scoped>
.app {
    width: 400px;
    margin: 0 auto;
    background-color: #2c3e50;
    padding: 30px;
    margin-top: 100px;
    border-radius: 20px;
    color: white;
}
input {
    border: none;
    outline: none;
    border-bottom: 1px solid #ddd;
    font-size: 1em;
    padding: 5px 0;
    margin: 10px 0 5px 0;
    width: 100%;
    border-radius: 20px;
    text-align: center;
}
button {
  background-color: #42b983;
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  color: white;
  border-radius: 20px;
}
</style>