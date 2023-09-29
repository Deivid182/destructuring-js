import dataJson from './data.json' assert { type: 'json' };

const data = JSON.parse(JSON.stringify(dataJson));

const newArray = structuredClone(data);

newArray[0].cotizacion.cliente.nombre = 'Stephen';
newArray[0].cotizacion.cliente.apellidoPat = 'Strange';
newArray[0].cotizacion.cliente.nombre = 'Doctor Strange';
newArray[0].cotizacion.cliente.direccion.ciudad = 'New York';
newArray[0].cotizacion.cliente.direccion.pais = 'USA';
newArray[0].cotizacion.cliente.direccion.poblacion = '177A Bleecker Street';
newArray[0].cotizacion.cliente.direccion.colonia = 'Greenwich Village';
newArray[0].cotizacion.cliente.direccion.codPostal = '10001';
newArray[0].cotizacion.cliente.edad = '40';
newArray[0].cotizacion.cliente.genero = 'Male';
newArray[0].cotizacion.cliente.email = 'strange@email.com';

console.log(data)
console.log(newArray)

