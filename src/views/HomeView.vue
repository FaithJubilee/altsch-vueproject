<template>
    <h1>Welcome Faith Jubilee</h1>

  <div class="home">

    <div class="descriptions">
      <div :key="users.id">
        <img v-bind:src="users.avatar_url" alt="mapic" class="ma-pic" />
        <p class="name">{{ users.name }}</p>
        <p>{{ users.login }}</p>
        <p class="bio">{{ users.bio }}</p>
      </div>
      <div class="get-repos">
        <router-link to="/repo">Get Repos</router-link>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "HomeView",
   data() {
    return {
      users: {},
    };
  },

   mounted() {
     axios.get("https://api.github.com/users/FaithJubilee").then((resp) => {
      this.users = resp.data;
      console.warn(this.users);
    });
  },
};
</script>

<style>
</style>
