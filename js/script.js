const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [59.612151, 60.574244],
        zoom: 7,
        controls: ['default']
    });

    var placemark = new ymaps.Placemark([59.612151, 60.574244], {}, {
        // Задаем стиль метки (метка в виде круга).
        preset: "islands#circleDotIcon",
        // Задаем цвет метки (в формате RGB).
        iconColor: '#ff0000'
    });

    myMap.geoObjects.add(placemark);

};