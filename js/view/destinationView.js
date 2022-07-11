import Views from "./view.js";

class DestinationView extends Views {
  moon = document.querySelector(".moon");
  mars = document.querySelector(".mars");
  europa = document.querySelector(".europa");
  titan = document.querySelector(".titan");

  planetImg = document.querySelector(".planet-img");
  planetNameElement = document.querySelector(".planet-name");
  planetDescriptionElement = document.querySelector(".short-description");

  planetDistanceValueElement = document.querySelector(".distance--value");
  planetTravelValueElement = document.querySelector(".travel--value");

  planetsClasses;

  addParameters() {
    this.planetsClasses = [this.moon, this.mars, this.europa, this.titan];
  }

  changePlanet(e) {
    renderPlanet(e.currentTarget.dataset.name);
  }

  addEventHandlers() {
    this.mars.addEventListener("click", changePlanet);
  }

  renderPlanet(planetName) {
    console.log(planetName);
    const planet = model.state.destination.find(
      (planet) => planetName === planet.name.toLowerCase()
    );
    planetImg.src = planet.images.webp;
    planetNameElement.innerHTML = planet.name;
    planetDescriptionElement.innerHTML = planet.description;
    planetDistanceValueElement.innerHTML = planet.distance;
    planetTravelValueElement.innerHTML = planet.travel;
  }
}

export default new DestinationView();
