<template>
  <form class="add-contact-form">
    <label v-for="field in fields" :key="field.label" class="item">
      {{ contact.name }}
      <input :type="field.type" :placeholder="field.placeHolder">
    </label>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: "AddContact",
  data() {
    return {
      fields: [
        { label: "Name", type: "text", placeHolder: "John Smith" },
        { label: "Email", type: "email", placeHolder: "joe@email.com" },
        { label: "Phone Number", type: "phone", placeHolder: "xxx-xxx-xxxx" },
        { label: "Add to Favorites?", type: "checkbox" }
      ]
    }
  },

  methods: {
    async _onSubmit(e) {
      console.log(e);
    }
  }
}
</script>

<style scoped lang="sass">
</style>
