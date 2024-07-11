import { Ui } from "./ui.js";

export class Details{


    async getDetails(id){
        const loading = document.querySelector('.loading');
        loading.classList.remove('d-none');
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'b51688aca6mshad68ba064b082ecp1bd495jsn4d67fa5e360a',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // console.log(result);
            const ui = new Ui();
            this.hideMainContent();
            ui.displayDetails(result);
            this.exitBtn();
        } catch (error) {
            console.error(error);
        }
        finally{
            loading.classList.add('d-none');
            document.querySelector('.details').classList.remove('d-none');
        }
    }

    removeDetails(){
        document.querySelector('.details').classList.add('d-none');
    }

    hideMainContent(){
        document.querySelector('main').classList.add('d-none');
    }

    exitBtn(){
        const exitBtn = document.getElementById('exitBtn');
        exitBtn.addEventListener('click', () => {
            document.querySelector('main').classList.remove('d-none');
            this.removeDetails();
        })
    }
}