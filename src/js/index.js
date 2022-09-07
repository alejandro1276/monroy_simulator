const buscar = document.getElementById('search');
const run = document.getElementById('run');



const d1 = document.getElementById('d1'); d1.value="0";
const d2 = document.getElementById('d2'); d2.value="0";
const d3 = document.getElementById('d3'); d3.value="0";
const d4 = document.getElementById('d4'); d4.value="0";
const d5 = document.getElementById('d5'); d5.value="0";
const d6 = document.getElementById('d6'); d6.value="0";


const r1 = document.getElementById('r1'); r1.value="0";
const r2 = document.getElementById('r2'); r2.value="0";
const r3 = document.getElementById('r3'); r3.value="0";
const r4 = document.getElementById('r4'); r4.value="0";
const r5 = document.getElementById('r5'); r5.value="0";
const r6 = document.getElementById('r6'); r6.value="0";


const a1 = document.getElementById('a1'); a1.value="0";
const a2 = document.getElementById('a2'); a2.value="0";
const a3 = document.getElementById('a3'); a3.value="0";
const a4 = document.getElementById('a4'); a4.value="0";
const a5 = document.getElementById('a5'); a5.value="0";
const a6 = document.getElementById('a6'); a6.value="0";


run.onclick = ()=>{

    let datos = [0,0,0,0,0,0,0]
    let sum = 0;


    for(i=0 ; i<parseInt(buscar.value); i++)

    {  
        tirada=Math.round(6*Math.random(1)+0.5)  ;  
        datos[tirada]=datos[tirada]+1;
    }

    
    d1.value = datos[1];
    a1.value = datos[1];
    r1.value = datos[1] / buscar.value
    

    sum = datos[1] 
    
    d2.value = datos[2];
    r2.value = datos[2] / buscar.value
    a2.value = parseInt(a1.value) + datos[2];

    sum +=  datos[2] 
    
    d3.value = datos[3];
    r3.value = datos[3] / buscar.value
    a3.value = parseInt(a2.value)+ datos[3];

    sum +=  datos[3] 

    d4.value = datos[4];
    r4.value = datos[4] / buscar.value
    a4.value = parseInt(a3.value)+ datos[4];

    sum +=  datos[4] 

    d5.value = datos[5];
    r5.value = datos[5] / buscar.value
    a5.value = parseInt(a4.value) + datos[5];

    sum +=  datos[5] 

    
    d6.value = datos[6];
    r6.value = datos[6] / buscar.value
    a6.value = parseInt(a5.value)+ datos[6];
    

    // Obtener una referencia al elemento canvas del DOM
    const grafica = document.getElementById('grafica').getContext('2d');
    
        // Las etiquetas son las que van en el eje X. 
    const etiquetas = ["1", "2", "3", "4","5", "6"]
    // Podemos tener varios conjuntos de datos. Comencemos con uno
    const dados = {
        label: "Cara de dados",
        data: [d1.value,d2.value,d3.value,d4.value,d5.value,d6.value], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        backgroundColor: 'rgba(0, 0, 99, 1)', // Color de fondo
        borderColor: 'rgba(255, 0, 0, 0)', // Color del borde
        borderWidth: 3,// Ancho del borde
    };
    
    new Chart(grafica, {
        type: 'bar',// Tipo de gráfica
        data: {
            labels: etiquetas,
            datasets: [
                dados,
                // Aquí más datos...
            ],
            
            
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
            },
        }
    });
}

