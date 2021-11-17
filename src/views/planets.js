import { useEffect, useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom";

import { Card, Button, Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'

import './styles.css';


import { Context } from "../store/appContext";
const Planets = () => {
    const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPlanets()
	}, []);
    return(
        <>
        <hr></hr>
        <h3>Planets</h3>

			<Container>
				<Row >			
					{
						store.planets.map(item => {
							return (	<Col md={4}>	
												<Card>
												<Card.Body>
													<Card.Title><h5 key={item.name}>{item.name}</h5></Card.Title>
													<Card.Text>
															<ul >
																<li>Population: {item.population}</li>
																<li>Terrain: {item.terrain}</li>
															</ul>
															
															<div>
																<Link to={item.url.match(/\d+/)[0]}><Button  variant="primary" size="sm">
																Learn more!
																</Button></Link>
																
																<Button onClick={() => actions.addFavorites(item)} variant="secondary" size="sm">
																<FontAwesomeIcon icon={faHeart} />  
																</Button>
															</div>
													</Card.Text>
												</Card.Body>
												</Card>
											</Col>
										)
						})
						
					}
				</Row>
			</Container>
        </>
    )
}

export default Planets;