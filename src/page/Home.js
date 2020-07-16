import React, { useState, useEffect } from "react";
import Slider from "../components/home/Slider";
import Books from "../components/home/Books";
import Section from "../components/home/Section";
import axios from "axios";
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";

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
      if (data !== null) {
        setListBooks(
          data.map((item) => ({
            title: item.title,
            image: item.image,
            description: item.description,
            price: item.price,
            author: item.author,
            categories: item.categories,
          }))
        );
      } else {
        console.log("");
      }
    });
  },[]);

  const b = ListBooks.filter((item, index) => index <= 2);

  return (
    <React.Fragment>
      <Slider />
      <div className="container pt-3">
        <div>
          <Books data={b}></Books>
        </div>
      </div>
      <Section1/>
      <Section2/>
      <div className="container pt-3">
        <Section />
      </div>
    </React.Fragment>
  );
}
export default Home;
