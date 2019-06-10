<template>
  <div id="home">
    <h1>MarketDial Address Book</h1>
    <AddContact/>
    <ContactList />
  </div>
</template>

<script>
// @ is an alias to /src
import ContactList from '@/components/ContactList'
import AddContact from '@/components/addContactForm'

export default {
  name: 'home',
  components: {
    ContactList,
    AddContact
  }
}
</script>
