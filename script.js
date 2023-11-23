"use strict";
randomizePositions();

let btnEl = document.querySelector("#btn");
btnEl.addEventListener("click", randomizePositions);

function randomizePositions() {
  // Get references to the elements
  let mouth = document.querySelector("#mouth");
  let eyeLeft = document.querySelector("#eyeLeft");
  let eyeRight = document.querySelector("#eyeRight");
  let circle = document.querySelector("#circle");

  // Get the dimensions of the circle
  let circleRect = circle.getBoundingClientRect();
  let circleRadius = circleRect.width / 2;

  // Generate random polar coordinates for the mouth with an offset
  let offset = 0.1;
  let randomRadiusMouth =
    offset * circleRadius + Math.random() * (1 - offset) * circleRadius;
  let randomAngleMouth = Math.random() * 2 * Math.PI;

  // Generate random polar coordinates for the eyes
  let randomRadiusEyeLeft = Math.random() * circleRadius;
  let randomAngleEyeLeft = Math.random() * 2 * Math.PI;

  let randomRadiusEyeRight = Math.random() * circleRadius;
  let randomAngleEyeRight = Math.random() * 2 * Math.PI;

  // Convert polar coordinates to Cartesian coordinates
  let randomLeftMouth =
    circleRadius +
    randomRadiusMouth * Math.cos(randomAngleMouth) -
    mouth.offsetWidth / 2;
  let randomTopMouth =
    circleRadius +
    randomRadiusMouth * Math.sin(randomAngleMouth) -
    mouth.offsetHeight / 2;
  let randomRotationMouth = Math.floor(Math.random() * 360); // Random rotation in degrees

  let randomLeftEyeLeft =
    circleRadius +
    randomRadiusEyeLeft * Math.cos(randomAngleEyeLeft) -
    eyeLeft.offsetWidth / 2;
  let randomTopEyeLeft =
    circleRadius +
    randomRadiusEyeLeft * Math.sin(randomAngleEyeLeft) -
    eyeLeft.offsetHeight / 2;

  let randomLeftEyeRight =
    circleRadius +
    randomRadiusEyeRight * Math.cos(randomAngleEyeRight) -
    eyeRight.offsetWidth / 2;
  let randomTopEyeRight =
    circleRadius +
    randomRadiusEyeRight * Math.sin(randomAngleEyeRight) -
    eyeRight.offsetHeight / 2;

  // Apply random positions and rotation to the mouth
  mouth.style.left = randomLeftMouth + "px";
  mouth.style.top = randomTopMouth + "px";
  mouth.style.transform = "rotate(" + randomRotationMouth + "deg)";

  // Apply random positions to the eyes
  eyeLeft.style.left = randomLeftEyeLeft + "px";
  eyeLeft.style.top = randomTopEyeLeft + "px";

  eyeRight.style.left = randomLeftEyeRight + "px";
  eyeRight.style.top = randomTopEyeRight + "px";
}
