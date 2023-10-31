function calcular() {
    const F = Number(document.querySelector("#inputfrequencia").value); // frequência
    const C = Number(document.querySelector("#inputcomprimento").value); // comprimento da onda
    
    const v = F * C //fórmula para que seja calculado a velocidade da propagação da onda

    document.querySelector("#resultado").textContent = "V = velocidade: " + v.toFixed(2) +  "m/s"; // organiza a maneira que o resultado será apresentado e faz com que o resultado seja exibido na tela
   
}

document.addEventListener("DOMContentLoaded", () => {
    const calcularButton = document.querySelector("#calcular");
    calcularButton.addEventListener("click", calcular); // faz com que, quando o botão seja clicado, calcule a fórmula
});