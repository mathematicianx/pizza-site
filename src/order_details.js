import React, { useState } from "react";
import ReactDom from "react-dom";

import { topbar, LeftMenu, ProductList, Footer } from "./index.js";

function Main() {
  return (
    <section className="main">
      <TopBar />
      <div className="background">
        <div className="layout">
          <LeftMenu />
          <ProductList />
        </div>
        <Footer />
      </div>
    </section>
  );
}

// import React from 'react';
// import { Link } from 'react-router';

// class List extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>Please choose a repository from the list below.</p>
//                 <ul>
//                     <li><Link to="/react">React</Link></li>
//                 </ul>
//             </div>
//         );
//     }
// }

// export default List;
