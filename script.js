// document.getElementById('explore-btn').addEventListener("click", () => {
//     console.log("clicking")
//     document.getElementById('more-container').innerHTML = "<div>12345</div>"
//     document.getElementById('explore-btn').remove()
// })

document.getElementById('explore-btn').addEventListener("click", () => {
    console.log("clicking");
    document.getElementById('more-container').innerHTML =
        `<div class="explore-container">
            <div class="parent-container">
                <div class="text-one">Explore possibilities</div>
                <div class="text-two">Unlock New Dimensions through Tech and Virtual Reality</div><br>
                <div class="child-box">
                    <div id="child-box-one">Sci-Fi</div>
                    <div id="child-box-two">Nature</div>
                    <div id="child-box-three">Gaming</div>
                    <div id="child-box-four">Drive</div>
                </div>
            </div>
        </div>
        <div id="box-click-one"></div>
        <div id="box-click-two"></div>
        <div id="box-click-three"></div>
        <div id="box-click-four"></div>
        
        <div class="about" id="about">
            More about EquiTek!
        </div>
        <div class="part">
            <div class="part-one">
                <img class="immersive" src="Assest/immersive-experiences-modified.png" alt="immersive">
                <p class="part-one-text">Tech Innovations</p>
                <p class="part-two-text">Unveiling the latest in tech innovation, from cutting-edge gadgets to groundbreaking VR experiences. Dive into expert reviews and insights.</p>
            </div>

            <div class="part-one">
                <img class="immersive" src="Assest/vr-game-development-modified.png" alt="immersive">
                <p class="part-one-text">VR Game Development</p>
                <p class="part-two-text">Explore the art of VR game development, showcasing the blend of technology and creativity in crafting immersive virtual worlds.</p>
            </div>

            <div class="part-one">
                <img class="immersive" src="Assest/tech-innovations-modified.png" alt="immersive">
                <p class="part-one-text">Immersive Experiences</p>
                <p class="part-two-text">Delve into a collection of VR projects, where technology pushes the boundaries of imagination and transforms the digital landscape.</p>
            </div>
        </div>`;
    document.getElementById('explore-btn').remove();

    const clearImages = () => {
        document.getElementById('box-click-one').innerHTML = "";
        document.getElementById('box-click-two').innerHTML = "";
        document.getElementById('box-click-three').innerHTML = "";
        document.getElementById('box-click-four').innerHTML = "";
    };

    document.getElementById('child-box-one').addEventListener("click", () => {
        clearImages();
        document.getElementById('box-click-one').innerHTML = 
        `
        <div class="inside-img">
            <img class="sci-fi" src="Assest/sci-fi.png" alt="sci-fi">
        </div>`;
    });

    document.getElementById('child-box-two').addEventListener("click", () => {
        clearImages();
        document.getElementById('box-click-two').innerHTML = 
        `
        <div class="inside-img-two">
            <img class="nature" src="Assest/nature.png" alt="Nature">
        </div>`;
    });

    document.getElementById('child-box-three').addEventListener("click", () => {
        clearImages();
        document.getElementById('box-click-three').innerHTML = 
        `
        <div class="inside-img-three">
            <img class="gaming" src="Assest/gaming.png" alt="Gaming">
        </div>`;
    });

    document.getElementById('child-box-four').addEventListener("click", () => {
        clearImages();
        document.getElementById('box-click-four').innerHTML = 
        `
        <div class="inside-img-four">
            <img class="driving" src="Assest/driving-modified.png" alt="drive">
        </div>`;
    });
});
  document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.horizontal_scroll_swiper', {
    slidesPerView: 5.5,
    spaceBetween: 14,
    freeMode: true,  
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,  
    },
    mousewheel: true,  
    grabCursor: true,  
  });
});