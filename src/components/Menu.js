import React, { useEffect, useState } from "react";
import { FaWarehouse, FaTruck} from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Menu=()=>{
    const location = useLocation();

    return(
        <div className="bottom-buttons">
      <Link to="/register">
        <button className={`button ${location.pathname === "/register" ? "active" : ""}`}>
          <FaTruck />
        </button>
      </Link>
      <Link to="/stock">
        <button className={`button ${location.pathname === "/stock" ? "active" : ""}`}>
          <FaWarehouse />
        </button>
      </Link>
    </div>
    )
}

export default Menu;