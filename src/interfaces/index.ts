interface IProduct {
  id?: number,
  name: string,
  amount: string,
  orderId?: number | null
}

interface IUser {
  id?: number,
  username: string,
  classe?: string,
  level?: number,
  password?: string 
}

export {
  IProduct,
  IUser,
};
