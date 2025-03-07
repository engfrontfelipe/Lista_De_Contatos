import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GlobalStyle, { Container } from "./styles";
import Home from "./pages/Home";
import RegisterContact from "./containers/RegisterContact";
import { Provider } from "react-redux";
import store from "./store";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "register",
    element: <RegisterContact />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </Provider>
  );
}

export default App;
