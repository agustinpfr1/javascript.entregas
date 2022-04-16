let monto = parseInt(prompt("Ingrese monto"))
let interes = parseInt(prompt("Ingrese % de interés"))
let cuotas = parseInt(prompt("Ingrese número de cuotas"))

const valorCuota = () => ((monto + (monto * (interes/100))) / cuotas)

document.write("Tienes que pagar " + cuotas + " cuotas" + " de " + "$" + (Math.round(valorCuota() * 100) / 100))

