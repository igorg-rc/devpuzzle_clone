import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  main: {
    padding: '12vh 0',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      padding: '8vh 0'
    }
  }
}))

export const Section = ({ children, dark, id }) => {
  const styles = useStyles()

  return (
    <div 
      id={id}
      className={styles.main}
      style={{ background: dark ? '#212121' : "#fff" }}
    >
      {children}
    </div>
  )
}