import React, { Component } from "react";
import Items from "./Items";
import { connect } from "react-redux";

class BodyList extends Component {
  render() {
    return (
      <div>
        {this.props.bodyList.categories.map(data => {
          let result = this.props.bodyList.items.filter(d => {
            return d.category === data;
          });
          return (
            <div key={Math.floor(Math.random() * 100) + 2}>
              <h2 id={`${result[0].category}`} style={{ textAlign: "center" }}>
                {result[0].category}
              </h2>
              <Items style={{ display: "inline" }} data={result} />
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bodyList: state
  };
}

export default connect(mapStateToProps)(BodyList);
