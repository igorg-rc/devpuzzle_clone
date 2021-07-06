import { useState } from 'react'
import { Grid, TextField, Button, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Section } from "../components/UI/Section"
import { SectionTitle } from "../components/UI/SectionTitle"
import { SectionSubtitle } from "../components/UI/SectionSubtitle"
import { createMessage } from '../api/api'

const useStyles = makeStyles(theme => ({
  form: {
    paddingTop: '3vh'
  },
  textArea: {
    paddingBottom: '8.5vh'
  },
  input: {
    fontFamily: 'Rajdhani, sans-serif',
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: 'blue'
    }
  },
  Input: {
    fontFamily: 'Rajdhani, sans-serif',
    color: 'red'

  },
  inputLabel: {
    fontFamily: 'Rajdhani, sans-serif',
    color: theme.palette.text.title

  },
  sendBtn: {
    color: theme.palette.text.primary,
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: '1rem',
    textTransform: 'none',
    background: 'transparent',
    border: '2px solid',
    borderColor: theme.palette.primary.main,
    borderRadius: 0,
    padding: '8px 50px',
    transition: '0.5s',
    '&:hover': {
      background: theme.palette.primary.main,
      color: '#000',
      cursor: 'pointer'
    }
  }
}))

export const Contacts = () => {
  const styles = useStyles()
  const [message, setMessage] = useState({ name: "", email: "", message: "" })

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const inputChangeHandler = event => {
    const { name, value } = event.target
    setMessage(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  const submitHandler = async event => {
    event.preventDefault()
    const newMessage = { 
      name: message.name, 
      email: message.email,
      text: message.text
    }
    await sleep(300)
    await createMessage(newMessage)

    setMessage(prevState => {
      return {
        ...prevState,
        name: "", 
        email: "",
        text: ""
      }
    })
    event.target.reset()
  }

  console.log(message)

  return (
    <Section id="Contacts" className={styles.section}>
      <Container>
      <SectionTitle text="Contacts" />
      <SectionSubtitle text="Let's work together" />
      <form className={styles.form} onSubmit={submitHandler}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <TextField 
              fullWidth
              required
              name="name"
              onChange={inputChangeHandler} 
              placeholder="Your name" 
              InputProps={{ className: styles.input }} 
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField 
              fullWidth
              required 
              name="email"
              type="email"
              onChange={inputChangeHandler}
              placeholder="E-mail"
              InputProps={{ className: styles.input }}  
              />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              fullWidth
              required
              name="text"
              onChange={inputChangeHandler}
              placeholder="Your message"
              multiline
              rows={4}
              className={styles.textArea}
              InputProps={{ className: styles.input }} 
            />
          </Grid>
        </Grid>
        <Button type="submit" className={styles.sendBtn}>Send</Button>
      </form>
      </Container>
    </Section>
  )
}