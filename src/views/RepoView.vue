<template>
  <div class="repos">
    <h3>Repositories</h3>
    <div v-for="repo in users" :key="repo.id">
      <p class="repo-name">{{ repo.name }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
    };
  },

  mounted() {
    axios.get(`https://api.github.com/users/FaithJubilee/repos`).then((resp) => {
      this.users = resp.data;
      console.warn(this.users);
    });
  },
};
</script>

<style>
  .repos {
    width: 60%;
    margin: 0 auto;
    text-align: center;
  }
  .repo-name {
    color: green;
  }
</style>