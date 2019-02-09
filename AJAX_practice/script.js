// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "https://api.punkapi.com/v2/beers");
// oReq.send();
//
//
// function reqListener() {
//     const beers = JSON.parse(this.responseText);
//     //console.log(JSobjs[0].name)
//     let theStrongestBeer = beers[0];
//
//     beers.forEach((beer) => {
//        if(theStrongestBeer.abv < beer.abv){
//            theStrongestBeer = beer;
//        }
//     });
//     console.log(theStrongestBeer);
// }

fetch("https://api.punkapi.com/v2/beers")
    .then (function (response) {
        console.log(response.json());
    })
    .then(function (beers) {
        const ebc = 50;
    })
}
