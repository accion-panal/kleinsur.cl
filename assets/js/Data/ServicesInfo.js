import { servicesInformation } from "./userId.js";

const ServicesInfo = () => {
    localStorage.removeItem('globalQuery');
    const { card } = servicesInformation;
    /* LLENAR INFORMACION DE CARDS */
    let cards = document.getElementById('cards-info');
    if (cards !== null) { 
        cards.innerHTML = `
            <div id="alt-services-2" class="alt-services">
                <h3>Nuestros servicios</h3>
            </div>`+
            card.map((card)=>`
                <div class="col-lg-4 col-md-6">
                    <div class="stats-item d-flex align-items-center w-100 h-100">
                        ${card.icon}
                        <div>
                            <h6 style="font-size: 20px;"><b>${card.title}</b></h6>
                            <p style="font-size: 12px;">${card.parrafo}</p>
                        </div>
                    </div>
                </div>
        `).join('');
    };
}

ServicesInfo();
