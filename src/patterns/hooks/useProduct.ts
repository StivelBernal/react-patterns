import { useState } from "react"

export const useProduct = () => {
  const [count, setcount] = useState(0)
  
  const increaseBy = ( value: number) => {

    setcount( prev => Math.max(prev + value, 0))
  }

  return {
    count, 
    increaseBy
  }
}
