import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-scroll'

const useStyles = makeStyles(theme => ({
  linkBtn: {
    color: '#fff',
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: '1rem',
    textDecoration: 'none',
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

export const LinkButton = ({ to, label, headerBtn }) => {
  const styles = useStyles()

  return (
    <div style={{ paddingTop: headerBtn ? '7vh' : 0 }} >
      <Link 
        className={styles.linkBtn}
        to={to}
        spy={true}
        smooth={true}
        duration={750}      
      >{label}
      </Link>
    </div>
  )
}