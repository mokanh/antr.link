import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";

import {
  ChakraProvider,
} from "@chakra-ui/react";

// Routes
import {routes} from './router/index';
import Navbar from './components/Navbar';


export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Switch>
          {
            routes.map(({url, component: Component}, i) => (
                <Route key={i} path={url} element={<Component />} />
            ))
          }
        </Switch>
      </Router>
    </ChakraProvider>
  );
}
