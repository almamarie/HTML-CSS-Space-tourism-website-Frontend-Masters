import Views from "./view.js";
import { state } from "../model/model.js";

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

  addEventHandlers() {
    this.moon.addEventListener("click", this.changePlanet);
    this.mars.addEventListener("click", this.changePlanet);
    this.europa.addEventListener("click", this.changePlanet);
    this.titan.addEventListener("click", this.changePlanet);
  }

  render(planetName) {
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

  changePlanet(e) {
    const planetName = e.currentTarget.dataset.name;
    console.log(planetName);
    // this.render(planetName);

    console.log(planetName);
    const planet = state.destination.find(
      (planet) => planetName === planet.name.toLowerCase()
    );
    document.querySelector(".moon").classList.remove("current-btn");
    document.querySelector(".planet-img").src = planet.images.webp;
    document.querySelector(".planet-name").innerHTML = planet.name;
    document.querySelector(".short-description").innerHTML = planet.description;
    document.querySelector(".distance--value").innerHTML = planet.distance;
    document.querySelector(".travel--value").innerHTML = planet.travel;
  }
}

export default new DestinationView();
