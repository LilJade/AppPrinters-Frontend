import React, { useEffect } from 'react';
import { getEmpleados } from '../helpers/getEmpleados';

export const useFetchGetEmpleados = () => {
    const [empleados, setEmpleados] = React.useState([]);

    const getAllEmpleados = async() => {
        const newEmpleados = await getEmpleados();
        setEmpleados(newEmpleados);
    }

    useEffect(() => {
        getAllEmpleados();
    }, []);

    return empleados;
}
