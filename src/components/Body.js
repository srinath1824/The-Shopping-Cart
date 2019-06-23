import React, { Component } from "react";
import BodyItem from "./BodyItem/BodyItem";
import SlideCarousel from "./SlideCarousel";
import BodyList from "./BodyItem/BodyList";

class Body extends Component {
  render() {
    return (
      <div>
        <SlideCarousel />
        <BodyItem />
        <BodyList />
      </div>
    );
  }
}

export default Body;
