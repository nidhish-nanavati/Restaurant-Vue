<template>
<div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>
<!--    <router-link to="/update">Update Restaurant</router-link>-->
    <a href="#" @click="logout">Logout</a>
</div>
</template>

<script>

export default {
    name : 'HeaderComp',
    methods:{
        logout(){
            console.warn("logout");
            localStorage.clear();
            this.$router.push({name : 'SignUp'});
        }
    }
}
</script>

<style>
.nav{
    background: #333;
    overflow: hidden;
}
.nav a {
float: left;
color: #fff;
padding: 14px 16px;
text-decoration: none;
margin-right: 5px;
text-align: center;
font-size: 17px;
}

.nav a:hover{
    background-color: #ddd;
    color:#333;
}

</style>