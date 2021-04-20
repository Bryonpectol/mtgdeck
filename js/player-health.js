let playerHealth = document.getElementById("health");

let num = 20;

function Add() {

    num += 1;

    playerHealth.textContent = num;

    console.log(playerHealth)
}

function Subtract() {

    num -= 1;

    playerHealth.textContent = num;

    console.log(playerHealth)
}

