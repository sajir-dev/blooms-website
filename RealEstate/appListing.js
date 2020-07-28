const secondPage = document.querySelector('.page-2');
const rightArrow = document.querySelector('.right-arrow');
const valueOne = document.getElementById('myDropdown1');
const valueTwo = document.getElementById('myDropdown2');
const valueThree = document.getElementById('myDropdown3');
const listing = document.querySelector('.project-cards-wrapper');

let a = [];
function filter(e) {
    console.log(e.target.innerHTML);
    let b = e.target.innerHTML;
    a.push(b);
    filterfunction();
}


function filterfunction() {
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data.listedProjects)
            let projectCards = '';
            let b = 0;
            data.listedProjects.forEach(project => {
                for (i = 0; i < a.length; i++ ) {
                    let c = a[i].trim();
                    console.log(typeof(project['property-place']) === typeof(c));
                if (project['property-place'] === c) {
                    console.log('a');
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
                        <div class="legal">
                        <div class="text">
                            Legal Process
                        </div>
                        <div class="bars">
                            <div class="bar1">
                                <img src="img/bar 1.png">
                            </div>
                            <div class="bar2">
                                <img src="img/bar 2.png">
                            </div>
                        </div>
                        </div>
                    <div class="plot">
                        Plot Availability
                        <div class="small-bars">
                            <img src="img/small bar 1.png">
                            <img src="img/small bar 1.png">
                            <img src="img/small bar 2.png">
                            <img src="img/small bar 2.png">
                            <img src="img/small bar 2.png">
                            <img src="img/small bar 2.png">
                            <img src="img/small bar 2.png">
                        </div>
                    </div>
                        <p class="project-status">Current project status: <span class="current-project-status">${project['current-project-status']}</span></p>
                        <div class="more-project-details"> 
                        <br>
                            <a href="#!" class="project-details-btn">PROJECT DETAILS<img src="img/down_arrow_project_details.png" alt="" class="margin"></a>
                            <a href="#!" class="project-enquire-btn">ENQUIRE</a>
                        </div>
    
                    </div>
                </div>
                `;

                listing.innerHTML = projectCards;
                    
                } else if (project['property-place'] === c){

                } else if(project['current-project-status'] === c){
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
                            <div class="legal">
                            <div class="text">
                                Legal Process
                            </div>
                            <div class="bars">
                                <div class="bar1">
                                    <img src="img/bar 1.png">
                                </div>
                                <div class="bar2">
                                    <img src="img/bar 2.png">
                                </div>
                            </div>
                            </div>
                        <div class="plot">
                            Plot Availability
                            <div class="small-bars">
                                <img src="img/small bar 1.png">
                                <img src="img/small bar 1.png">
                                <img src="img/small bar 2.png">
                                <img src="img/small bar 2.png">
                                <img src="img/small bar 2.png">
                                <img src="img/small bar 2.png">
                                <img src="img/small bar 2.png">
                            </div>
                        </div>
                            <p class="project-status">Current project status: <span class="current-project-status">${project['current-project-status']}</span></p>
                            <div class="more-project-details"> 
                            <br>
                                <a href="#!" class="project-details-btn">PROJECT DETAILS<img src="img/down_arrow_project_details.png" alt="" class="margin"></a>
                                <a href="#!" class="project-enquire-btn">ENQUIRE</a>
                            </div>
        
                        </div>
                    </div>
                    `;
    
                    listing.innerHTML = projectCards
                } 
               
            }
            });
            a = [];
            // console.log(projectCards);
        });

    }

valueOne.addEventListener('click', filter);
valueTwo.addEventListener('click', filter);
valueThree.addEventListener('click', filter);

// Listing page

console.log(listing);

async function getListedProjects() {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
}

getListedProjects()
    .then(data => {
        // console.log(data.listedProjects)
        let projectCards = '';
        let b = 0;
        data.listedProjects.forEach(project => {
            if (project['property-id'] <= 9) {
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
                    <div class="legal">
                    <div class="text">
                        Legal Process
                    </div>
                    <div class="bars">
                        <div class="bar1">
                            <img src="img/bar 1.png">
                        </div>
                        <div class="bar2">
                            <img src="img/bar 2.png">
                        </div>
                    </div>
                    </div>
                <div class="plot">
                    Plot Availability
                    <div class="small-bars">
                        <img src="img/small bar 1.png">
                        <img src="img/small bar 1.png">
                        <img src="img/small bar 2.png">
                        <img src="img/small bar 2.png">
                        <img src="img/small bar 2.png">
                        <img src="img/small bar 2.png">
                        <img src="img/small bar 2.png">
                    </div>
                </div>
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
                if (project['property-id'] <= 9) {
                    listing.innerHTML = projectCards;
                }
            }
        });
        console.log('a', b);
        // console.log(projectCards);
    });




secondPage.addEventListener('click', function paggination() {
    window.location = "realEstateListingtwo.html";
});

rightArrow.addEventListener('click', function paggination() {
    window.location = "realEstateListingtwo.html";
});