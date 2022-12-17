
// Array de instrumentos musicales

/* 1) Hacer un array de objetos que tenga 15 productos. Cada objeto deberá tener las siguientes propiedades:
    - id --> number
    - producto --> nombre del producto
    - precio --> number
    - fechaVencimiento (en el caso de que tenga una) ---> string
    - descripción --> string
    - categoría (si tiene una) ---> string
    - oferta (booleano) --> true o false */


const instrumentos = [
    {
        "id": 1,
        "producto": "Gibson Les Paul 80s",
        "precio": 3500,
        "fechaIngresoDeposito": "18/10/2003",
        "descripcion": "Guitarra eléctrica marca Gibson, modelo Les Paul réplica año 1980.",
        "categoria": "Guitarra",
        "oferta": false
    }, {
        "id": 2,
        "producto": "Fender American Vintage II",
        "precio": 2100,
        "fechaIngresoDeposito": "19/03/2005",
        "descripcion": "Guitarra eléctrica marca Fender, modelo réplica año 1961.",
        "categoria": "Guitarra",
        "oferta": true
    },  {
        "id": 3,
        "producto": "Ibanez Scott LePage",
        "precio": 1500,
        "fechaIngresoDeposito": "20/10/2007",
        "descripcion": "Guitarra eléctrica Ibanez, modelo signature Scott LePage.",
        "categoria": "Guitarra",
        "oferta": false
    }, {
        "id": 4,
        "producto": "Ibanez TOD10N Tim Henson",
        "precio": 700,
        "fechaIngresoDeposito": "18/10/2022",
        "descripcion": "Guitarra acústica de cuerdas de nylon marca Ibanez, modelo signature Tim Henson.",
        "categoria": "Guitarra",
        "oferta": false
    }, {
        "id": 5,
        "producto": "Gibson Les Paul Standard 60s",
        "precio": 2800,
        "fechaIngresoDeposito": "19/09/2022",
        "descripcion": "Guitarra eléctrica marca Gibson, modelo Les Paul réplica año 1960.",
        "categoria": "Guitarra",
        "oferta": true
    }, {
        "id": 6,
        "producto": "Fender American Vintage II Telecaster",
        "precio": 2250,
        "fechaIngresoDeposito": "07/02/2022",
        "descripcion": "Guitarra eléctrica marca Fender, modelo Telecaster American Vintage.",
        "categoria": "Guitarra",
        "oferta": true
    }, {
        "id": 7,
        "producto": "Fender Special Edition Mustang PJ Bass",
        "precio": 750,
        "fechaIngresoDeposito": "05/05/2011",
        "descripcion": "Bajo Eléctrico marca Fender, modelo Mustang.",
        "categoria": "Bajo",
        "oferta": false
    }, {
        "id": 8,
        "producto": "Squier Affinity Series Precision Bass",
        "precio": 270,
        "fechaIngresoDeposito": "09/08/2018",
        "descripcion": "Bajo eléctrico marca Squier. Modelos Precision Bass Affinity.",
        "categoria": "Bajo",
        "oferta": false
    }, {
        "id": 9,
        "producto": "Fender Custom Shop Jazz Bass Heavy Relic",
        "precio": 4900,
        "fechaIngresoDeposito": "07/07/2022",
        "descripcion": "Bajo Eléctrico marca Fender, modelo Jazz Bass Custom Shop. Heavy Relic.",
        "categoria": "Bajo",
        "oferta": true
    }, {
        "id": 10,
        "producto": "Nord Stage 3 88 Keys",
        "precio": 4200,
        "fechaIngresoDeposito": "11/11/2022",
        "descripcion": "Sintetizador Nord 3 de 88 teclas. Modelo Stage.",
        "categoria": "Sintetizador",
        "oferta": false
    }, {
        "id": 11,
        "producto": "Moog Minimoog Model D",
        "precio": 5000,
        "fechaIngresoDeposito": "01/09/2012",
        "descripcion": "Sintetizador analógico marca Moog, modelo Minimoog.",
        "categoria": "Sintetizador",
        "oferta": true
    }, {
        "id": 12,
        "producto": "Roland Juno DS-88",
        "precio": 1000,
        "fechaIngresoDeposito": "16/10/2022",
        "descripcion": "Sintetizador Roland Juno, modelo DS-88.",
        "categoria": "Sintetizador",
        "oferta": false
    }, {
        "id": 13,
        "producto": "Korg Minilogue XD",
        "precio": 600,
        "fechaIngresoDeposito": "05/06/2021",
        "descripcion": "Sintetizador analógico Korg, modelo Minilogue XD.",
        "categoria": "Sintetizador",
        "oferta": true
    }, {
        "id": 14,
        "producto": "Rode NT1A",
        "precio": 250,
        "fechaIngresoDeposito": "07/03/2021",
        "descripcion": "Micrófono condensador Rode NT1A.",
        "categoria": "Microfono",
        "oferta": true
    }, {
        "id": 15,
        "producto": "Audio-Technica AT2020",
        "precio": 100,
        "fechaIngresoDeposito": "22/01/2021",
        "descripcion": "Micrófono condensador marca Audio-Technica modelo AT2020.",
        "categoria": "Microfono",
        "oferta": false
    }
]