import { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import { Dropdown, Container, Button } from 'react-bootstrap';
import StarWars from './pngwing.com.png';
import './navbar.css';

const Header = () => {
    const {store, actions} = useContext(Context);

	useEffect(() => {
		
	}, [])

    return(
        <>
           <nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img alt="foto starwars" src={StarWars} />
			</Link>
			<Dropdown>
                <Container>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        My Favorites
                    </Dropdown.Toggle>
                    
                    <Dropdown.Menu>
                    {
						store.favorites.map(item =>{
							return (
								<Dropdown.Item href="#/action-1">{item.name} 
								<Button onClick={() => actions.filterFavorites(item)}> X </ Button> </Dropdown.Item>
							)
						})
					}
                    </Dropdown.Menu>
                </Container>
			</Dropdown>

			
		</nav>
        </>
    )
}

export default Header;