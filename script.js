function hora() {
    const res = document.querySelector('.res'); // Seleciona o elemento de resultado
    const horario = new Date();
    const horas = horario.getHours();
    const minutos = horario.getMinutes();
    const segundos = horario.getSeconds();

    // Verifica o período do dia e exibe mensagens
    if (horas >= 21 || horas < 0) {
        alert('É hora de jantar!');
    } 
    else if (horas >= 0 && horas <= 5) {
        alert('É hora de estar dormindo.');
    } 
    else if (horas >= 6 && horas <= 12) {
        alert('Bora acordar! Já passou da hora.');
    } 
    else if (horas > 12 && horas <= 18) {
        alert('Já é de tarde! Hora de pensar no jantar.');
    } 
    else {
        alert('Você não é da Terra!');
    }
    // Atualiza o conteúdo do elemento com o horário atual formatado
    res.innerHTML = `Agora são ${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}
