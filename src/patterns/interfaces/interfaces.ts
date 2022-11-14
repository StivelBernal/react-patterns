export interface ProductContextProps {
  product : Product,
  count : number,
  increaseBy : (value: number) => void,
}

export interface Product {
  id : number,
  title : string,
  img ?: string,
}