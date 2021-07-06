import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: 'Rajdhani',
    color: theme.palette.text.title,
    fontWeight: '500',
    fontSize: '2.75rem',
    textAlign: 'center',
    marginBottom: '2vh'
  }
}))

export const SectionTitle = ({text}) => {
  const styles = useStyles()

  return <Typography 
          className={styles.title} 
          component="h4" 
          variant="h4">
          {text}
        </Typography>
}