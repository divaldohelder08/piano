alert("Lembrando que os sons podem ser tocados pelo teclado e também por um click nas teclas do piano")
        document.getElementById("b00").addEventListener("click",()=>{
            document.querySelector("audio#a15").play()
        }) 
        document.getElementById("b01").addEventListener("click",()=>{
            document.querySelector("audio#a16").play()
        }) 
        document.getElementById("b02").addEventListener("click",()=>{
            document.querySelector("audio#a17").play()
        }) 
         document.getElementById("b03").addEventListener("click",()=>{
            document.querySelector("audio#a18").play()
        }) 
        document.getElementById("b04").addEventListener("click",()=>{
            document.querySelector("audio#a19").play()
        }) 
        document.getElementById("b05").addEventListener("click",()=>{
            document.querySelector("audio#a20").play()
        }) 
        document.getElementById("b06").addEventListener("click",()=>{
            document.querySelector("audio#a21").play()
        }) 
        document.getElementById("b07").addEventListener("click",()=>{
            document.querySelector("audio#a22").play()
        }) 
        document.getElementById("b08").addEventListener("click",()=>{
            document.querySelector("audio#a23").play()
        }) 
        document.getElementById("b09").addEventListener("click",()=>{
            document.querySelector("audio#a24").play()
        }) 
        document.getElementById("b10").addEventListener("click",()=>{
            document.querySelector("audio#a14").play()
        }) 
         document.getElementById("b11").addEventListener("click",()=>{
            document.querySelector("audio#a13").play()
        }) 
         document.getElementById("b12").addEventListener("click",()=>{
            document.querySelector("audio#a12").play()
        }) 
         document.getElementById("b13").addEventListener("click",()=>{
            document.querySelector("audio#a11").play()
        }) 
        document.getElementById("b14").addEventListener("click",()=>{
            document.querySelector("audio#a10").play()
        }) 
         document.getElementById("b15").addEventListener("click",()=>{
            document.querySelector("audio#a09").play()
        }) 
         document.getElementById("b16").addEventListener("click",()=>{
            document.querySelector("audio#a08").play()
        }) 
         document.getElementById("b17").addEventListener("click",()=>{
            document.querySelector("audio#a07").play()
        }) 
        document.getElementById("b18").addEventListener("click",()=>{
            document.querySelector("audio#a06").play()
        }) 
         document.getElementById("b19").addEventListener("click",()=>{
            document.querySelector("audio#a05").play()
        }) 
         document.getElementById("b20").addEventListener("click",()=>{
            document.querySelector("audio#a04").play()
        }) 
         document.getElementById("b21").addEventListener("click",()=>{
            document.querySelector("audio#a03").play()
        }) 
        document.getElementById("b22").addEventListener("click",()=>{
            document.querySelector("audio#a02").play()
        }) 
         document.getElementById("b23").addEventListener("click",()=>{
            document.querySelector("audio#a01").play()
        }) 
        document.body.addEventListener("keypress",()=>{
           console.log(window.event.keyCode)
           let codico=window.event.keyCode
           if(codico>=49 || codico<=57 && codico>=97 || codico<=110){
                switch (codico){
                    case 48:
                        document.querySelector("audio#a15").play()
                    break;
                    case 49:
                        document.querySelector("audio#a16").play()
                    break;
                    case 50:
                        document.querySelector("audio#a17").play()
                    break;
                    case 51:
                        document.querySelector("audio#a18").play()
                    break;
                    case 52:
                        document.querySelector("audio#a19").play()
                    break;
                    case 53:
                        document.querySelector("audio#a20").play()
                    break;
                    case 54:
                        document.querySelector("audio#a21").play()
                    break;
                    case 55:
                        document.querySelector("audio#a22").play()
                    break;
                    case 56:
                        document.querySelector("audio#a23").play()
                    break;
                    case 57:
                        document.querySelector("audio#a24").play()
                    break;
                    case 97:
                        document.querySelector("audio#a01").play()
                    break;
                    case 98:
                        document.querySelector("audio#a02").play()
                    break;
                    case 99:
                        document.querySelector("audio#a03").play()
                    break;
                    case 100:
                        document.querySelector("audio#a04").play()
                    break;
                    case 101:
                        document.querySelector("audio#a05").play()
                    break;
                    case 102:
                        document.querySelector("audio#a06").play()
                    break;
                    case 103:
                        document.querySelector("audio#a07").play()
                    break;
                    case 104:
                        document.querySelector("audio#a08").play()
                    break;
                    case 105:
                        document.querySelector("audio#a09").play()
                    break;
                    case 106:
                        document.querySelector("audio#a10").play()
                    break;
                    case 107:
                        document.querySelector("audio#a11").play()
                    break;
                    case 108:
                        document.querySelector("audio#a12").play()
                    break;
                    case 109:
                        document.querySelector("audio#a13").play()
                    break;
                    case 110:
                        document.querySelector("audio#a14").play()
                    break;
                    default:
                        alert("O codico "+codico+" não está no intervalo de valores a inserir pelo teclado")
                    break;
                }
            }else
                alert("O codico "+codico+" não está no intervalo de valores a inserir pelo teclado")
        })