function hoverTitles(){
    let titles = document.querySelectorAll('.hover__title-1')
    let arrayTitles = Array.from(titles)
    console.log(arrayTitles);

    setTimeout(() => {
        arrayTitles.forEach(element => {
            element.classList.add('h1__active')
            element.classList.remove('hover__title-1')
        });
    }, 500);
}

hoverTitles()