<template>
    <HeaderComp />
    <h1>Hello {{name}}, Welcome on Add Restaurant Page</h1>
    <form class="add">
        <input type="text" name="name" v-model="restaurant.name" placeholder= "Enter name of restaurant"/>
        <input type="text" name="address" v-model="restaurant.address" placeholder= "Enter address"/>
        <input type="text" name="contact" v-model="restaurant.contact" placeholder= "Enter contact number"/>
        <button type="button" @click="addRestaurant">Add new restaurant</button>
    </form>
</template>

<script>
import axios from 'axios'
import HeaderComp from './HeaderComp.vue'
export default{
    name :'AddRestaurant',
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
    methods:{
        async addRestaurant(){
           // console.log(this.restaurant.name,this.restaurant.address,this.restaurant.contact);
            let result = await axios.post(`http://localhost:3000/restaurants`, {
                name : this.restaurant.name,
                address : this.restaurant.address,
                contact : this.restaurant.contact
            });
            if (result.status == 201) {
                //alert('Sign Up completed');
                //localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({ name: 'Home' });
            }
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user)[0].name;
        console.log(this.name);
            if(!user){
                this.$router.push({name :'SignUp'}) 
            }
    }
}


</script>

<style scoped>

.add input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}

.add button{
    width: 320px;
    height : 40px;
    border: 1px solid skyblue;
    background-color: skyblue;
    cursor: pointer;
    color: black;
}

</style>