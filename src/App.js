import { useState } from "react";
import Shopping from "./shopping";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  carousel_1,
  carousel_2,
  carousel_3,
  apple_red_airpods,
  apple_airpods,
  apple_watch,
  HP_laptop,
  HP_Pavilion_Gaming_Laptop,
  iphone,
  iPhone_X,
  OnePlus_Nord,
  Mac,
} from "./images";
// import Image from "./images/Carousel/4k-laptop-yn553k4gdhpc4hlh.jpg";
// import Image_1 from "./images/Carousel/iphone-wallpaper-3554x1999.jpg";
// import Image_2 from "./images/Carousel/laptop_ultra_4k_hd_desktop_background-1920x1080.jpg";

export default function App() {
  let itemData = [
    {
      id: "1",
      product_name: "Apple Airpods - Red",
      currency: "₹",
      product_price: 8999,
      product_description: "Airpods",
      rating: 4,
      img: apple_red_airpods,
    },
    {
      id: "2",
      product_name: "Airpods - White",
      currency: "₹",
      product_price: 4579,
      product_description: "Airpods",
      rating: 5,
      img: apple_airpods,
    },
    {
      id: "3",
      product_name: "Apple Watch - Black",
      currency: "₹",
      product_price: 11444,
      product_description: "Watch",
      rating: 3,
      img: apple_watch,
    },
    {
      id: "4",
      product_name: "HP Monitor",
      currency: "₹",
      product_price: 12500,
      product_description: "Monitor",
      rating: 2,
      img: HP_laptop,
    },
    {
      id: "5",
      product_name: "HP Pavilion Gaming Laptop",
      currency: "₹",
      product_price: 15799,
      product_description: "Laptop",
      rating: 4,
      img: HP_Pavilion_Gaming_Laptop,
    },
    {
      id: "6",
      product_name: "iPhone",
      currency: "₹",
      product_price: 88000,
      product_description: "Mobile Phone",
      rating: 4,
      img: iphone,
    },
    {
      id: "7",
      product_name: "iPhone - X",
      currency: "₹",
      product_price: 66000,
      product_description: "Mobile Phone",
      rating: 5,
      img: iPhone_X,
    },
    {
      id: "8",
      product_name: "OnePlus - Nord",
      currency: "₹",
      product_price: 25000,
      product_description: "Mobile Phone",
      rating: 5,
      img: OnePlus_Nord,
    },
    {
      id: "9",
      product_name: "MacBook Air",
      currency: "₹",
      product_price: 111000,
      product_description: "Laptop",
      rating: 5,
      img: Mac,
    },
  ];
  let [items, setItems] = useState([]);
  let [total, setTotal] = useState(0);
  let addItem = (obj) => {
    setItems([...items, obj]);
    setTotal(total + obj.product_price);
  };

  let removeItem = (index) => {
    const newItems = [...items];
    setTotal(total - newItems[index].product_price);
    newItems.splice(index, 1);

    setItems(newItems);
  };

  // let removeItem = (item) => {
  //   let newSet = items.filter((obj) => obj.id !== item.id);
  //   setItems(newSet);
  //   setTotal(total - item.product_price);
  // };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Start Shopping
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample07"
            aria-controls="navbarsExample07"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="my-4">Your cart</h1>
            {items.map((obj, index) => {
              return (
                <>
                  <div className="list-group">
                    <div className="list-group-item">
                      <span>{obj.product_name} </span>
                      <span
                        style={{ color: "red" }}
                      >{`₹ ${obj.product_price}`}</span>
                      <button
                        type="button"
                        className="btn-close pe-3"
                        aria-label="Close"
                        onClick={() => {
                          removeItem(index);
                        }}
                      ></button>
                    </div>
                  </div>
                </>
              );
            })}
            <h3 className=" pt-2" style={{ color: "blue" }}>
              Total - {`₹ ${total}`}
            </h3>
          </div>

          <div className="col-lg-9">
            <div
              id="carouselExampleIndicators"
              class="carousel slide pt-lg-4 pb-lg-4 "
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={carousel_1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={carousel_2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={carousel_3} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4">
              {itemData.map((obj) => {
                return <Shopping data={obj} addItem={addItem}></Shopping>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
