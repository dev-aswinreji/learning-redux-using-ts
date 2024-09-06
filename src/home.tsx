import { useSelector } from "react-redux"

export default function Home (){

  // We are subscribing to store using selector
  const items = useSelector((store)=>store.slice.items)
  return (
    <>
    <h1>Items: {items.length} </h1>
    <h1>Hello This is home page</h1>
    </>
  )
}


