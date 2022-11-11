import React from "react";
import styled from "styled-components";
import Featured from "../Components/featured/Featured";
import FeaturedProperties from "../Components/featuredProperties/FeaturedProperties";
import Footer from "../Components/footer/Footer";
import Header from "../Components/header/Header";
import MailList from "../Components/mailList/MailList";
import Navbar from "../Components/navbar/Navbar";
import PropertyList from "../Components/propertyList/PropertyList";

const HomePage = () => {
  return (
    <Wrapper>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.section`
  .homeContainer {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .homeTitle {
    width: 1024px;
    font-size: 20px;
  }
`;
