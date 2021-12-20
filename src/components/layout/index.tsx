import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer';
import GeneralInfo from '../generalInfo';
import Navbar from '../navbar';
import "./styles.scss";

/**
 * Componente: Renderiza el contenido del sitio con componentes estaticos y dinamicos
 * 
 * @remark
 * Este componente contiene Outlet de la libreria {react-router-dom}
 * 
 * @returns Elemento de React
 */
function Layout(): JSX.Element {
  return (
    <div className="container">
      <GeneralInfo />
      <div className="content">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
