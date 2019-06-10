<template>
  <!-- action -->
  <form class="add-contact-form" @submit="_onSubmit">
    <h2>Create Contact</h2>
    <!-- <form @submit="_validate" action='apiURL' method='post'> -->
    <div v-for="(field, index) in fields" :key="field.label"> 
      <label for="field.label" class="item" :index="index">
        {{ field.label }}
        <input :type="field.type" :placeholder="field.placeHolder"
        v-model="field.name">
      </label>
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
      fields: [
        {
          name: "name",
          label: "Name",
          type: "text",
          placeHolder: "John Smith"
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          placeHolder: "joe@email.com"
        },
        {
          name: "phone",
          label: "Phone Number",
          type: "phone",
          placeHolder: "xxx-xxx-xxxx"
        },
        { name: "is_favorite", label: "Add to Favorites?", type: "checkbox" }
      ]
    };
  },

  methods: {
    async _onSubmit(e) {
      console.log('here')
      console.log(this.name, this.email, this.phone, this.isFavorite);
      // /[a-z]/.test(this.name)
      // /[0-9]/.test(this.phone)
      // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)
      const data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        is_favorite: this.isFavorite
      };
      try {
        // const res = await ContactService.createContact(data)
      } catch (error) {
        alert("Unable to create contact");
        console.error(error);
      }
      e.preventDefault()
    }
  }
};
</script>

<style scoped lang="sass">
.add-contact-form
  height: 40%
  display: flex
  align-items: center
  justify-content: space-around
  flex-direction: column
  button
    width: 100px
  input
    margin-bottom: 20px
    margin-left: 20px
</style>
