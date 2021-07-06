import { useState, useEffect } from 'react'

import { Carousel } from 'react-responsive-carousel'
import { Section } from "../components/UI/Section"
import { SectionTitle } from "../components/UI/SectionTitle"
import { makeStyles } from "@material-ui/styles"
import { Container, Typography, Grid } from '@material-ui/core'
import { getTestimonials } from '../api/api'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const useStyles = makeStyles(theme => ({
  paper: {
    background: '#212121',
    margin: '0 auto',
    height: 300,
    width: 'auto'
  },
  titleHolder: {
    paddingBottom: '3vh'
  },
  personName: {
    paddingTop: '3vh',
    color: theme.palette.text.primary,
    fontSize: 20,
    fontFamily: 'Oxygen, sans-serif'
  },
  personPosition: {
    color: theme.palette.text.disabled,
    paddingTop: '1vh'
  },
  personCompany: {
    color: theme.palette.primary.main,
    fontSize: 30,
    paddingTop: '1vh',
    fontFamily: 'Rajdhani, sans-serif'
  },
  text: {
    color: theme.palette.text.disabled,
    fontStyle: 'Italic',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: '30px',
    margin: '0 20px',
    [theme.breakpoints.down('sm')]:{
      textAlign: 'justify',
      margin: '0 40px'
    }
  }
}))


export const Testimonials = () => {
  const styles = useStyles()
  
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchTestimonials = async () => {
      setLoading(true)
      const fetchedItems = await getTestimonials()
      setItems(fetchedItems)
      setLoading(false)
    }
    fetchTestimonials()
  }, [])

  const testimonailsList = items.map(item => (
    <div className={styles.div} key={item.name}>
      <Typography className={styles.personName} variant="h6" component="h6">{item.name}</Typography>
      <Typography className={styles.personPosition} paragraph>{item.position}</Typography>
      <Typography className={styles.personCompany} paragraph>{item.company}</Typography>
      <Typography className={styles.text} paragraph>{item.text}</Typography>
    </div>
  ))

  return loading 
  ? 
  <>
    <Section id="Testimonials">
      <SectionTitle text="Testimonials" />
      <div>Loading...</div>
    </Section>
  </>
  :
  <>
    <Section id="Testimonials">
      <Container>
      <div className={styles.titleHolder}>
        <SectionTitle text="Testimonials" />
      </div>
      <Grid container>
        <Grid item xs={12}>
          <Carousel 
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
          >
            {testimonailsList}
          </Carousel>
        </Grid>
      </Grid>
      </Container>
    </Section>
  </>
}