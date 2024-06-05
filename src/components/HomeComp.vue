<template>
    <HeaderComp/>
    <h1>Hello {{ name }}, Welcome to home </h1>
    <table class ="restaurant" border="2">
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Contact</th>
        <th>Address</th>
        <th>Update option</th>
        <th>Delete</th>
    </tr>
    <tr v-for="item in restaurants" :key="item.id">
    <td>{{ item.id }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.contact }}</td>
    <td>{{ item.address }}</td>
    <td><router-link :to ="'/update/' + item.id">Update Restaurant</router-link></td>
    <td><button @click="deleteRestaurant(item.id)">Delete Restaurant</button></td>
</tr>

</table>
</template>

<script>
import HeaderComp from './HeaderComp.vue'
import axios from 'axios';
    export default {
        name :'HomeComp',
        data(){
            return{
                name : '',
                restaurants : []
            }
        },
        components:{
            HeaderComp
        },
        methods : {
           async deleteRestaurant(id){
               console.log(id);
               let result = await axios.delete("http://localhost:3000/restaurants/" + id);
                console.warn(result);
                if(result.status == 200){
                    console.log(result.data.name + "Restaurant deleted");
                    this.$router.go();
                }
            }
        },
       async mounted(){
            let user = localStorage.getItem('user');
            this.name = user;
            if(!user){
                this.$router.push({name :'Login'}) 
            }

            let result = await axios.get(`http://localhost:3000/restaurants`);
            console.warn(result.data);
            this.restaurants = result.data;
    }


    }
</script>

<style scoped>
.restaurant{
    margin-left: auto;
    margin-right: auto;
}

</style>