/*Tarea: Sistema de pacientes

1 - Crea una clase para crear objetos con datos de pacientes.
Los datos serían:
- Nombre
- Fecha de nacimiento
- Género
- DNI
- Dirección
- Teléfono
- email
- número de historia clínica
- Enfermedad pre-existente

La clase debe tener las siguientes funciones:
- mostrarDatosPersonales: Lista en pantalla los datos nombre, DNI, dirección, teléfono y email.
- mostrarDatosClinicos: Lista en pantalla los datos nombre, DNI, número de historia clínica y enfermedad pre-existente.

2 - Escribe una función que te permita agregar pacientes a un array y al finalizar muestre los datos clínicos de los mismos.

3 - Escribe una función que permita eliminar un paciente por su DNI.

4 - Escribe una función que permita buscar pacientes por DNI y otra que permita hacer la búsqueda por nombre (puede devolver más de un paciente que coincida con la búsqueda).*/

//1 - crear clase
class PacientesDatos {
    constructor(nombre, nacimiento, genero, dni, direccion, telefono, mail, historia, enfermedad){
        this.nombre = nombre;
        this.nacimiento = nacimiento;
        this.genero = genero;
        this.dni = dni;
        this.direccion = direccion;
        this.telefono = telefono;
        this.mail = mail;
        this.historia = historia;
        this.enfermedad = enfermedad;
    }

    mostrarDatosPersonales(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Dni: ${this.dni}`);
        console.log(`Direccion: ${this.direccion}`);
        console.log(`Telefono: ${this.telefono}`);
        console.log(`Mail: ${this.mail}`);
    }

    mostrarDatosClinicos(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Dni: ${this.dni}`);
        console.log(`Nacimiento: ${this.nacimiento}`);
        console.log(`Num de historia clinica: ${this.historia}`);
        console.log(`Enfermedad pre-existente: ${this.enfermedad}\n\n`);
    }
}

//2 - Agregar pacientes 
const pacientes = [];

function agregarPaciente (nombre, fechaNacimiento, genero, dni, direccion, telefono, email, numeroHistoriaClinica, enfermedadPreexistente){
    const nuevoPaciente = new PacientesDatos (nombre, fechaNacimiento, genero, dni, direccion, telefono, email, numeroHistoriaClinica, enfermedadPreexistente);

    pacientes.push(nuevoPaciente);
    
    nuevoPaciente.mostrarDatosClinicos();
}
agregarPaciente("Julia", 2000, "Femenino", 1234, "Rosas 123", 3812040, "juli@gmail.com", 2, "Hipertension");
agregarPaciente("Esteban", 1998, "Masculino", 2345, "Alamos 123", 3813080, "dylantu@gmail.com", 8, "Diabetes");
agregarPaciente("Dylan", 2007, "Masculino", 4545, "Cruce de los andes 1212", 3815030, "estebanquito@gmail.com", 3, "No");

// 3 - Eliminar pacientes
function eliminarPacientePorDni(dni) {
    const indice = pacientes.findIndex(paciente => paciente.dni === dni);
    if (indice !== -1) {
        let validar = confirm("¿Estás seguro de querer borrar este paciente?");

        if (validar) {
            const pacienteEliminado = pacientes.splice(indice, 1); 
            console.log(`Paciente con DNI ${dni} eliminado`);
            pacienteEliminado[0].mostrarDatosPersonales(); 
        } else {
            console.log("Operación cancelada. El paciente no ha sido eliminado.");
        }
    } else {
        console.log(`No se encontró ningún paciente con DNI ${dni}`);
    }
}

//4 - Buscar pacientes por DNI y Nombre
const resultadoNombre = pacientes.filter(paciente => paciente.nombre.toLowerCase().includes("julia"));
console.log(resultadoNombre);

const resultadoDni = pacientes.filter(paciente => paciente.dni === 4545);
console.log(resultadoDni);