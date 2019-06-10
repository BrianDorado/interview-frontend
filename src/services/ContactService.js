import api from '@/api'

export default {
  getContacts: () => api().get(`/contacts`),
  createContact: data => api().post('/contact', data)
}
