window.addEventListener("load", init);

function ID(elem) {
    return $('#idnev')(elem);
}

function CLASS(elem) {
    return $('.classnev')(elem);
}

function QS(elem) {
    return document.getElementsByTagName(elem);
}

const hatter = "kepek/hatter.jpg"

const kepTomb = ["kepek/kep1.jpg", "kepek/kep2.jpg", "kepek/kep3.jpg", "kepek/kep4.jpg", "kepek/kep5.jpg", "kepek/kep6.jpg", "kepek/kep7.jpg", "kepek/kep8.jpg", "kepek/kep9.jpg", "kepek/kep10.jpg", "kepek/kep11.jpg", "kepek/kep12.jpg", "kepek/kep13.jpg", "kepek/kep14.jpg", "kepek/kep15.jpg", "kepek/kep16.jpg", "kepek/kep17.jpg", "kepek/kep18.jpg", "kepek/kep19.jpg", "kepek/kep20.jpg"]

const kivalasztottTomb = [];
//res= kepTomb.concat(kepTomb);
function init() {
    let txt = "";
    const galeria = $('#idnev')("galeria")

    kepTomb.forEach(function (elem, index) {
        txt += `<div><img id="${index}" src="${hatter}" alt="szorny"></div>`;
    })
    console.log(txt);

    galeria.prepend('txt');

    const kepElemTomb = $('css selector')("#galeria div img");
    console.log(kepElemTomb)
    kepElemTomb.forEach(function (elem) {
        elem.on('click','megfordit')
    })
}
function megfordit() {
    console.log(event.target)
    let aktualisElem = Number(event.target.id);
    event.target.src = kepTomb[aktualisElem];
    kivalasztottTomb.push(aktualisElem);
    console.log(kivalasztottTomb)
    if (kivalasztottTomb.length === 2) {
        let feltetel=kepTomb[kivalasztottTomb[0]]===kepTomb[kivalasztottTomb[1]]
        if (!feltetel) {
            setTimeout(function () {
                kivalasztottTomb.forEach(function (elem) {
                    $('#idnev')(elem).src = hatter;
                })
                kivalasztottTomb.splice(0);
            }, 1000);    
        } else{
            setTimeout(function () {
                kivalasztottTomb.forEach(function (elem) {
                    $('#idnev')(elem).display="none";
                })
                kivalasztottTomb.splice(0);
                kivalasztottKepek.pop();
                kivalasztottKepek.pop();
            }, 1000);    
        }
        
    }
}