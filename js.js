
ymaps.ready(init);
function init() {
    let myMap = new ymaps.Map("map", { center: [64.831839, 54.790546], zoom: 5 }, { searchControlProvider: 'yandex#map' });

    let point_kamni = new ymaps.Placemark([62.439552, 57.491424], { hintContent: 'Столбы выветривания на плато Маньпупунёр' },
        {
            iconLayout: 'default#image',
            iconImageHref: 'point.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -20]
        });
    point_kamni.events.add(['click'], function (event) {
        let elem = document.querySelector("#kamni");
        elem.scrollIntoView({ block: "center", behavior: "smooth" });
    });
    myMap.geoObjects.add(point_kamni);


    let point_park = new ymaps.Placemark([63.844407, 57.299840], { hintContent: 'Нацпарк Югыд ва' },
        {
            iconLayout: 'default#image',
            iconImageHref: 'point.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-5, -50]
        });
    point_park.events.add(['click'], function (event) {
        let elem = document.querySelector("#park");
        elem.scrollIntoView({ block: "center", behavior: "smooth" });
    });
    myMap.geoObjects.add(point_park);

    let point_etnopark = new ymaps.Placemark([61.668797, 50.836497], { hintContent: 'Финно-угорский этнокультурный парк' },
        {
            iconLayout: 'default#image',
            iconImageHref: 'point.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-7, -1]
        });
    point_etnopark.events.add(['click'], function (event) {
        let elem = document.querySelector("#etnopark");
        elem.scrollIntoView({ block: "center", behavior: "smooth" });
    });
    myMap.geoObjects.add(point_etnopark);

    let point_losi = new ymaps.Placemark([62.712268, 56.198586], { hintContent: 'Лосеферма Печоро-Илычского заповедника' },
        {
            iconLayout: 'default#image',
            iconImageHref: 'point.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-5, -38]
        });
    point_losi.events.add(['click'], function (event) {
        let elem = document.querySelector("#losi");
        elem.scrollIntoView({ block: "center", behavior: "smooth" });
    });
    myMap.geoObjects.add(point_losi);

    let point_gora = new ymaps.Placemark([65.150245, 57.262941], { hintContent: 'Гора Народная' },
        {
            iconLayout: 'default#image',
            iconImageHref: 'point.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-5, -38]
        });
    point_gora.events.add(['click'], function (event) {
        let elem = document.querySelector("#gora");
        elem.scrollIntoView({ block: "center", behavior: "smooth" });
    });
    myMap.geoObjects.add(point_gora);

    let point_vodopad = new ymaps.Placemark([61.388211, 50.577926], { hintContent: 'Водопад Буредан' },
        {
            iconLayout: 'default#image',
            iconImageHref: 'point.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-7, -40]
        });
    point_vodopad.events.add(['click'], function (event) {
        let elem = document.querySelector("#vodopad");
        elem.scrollIntoView({ block: "center", behavior: "smooth" });
    });
    myMap.geoObjects.add(point_vodopad);

    let point_prizrak = new ymaps.Placemark([67.493504, 64.050113], { hintContent: 'Город-призрак Хальмер-Ю' },
        {
            iconLayout: 'default#image',
            iconImageHref: 'point.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-5, -38]
        });
    point_prizrak.events.add(['click'], function (event) {
        let elem = document.querySelector("#prizrak");
        elem.scrollIntoView({ block: "center", behavior: "smooth" });
    });
    myMap.geoObjects.add(point_prizrak);

    let point_les = new ymaps.Placemark([65.148606, 57.223977], { hintContent: 'Девственные леса Коми' },
        {
            iconLayout: 'default#image',
            iconImageHref: 'point.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -20]
        });
    point_les.events.add(['click'], function (event) {
        let elem = document.querySelector("#les");
        elem.scrollIntoView({ block: "center", behavior: "smooth" });
    });
    myMap.geoObjects.add(point_les);

    let point_boloto = new ymaps.Placemark([65.773785, 51.135070], { hintContent: 'Болото-океан' },
        {
            iconLayout: 'default#image',
            iconImageHref: 'point.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-5, -38]
        });
    point_boloto.events.add(['click'], function (event) {
        let elem = document.querySelector("#boloto");
        elem.scrollIntoView({ block: "center", behavior: "smooth" });
    });
    myMap.geoObjects.add(point_boloto);

    let point_sianie = new ymaps.Placemark([67.493504, 64.050113], { hintContent: 'Воркута, северное сияние' },
        {
            iconLayout: 'default#image',
            iconImageHref: 'point.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]
        });
    point_sianie.events.add(['click'], function (event) {
        let elem = document.querySelector("#sianie");
        elem.scrollIntoView({ block: "center", behavior: "smooth" });
    });
    myMap.geoObjects.add(point_sianie);

    let point_besedka = new ymaps.Placemark([61.730112, 50.774893], { hintContent: 'Кировский парк, Сыктывкар' },
        {
            iconLayout: 'default#image',
            iconImageHref: 'point.png',
            iconImageSize: [30, 30],
            iconImageOffset: [5, -38]
        });
    point_besedka.events.add(['click'], function (event) {
        let elem = document.querySelector("#besedka");
        elem.scrollIntoView({ block: "center", behavior: "smooth" });
    });
    myMap.geoObjects.add(point_besedka);

    let point_river_v = new ymaps.Placemark([61.933024, 50.813563], { hintContent: 'Река Вычегда' },
        {
            iconLayout: 'default#image',
            iconImageHref: 'point.png',
            iconImageSize: [30, 30],
            iconImageOffset: [6, -50]
        });
    point_river_v.events.add(['click'], function (event) {
        let elem = document.querySelector("#river_v");
        elem.scrollIntoView({ block: "center", behavior: "smooth" });
    });
    myMap.geoObjects.add(point_river_v);

    let point_river_vim = new ymaps.Placemark([63.148214, 51.212649], { hintContent: 'Река Вымь' },
        {
            iconLayout: 'default#image',
            iconImageHref: 'point.png',
            iconImageSize: [30, 30],
            iconImageOffset: [5, -38]
        });
    point_river_vim.events.add(['click'], function (event) {
        let elem = document.querySelector("#river_vim");
        elem.scrollIntoView({ block: "center", behavior: "smooth" });
    });
    myMap.geoObjects.add(point_river_vim);

    let point_river_sisola = new ymaps.Placemark([60.604129, 50.900125], { hintContent: 'Река Сысола' },
        {
            iconLayout: 'default#image',
            iconImageHref: 'point.png',
            iconImageSize: [30, 30],
            iconImageOffset: [1, -30]
        });
    point_river_sisola.events.add(['click'], function (event) {
        let elem = document.querySelector("#river_sisola");
        elem.scrollIntoView({ block: "center", behavior: "smooth" });
    });
    myMap.geoObjects.add(point_river_sisola);

    let point_mangara = new ymaps.Placemark([65.042978, 59.759082], { hintContent: 'Гора Манарага' },
        {
            iconLayout: 'default#image',
            iconImageHref: 'point.png',
            iconImageSize: [30, 30],
            iconImageOffset: [5, -38]
        });
    point_mangara.events.add(['click'], function (event) {
        let elem = document.querySelector("#mangara");
        elem.scrollIntoView({ block: "center", behavior: "smooth" });
    });
    myMap.geoObjects.add(point_mangara);

    let point_erysei = new ymaps.Placemark([65.045503, 60.457241], { hintContent: 'Гора Еркусей' },
        {
            iconLayout: 'default#image',
            iconImageHref: 'point.png',
            iconImageSize: [30, 30],
            iconImageOffset: [5, -38]
        });
    point_erysei.events.add(['click'], function (event) {
        let elem = document.querySelector("#erysei");
        elem.scrollIntoView({ block: "center", behavior: "smooth" });
    });
    myMap.geoObjects.add(point_erysei);
}

var t;
    function up() {
        var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        if (top > 0) {
            window.scrollBy(0, -200);
            t = setTimeout('up()', 20);
        } else clearTimeout(t);
        return false;
    }

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
