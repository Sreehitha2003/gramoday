import React from 'react';
import './products.css';

const Products = () => {
  return (
    <>
    <div class="product">
      <div class="image">
        <img height="95" width="95" src="https://gramoday-images-public.s3.ap-south-1.amazonaws.com/commodity/605d761693c86f0017bfddfa" alt=""/>
      </div>
    <div class="data">
      <h5 class="name">Potato Mandi Rates</h5>
      <p class="place">Yeshwanthapura Mandi, Bangalore, KA</p>
      <p class="date">15/06/2022</p>
      <p class="weight">₹ 20 - 21 / 1 Kg</p>
      <div class="time">Updated at 10:36 AM</div>
      </div>
      </div>
      <div class="product">
      <div class="image">
        <img height="95" width="95" src="https://4.imimg.com/data4/NQ/LD/MY-28363414/red-onion-500x500.png" alt=""/>
      </div>
    <div class="data">
      <h5 class="name">Onion Mandi Rates</h5>
      <p class="place">Yeshwanthapura Mandi, Bangalore, KA</p>
      <p class="date">15/06/2022</p>
      <p class="weight">₹ 10 - 22 / 1 Kg</p>
      <div class="time">Updated at 10:37 AM</div>
      </div>
      </div>
      <div class="product">
      <div class="image">
        <img height="95" width="95" src="https://3.imimg.com/data3/PJ/XX/GLADMIN-42518/garlic-250x250.jpg" alt=""/>
      </div>
    <div class="data">
      <h5 class="name">Garlic Mandi Rates</h5>
      <p class="place">Yeshwanthapura Mandi, Bangalore, KA</p>
      <p class="date">15/06/2022</p>
      <p class="weight">₹ 10 - 45 / 1 Kg</p>
      <div class="time">Updated at 10:35 AM</div>
      </div>
      </div>
    </>
  );
};

export default Products;