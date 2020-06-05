import React from 'react';
import {Link} from "react-router-dom";
export const Navbar = () => {
    return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link className="navbar-brand" to="/">ExerciseTracker</Link>
    <div>
<ul className="navbar-nav mr-auto">
    <li className="navbar-item"><Link className="nav-link" to="/adduser"><strong>CreateUser</strong></Link></li>
    <li className="navbar-item"><Link className="nav-link" to="/addexer"><strong>CreateExercise</strong></Link></li>
    <li className="navbar-item"><Link className="nav-link" to="/editexer"><strong>EditExercise</strong></Link>
</li>
 </ul>

    </div>
    </nav>)
}
