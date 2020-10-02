<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: center;
}

nav a {
  padding: 10px;
  text-decoration: none;
  border-radius: 3px;
  background-color: rgb(228, 185, 76);
  color: white;
  margin-right: 15px;

  &:hover {
    background-color: goldenrod;
  }
}
</style>
