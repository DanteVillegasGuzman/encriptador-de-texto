	function obtenerTexto()
	{
    	let txaencr=document.getElementById("txaencr");
		let cadena=txaencr.value;
		return cadena;
	}

	function mostrarrTexto(txt)
	{
    	let txadese=document.getElementById("txadese");
		txadese.value=txt;
		
	}

	function encriptar(text,key,value)
	{
		let indice=0;
		let encriptado=[];
		for(caracter of text)
		{
			let encontrado=false;
			for(var vocal=0;vocal<key.length;vocal++)
			{				
				if(caracter==key[vocal])
					{						
						encriptado[indice]=value[vocal];
						encontrado=true;
						break;
					}
			}
			if(!encontrado){encriptado[indice]=caracter}
			indice+=1;
		}
		return encriptado
	}

	function desencriptador(text,key,value)
	{
		var desencriptado=text;
		
		for(var elementos=0;elementos<key.length;elementos++)
		{
			desencriptado=desencriptado.replace(new RegExp(value[elementos],"g"),key[elementos])	
		}
		return desencriptado
	}
	function copiarTexto() 
	{
	    let txadese = document.getElementById("txadese");
		let lblcopi=document.querySelector(".lbl-copi");
		if(txadese.value!="")
		{			
			navigator.clipboard.writeText(txadese.value).then(
				() => {
					lblcopi.innerText="Texto copiado"
					
				setTimeout(()=>{
					lblcopi.innerText=" "
					
				}, 1000)
				
			});
		}		
	}
	function verificarTexto(evento)
	{	
        let buttencr=document.getElementById("buttencr");
	    let buttdese=document.getElementById("buttdese");
		let sectorout=document.getElementById("sectorout");
		let articleout=document.getElementById("articleout");
		let llaves=["a","e","i","o","u"]
		let valores=["ai","enter","imes","ober","ufat"]	
		let button=evento; //evento.target.id || window.event.target.className;
		let texto=obtenerTexto();
       if(texto.length!="")
	   {
		if(button=="buttencr")		
		{	            	
			sectorout.style.display="flex";	
			articleout.style.display="none";
			let textoencriptado=encriptar(texto,llaves,valores)
			mostrarrTexto(textoencriptado.join(""));
			
		}
		if(button=="buttdese")
		{  
			sectorout.style.display="flex";	
			articleout.style.display="none";          
			let textodesencriptado=desencriptador(texto,llaves,valores);
			mostrarrTexto(textodesencriptado);
		}
		if(button=="buttcopi")
		{
			let textodesencriptado=copiarTexto();
		}
		if(button=="buttpega")
		{
			let textodesencriptado=pegarTexto();
			mostrarrTexto(textodesencriptado);
		}
	   }
	   else{
		sectorout.style.display="none";	
		articleout.style.display="flex";
	   }		
	}
    function cambiarColorBoton(mensaje){
        let buttencr=document.getElementById("buttencr");
	    let buttdese=document.getElementById("buttdese");
        if(mensaje=='si')
        {
            buttencr.style.backgroundColor="#609ED4";
			buttencr.style.color="#0A3871";
            buttdese.style.backgroundColor="#0A3871";
			buttdese.style.color="#609ED4";            
        }
        if(mensaje=='no')
        {
            buttencr.style.backgroundColor="#0A3871";
			buttencr.style.color="#609ED4";
            buttdese.style.backgroundColor="#609ED4";
			buttdese.style.color="#0A3871";
        }
       

    }


	