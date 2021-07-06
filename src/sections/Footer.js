import { Section } from "../components/UI/Section"
import { navLinks } from '../mocData/data'
import mainLogo from '../files/images/main_logo.png'
import upworkLogo from '../files/images/upwork_logo.png'
import footerMap from '../files/images/footer_map.png'
import { makeStyles } from '@material-ui/styles'
import { Container } from '@material-ui/core'
import { Link } from 'react-scroll'

const useStyles = makeStyles(theme => ({
  linksHolder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '4vh',
    marginTop: '-4vh',
    [theme.breakpoints.down('sm')]:{
      flexDirection: 'column',
    }
  },
  imgLink: {
    width: 115,
    height: 30,
    '&:hover': {
      cursor: 'pointer'
    },
    [theme.breakpoints.down('sm')]:{
      marginBottom: 10
    }
  },
  linkImage: {
    width: '100%'
  },
  navLink: {
    color: theme.palette.text.light,
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: 18,
    '&:hover': {
      color: theme.palette.text.title,
      cursor: 'pointer',
      transition: '0.5s all'
    }
  },
  navList: {
    color: '#fff'
  },
  mapHolder: {
    width: '85%',
    margin: '0 auto',
    paddingTop: '2vh',
    [theme.breakpoints.down('sm')]:{
      width: '100%'
    }
  },
  mapImg: {
    width: '100%'
  }
}))


export const Footer = () => {
  const styles = useStyles()

  const navLinksList = navLinks.map(item =>  (
    <Link
      key={item.path}
      to={item.path}
      spy={true}
      smooth={true}
      duration={750}
      className={styles.navLink}
    >
      {item.text}
    </Link>
  )) 

  return (
      <Section id="footer" dark>
        <Container>
          <div className={styles.linksHolder}>
            <div className={styles.imgLink}>
              <Link
                to="intro"
                spy={true}
                smooth={true}
                duration={750}
              >
                <img src={mainLogo} alt="logo-img" className={styles.linkImage} />
              </Link>
            </div>

            { navLinksList }

            <div className={styles.imgLink}>
              <a href="https://www.upwork.com/o/companies/~0102c65865e8a20d03" target="_blank" rel="noopener noreferrer">
                <img src={upworkLogo} alt="logo-img" className={styles.linkImage} />
              </a>
            </div>
          </div>
          <div className={styles.mapHolder}>
            <img src={footerMap} className={styles.mapImg} alt="map" />
          </div>
        </Container>
      </Section>
  )
}