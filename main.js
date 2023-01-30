alert("Bienvenido a MendoTravel")
let age = parseInt(prompt("Ingrese su edad"));
let greeting;

if (age >= 18) {
    greeting = "Para poder brindarle un mejor asesoramiento, necesitamos que nos brinde los siguientes datos";
    alert(greeting)
    operation();
} else {
    greeting = "No cuentas con la edad suficiente para contratar nuestros servicios";
    alert(greeting)
    exitMessage();
}

const carPrice = 5000;
const truckPrice = 8000;
let resultado = 0;

function operation() {
    let vehicle = prompt("¿Qué vehículo le gustaría alquilar?\nIngrese el número correspondiente: \n1- Auto \n2- Camioneta");
    switch (vehicle) {
        case "1": {
            let carDays = prompt("¿Por cuántos días desea alquilar?");
            total = carTax(carPrice, carDays);
            let email = prompt("Ingrese su email")
            let confirmation = prompt("El total a pagar es de: $ " + total + " ARS. ¿Desea continuar con la reserva? (Responda si o no)");
            if (confirmation === "si") {
                alert("Reserva realizada, los datos de la misma serán enviados a su correo electrónico" + email);
                break;
            }
            else if (confirmation === "no") {
                exitMessage()
            } break;
        }
        case "2": {
            let truckDays = prompt("¿Por cuántos días desea alquilar?");
            total = truckTax(truckPrice, truckDays);
            let email = prompt("Ingrese su email")
            let confirmation = prompt("El total a pagar es de: $ " + total + " ARS. ¿Desea continuar con la reserva? (Responda si o no)");
            if (confirmation === "si") {
                alert("Reserva realizada, los datos de la misma serán enviados a su correo electrónico " + email);
                break;
            }
            else if (confirmation === "no") {
                exitMessage()
            } break;
        }

        default: {
            invalidMessage();
        }
    }
}

function carTax(carPrice, days) {
    return (carPrice * days);
}

function truckTax(truckPrice, days) {
    return (truckPrice * days);
}

function exitMessage() {
    alert("Hasta pronto, que tenga un buen día!");
}

function invalidMessage() {
    alert("El dato introducido es incorrecto");
}