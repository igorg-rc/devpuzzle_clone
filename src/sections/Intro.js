import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-scroll'
import mainLogo from '../files/images/main_logo.png'
import { LinkButton } from '../components/UI/LinkButton'
import bg from '../files/images/bg_intro.jpg'
import { navLinks } from '../mocData/data'

const useStyles = makeStyles(theme => ({
  main: {
    background: `url(${bg}) center center/cover`,
    [theme.breakpoints.down('md')]: {
      height: '100vh'
    }
  },
  mainLogo: {
    paddingTop: '55px',
    width: '200px',
    [theme.breakpoints.down('sm')]: {
      width: '150px'
    }
  },
  mainLogoImg: {
    width: '100%'
  },
  content: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    padding: '18vh 0',
  },
  contentLeft: {

  },
  contentRight: {
    paddingTop: '12px',
    [theme.breakpoints.only('sm')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  navLinks: {
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: '60px',
    fontWeight: '500',
    color: '#fff',
    textAlign: 'right',
    listStyleType: 'none',
    [theme.breakpoints.down('md')]: {
      fontSize: '40px'
    }
  },
  navLinkItem: {
    marginBottom: '15px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '16.5px'
    }
  },
  navLink: {
    '&:hover': {
      color: theme.palette.primary.main,
      transition: '0.5s all',
      cursor: 'pointer'
    }
  },
  bannerTitle: {
    color: theme.palette.text.title,
    fontFamily: 'Bebas Neue,sans-serif',
    fontWeight: 400,
    fontSize: '120px',
    position: 'relative',
    marginBottom: '40px',
    textTransform: 'uppercase',
    '&::after': {
      position: 'absolute',
      bottom: '2px',
      left: '7px',
      content: "''",
      height: '11px',
      width: '130px',
      background: '#00c3ff'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '70px',
      '&::after': {
        width: '70px',
        height: '7px',
        bottom: '1px'
      }
    },
    
  },
  bannerText: {
    color: '#fff',
    fontSize: '1.6rem',
    maxWidth: '420px',
    marginBottom: '30px',
    lineHeight: '36px',
    paddingTop: '-10px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '350px',
      fontSize: '1.3rem',
      marginBottom: '15px',
    }    
  }

}))

export const Intro = () => {
  const styles = useStyles()

  const navList = <ul className={styles.navLinks}>
    { navLinks.map(item => (
      <li className={styles.navLinkItem} key={item.text}>
        <Link 
          className={styles.navLink}
          to={`${item.path}`}
          spy={true}
          smooth={true}
          offset={100}
          duration={750}
        >{item.text}
        </Link>
      </li>                      
    )) }
  </ul>

  return (
    <div className={styles.main} id="intro">
      <Container>
        <div className={styles.mainLogo}>
          <img src={mainLogo} alt="main_logo" className={styles.mainLogoImg} />
        </div>
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <h2 className={styles.bannerTitle}>Devpuzzle</h2>
            <p className={styles.bannerText}>We can help you piece together small parts that make the big picture</p>
            <LinkButton to="WhatWeDo" path="whatWeDo" label="What we do" />
          </div>
          <div className={styles.contentRight}>
            { navList }
          </div>
        </div>
      </Container>
    </div>
  )
}