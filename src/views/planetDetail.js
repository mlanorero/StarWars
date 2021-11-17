import {useContext, useEffect} from "react";

import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import { Card, Col } from 'react-bootstrap'


export const PlanetDetail = () => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		console.log(id);
		actions.getWorlds("https://swapi.dev/api/planets/"+id)
	}, [])
	
	return (
		<>
		<h1> {!!store.planetsDetail && store.planetsDetail.name}</h1>	
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
						Name: {!!store.planetsDetail && store.planetsDetail.name}
					</Card.Text>
					<Card.Text>
						Climate: {!!store.planetsDetail && store.planetsDetail.climate}
					</Card.Text>
					<Card.Text>
						Terrain: {!!store.planetsDetail && store.planetsDetail.terrain}
					</Card.Text>
					<Card.Text>
						Population: {!!store.planetsDetail && store.planetsDetail.population}
					</Card.Text>
					
			</Card.Body>
		</Col>
		</>
	);
};

export default PlanetDetail;