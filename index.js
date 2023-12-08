const city = document.querySelector("#city-select");
const count = document.querySelector("#count");
const cityName = document.querySelector("#city-name");

city.addEventListener("change", () => {
    if (!city.value) {
        return false;
    }
    fetch(`https://jasonkerr.github.io/${selectClass.value}.json`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            cityName.textContent = city.options[city.selectedIndex].textContent;
            count.textContent = getVotersCount(data);
        });
});

function getVotersCount(ages) {
    console.log(ages);
    const legalVotingAges = ages.filter(function(age) {
        return age >= 18;
    });
    return legalVotingAges.length;
}
