
const secondPage = document.querySelector('.page-2');
const rightArrow = document.querySelector('.right-arrow');

// Listing page

const listing = document.querySelector('.project-cards-wrapper');
console.log(listing);

async function getListedProjects() {
    const response = await fetch ('data.json');
    const data = await response.json();
    return data;
}

getListedProjects()
    .then(data => {
        // console.log(data.listedProjects)
        
        let projectCards = '';
        let b = 0;

        data.listedProjects.forEach(project => {
            if(project['property-id'] <= 9) {
            projectCards += `
            <div class="project-item project-item-card">
                <div class="project-image">
                    <img src="${project['property-image']}">
                </div>
                <div class="project-details">
                    <h3 class="project-title">${project['property-name']}</h3>
                    <p class="project-location"><span class="project-place">${project['property-place']}</span>, <span
                            class="project-state">${project['property-state']}</span></p>
                    <p class="project-type">${project['property-type']}</p>
                    <p class="legal-process">Legal process<input type="range" min="0" max="100" id="legal-status-progress" value="${project['legal-status']}"></p>
                    <p class="plot-availability">Plot Availability <input type="range" min="0" max="7" value="${project['plot-availability']}" id="availability-status"></p>
                    <p class="project-status">Current project status: <span class="current-project-status">${project['current-project-status']}</span></p>
                    <div class="more-project-details"> 
                    <br>
                        <a href="#!" class="project-details-btn">PROJECT DETAILS<img src="img/down_arrow_project_details.png" alt="" class="margin"></a>
                        <a href="#!" class="project-enquire-btn">ENQUIRE</a>
                    </div>

                </div>
            </div>
            `;
        
            b = project['property-id'];
            // console.log(`${project['property-id']`);
            if(project['property-id'] <= 9){
                listing.innerHTML = projectCards;   
            }
        }
        });
        console.log('a',b);
        // console.log(projectCards);
    });



    
secondPage.addEventListener('click', function paggination() {
    console.log('a');
    window.location = "realEstateListingtwo.html";
});

rightArrow.addEventListener('click', function paggination() {
    window.location = "realEstateListingtwo.html";
});

