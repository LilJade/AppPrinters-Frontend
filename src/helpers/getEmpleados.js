export const getEmpleados = async() => {
    const url = 'localhost:3001/empleados';
    const resp = await fetch(url);

    const { data = [] } = await resp.json();

    const empleados = data.map( empleado => ({
        empleadoId: empleado.empleadoId,
        nombre: empleado.nombre,
        email: empleado.email,
        telefono: empleado.telefono,
        clave: empleado.clave
    }));

    return empleados;
}
