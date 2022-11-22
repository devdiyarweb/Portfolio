function hoverTitles(){
    let array1 = [1, 2, 3]
    let titles = document.querySelectorAll('.hover__title-1')
    let arrayTitles = Array.from(titles)
    console.log(arrayTitles);

    setTimeout(() => {
        arrayTitles.forEach(element => {
            element.classList.add('h1__active')
            element.classList.remove('hover__title-1')
        });
        // arrayTitles.forEach().classList.add('h1__active')
        // arrayTitles.classList.add('h1__active');
        // arrayTitles.classList.remove('hover__title-1')
    }, 500);
}

hoverTitles()