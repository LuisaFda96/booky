import React, { useState, useEffect } from "react";
// import theme from '../components/home/TemaConfig';
import Slider from "../components/home/Slider";
// import '../styles/footer.scss'
// import Container from '@material-ui/core/Container';
import Books from "../components/home/Books";
import Section from "../components/home/Section";
import axios from "axios";
import Section1 from "../components/home/Section1";

function Home() {
  const [ListBooks, setListBooks] = useState([
    {
      title: "",
      price: "",
    },
  ]);
  useEffect(() => {
    const getUrl = "https://my-json-server.typicode.com/AdrianaMaguea/booki/db";
    const token =
      "$2b$10$oZBLJEh/jk0pvfQ21bcGne3Hs2JmsQJAuBRuLMLJEIBDk5arYasJC";
    let axiosHeader = {
      headers: { "secret-key": token },
    };
    axios.get(getUrl, axiosHeader).then((res) => {
      const data = res.data.books;
      // console.log(data)
      if (data !== null) {
        setListBooks(
          data.map((item) => ({
            title: item.title,
            price: item.price,
            image: item.image,
            description: item.description,
            price: item.price,
            author: item.author,
            categories: item.categories,
          }))
        );
        // console.log(ListBooks);
      } else {
        console.log("");
      }
    });
  });

  const b = ListBooks.filter((item,index)=>
    index<=2
  );

  return (
    <div className="container pt-3">
      <Slider />
      <div>
        {/* {b.map((book) => {
          return ( */}
            <Books
            data = {b}
              >             
            </Books>
            <Section1 />
          {/* );
        })} */}
      </div>
      <Section />
    </div>
  );
}
export default Home;
