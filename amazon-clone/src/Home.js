import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="Home">
      <div className="home__container">
        <img
          className="Home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-D-5ff78a97-f4d3-4242-9344-c1f478aff592._CB428091778_QL85_V1_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="Deception Point"
            id='1'
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61mBMZeyLjL.jpg"
            rating="****"
          ></Product>
          <Product
            title="Apple Watch Series6"
            price={499}
            id='2'
            image="https://www.apple.com/content/dam/newsroom/images/product/watch/standard/Apple_delivers-apple-watch-series-6_09152020_big.jpg/_jcr_content/renditions/large.jpg"
            rating="*****"
          ></Product>
          <Product
            title="Samsung Watch"
            id='3'
            price={499}
            image="https://m.media-amazon.com/images/I/51G8gR4wGFL.jpg"
            rating="*****"
          ></Product>
        </div>
        <div className="home__row">
          <Product
            title="Amazon Echo"
            id='4'
            price={300}
            image="https://cdn.vox-cdn.com/thumbor/8xiKPwd_p50lmJzdhV8_2Pbq5gA=/0x0:792x528/1200x800/filters:focal(333x201:459x327)/cdn.vox-cdn.com/uploads/chorus_image/image/65322102/amazonlineup.0.jpg"
            rating="*****"
          ></Product>
          <Product
            title="Tesla Model S"
            price={(79, 900)}
            id='5'
            image="https://image.cnbcfm.com/api/v1/image/104836103-p100d-review.JPG?v=1510586447"
            rating="*****"
          ></Product>
        </div>
        <div className="home_row">
          <Product
            title="Samsung Fold 2"
            price={1500}
            id='6'
            image="https://cdn.pocket-lint.com/r/s/1200x/assets/images/151987-phones-news-151987-samsung-galaxy-fold-2-leaks-suggest-151987-cameras-and-lower-pricing-image1-pxxfhispgb.jpg"
            rating="*****"
          ></Product>
        </div>
      </div>
    </div>
  );
}

export default Home;
