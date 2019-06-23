import React, { Component } from "react";
import "./BodyItem.css";

export default class BodyItem extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="column1">
            <h2 className="text">Men Accessories</h2>
            <a href="#Men Accessories">
              <img
                className="imgStyle"
                src="/images/men.jpg"
                alt="Men Accessories"
              />
            </a>
          </div>
          <div className="column2">
            <h2 className="text">Women Accessories</h2>
            <a href="#Women Accessories">
              <img
                className="imgStyle"
                src="/images/women.jpg"
                alt="Women Accessories"
              />
            </a>
          </div>
          <div className="column1">
            <h2 className="text">Child Accessories</h2>
            <a href="#Children Accessories">
              <img
                className="imgStyle"
                src="/images/child.jpg"
                alt="Child Accessories"
              />
            </a>
          </div>
          <div className="column2">
            <h2 className="text">Sports Accessories</h2>
            <a href="#Sports Accessories">
              <img
                className="imgStyle"
                src="/images/sports.jpg"
                alt="Sports Accessories"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
