import {useContext, useEffect} from "react";

import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import { Card, Col } from 'react-bootstrap'

const PeopleDetail = () => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		console.log(id);
		actions.getPeople("https://swapi.dev/api/people/"+id)
	}, [])
	
	return (
		<>
			<h1> {!!store.characterDetails && store.characterDetails.name}</h1>	
			<Col>
				<Card.Img variant="top" src="holder.js/800px600" />
			</Col>
			<Col>
				<Card.Body>
					
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
					</Card.Text>
						<Card.Text>
							Name: {!!store.characterDetails && store.characterDetails.name}
						</Card.Text>
						<Card.Text>
							Brith Year: {!!store.characterDetails && store.characterDetails.birth_year}
						</Card.Text>
						<Card.Text>
							Sex: {!!store.characterDetails && store.characterDetails.gender}
						</Card.Text>
						<Card.Text>
							Height: {!!store.characterDetails && store.characterDetails.height}
						</Card.Text>
						<Card.Text>
							Skin Color: {!!store.characterDetails && store.characterDetails.skin_color}
						</Card.Text>
						<Card.Text>
							Eye Color: {!!store.characterDetails && store.characterDetails.eye_color}
						</Card.Text>
				</Card.Body>
			</Col>
		</>
	);
};

export default PeopleDetail;