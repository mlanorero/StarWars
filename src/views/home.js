import React from "react";
import { Link } from "react-router-dom"

import './styles.css';

const Home = () => {

    return(
        <>
        <Link className="home" to="/people">People</Link>
        <Link className="home" to="/planets">Planets</Link>
        </>
    )
}

export default Home;