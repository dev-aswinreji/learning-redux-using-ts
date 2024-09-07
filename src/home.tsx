import { useDispatch, useSelector } from "react-redux"
import slice, { addItem, clearItem } from "./utils/slice"

export default function Home (){

  // We are subscribing to store using selector
  const items = useSelector((store)=>store.slice.items)
  const dispatch = useDispatch()
  function handleClearCart(){
    dispatch(clearItem()) 
  }
  function handleAddItem(){
    dispatch(addItem("pizza"))
  }
  return (
    <>
    <button onClick={handleAddItem}>Add Item</button>
    <button onClick={handleClearCart}>Clear Cart</button>
    <h1>Items: {items.length === 0 ? "Cart is empty":items.length } </h1>
    <ul>

      {items.map((item:string)=><li>{item}</li>)}
      </ul>
    <h1>Hello This is home page</h1>
    </>
  )
}


