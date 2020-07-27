const playBtn = document.querySelector('.play-button');
const video = document.getElementById('video');

//function 
function toggleVideoStatus() {
    console.log(playBtn);
    if(video.paused) {
        playBtn.style.display = "none";
        video.play();
    } else if(video.play) {
        // playBtn.style.display = "block";
        video.pause();
    }
}

//Add Event Listiner
playBtn.addEventListener('click', toggleVideoStatus);

const buttonRight = document.getElementById('slide-right');
const buttonLeft = document.getElementById('slide-left');
const container = document.querySelector('.container-slider');
const wrapper = document.querySelector('.wrapper');
const progressBar = document.querySelector('.progress-bar');
const progressBarWrapper = document.querySelector('.progress-bar-wrapper');


sliderArrowHandler = () => {
    if (container.scrollLeft === 0) {
        buttonLeft.style.visibility = "hidden";
    } else {
        buttonLeft.style.visibility = "visible";
    }

    // setTimeout(console.log(carouselItem.clientWidth), 1000);

    // console.log('slider arrow handler')

    // if (container.offsetWidth<container.scrollLeft) {
    //     buttonRight.style.visibility = "hidden";
    // } else {
    //     buttonRight.style.visibility = "visible";
    // }
}

let itemWidth, clicks, scrollStep;

let wrapperWidth = wrapper.scrollWidth;

setTimeout(function(){
    // let carouselItem = document.querySelector('.carousel-item');
    let carouselTotalWidth = document.querySelector('.wrapper').scrollWidth;
    clicks = (carouselTotalWidth-wrapperWidth)/300;
    let scrollableTrack = progressBarWrapper.scrollWidth-progressBar.scrollWidth;
    scrollStep = scrollableTrack/clicks;
    // itemWidth = carouselItem.scrollWidth;
    // clicks = itemWidth*9/300;
    // scrollStep = (itemWidth*9 - progressBar.scrollWidth)/(clicks+1);
    console.log('scrollstep'+scrollStep);
    console.log('clicks: '+ clicks);
}, 1000);

//25-06
async function getData() {
    const response = await fetch ('data.json');
    const data = await response.json();
    return data;
}

// console.log(progressBarWrapper.offsetWidth);


getData().then(data => {

    let sliderHTML = '';

    data.projects.forEach(project => {
        // console.log(project['property-name'],project['property-image']);
        sliderHTML +=
        `<div class="carousel-item item-1">
            <div class="slider-img">
                <img src="${project['property-image']}">
            </div>
            <div class="property-description">
                <h4 class="property-name">
                    ${project['property-name']}
                </h4>
                <p class="property-location">${project['property-location']}</p>
                <p class="property-type">${project['property-type']}</p>
                <p class="propery-status">${project['legal-status']}</p>
                <p class="property-availability">${project['plot-availability']}</p>
                <p class="project-status">${project['project-status']}</p>
            </div>
            <div class="details">
                <div class="project-details">
                    <span class="detail-box">PROJECT DETAILS</span>
                    <span class="arrow">
                            <img src="img/down_arrow_project_details.png">
                        </span>
                </div>
                <div class="enquire">
                    <span class="enquire-details">
                            ENQUIRE
                        </span>
                </div>
            </div>
        </div>
        `;
        console.log(sliderHTML);

    });
    wrapper.innerHTML = sliderHTML;
});

let progressBarMargin = 0;

buttonLeft.addEventListener('click', (e) => {
    console.log('event fired');
    container.scrollTo(container.scrollLeft-300, 0)
    progressBarMargin -= scrollStep;
    progressBar.style.marginLeft = `${progressBarMargin}px`;
    setTimeout(sliderArrowHandler, 500);
});

// console.log(wrapper.offsetWidth);

buttonRight.addEventListener('click', (e) => {
    container.scrollLeft += 300;
    progressBarMargin += scrollStep;
    progressBar.style.marginLeft = `${progressBarMargin}px`;
    setTimeout(sliderArrowHandler, 500);
});

sliderArrowHandler();

// console.log('container client width: '+container.clientWidth);
// console.log('wrapper-client width: '+ wrapper.clientWidth);

