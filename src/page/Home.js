import React, { useState, useEffect } from "react";
import theme from "../components/home/TemaConfig";
import Slider from "../components/home/Slider";
import "../styles/footer.css";
import Container from "@material-ui/core/Container";
import Books from "../components/home/Books";
import Section from "../components/home/Section";
import axios from "axios";

function Home() {
  const [ListBooks, setListBooks] = useState(
   [ {
      title: "",
      price: "",
    }]
  );
  useEffect( () => {
    const getUrl = "https://my-json-server.typicode.com/AdrianaMaguea/booki/db";
    const token = "$2b$10$oZBLJEh/jk0pvfQ21bcGne3Hs2JmsQJAuBRuLMLJEIBDk5arYasJC";
    let axiosHeader = {
      headers: { "secret-key": token }
    }
    axios.get(getUrl, axiosHeader)
    .then((res) => { 
      const data = res.data.books
      // console.log(data)
      if (data !== null) {
            setListBooks(
              data.map((item) => ({
              
                title: item.title,
                price: item.price,
                image: item.image,
                description : item.description,
                price: item.price,
                author: item.author,
                categories: item.categories
              }))
            );
            // console.log(ListBooks);
          }else {
            console.log("");
          }  
    });
  })
   



  // const getBooks = async () => {
  //   try {
  //     let url = "https://api.jsonbin.io/b/5f05ec24a62f9b4b276138c8";
  //     const response = await axios.get(url, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "secret-key":
  //           "$2b$10$oZBLJEh/jk0pvfQ21bcGne3Hs2JmsQJAuBRuLMLJEIBDk5arYasJC",
  //       },
  //     });
  //     return response.data;
  //   } catch (err) {
  //     return { responseStatus: false, err };
  //   }
  // };
  

  // const getpropsBooks = async () => {
  //   const response = await getBooks();
  //   console.log(response)
  //   if (response !== null) {
  //     setListBooks(
  //       response.books.map((item) => ({
  //         title: item.title,
  //         price: item.price,
  //       }))
  //     );
  //     console.log(ListBooks);
  //   }else {
  //     console.log("");
  //   }  
  // };

  // const books = (e) => {
  //   e.preventDefault();
  //   getpropsBooks();
  //   console.log(ListBooks);
  // };
  // console.log(ListBooks);

const b = ListBooks

  return (
    // <ThemeProvider theme={theme}>
    //   <Container>
    

   
    <div className="container">
      {/* <button type="button" onClick={books}></button> */}
      <Slider />
      <div>
      {b.map((book) =>{
        return( 
        <Books
        title={book.title}
        image={book.image}
        description={book.description}
        price ={book.price}>
        </Books>
     )}
      )}
      </div>      
      <Section />
    </div>
    //   </Container>
    // </ThemeProvider>
  );
}
export default Home;
