let data = {
  items: [
    {
      id: 1,
      name: "Winter Jacket",
      category: "Men Accessories",
      price: 20,
      image: "/images/winter jacket.jpg"
    },
    {
      id: 2,
      name: "Wrist Watch",
      category: "Men Accessories",
      price: 30,
      image: "/images/wrist watch.jpg"
    },
    {
      id: 3,
      name: "Wrist Band",
      category: "Women Accessories",
      price: 5,
      image: "/images/wrist band.jpg"
    },
    {
      id: 4,
      name: "Hand bag",
      category: "Women Accessories",
      price: 20,
      image: "/images/hand bag.jpg"
    },
    {
      id: 5,
      name: "Shoes",
      category: "Children Accessories",
      price: 20,
      image: "/images/shoes.jpg"
    },
    {
      id: 6,
      name: "Kids Scraf",
      category: "Children Accessories",
      price: 10,
      image: "/images/child.jpg"
    },
    {
      id: 7,
      name: "Soccer Ball",
      category: "Sports Accessories",
      price: 20,
      image: "/images/sports.jpg"
    },
    {
      id: 8,
      name: "Base Ball",
      category: "Sports Accessories",
      price: 15,
      image: "/images/sports.jpg"
    }
  ],
  categories: [
    "Men Accessories",
    "Women Accessories",
    "Children Accessories",
    "Sports Accessories"
  ],
  totalCount: 0,
  cart: {
    products: []
  }
};
const todos = (state = data, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        totalCount: action.count,
        cart: {
          products: [
            ...state.cart.products,
            {
              name: action.data.name,
              price: action.data.price,
              image: action.data.image
            }
          ]
        }
      };
    default:
      return state;
  }
};

export default todos;
