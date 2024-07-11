export class Ui {
    displayGames(data) {
        let bBox = '';
        for (let i = 0; i < data.length; i++) {
            let element = data[i];
            bBox += `
                <div class="col-md-6 col-lg-4 col-xl-3 col-card" game-id="${element.id}">
                    <div class="card bg-transparent p-3 pb-0 rounded-bottom-0 border-bottom-0">
                        <img src="${element.thumbnail}" class="card-img-top" alt="${data.title}">
                        <div class="card-body px-0 py-3">
                        <div class="d-flex justify-content-between mb-1">
                            <h6 class="card-title">${element.title}</h6>
                            <span class="px-2 py-1 fw-bold bg-primary text-white rounded-3 tiny-font free">Free</span>
                        </div>
                        <p class="card-text text-center text-gray tiny-font fw-bold">
                            ${element.short_description.split(' ').slice(0, 8).join(' ')}
                        </p>
                        
                        </div>
                    </div>
                    <div class="card-bottom px-3 py-2 d-flex justify-content-between rounded-bottom-2">
                        <span class="badge-color badge">${element.genre}</span>
                        <span class="badge-color badge">${element.platform}</span>
                    </div>
                </div>
            `
        }
        document.getElementById('games').innerHTML = bBox;
    }

    displayDetails(data) {
        let details = `
        <div class="col-md-4">
                <img
                src="${data.thumbnail}"
                class="w-100"
                alt="${data.title}"
                />
            </div>
            <div class="col-md-8">
                <h3>Title: ${data.title}</h3>
                <p>Category: <span class="badge text-bg-info"> ${data.genre}</span></p>
                <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span></p>
                <p>Status: <span class="badge text-bg-info"> ${data.status}</span></p>
                <p class="small">
                    ${data.description}
                </p>
                <a
                class="btn btn-outline-warning"
                target="_blank"
                href="${data.game_url}"
                >Show Game</a
                >
        </div>
        `
        document.getElementById('detailsContent').innerHTML = details;
    }
    
}