import { ProductCard, ProductTitle } from '../components/ProductCard'
import { Product } from '../interfaces/interfaces'
import '../styles/custom-styles.css'

const products: Product[] = [
  {
    id: 1,
    title: 'Product 1',
    img: './coffee-mug.png'
  },
  {
    id: 2,
    title: 'Product 2',
  },
  {
    id: 3,
    title: 'Product 3',
  }
]

export const ShoppingPage = () => {
  return (
    <div >
      <h1>Shopping store</h1>
      <hr />
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        { products.map((x: Product, index: number) => 
          <ProductCard className='bg-dark' key={index} product={x} >
              <ProductCard.Image />
              <ProductTitle title={'Test'} className='text-white'/>
              <ProductCard.Buttons />
          </ProductCard>
        )}
      </div>
      
    </div>
  )
}
