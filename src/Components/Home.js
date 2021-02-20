import React from "react";
import "../Styles/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/29/digital/video/gateway/placement/launch/ElInternadoS1/ELINT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_3000X1200_PV_it-IT._CB660537292_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses (English Edition) Formato Kindle"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="14"
            title="Dog Seats Cover"
            price={20.29}
            image="https://images-na.ssl-images-amazon.com/images/I/51yIkEag%2BRL._AC_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="15"
            title="Cat Tree"
            price={32.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91uOGK5bQ5L._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="15"
            title="Dog bed, worming, 61 cm"
            price={32.73}
            image="https://images-na.ssl-images-amazon.com/images/I/61ZQCeXeWbL._AC_SL1200_.jpg"
            rating={4}
          />
          <Product
            id="15"
            title="UMI. Essential, Imbracatura Classica Regolabile per Cani, Taglia M, Colore Viola Tinta Unita, per Uso Quotidiano"
            price={18.69}
            image="https://images-na.ssl-images-amazon.com/images/I/51qJ%2BQBPTQL._AC_SL1000_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="15"
            title="Eono by Amazon Tripla Fodera Copridivano per Cani e Gatti 3 Posti Antiscivolo Antimacchia Grande Copertura Protezione Divano"
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51n5KNneiXL._AC_SL1000_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
