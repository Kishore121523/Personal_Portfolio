const lightbox = document.createElement('div');

lightbox.id = 'lightbox';
document.body.appendChild(lightbox)

const images = document.querySelectorAll('.image');

$(".image").on("click", "a", function(e) { e.preventDefault() });

images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img');
        const divIcon = document.createElement('div');
        const icon = document.createElement('i');
        const dblText = document.createElement('p');

        divIcon.className = 'iconDiv'
        dblText.className = 'dblText'
        icon.className = 'lightboxIcon'
        icon.classList.add('fas')
        icon.classList.add('fa-hand-point-up')
        dblText.innerHTML = " Double Tap the Image to Zoom"

        img.src = image.children[0].href;

        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }

        lightbox.appendChild(img);
        lightbox.appendChild(divIcon);
        divIcon.appendChild(icon);
        icon.appendChild(dblText)

        let currentlyListening = false;
        img.addEventListener('dblclick', e => {
            if (!currentlyListening) {
                zoomIn();
            } else {
                zoomOut();
            }
        })

        function zoomIn() {
            img.classList.remove("zoomOut");
            img.classList.add("zoom");
            currentlyListening = !currentlyListening;
        }

        function zoomOut() {
            img.classList.add("zoomOut");
            img.classList.remove("zoom");
            currentlyListening = !currentlyListening;
        }

        setTimeout(dispNone, 2800);

        function dispNone() {
            divIcon.classList.add('dispNone')
        }

    })
})


lightbox.addEventListener('click', e => {

    if (e.target != e.currentTarget) {
        console.log(e.target)
        console.log(e.currentTarget)
        console.log(divIcon)
        return
    }
    lightbox.classList.remove('active');

})