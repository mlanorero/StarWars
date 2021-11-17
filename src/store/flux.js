const getState = ({ getStore, getActions, setStore }) => {
    return{
        store: {
            characters: [],
			characterDetails: null,
			planetsDetail: null,
			favorites:[],
			filtered:[],
			planets: []
        },
        actions: {
            getCharacters: () => {
				fetch("https://swapi.dev/api/people/")
					.then(respuesta => respuesta.json())
					.then(data =>
						setStore({
							characters: data.results
						})
						)
					.catch(error => console.log(error))
			},
			getPeople: url => {
				fetch(url)
					.then(respuesta => respuesta.json())
					.then(data =>
						setStore({
							characterDetails: data
						})
						)
					.catch(error => console.log(error))
			},
			addFavorites: item => {
				 const {favorites} = getStore();
				if(favorites.find((fav)=> fav === item)){
					console.log('encontrado')
				} else {
					favorites.push(item);
					setStore({favorites})
				}

				
			},
			filterFavorites: item => {
				const {favorites} = getStore();
				const {filtered} = getStore();
				filtered = favorites.filter((fav) => 
					fav !== item
				)
				return filtered;
			},
			
			getPlanets: () => {
				fetch("https://swapi.dev/api/planets")
					.then(respuesta => respuesta.json())
					.then(data => 
						setStore({
							planets: data.results
						})
						)
					.catch(error => console.log(error))
			},
			getWorlds: url => {
				fetch(url)
					.then(respuesta => respuesta.json())
					.then(data =>
						setStore({
							planetsDetail: data
						})
						)
					.catch(error => console.log(error))
			},
        }
    }
}

export default getState;