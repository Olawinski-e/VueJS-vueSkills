<template>
  <div class="about">
    <h1>Hello {{ their_name }}, this is an about page</h1>
    <p>
      Pourquoi j'aime VueJs: <br />
      - D'abord, c'est léger, <br />
      - Niveau archi, y'a moyen de faire quelque chose de clair et bien
      maintenable
      <br />
      - Le V vert il est franchement beau et il se marie grave avec le rose de
      Scss et le jaune du Js.
    </p>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      their_name: this.$route.params.name,
    };
  },
};
</script>
