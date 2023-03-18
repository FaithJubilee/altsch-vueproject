<template>
  <div class="repos">
    <h3>Repositories</h3>
    <div v-for="repo in users" :key="repo.id" class="repos">
      <p>{{ repo.name }}</p>
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
    axios.get(`https://api.github.com/users/jahseed89/repos`).then((resp) => {
      this.users = resp.data;
      console.warn(this.users);
    });
  },
};
</script>
