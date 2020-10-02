<template>
  <div class="hello">
    <div class="skills">
      <h1>Skills</h1>

      <ValidationObserver ref="form">
        <form @submit.prevent="addSkill">
          <input type="checkbox" v-model="checked" />
          <ValidationProvider
            name="skill"
            rules="minmax:3,20"
            v-slot="{ errors }"
          >
            <input
              type="text"
              placeholder="Enter a skill you have.."
              v-model="skill"
            />

            <br />

            <span class="alert" v-if="errors">{{ errors[0] }}</span>
          </ValidationProvider>

          <ul>
            <li v-for="(data, index) in skills" :key="index">
              {{ data.skill }}
            </li>
          </ul>
        </form>
      </ValidationObserver>

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
          {{ index + 1 }}.{{ data.quality }}
        </li>
      </ul>

      <p v-if="qualities.length >= 1">You have more than 1 quality.</p>
      <p v-else>You have less than or equal to 1 quality.</p>
    </div>

    <div
      class="hilder"
      v-show="false"
      v-bind:style="{
        backgroundColor: bgColor,
        width: bgWidth,
        height: bgHeight,
      }"
    ></div>
  </div>
</template>

<script>
import { extend } from "vee-validate";

extend("minmax", {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max;
  },
  params: ["min", "max"],
  message: "the {_field_} must be more than {min} and less than {max}",
});

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
      quality: "",
      qualities: [
        {
          quality: "Nice",
        },
        {
          quality: "Friendly",
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
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return;
        }
        this.skills.push({ skill: this.skill });
        this.skill = "";
      });
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
