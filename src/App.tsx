import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/home/Home";
import Info from "./components/pages/aboutus/Info";
import Location from "./components/pages/location/Location";
import Fair from "./components/pages/fair/Fair";
import Video from "./components/pages/Video";
import Login from "./components/login/Login";
import { Route, Switch } from "react-router-dom";
import Product from "./components/product/Product";
import { CardProvider } from "./components/context/CardContext";
import AdminHome from "./components/pages/admin/AdminHome";
import { CategoryProvider } from "./components/context/CategoryContext";
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <CardProvider>
        <CategoryProvider>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={Product} />
            <Route path="/info" component={Info} />
            <Route path="/location" component={Location} />
            <Route path="/panairi" component={Fair} />
            <Route path="/video" component={Video} />
            <Route path="/login" component={Login} />
            <Route path="/admin" component={AdminHome} />
          </Switch>
        </CategoryProvider>
      </CardProvider>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
