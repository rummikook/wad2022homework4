<template>
    <div id="app" v-cloak>
        <h2>Password</h2>
        <input type="email" placeholder="Email">
        <div class="password">
            <input type="password" :class='{valid:passwordValidation.valid}' v-model="password" placeholder="Password">
        </div>
        <button>Login</button>
        <transition name="hint" appear>
            <div v-if='passwordValidation.errors.length > 0 && !submitted' class='hints'>
                <h2>Hints</h2>
                <p v-for='error in passwordValidation.errors'>{{error}}</p>
            </div>
        </transition>	
    </div>
</template>
<script>
export default {
    name:'SignUp',
    el:"#app",
	data () {
		return {
			rules: [
				{ message:"8 characters minimum.", regex:/.{8,}/ },
                { message:"15 characters maximum.", regex:/^.{0,15}$/ },
				{ message:"One uppercase letter required.",  regex:/[A-Z]+/ },
                { message:"Two lowercase letters required.", regex:/[a-z].{1,}/ },
				{ message:"One number required.", regex:/[0-9]+/ },
                { message:"Password should start with an uppercase letter.", regex:/^[A-Z]/},
                { message:"Password should include the character '_'.", regex:/[_]/}
			],
			password:'',
			submitted:false
		}
	},
	computed: {
		passwordValidation () {
			let errors = []
			for (let condition of this.rules) {
				if (!condition.regex.test(this.password)) {
					errors.push(condition.message)
				}
			}
			if (errors.length === 0) {
				return { valid:true, errors }
			} else {
				return { valid:false, errors }
			}
		}
	}
}
</script>

<style scoped>
#app {
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
