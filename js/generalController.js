import { state } from "./model/model.js";

// ====================== DESTINATION VIEW =========================\\
//  =============== Variables for Destination View =================\\
const moon = document.querySelector(".moon");
const mars = document.querySelector(".mars");
const europa = document.querySelector(".europa");
const titan = document.querySelector(".titan");

const planetImg = document.querySelector(".planet-img");
const planetNameElement = document.querySelector(".planet-name");
const planetDescriptionElement = document.querySelector(".short-description");
const planetDistanceValueElement = document.querySelector(".distance--value");
const planetTravelValueElement = document.querySelector(".travel--value");
const planetsClasses = [moon, mars, europa, titan];

//  =============== FUnctions for Destination View =================\\
const renderDestination = function (planetName) {
  console.log(planetName);
  const planet = state.destination.find(
    (planet) => planetName === planet.name.toLowerCase()
  );

  document.querySelector(".moon").classList.remove("current-btn");
  planetImg.src = planet.images.webp;
  planetNameElement.innerHTML = planet.name;
  planetDescriptionElement.innerHTML = planet.description;
  planetDistanceValueElement.innerHTML = planet.distance;
  planetTravelValueElement.innerHTML = planet.travel;
};

const changePlanet = function (e) {
  const planetName = e.currentTarget.dataset.name;
  console.log(planetName);
  // render(planetName);

  console.log(planetName);
  const planet = state.destination.find(
    (planet) => planetName === planet.name.toLowerCase()
  );
  renderDestination(planetName);
};

const addDestinationEventHandlers = function () {
  moon.addEventListener("click", changePlanet);
  mars.addEventListener("click", changePlanet);
  europa.addEventListener("click", changePlanet);
  titan.addEventListener("click", changePlanet);
};
// =======================================================

// ====================== CREW VIEW =========================\\
//  =============== Variables for Destination View =================\\

const crewRole = document.querySelector(".crew--role");
const crewName = document.querySelector(".crew--name");
const crewBio = document.querySelector(".crew--bio");
const crewImage = document.querySelector(".crew--image");

// The button
const crewNavBtn = document.querySelectorAll(".crew--nav--btn");

const commander = document.querySelector(".commander");
const mission = document.querySelector(".mission");
const pilot = document.querySelector(".pilot");
const flight = document.querySelector(".flight");

const crewClassList = [commander, mission, pilot, flight];

const changeCrew = function (e) {
  const crewName = e.currentTarget.dataset.name;
  //   console.log(`crew name: ${crewName}`);
  const crewDetails = state.crew.find((crew) => {
    return crew.role.toLowerCase() === crewName;
  });
  console.log(crewDetails);
  changeActiveState(e.currentTarget);
  renderCrewDetails(crewDetails);
};

const renderCrewDetails = function (crewDetails) {
  crewRole.innerHTML = crewDetails.role;
  crewName.innerHTML = crewDetails.name;
  crewBio.innerHTML = crewDetails.bio;
  crewImage.src = crewDetails.images.webp;
};

// const changeActiveState = function (currentCrewMember) {
//   console.log(`current target: ${currentCrewMember}`);
//   // remove the active button class from the first button
//   document.querySelector(".one").classList.remove("crew--nav--active");

//   // add the active button class to the current button
//   currentCrewMember.classList.add("crew--nav--active");
// };

const changeActiveState = function (currentElement) {
  crewClassList.forEach((ele) => ele.classList.remove("crew--nav--active"));

  currentElement.classList.add("crew--nav--active");
};

const addCrewHandlers = function () {
  crewClassList.forEach((entry) => entry.addEventListener("click", changeCrew));
};

// =======================================================

// ====================== CREW VIEW =========================\\
//  =============== Variables for Destination View =================\\

const vehicle = document.querySelector(".vehicle");
const spaceShip = document.querySelector(".spaceship");
const capsule = document.querySelector(".capsule");

const techName = document.querySelector(".tech-name");
const techBio = document.querySelector(".tech-bio");
const technologyImg = document.querySelector(".technology--img");

const technologyList = [vehicle, spaceShip, capsule];

const changeTechnology = function (e) {
  const techName = e.currentTarget.dataset.name;
  console.log(`tech name: ${techName}`);
  const techDetails = state.technology.find((tech) => {
    console.log(tech.name.toLowerCase());
    return tech.name.toLowerCase() === techName;
  });
  console.log(techDetails);
  changeActiveTechState(e.currentTarget);
  renderTechDetails(techDetails);
};

const changeActiveTechState = function (currentElement) {
  technologyList.forEach((ele) => ele.classList.remove("tech--nav--active"));

  currentElement.classList.add("tech--nav--active");
};

const renderTechDetails = function (techDetails) {
  techName.innerHTML = techDetails.name;
  techBio.innerHTML = techDetails.description;
  technologyImg.src = techDetails.images.portrait;
};

const addTechnologyHandlers = function () {
  technologyList.forEach((entry) =>
    entry.addEventListener("click", changeTechnology)
  );
};

addTechnologyHandlers();
//addDestinationEventHandlers();
