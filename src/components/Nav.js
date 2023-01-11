import React from 'react';
import {NavLink} from "react-router-dom";

function Nav() {
    let activeStyle = {
        textDecoration: "none",
    };
    let activeClassName = "none";

    return (
        <div>
            <NavLink
                to="/about"
                style={({isActive}) =>
                    isActive ? activeStyle : undefined
                }
            >
                About
            </NavLink>
            <NavLink
                to="/contact"
                className={({isActive}) =>
                    isActive ? activeClassName : undefined
                }
            >
                Tasks
            </NavLink>
        </div>

    );
}

export default Nav;