
var rateInclusion= document.querySelector('.rate');
const modal = document.querySelector('.modal');
rateInclusion.addEventListener('click',(e)=>
{e.preventDefault();
    modal.classList.add('modal_show');
    
});

function traerDatos() {
    const pintados = new XMLHttpRequest();
    pintados.open('GET', 'carsJSON.json', true);
    pintados.send();
    pintados.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
             console.log(datos);
            let print= document.querySelector('.modal_show');
            print.innerHTML='';
            for ( item in datos){
                print.innerHTML+=`
                <tr>
                        <td>${item.cars}</td>
                        <td>${item.B}</td> 
                        <td>${item.C}</td>
                        <td>${item.C}</td>
                    </tr>
                `
                
            }
        }
    }
}
; traerDatos();
