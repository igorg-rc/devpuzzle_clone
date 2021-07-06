import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import { Intro } from "./sections/Intro"
import { WhatWeDo } from "./sections/WhatWeDo"
import { GetInTouch } from "./sections/GetInTouch"
import { Testimonials } from "./sections/Testimonials"
import { OurWorks } from "./sections/OurWorks"
import { Contacts } from "./sections/Contacts"
import { Footer } from "./sections/Footer"

const siteTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#00C3FF'
    },
    secondary: {
      main: '#A8A8A8'
    },
    text: {
      primary: '#000',
      title: '#00C3FF',
      disabled: '#848484',
      error: '#ff0000',
      light: '#fff'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={siteTheme}>
      <Intro />
      <WhatWeDo />
      <GetInTouch />
      <Testimonials />
      <OurWorks />
      <Contacts /> 
      <Footer />
    </ThemeProvider>

      
  );
}

export default App;
