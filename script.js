function somar() {
    var campo1 = parseInt(document.getElementById("campo1").value);
    var campo1 = parseInt(document.getElementById("campo2").value);
    // Pega o valor do campo 1 e campo 2
    // Tudo que o usuário digita mesmo sendo número o JS entende como string
    // O parseInt interpreta essa string para inteiro resolvendo essa questão 
    var soma = campo1 + campo2;
    // Efetua a operação das variáveis
    alert(soma);
    // Exibe o resultado com o alert
}