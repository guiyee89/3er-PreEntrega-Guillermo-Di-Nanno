
const section = document.querySelector(".grid_container_travel")

const article = document.createElement("article")
article.classList.add("grid_travel_col_1")
article.classList.add("flex_item_travel")
console.log(article)
article.innerHTML = `
<div class="travel_img">
    <img class="zoom_1" src="../image/sydney.jpg" alt="Sydney Opera House">
    <img  class="zoom_2" src="../image/sydney2.jpg" alt="Travelers enjoying Sydney's views">
</div>
<div class="travel_text_buybutton" >
    <h2>SYDNEY</h2>
    <p>Whether you visit Australia for business or leisure, Four Points by Sheraton Sydney, Central Park makes your stay worthwhile. Stay and enjoy excellent service, thoughtful amenities and a prime location in Sydney's central Chippendale neighbourhood. Our hotel is near Sydney CBD, Central Station, the ICC Sydney and numerous shops and restaurants.</p>
    <p class="p">For those organising events, our light-filled venues are tailor-made for both corporate functions and social celebrations in Sydney. Relax in modern hotel rooms and suites featuring our signature bedding, large bathrooms with rainforest showers, mini-refrigerators, ample desks and free Wi-Fi, paired with views over Chippendale. Our hotel suites boast large, separate living rooms, ideal for families or business trips.
    </p>
    <button id="brisbane">
        <span class="button_top"> Purchase Travel Pack</span>
    </button>
    </div>
    `
section.append(article)

    // < div class="travel_img" >
    //         <img class="zoom_1" src="../image/sydney.jpg" alt="Sydney Opera House">
    //         <img class="zoom_2" src="../image/sydney2.jpg" alt="Travelers enjoying Sydney's views">
    // </div>
    // <div class="travel_text_buybutton" >
    //         <h2>SYDNEY</h2>
    //         <p>Whether you visit Australia for business or leisure, Four Points by Sheraton Sydney, Central Park makes your stay worthwhile. Stay and enjoy excellent service, thoughtful amenities and a prime location in Sydney's central Chippendale neighbourhood. Our hotel is near Sydney CBD, Central Station, the ICC Sydney and numerous shops and restaurants.</p>
    //         <p class="p">For those organising events, our light-filled venues are tailor-made for both corporate functions and social celebrations in Sydney. Relax in modern hotel rooms and suites featuring our signature bedding, large bathrooms with rainforest showers, mini-refrigerators, ample desks and free Wi-Fi, paired with views over Chippendale. Our hotel suites boast large, separate living rooms, ideal for families or business trips.</p>
    //         <button id="brisbane">
    //             <span class="button_top"> Purchase Travel Pack</span>
    //         </button>
    // </div>

















