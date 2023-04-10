const horas = document.getElementById('horas');
const minutos = document.getElementById('min');
const seg = document.getElementById('seg');


const relogio = setInterval(function time(){
    // METODOS PARA PEGAR HORA , MINUTOS E SEGUNDOS 
    let data = new Date();
    let h = data.getHours()
    let m = data.getMinutes()
    let s = data.getSeconds()
    
    

    // ADICIONAR "0" SE O VALOR FOR MENOR QUE 10
    if( h < 10 ) h = '0' + h;
    if( m < 10 ) m = '0' + m;
    if( s < 10 ) s = '0' + s;
    

    // TEXT.CONTENT TROCA A O QUE ESTÁ ESCRITO 
    horas.textContent = h;
    minutos.textContent = m;
    seg.textContent = s;

},);