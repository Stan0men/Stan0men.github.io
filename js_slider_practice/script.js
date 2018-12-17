const catImages = [
    "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495636.svg",
    "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495625.svg",
    "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495622.svg",
    "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495619.svg",
    "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495616.svg",
    "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495613.svg",
    "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495592.svg",
    "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495579.svg",
    "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/336916.svg"
];

function GetSlider(currentSlide = 0) {
    this.currentSlide = currentSlide;

    this.getCurrentSlide = function () {
        return `Current slide is ${currentSlide}`;
    };
    this.goToNextSlide = function (catImages) {
        if (currentSlide === catImages.length - 1) {
            currentSlide = 0
        } else {
            return currentSlide++
        }
    };
    this.goToPreviousSlide = function () {
        return currentSlide--;
    }
    this.goToExactSlide = function (n) {
        return `Your slide is ${currentSlide = n}`;
    }

}

let obj = new GetSlider();

console.log(obj.getCurrentSlide());
//console.log(obj.goToExactSlide(2));