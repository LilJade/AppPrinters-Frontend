import { useFetchGetEmpleados } from "../../hooks/useFetchGetEmpleados";

const ListaEmpleados = () => {

    const { empleados } = useFetchGetEmpleados();

    return (
        <div>
            <h1>Lista de empleados</h1>
            <br />
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Telefono</th>
                </tr>
                </thead>
                <tbody>
                {
                    empleados.map(empleado => (
                    <tr key={empleado.empleadoId}>
                        <td>{empleado.empleadoId}</td>
                        <td>{empleado.nombre}</td>
                        <td>{empleado.email}</td>
                        <td>{empleado.telefono}</td>
                    </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default ListaEmpleados;