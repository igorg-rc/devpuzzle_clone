import { useState, useEffect } from "react"
import { Grid, Container, Typography, Paper } from "@material-ui/core"
import { SectionTitle } from "../components/UI/SectionTitle"
import { Section } from "../components/UI/Section"
import { getOurWorks } from "../api/api"
import classes from "./OurWorks.module.css" 


export const OurWorks = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchWorks = async () => {
      const fetchedWorks = await getOurWorks()
      setItems(fetchedWorks)
    }
    fetchWorks()
  }, [])

  console.log(items)

  const projectGrid = items.map(item => (
    <Grid item xs={12} md={6} lg={4} key={item.title}>
      <Paper className={classes.Holder}>
        <Typography variant="h4" className={classes.ProjectTitle}>{item.title}</Typography>
        <div className={classes.imgHolder}>
          <img src={item.imgUrl} alt={item.title} className={classes.Img} />
        </div>
        <div className={classes.Overlay}>
          <div className={classes.TextHolder}>
            <Typography className={classes.OverlayText} paragraph>{item.description}</Typography>
          </div>
        </div>
      </Paper>
    </Grid>    
  ))

  return (
    <Section id="OurWorks" dark>
      <Container>
        <SectionTitle text="Our Works" />
        <div className={classes.CardHolder}>
          <Grid container spacing={2}>
            { projectGrid }
          </Grid>
        </div>
      </Container>
    </Section>
  )
}