<template>
  <div>
    <div class="contact-list">
      <div v-if="contact.length">
        <div v-for="field in contact" class='details-container' :key="field.id">
          <div class='contact-detail'>
            <p>Name: </p>
            <p> {{field.name}}</p>
          </div>
          <div class='contact-detail'>
            <p>Email: </p>
            <p> {{field.email}}</p>
          </div>
          <div class='contact-detail'>
            <p>Phone: </p>
            <p> {{field.phone}}</p>
          </div>
          <button v-on:click="rtrnToContacts">Return to Contacts</button>
        </div>
      </div>
      <div v-else>
        <div>
          <input type="text" placeholder="Search by Name or Phone" v-model="searchValue" >
        </div>
        <ul class="list">
          <li
            v-for="contact in filterContacts"
            :key="contact.id"
            class="item"
            :class="{favorite: contact.is_favorite}"
            v-on:click="getContactById(contact.id)"
          >{{ contact.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ContactService from '@/services/ContactService'

export default {
  name: 'ContactList',
  data () {
    return {
      contacts: [],
      contact: [],
      searchValue: ''
    }
  },
  beforeMount () {
    this.getContacts()
  },
  methods: {
    async getContacts () {
      const { data } = await ContactService.getContacts()
      this.contacts = data.contacts
    },
    getContactById (id) {
      let contact = this.contacts.find(elm => elm.id === id)
      this.contact.push(contact)
      return this.contact
    },
    rtrnToContacts () {
      return (this.contact = [])
    }
  },
  computed: {
    filterContacts: function () {
      return this.contacts.filter(elm => {
        return `${elm.name} ${elm.phone} ${elm.email}`.toLowerCase().match(this.searchValue.toLowerCase())
      })
    }
  }
}
</script>

<style scoped lang="sass">
.contact-list
  display: flex
  flex-direction: column
  align-items: center
  margin: auto
.list
  height: 50vh
  overflow: auto
.item
  padding: 10px
  list-style: none
  width: 60vw
  text-align: left
  cursor: pointer
.item:nth-of-type(odd)
  background-color:#eaf1f8
.item:hover
  text-decoration: underline
  background-color: #b1cbe5
.favorite
  font-weight: bold
.details-container
  button
    border: none
    background-color: #4a86c3
    cursor: pointer
    margin-bottom: 20px
    color: white
.contact-detail
  display: flex
  p
    margin-left: 20px
  p:nth-of-type(odd)
    font-weight: bold

</style>
    // background-color: #cbe5b1
