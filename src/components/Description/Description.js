import React, { useState } from "react";
import Image from "./Image";
import Info from "./Info";
import "../../styles/Description.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Description = (book) => {
  const state = book.location.state[0].data
  console.log(state);
  const [count, setCount] = useState(1);

  const handleClickLess = () => {
    if (count > 0) {
      return setCount(count - 1);
    }
  };

  const handleClickMore = () => {
    setCount(count + 1);
  };

  const onclick = () => {};
  return (
    <div className="container-fluid mb-4 contenedor">
      <Image src={state.image}></Image>
      <div className="col-md-11 col-lg-6">
        <Info
          price={state.price}
          description={state.description}
          title={state.title}
        ></Info>
        <section className="d-flex ml-4   ">
          <div className="d-flex">
            <p className="col-4 mr-3 align-self-center">{count}</p>
            <div className="d-flex flex-column">
              <button
                onClick={handleClickMore}
                className="col-6 boton border-bottom d-flex justify-content-center align-items-center "
              >
                <FontAwesomeIcon icon={faSortUp} className="text-light">
             
                </FontAwesomeIcon>
              </button>
              <button
                onClick={handleClickLess}
                className="col-6 boton d-flex justify-content-center align-items-center "
              >
                <FontAwesomeIcon icon={faCaretDown} className="text-light">
                </FontAwesomeIcon>
              </button>
            </div>
          </div>
          <Link
            className="button col-4 text-light p-3 d-flex justify-content-center"
            to={{
              pathname: "/Shop",
              state: [{ otros: state }, { count: count }],
            }}
          >
            <button className="button text-light " onClick={onclick}>
              Add to cart
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Description;
