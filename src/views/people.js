import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import {Button, Card, Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './styles.css';

const People = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
		actions.getCharacters()
        
	}, []);
    
    return (
        <>
        <h3>Characters</h3>

			<Container>
				<Row >			
					{
						store.characters.map(item => {
							return (
											<Col md={4}>	
												<Card>
												<Card.Body>
													<Card.Title><h5 key={item.name}>{item.name}</h5></Card.Title>
													<Card.Text>
															<ul >
																<li>Sex: {item.gender}</li>
																<li>Hair Color: {item.hair_color}</li>
																<li>Eye Color: {item.eye_color}</li>
															</ul>
															
															<div>
																<Link to={item.url.match(/\d+/)[0]}>
																	<Button  variant="primary" size="sm">
																	Learn more!
																	</Button>
																</Link>
																
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

export default People;