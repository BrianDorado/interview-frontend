<template>
  <div class="contact-list">
    <ul>
      <li v-for="contact in contacts" :key="contact.id" class="item" :class="{favorite: contact.is_favorite}">{{ contact.name }}</li>
    </ul>
  </div>
</template>

<script>
import ContactService from '@/services/ContactService'

export default {
  name: 'ContactList',
  data () {
    return {
      contacts: []
    }
  },
  beforeMount () {
    this.getContacts()
  },
  methods: {
    async getContacts () {
      const { data } = await ContactService.getContacts()

      this.contacts = data.contacts
    }
  }
}
</script>

<style scoped lang="sass">
.contact-list
  overflow: auto
  height: 50vh 
  display: flex
  justify-content: center
  margin: auto
.item
  padding: 10px
  list-style: none
  width: 60vw
  text-align: left
.item:nth-of-type(odd)
  background-color:#eaf1f8
.item:hover
  text-decoration: underline
.favorite
  font-weight: bold

</style>
