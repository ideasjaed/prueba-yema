import React from 'react';
import {
  Link
} from "react-router-dom";
const Navegation = () => {
    
    return (
      
     <div className="container-fluid w-full">
        <nav className="w-full flex items-center justify-between flex-wrap bg-teal-500 p-6 mb-4 w-full">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link className="cursor-pointer font-semibold text-xl tracking-tight" to="/">YEMA</Link>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
              <Link className="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/about">Acerca de</Link>
              </div>
          <div>
          </div>
          </div>
        </nav>
     </div>
     
      );
}

export default Navegation;