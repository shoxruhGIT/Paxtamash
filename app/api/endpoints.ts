export const endpoints = {
  root: {
    products: "/products",
    home: "/home",
    productById: (id: number) => `/products/${id}`,
    staffs: "/staffs",
    contact: "/contact/",
  },
};
