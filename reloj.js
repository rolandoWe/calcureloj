
let Hora=document.querySelector('.hora')
let Segundo=document.querySelector('.segundos');
let AM=document.querySelector('.ampm');
let Anio=document.querySelector('.anio');
let Fecha=document.querySelector('.fecha');
let am=null;

function reloj(){
    let dato=new Date();

    let hora=dato.getHours()
    let minuto=dato.getMinutes()
    let segundo=dato.getSeconds()
    let anio=dato.getFullYear()
    let diaFecha=dato.getDate()
    let Dia=dato.getDay()
    let Mes=dato.getMonth()

    let Dias=["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"];
    let DiaHoy=Dias[Dia];

    let Meses=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
    let MesActual=Meses[Mes]

    am=(hora>12?"PM":"AM")

    // hora=(hora>12?hora-12:hora)
    if(hora>12){
        hora=hora-12
    }else{
        hora=hora
    }
    minuto=(minuto<10?"0"+minuto:minuto)
    segundo=(segundo<10?"0"+segundo:segundo)


    Segundo.innerHTML=segundo;
    Hora.innerHTML=hora+" : "+minuto;
    AM.innerHTML=am;
    Anio.innerHTML=anio;
    Fecha.innerHTML=DiaHoy+" / "+diaFecha+" / "+MesActual
}
reloj()
setInterval(reloj,1000)