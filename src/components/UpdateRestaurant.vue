<template>
    <HeaderComp />
    <h1>Hello {{ name }}, Welcome on Update Restaurant Page</h1>
    <form class="update">
        <input type="text" name="name" v-model="restaurant.name" placeholder= "Enter name of restaurant"/>
        <input type="text" name="address" v-model="restaurant.address" placeholder= "Enter address"/>
        <input type="text" name="contact" v-model="restaurant.contact" placeholder= "Enter contact number"/>
        <button type="button" @click="updateRestaurant">Update restaurant</button>
    </form>    
</template>

<script>
import axios from 'axios'
import HeaderComp from './HeaderComp.vue'
export default{
    name :'UpdateRestaurant',
    components : {
        HeaderComp
    },
    data(){
        return {
            name : '',
            restaurant :{
                name:'',
                address:'',
                contact:''
            }
        }
    },
    methods : {
        async updateRestaurant(){
            console.log(this.restaurant);
            let result = await axios.put("http://localhost:3000/restaurants/"+ this.$route.params.id , {
                name : this.restaurant.name,
                address : this.restaurant.address,
                contact : this.restaurant.contact
            });
            console.log(this.restaurant.name + 'Restaurant Updated');
            if (result.status == 200) {
                //alert('Sign Up completed');
                //localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({ name: 'Home' });
            }
        }
    },
    async mounted(){
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user)[0].name;
        console.log(this.name);
        if(!user){
            this.$router.push({name :'SignUp'}) 
        }
        let result =  await axios.get("http://localhost:3000/restaurants/" + this.$route.params.id);
        this.restaurant= result.data;
    }
}
</script>

<style scoped>

.update input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}

.update button{
    width: 320px;
    height : 40px;
    border: 1px solid skyblue;
    background-color: skyblue;
    cursor: pointer;
    color: black;
}


</style>