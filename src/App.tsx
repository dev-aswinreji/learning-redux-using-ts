import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Home from "./home"
function App() {
return (
  <>
  <Provider store={appStore}>
  <Home/>
  </Provider> 
  </>
    )
}

export default App
