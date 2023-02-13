alert("Bienvenido a MendoTravel")
let name = prompt("Ingrese su nombre");
let age = parseInt(prompt("Ingrese su edad"));
let greeting = "";
let resultado = 0;
let days = 0;
let type = "";
let email = "";
let vehicle = "";

while (age >= 18) {
    greeting = "Para poder brindarle un mejor asesoramiento, necesitamos que nos brinde los siguientes datos";
    alert(greeting)
    type = prompt("¿Qué vehículo le gustaría alquilar?\nIngrese el número correspondiente: \n1- Auto \n2- Camioneta");
    if (!type.includes("1") && !type.includes("2")) {
        invalidMessage();
    }

    email = prompt("Ingrese su email")
    days = prompt("¿Por cuántos días le gustaría presupuestar?")
    function exitMessage() {
        alert("Hasta pronto, que tenga un buen día!");
    }

    function invalidMessage() {
        alert("El dato introducido es incorrecto");
    }

    class Client {
        constructor(name, age, days, vehicle, email) {
            this.name = name;
            this.age = age;
            this.days = days;
            this.vehicle = vehicle;
            this.email = email;
        }
    }

    const client = new Client(name, age, days, vehicle, email);
    console.log(client);

    class Vehicle {
        constructor(brand, name, year, cost, type) {
            this.brand = brand;
            this.name = name;
            this.year = year;
            this.cost = cost;
            this.type = type;
        }
    }
    const vehiclesArray = [];

    const corsa = new Vehicle("Chevrolet", "Corsa", "2017", 7000, "1")
    const kwid = new Vehicle("Renault", "Kwid", "2018", 9000, "1");
    const palio = new Vehicle("Fiat", "Palio", "2016", 8500, "1");
    const p308 = new Vehicle("Peugeot", "308", "2017", 10000, "1");
    const sandero = new Vehicle("Renault", "Sandero", "2017", 12000, "1");
    const renegade = new Vehicle("Jeep", "Renegade", "2018", 18500, "2");
    const spin = new Vehicle("Chevrolet", "Spin", "2018", 21000, "2");
    const ecoSport = new Vehicle("Ford", "Eco Sport", "2016", 14000, "2");

    vehiclesArray.push(corsa, kwid, palio, p308, sandero, renegade, spin, ecoSport);

    const arrayFiltered = vehiclesArray.filter(vehicle => (vehicle.type === type))

    console.log(arrayFiltered);

    function calculateCost(price, days) {
        return (price * days)
    }
    const arrayPrices = [];
    arrayFiltered.forEach(element => {
        let cost = calculateCost(element.cost, days);
        const vehicle = new Vehicle(element.brand, element.name, element.year, cost, element.type)
        arrayPrices.push(vehicle);
    });

    console.log(arrayPrices);
    alert("¡Gracias! Se han enviado los presupuestos a: " + email)
    break;
}
if (age < 18) {
    greeting = "No cuentas con la edad suficiente para contratar nuestros servicios";
    alert(greeting)
    exitMessage();
}