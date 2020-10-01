<template>
  <div class="hello">
    <div class="skills">
      <h1>Skills</h1>

      <form @submit.prevent="addSkill">
        <ValidationProvider v-slot="{ errors }">
          <input
            type="text"
            placeholder="Enter a skill you have.."
            v-model="skill"
          />
          <span>{{ errors[0] }}</span></ValidationProvider
        >

        <input type="checkbox" v-model="checked" />
        <ul>
          <li v-for="(data, index) in skills" :key="index">{{ data.skill }}</li>
        </ul>
      </form>

      <p>Theses are skills that you possess</p>
    </div>

    <div class="helder">
      <h4>{{ name }}</h4>
      {{ btnState ? "The button is disabled" : "The button is active" }}

      <button @click="changeName" v-bind:disabled="btnState">
        Change Name
      </button>
    </div>

    <div class="holder">
      <ul>
        <li v-for="(data, index) in qualities" :key="index">
          {{ index + 1 }}.{{ data.skill }}
        </li>
      </ul>

      <p v-if="skills.length >= 1">You have more than 1 skills.</p>
      <p v-else>You have less than or equal to 1 skills.</p>
    </div>

    <div
      class="hilder"
      v-bind:style="{
        backgroundColor: bgColor,
        width: bgWidth,
        height: bgHeight,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      name: "Whatever",
      btnState: false,
      checked: false,
      skill: "",
      skills: [
        {
          skill: "VueJs",
        },
        {
          skill: "Frontend Developer",
        },
      ],
      qualities: [
        {
          skill: "Nice",
        },
        {
          skill: "Friendly",
        },
      ],
      bgColor: "lightgreen",
      bgWidth: "100%",
      bgHeight: "100px",
    };
  },
  methods: {
    changeName() {
      this.btnState = true;
    },
    addSkill() {
      this.skills.push({ skill: this.skill });
      this.skill = "";
      console.log("This checkbox value is: " + this.checked);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.skills {
  li {
    color: lightseagreen;
    font-weight: 600;
    text-align: left;
  }
}

.alert {
  background-color: mediumspringgreen;
  width: 100%;
  height: 100px;
}

.another-class {
  border: solid 1px grey;
}
</style>
