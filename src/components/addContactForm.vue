<template>
  <form class="add-contact-form" @submit="_onSubmit">
    <div v-for="field in fields" :key="field.label">
      <label class="item">
        {{ field.label }}
        <input
          :type="field.type"
          :placeholder="field.placeHolder"
          v-model="field.name"
        >
        {{field.name}}
      </label>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import ContactService from '@/services/ContactService'
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
      console.log(this.name);
      const data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        is_favorite: this.isFavorite
      }
      const res = await ContactService.createContact(data)
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
