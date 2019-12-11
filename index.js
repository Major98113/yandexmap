ymaps.ready(function () {
    var myMap = new ymaps.Map("map", {
        center: [55.044019, 60.108538],
        zoom: 8
    });
    var myPlacemark = new ymaps.Placemark([55.161784, 60.072833], {
        hintContent: 'Текст всплывающей подсказки',
        locationUrl: 'http://yandex.ru'
    });

    myMap.geoObjects.add(myPlacemark);

    myMap.geoObjects.events.add('click', function (e) {
        // Объект на котором произошло событие
        var target = e.get('target');

        window.location.href = target.properties.get('locationUrl');
    });
});