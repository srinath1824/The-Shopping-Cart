import React, { Component } from "react";
import { Image, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addToCart } from "../../actions/index";
import "./Item.css";

class Items extends Component {
  handleClick(item) {
    let countNumber = this.props.count;
    this.props.addToCart(item, countNumber + 1);
  }
  render() {
    return (
      <div>
        {this.props.data.map(item => {
          return (
            <div
              key={Math.floor(Math.random() * 100) + 1}
              style={{ display: "inline-block" }}
            >
              <Image className="img" src={item.image} />
              <h6>{item.name}</h6>
              <h6>usd. {item.price}</h6>
              <Button onClick={() => this.handleClick(item)} bsstyle="primary">
                Add to Cart
              </Button>
              <br />
              <br />
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    count: state.totalCount
  };
}
const mapDispatchToProps = dispatch => ({
  addToCart: (data, count) => dispatch(addToCart(data, count))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);
