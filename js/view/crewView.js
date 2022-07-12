import Views from "./view.js";
import { state } from "../model/model.js";

class CrewView extends Views {
  crewName = document.querySelector(".crew--nav--btn");

  addEventHandlers() {
    this.crewName.addEventListener("click", this.changeCrew);
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

  changeCrew(e) {
    const crewName = e.currentTarget.dataset.name;
    console.log(planetName);
    // this.render(planetName);

    // console.log(planetName);
    // const planet = state.destination.find(
    //   (planet) => planetName === planet.name.toLowerCase()
    // );
    // document.querySelector(".moon").classList.remove("current-btn");
    // document.querySelector(".planet-img").src = planet.images.webp;
    // document.querySelector(".planet-name").innerHTML = planet.name;
    // document.querySelector(".short-description").innerHTML = planet.description;
    // document.querySelector(".distance--value").innerHTML = planet.distance;
    // document.querySelector(".travel--value").innerHTML = planet.travel;
  }
}

export default new CrewView();
