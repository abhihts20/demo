import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import Loader from 'react-loader-spinner';

const RingLoader = () => {
  const loader = useSelector((state)=>state.loader)
  return (
    loader&&(<div class="overlay">
      <div class="overlay__inner">
        <div class="overlay__content">
          <span class="spinner">
            <Loader type="Rings" color="#000000" height={100} width={100} />
          </span>
        </div>
      </div>
    </div>)
  );
};



export default RingLoader