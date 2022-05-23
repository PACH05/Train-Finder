import React from "react";
import Header from "../Components/Header";
import TrainStatus from "../Components/TrainStatus";
import TrainBetweenStation from "../Components/TrainBetweenStation";
import SeatAvailability from "../Components/SeatAvailability";
import LiveStation from "../Components/LiveStation";
import PNRStatus from "../Components/PNRStatus";
import OrderFood from "../Components/OrderFood";
import Footer from "../Components/Footer";
import Buttons from "../Components/Buttons";
import styled from "styled-components";


function HomePage() {
  return (
    <div>
       <Wrapper>
       <Header name="Train Finder" />
      <Buttons />
       </Wrapper> 
      <TrainStatus />
      <TrainBetweenStation />
      <SeatAvailability />
      <LiveStation />
      <PNRStatus />
      <OrderFood />
      <Footer />
    </div>
  );
}

const Wrapper = styled.div`
display: flex;
background-color: rgb(70, 73, 248);
`; 

export default HomePage;

