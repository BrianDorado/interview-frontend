<template>
  <!-- action -->
  <form class="add-contact-form" @submit="_onSubmit">
    <h2>Create Contact</h2>
    <div>
      <label>Name</label>
      <input type="text" v-model="name" placeholder="John Smith" v-on:blue="_isalphaNum" required>
    </div>
    <div>
      <label>Phone</label>
      <input type="phone" v-model="phone" placeholder="xxx-xxx-xxxx">
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="email" placeholder="joe@email.com">
    </div>
    <div>
      <label>Add to Favorites?</label>
      <input type="checkbox" v-model="isFavorite">
    </div>
    <div v-if="errors.length">
      <h5>Please fix the following Errors:</h5>
      <ul>
        <li v-for="error in errors" :key="error">{{error}}</li>
      </ul>
    </div>
    <div v-if="succeeded">
      <p class='success-alert'>Contact Created!</p>
    </div>

    <button type="submit">Submit</button>
  </form>
</template>

<script>
import ContactService from "@/services/ContactService";
export default {
  name: "AddContact",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      isFavorite: false,
      errors: [],
      succeeded: true

    };
  },

  methods: {
    async _onSubmit(e) {
      this.errors = [];

      const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      const data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        is_favorite: this.isFavorite
      };

      if (!/[A-Za-z]/.test(this.name))
        this.errors.push("You must enter a valid name");

      if (!/[0-9]/.test(this.phone))
        this.errors.push("You must enter a valid phone number");

      if (!emailregex.test(this.email))
        this.errors.push("You must enter a valid email");

      try {
        // const res = await ContactService.createContact(data)
        this.succeeded = true
        return res.data;
      } catch (error) {
        alert("Unable to create contact");
        console.error(error);
      }
      e.preventDefault();
    }
  }
};
</script>

<style scoped lang="sass">
.add-contact-form
  height: 40%
  width: 50vw
  margin: auto
  display: flex
  align-items: center
  justify-content: space-around
  flex-direction: column
  background-color: #eaf1f8
  button
    width: 100px
  input
    margin-bottom: 20px
    margin-left: 20px
  li
    list-style: none
    background-color: #f2d896
    margin-top: 10px
</style>
