let startTime = 0;

(function() {
    startTime = (new Date).getTime();
})();


window.onload = function() {
    let endTime = (new Date).getTime();
    let footer = document.querySelector('footer');
    footer.textContent += endTime - startTime + 'ms.';

    let links = document.getElementsByClassName("nav__link");
    for (let i = 0; i < links.length; i++)
    {
        if (links[i].href === window.location.href)
        {
            links[i].classList.add("nav___link__active");
        }
    }
}

