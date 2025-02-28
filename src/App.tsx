import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GlobalStyle, { Container } from "./styles";
import Home from "./pages/Home";
import RegisterContact from "./containers/RegisterContact";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "register",
    element: <RegisterContact />

  }
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
      <RouterProvider router={routes} />


      </Container>
    </>  

  )
}

export default App;
