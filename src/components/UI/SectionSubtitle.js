import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  subTitle: {
    fontFamily: 'Rajdhani',
    fontWeight: '500',
    fontSize: '1.75rem',
    textAlign: 'center',
    marginBottom: '2vh'
  }
}))

export const SectionSubtitle = ({dark, text}) => {
  const styles = useStyles()

  return <Typography 
          className={styles.subTitle} 
          style={{ color: dark ? '#fff' : '#000' }}
          component="h4" 
          variant="h4">
          {text}
        </Typography>
}