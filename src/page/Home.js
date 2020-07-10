import React from 'react';
import theme from '../components/home/TemaConfig';
import Slider from '../components/home/Slider';
import '../styles/footer.css'
import Container from '@material-ui/core/Container';
import Books from '../components/home/Books';
import Section from '../components/home/Section';
import axios from 'axios';

function Home() {
  const getUrl = "https://api.jsonbin.io/b/5f05ec24a62f9b4b276138c8";
  const token = "$2b$10$oZBLJEh/jk0pvfQ21bcGne3Hs2JmsQJAuBRuLMLJEIBDk5arYasJC";
  let axiosHeader = {
    header: { "secret-key": token }
  }
  const books = (e) => {
    e.preventDefault()
    axios.get(getUrl, axiosHeader)
      .then((rest) => { console.log(rest) });
  }
  return (
    // <ThemeProvider theme={theme}>
    //   <Container>
    
     <div className="container">
       <Slider/>
          <Books/>
          <p>{books}</p>
          <Section />
     </div>

          
        

    //   </Container>
    // </ThemeProvider>
  );
}
export default Home;






