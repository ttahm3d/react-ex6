import faker from "faker";
faker.seed(123);

const data = [...Array(50)].map((item) => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  image: faker.random.image(),
  price: faker.commerce.price(),
  material: faker.commerce.productMaterial(),
  brand: faker.lorem.word(),
  inStock: faker.random.boolean(),
  fastDelivery: faker.random.boolean(),
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  offer: faker.random.arrayElement([
    "Save 50",
    "70% bonanza",
    "Republic Day Sale"
  ]),
  idealFor: faker.random.arrayElement([
    "Men",
    "Women",
    "Girl",
    "Boy",
    "Senior"
  ]),
  level: faker.random.arrayElement([
    "beginner",
    "amateur",
    "intermediate",
    "advanced",
    "professional"
  ]),
  color: faker.commerce.color()
}));

const productsReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_ALL_PRODUCTS":
      return {
        ...state,
        products: data
      };
    case "SORT_LOW_TO_HIGH":
      return {
        ...state,
        sortBy: action.payload,
        products: data.sort(
          (productA, productB) =>
            Number(productA.price) - Number(productB.price)
        )
      };
    case "SORT_HIGH_TO_LOW":
      return {
        ...state,
        sortBy: action.payload,
        products: data.sort(
          (productA, productB) =>
            Number(productB.price) - Number(productA.price)
        )
      };
    default:
      return state;
  }
};

export { productsReducer };
