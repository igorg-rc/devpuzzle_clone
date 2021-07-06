import { useState, useEffect } from 'react'
import { Grid, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Section } from "../components/UI/Section"
import { SectionTitle } from '../components/UI/SectionTitle'
import { SectionSubtitle } from "../components/UI/SectionSubtitle"
import { getTechnologies } from '../api/api'

const useStyles = makeStyles(theme => ({
  gridHolder: {
    paddingTop: '5vh',
    [theme.breakpoints.down('md')]: {
      paddingTop: '10vh'
    }
  },
  imgIcon: {
    width: 81,
    height: 81,
    marginBottom: 15
  },
  techTitle: {
    marginBottom: 35,
    fontSize: 26
  },
  techList: {
    listStyle: 'revert',
    marginLeft: '40%',
    listStyleType: 'circle',
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    maxWidth: 250,
    [theme.breakpoints.down('sm')]: {
      marginLeft: '45%'
    }
  },
  techItem: {
    fontFamily: 'Oxygen, sans-serif',
    fontWeight: 500,
    fontSize: 15,
    textAlign: 'left',
    color: theme.palette.text.primary,
  }
}))


export const WhatWeDo = () => {
  const styles = useStyles()

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getItems = async () => {
      setLoading(true)
      const fetchedItems = await getTechnologies()
      setItems(fetchedItems)
      setLoading(false)
    }
    getItems()
  }, [])

  console.log(items)

  const techGrid = items.map(item => (
    <Grid item xs={12} md={3} key={item._id}>
      <img className={styles.imgIcon} src={item.imgUrl} alt={item.title} />
      <Typography className={styles.techTitle} variant="h5" component="h5">{item.title}</Typography>
      <ul className={styles.techList}>
        {(item.items).split(',').map(technology => (
          <li key={technology} className={styles.techListItem}>
            <Typography paragraph className={styles.techItem}>{technology}</Typography>
          </li>
        ))}
      </ul>
    </Grid>
  ))

  return loading
  ?
  <>
    <Section id="WhatWeDo">
      <SectionTitle text="What we do?" />
      <div>Loading...</div>
    </Section>
  </>
  :
  <>
    <Section id="WhatWeDo">
      <SectionTitle text="What we do?" />
      <SectionSubtitle text="Full web development cycle" />
      <Container>
        <div className={styles.gridHolder}>
          <Grid container spacing={5} >
            { techGrid }
          </Grid>
        </div>
      </Container>
    </Section>
  </>
}