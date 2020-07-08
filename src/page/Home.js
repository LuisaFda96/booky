import React from 'react';
import { Button, ThemeProvider, Typography, IconButton } from '@material-ui/core'
import theme from '../components/home/TemaConfig';
import Slider from '../components/home/Slider';
import '../styles/footer.css'
import { red, blue, lightBlue, pink } from '@material-ui/core/colors'
import Container from '@material-ui/core/Container';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';
import book from '../components/img/book.png';
import gift from '../components/img/gift.png';
import delivery from '../components/img/delivery.png';
import shoppingCart from '../components/img/shoppingCart.png';
import iconBook from '../components/img/iconBook.png';
import refresh from '../components/img/refresh.png';
import Books from '../components/home/Books';
import ButtonBase from '@material-ui/core/ButtonBase';




function Home() {

  return (

    <ThemeProvider theme={theme}>
      <Container>

        <div className="Home">
          <Slider />
        </div>

        <div>
          <Books />
        </div>


        <div className="section">
          <h1>Nuestros servicios</h1>
          <p>
            Compartimos miles de libros con otros al revisarlos. Nuestro objetivo es poner los libros en manos de los lectores de todo el mundo. Disfrute de la posible experiencia de compra de libros con nuestra confiable librería.
          </p>
          <span >
            <img src={gift} className="icons" />

          </span>
          <span>
            <img src={delivery} className="icons" />
          </span>

          <span>
            <img src={shoppingCart} className="icons" />
          </span>
          <span>
            <img src={iconBook} className="icons" />
          </span>



          <img src={refresh} className="icons" />
        </div>

      </Container>
      <div>
        <footer className="footer is-primary">
          <div className="container">
            <div className="columns">
              <div className="column">
                <img src={book} className="image" />
                <p>Tienda de libros booky</p>
              </div>
              <div>

                <IconButton>
                  <PinterestIcon style={{ color: red[700] }} />
                </IconButton>

                <IconButton>
                  <TwitterIcon style={{ color: lightBlue[500] }} />
                </IconButton>

                <IconButton>
                  <InstagramIcon style={{ color: pink[500] }} />
                </IconButton>
                <IconButton>
                  <FacebookIcon style={{ color: blue[500] }} />
                </IconButton>

                <IconButton>
                  <YouTubeIcon style={{ color: red[900] }} />
                </IconButton>

                <p>&copy; 2020 Proyecto hecho en React <p class="fab fa-react" style={{ color: lightBlue[500] }} /> para el bootcamp de Pioneras&amp;Globant.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>

  );
}
export default Home;






