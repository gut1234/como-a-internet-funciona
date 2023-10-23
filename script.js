function separa(){
    let div = document.getElementById('imagemgalo')
    let i = 0 
    let galo1 = new Image , galo2 = new Image, galo3 = new Image, galo4 = new Image, envelopeAberto = new Image, envelopeFechado = new Image
    galo1.src  ='recursos/galo1.png'
    galo2.src  ='recursos/galo2.png'
    galo3.src  ='recursos/galo3.png'
    galo4.src  ='recursos/galo4.png'
    tamanhoDosPacotes = {
        x:47,
        y:47
    }
    tela = window.innerWidth/2 - 75
    telay = 100
    let i2 = 0
    div.appendChild(galo1)
    div.appendChild(galo2)
    div.appendChild(galo3)
    div.appendChild(galo4)
    galo1.style.position = 'absolute'
    galo2.style.position = 'absolute'
    galo3.style.position = 'absolute'
    galo4.style.position = 'absolute'
    let jlk = true
    function anima(){
        if(i < 15){
        i += 0.5
        galo1.style.top = telay +'px'
        galo1.style.left = tela +'px'
        galo2.style.top = telay +'px'
        galo2.style.left = (tamanhoDosPacotes.x + i + tela) +'px'
        galo3.style.top = tamanhoDosPacotes.y+ i + telay +'px'
        galo3.style.left = tela +'px'
        galo4.style.top = tamanhoDosPacotes.y + i + telay+'px'
        galo4.style.left = tamanhoDosPacotes.x + i +tela +'px'
        requestAnimationFrame(anima)}
        else{
           setTimeout(isola , 1000)
        }
    }
   
    function isola(){
         if(i2 < tamanhoDosPacotes.x * 2 + 18 ){
            galo1.style.left = tela - i2 +'px'
            galo2.style.left = tamanhoDosPacotes.x + 15 - i2 + tela +'px' 
            galo3.style.left = tela - i2 +'px'
            if(i2 >= tamanhoDosPacotes.x && jlk){
                div.removeChild(galo1)
                div.removeChild(galo3)
                jlk = false
            }
            if(i2 >= tamanhoDosPacotes.x * 2 + 15){
                div.removeChild(galo2)
            }
            i2+=2
          requestAnimationFrame(isola)  
         }else{
            setTimeout(binariza , 1000)
         }                                                                                                                                
           
    }
    function binariza(){
        galo4.src = 'recursos/binarios.png'
    }
    anima()
    }
    function onda(){
        let cnv1 = document.getElementById('cnv1')
        let ctx1 = cnv1.getContext('2d')
        let i = 0
        let imgondas = new Image
        imgondas.src = 'recursos/ondas.png'
        function animaa(){
            if(i < cnv1.width + 1){
            ctx1.clearRect(0 , 0 , cnv1.width , cnv1.height)
            ctx1.drawImage(imgondas , i , 0)
            i+=1
            requestAnimationFrame(animaa)}
        }
        animaa()
    }
    function eletrificar(){
        let fioy = 10;
        let indice = 0;
        let cnv2 = document.getElementById('cnv2')
        let ctx2 = cnv2.getContext('2d')
        function enviar() {
            ctx2.clearRect(0, 0, cnv2.width, cnv2.height);
            ctx2.fillStyle = 'rgb(12, 91, 198)';
            ctx2.fillRect(0, cnv2.height / 2, cnv2.width, fioy);
            ctx2.fillStyle = 'black';
            let i2 = 0;
            let i3 = 25;
        
            for (let i = 0; i < 20; i++) {
                i3 = i * 50 + 25;
                i2 = i * 50;
                ctx2.fillStyle = 'black';
        
                if (indice % 2 == 0) {
                    ctx2.fillStyle = 'yellow';
                }
        
                ctx2.fillRect(i2, cnv2.height / 2 + 2, 25, fioy - 4);
                ctx2.fillStyle = 'black';
        
                if (indice % 2 != 0) {
                    ctx2.fillStyle = 'yellow';
                }
        
                ctx2.fillRect(i3, cnv2.height / 2 + 2, 25, fioy - 4);
            }
        
            indice++;
        }
        setInterval(enviar , 500)
    }
    function eletrificar2(){
        let fioy = 10;
        let indice = 0;
        let cnv3 = document.getElementById('cnv3')
        let ctx3 = cnv3.getContext('2d')
        function enviar() {
            ctx3.clearRect(0, 0, cnv3.width, cnv3.height);
            ctx3.fillStyle = 'rgb(12, 91, 198)';
            ctx3.fillRect(0, cnv3.height / 2, cnv3.width, fioy);
            ctx3.fillStyle = 'black';
            let i2 = 0;
            let i3 = 25;
        
            for (let i = 0; i < 20; i++) {
                i3 = i * 50 + 25;
                i2 = i * 50;
                ctx3.fillStyle = 'black';
        
                if (indice % 2 == 0) {
                    ctx3.fillStyle = 'yellow';
                }
        
                ctx3.fillRect(i2, cnv3.height / 2 + 2, 25, fioy - 4);
                ctx3.fillStyle = 'black';
        
                if (indice % 2 != 0) {
                    ctx3.fillStyle = 'yellow';
                }
        
                ctx3.fillRect(i3, cnv3.height / 2 + 2, 25, fioy - 4);
            }
        
            indice++;
        }
        setInterval(enviar , 500)
    }
    function popUp1(){
        window.open('https://bellunotec.com.br/wp-content/uploads/2018/05/188768-como-montar-um-provedor-de-internet-4-coisas-que-voce-precisa-saber.jpg')
    }
    function popUp2(){
        window.open('https://th.bing.com/th/id/R.7761a28c9ebe97ec7b3b5b49245e13fe?rik=V6i6g5X4LLE44w&pid=ImgRaw&r=0')   }