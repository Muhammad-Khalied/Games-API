import { Ui } from "./ui.js";
import { Details }  from "./details.js";

export class Games {
    constructor() {
        this.getGames('MMORPG');
        this.linksEvent();
        // new Details().getDetails(582);
    }

    async getGames(category) {
        const loading = document.querySelector('.loading');
        loading.classList.remove('d-none');
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'b51688aca6mshad68ba064b082ecp1bd495jsn4d67fa5e360a',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
            const response = await api.json();
            // console.log(response);
            const ui = new Ui();
            ui.displayGames(response);
            this.gamesEvent();
        } catch (error) {
            console.error(error);
        }
        finally{
            loading.classList.add('d-none');
        }
    }

    linksEvent(){
        const links = document.querySelectorAll('.nav-link');
        for(let i = 0; i < links.length; i++){
            links[i].addEventListener('click', (e) => {
                e.preventDefault();
                let category = e.target.textContent;
                // console.log(e.target)
                this.removeActiveClass();
                e.target.classList.add('active');
                this.getGames(category);
            })
        }
    }

    gamesEvent(){
        const games = document.querySelectorAll('.col-card');
        for(let i = 0; i < games.length; i++){
            games[i].addEventListener('click', (e) => {
                let gameId = e.currentTarget.getAttribute('game-id');
                new Details().getDetails(gameId);
            })
        }
    
    }

    removeActiveClass(){
        const links = document.querySelectorAll('.nav-link');
        for(let i = 0; i < links.length; i++){
            links[i].classList.remove('active');
        }
    }
}