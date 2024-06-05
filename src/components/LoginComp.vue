<template>
    <img src="../assets/resto.jpg" alt="" class="logo">
    <h1>Login</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="passHash" placeholder="Enter password">
        <button @click="login">Login</button>
        <p>
            <router-link to="/sign-up">Sign Up</router-link>
        </p>
    </div>    
</template>

<script>
import axios from 'axios';
export default {
    name : 'LoginComp',
    data(){
        return {
            email : '',
            passHash : ''
        }
    },
    methods : {
        async login(){
            let result = await axios.get(`http://localhost:3000/users?passHash=${this.passHash}&email=${this.email}`);
/*            console.log(this.email,this.passHash);
            console.warn(result);*/
            if (result.status == 200 && result.data.length>0) {
                //alert('Sign Up completed');
                localStorage.setItem("user-info", JSON.stringify(result.data));
                localStorage.setItem("user", JSON.stringify(result.data[0].name));
                this.$router.push({ name: 'Home' });
            }
        }
    }
}

</script>

<style scoped>

.logo{
    height: 100px;
    width : 100px;
}

.login input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
 
.login button{
    width: 320px;
    height : 40px;
    border: 1px solid skyblue;
    background-color: skyblue;
    cursor: pointer;
    color: black;
}

</style>