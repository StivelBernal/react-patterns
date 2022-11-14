import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import { useProduct } from '../hooks/useProduct'
import { createContext, useContext } from 'react'
import { Product, ProductContextProps } from '../interfaces/interfaces'

const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext
interface Props {
  product : Product,
  className ?: string,
  style ?: React.CSSProperties,
  children ?: JSX.Element[] | React.ReactElement,
}

export const ProductImage = () => {
  const { product } = useContext( ProductContext )

  return (
    <img className={ styles.productImg } src={ product.img ? product.img : noImage } alt={product.title} />
  )
}

export const ProductTitle = ({title, className}: { title: string, className ?: string}) => {

  const { product } = useContext( ProductContext )

  return (
    <span className={ styles.productDescription + ' '+ className } >{title ? title : product.title}</span>
  )
}

export const ProductButtons = () => {

  const { count, increaseBy } = useContext( ProductContext )

  return (
    <div className={ styles.buttonsContainer}>
      <button className={ styles.buttonMinus } onClick={() => increaseBy(-1)}>-</button>

      <div className={styles.countLabel}>{count}</div>

      <button className={ styles.buttonAdd } onClick={() => increaseBy(1)}>+</button>
    </div>
  )
}

export const ProductCard = ({product, children, className, style}: Props) => {

  const {count, increaseBy} = useProduct()

  return (
    <Provider value={{
      count, increaseBy, product
    }}>
      <div style={style} className={ className + ' ' + styles.productCard }>
          {children}

        {/* <ProductImage img={product.img} title={product.title} />
        <ProductTitle title={product.title} /> */}
      </div>
    </Provider>
  )
}

ProductCard.Title = ProductTitle
ProductCard.Image = ProductImage
ProductCard.Buttons = ProductButtons
