import React from "react";
import { Routes, Route, BrowserRouter as Router, } from "react-router-dom";
import Currency from "../screens/currency";
import Home from "../screens/home";
import NotFound from "../screens/notFound";
import { HOME, CURRENCY, EXCHANGE, ERROR_PAGE } from "../config/constants";
import Layout from "../components/layout";
import Currencies from "../screens/currencies";
import Exchange from "../screens/exchange";
import Error from "../screens/error";
import Exchanges from "../screens/exchanges";

/**
 * Componente: Renderiza las rutas de navegación del sitio
 * 
 * @remark
 * Este componente hace uso de Routes y Route de la libreria {react-router-dom}
 * 
 * @returns Elemento de React
 */
const RouterConfig = (): JSX.Element => {
  return (
    <Router>
      <Routes>

        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={HOME} element={<Home />} />
          <Route path={EXCHANGE} element={<Exchanges />} />
          <Route path={`${EXCHANGE}/:id`} element={<Exchange />} />
          <Route path={CURRENCY} element={<Currencies />} />
          <Route path={`${CURRENCY}/:id`} element={<Currency />} />

          <Route path="*" element={<NotFound />} />
          <Route path={`${ERROR_PAGE}/:error`} element={<Error />} />
        </Route>

      </Routes>
    </Router>
  )
};

export default RouterConfig;
