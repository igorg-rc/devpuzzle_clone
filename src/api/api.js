import axios from 'axios'

const TECHNOLOGIES_BASE_URL = '/api/technologies'
const TESTIMONIALS_BASE_URL = '/api/testimonials'
const OUR_WORKS_BASE_URL = '/api/works'
const MESSAGES_BASE_URL = '/api/messages'

export const getTechnologies = () => axios.get(TECHNOLOGIES_BASE_URL)
  .then(res => res.data)
  .catch(error => console.log(error))

export const getTestimonials = () => axios.get(TESTIMONIALS_BASE_URL)
  .then(res => res.data)
  .catch(error => console.log(error))

export const getOurWorks = () => axios.get(OUR_WORKS_BASE_URL)
  .then(res => res.data)
  .catch(error => console.log(error))

export const createMessage = data => axios.post(MESSAGES_BASE_URL, data)
  .then(data => console.log(`Message was sent: ${data}`))
  .catch(error => console.log(error))