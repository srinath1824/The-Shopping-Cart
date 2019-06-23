import React, { Component } from "react";
import { Nav, Navbar, Badge, Button, Modal, Col, Image } from "react-bootstrap";
import { connect } from "react-redux";

class Header extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      checkout: false,
      show: false,
      totalPrices: [],
      total: 0
    };
  }
  handleCheckout() {
    this.setState({ checkout: true });
    this.handleClose();
  }

  handleCloseCheckout() {
    this.setState({ checkout: false });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.calculateTotalAmount();
    this.setState({ show: true });
  }

  calculateTotalAmount() {
    let totalPrices = this.props.cart.map(item => {
      return item.price;
    });
    let totalAmount = totalPrices.reduce(function(a, b) {
      return a + b;
    }, 0);
    this.setState({ total: totalAmount });
  }

  render() {
    return (
      <div>
        <Navbar
          style={{ position: "fixed", top: 0, width: "100%", zIndex: 1 }}
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Navbar.Brand href="/">The Shopping Cart</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/About">About us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2}>
                <Button variant="primary" onClick={() => this.handleShow()}>
                  Cart
                </Button>
                <Badge variant="light">{this.props.count}</Badge>
                <span className="sr-only">unread messages</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Modal show={this.state.checkout} onHide={() => this.handleClose()}>
          <Modal.Title>Thank You, Visit Again</Modal.Title>
          <Modal.Header />
          <Modal.Body>
            <h3>
              Invoice Number:{" "}
              {"IN" + Math.floor(Math.random() * Math.pow(10, 13))}
            </h3>
            {this.props.cart.map(element => {
              return (
                <Col key={Math.floor(Math.random() * 100) + 3} xs={6}>
                  <h6>Product: {element.name}</h6>
                  <h6>Price: {element.price}</h6>
                </Col>
              );
            })}
          </Modal.Body>
          <Modal.Footer>
            <h4>
              total $:
              {this.state.total}
            </h4>
            <Button onClick={() => this.handleCloseCheckout()}>CANCEL</Button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.show} onHide={() => this.handleClose()}>
          <Modal.Title>Thank You!</Modal.Title>
          <Modal.Header closeButton />
          <Modal.Body>
            <h6>Your Order has been saved</h6>
            {this.props.cart.map(element => {
              return (
                <Col key={Math.floor(Math.random() * 100) + 4} xs={6}>
                  <Image className="img" src={element.image} />
                  <h6>Product: {element.name}</h6>
                  <h6>Price: {element.price}</h6>
                </Col>
              );
            })}
          </Modal.Body>
          <Modal.Footer>
            <h4>
              total $:
              {this.state.total}
            </h4>
            <Button onClick={() => this.handleCheckout()}>
              PROCEED TO CHECKOUT
            </Button>
            <Button onClick={() => this.handleClose()}>CANCEL</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.totalCount,
    cart: state.cart.products
  };
}

export default connect(mapStateToProps)(Header);
