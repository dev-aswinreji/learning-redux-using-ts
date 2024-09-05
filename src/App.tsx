import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card, { HigherOrderComponent } from "./Hoc"
function App() {

  const HOC = HigherOrderComponent(Card)
  console.log(typeof HOC,'Hoc is showing ');
  const num = 10 
return (
  <>
  <BrowserRouter>
  <Routes>
  <Route path="/card" element={<Card num={num} name="basil" time={19}/>} /> 
  </Routes>
  </BrowserRouter>
  </>
    )
}

export default App
