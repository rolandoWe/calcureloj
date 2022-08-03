
let n1=document.querySelector('.pantalla_uno');
let n2=document.querySelector('.pantalla_dos');
let resultado=document.querySelector('.pantalla_tres');

let Sumar=document.querySelector('.mas')

function sumar(){
   let num1=Number(n1.value);
   let num2=Number(n2.value);
   let res=Number(num1+num2)
      res=Math.round(res)
    // console.log(num1+num2)
    resultado.innerHTML=res

}
function restar(){
    let num1=Number(n1.value);
    let num2=Number(n2.value);
    let res=Number(num1-num2);
        res=Math.round(res)
    //  console.log(num1-num2)
     resultado.innerHTML=res

}
function multiplicar(){
    let num1=Number(n1.value);
    let num2=Number(n2.value);
 
    //  console.log(num1*num2)
     let res=Number(num1*num2);
         res=Math.round(res)
     resultado.innerHTML=res

}
function division(){
    let num1=Number(n1.value);
    let num2=Number(n2.value);
 
    //  console.log(num1/num2)
     let res=Number(num1/num2)
         res=Math.round(res)
        //  res=res.substring(0,res.length-1)
        //  console.log(typeof res)
     resultado.innerHTML=res

}

document.querySelector('.botones').addEventListener('click',function(b){
    // console.log(b.target)
    if(b.target.className==="mas"){
        // console.log('sumanr')
        sumar()
    }else if(b.target.className==="menos"){
        restar()
    }else if(b.target.className==="por"){
        multiplicar()
    }else if(b.target.className==="entre"){
        if(n1.value!=""&&n2.value!=""){
            division()
        }
    }else if(b.target.className==="clear"){
        n1.value="";
        n2.value="";
        resultado.innerHTML=0
    }
})