<template>
  <div id="addContact">
    <h1>Add a contact</h1>
    <ContactList />
  </div>
</template>

<script>
// @ is an alias to /src
import AddContact from '@/components/addContactForm'

export default {
  name: 'addContact',
  components: {
    AddContact
  }
}
</script>
