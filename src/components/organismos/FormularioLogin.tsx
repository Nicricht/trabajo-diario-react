import { useState } from "react";
import type { SubmitEvent } from "react";
import CampoFormulario from "../moleculas/CampoFormulario";

function FormularioLogin() {
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    const manejarEnvio = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (correo.trim() === "") {
            alert("Debe ingresar su correo");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            alert("Ingrese un correo válido");
            return;
        }

        if (contrasena.trim() === "") {
            alert("Debe ingresar su contraseña");
            return;
        }

        if (contrasena.length < 8) {
            alert("La contraseña debe tener mínimo 8 caracteres");
            return;
        }

        alert("Datos ingresados correctamente");
    };

    return (
        <form onSubmit={manejarEnvio} noValidate>
            <CampoFormulario
                etiqueta="Correo"
                tipo="email"
                nombre="correo-login"
                valor={correo}
                alCambiar={setCorreo}
                placeholder="Ingrese su correo"
                autoComplete="email"
            />
            <CampoFormulario
                etiqueta="Contraseña"
                tipo="password"
                nombre="contrasena-login"
                valor={contrasena}
                alCambiar={setContrasena}
                placeholder="Ingrese su contraseña"
                autoComplete="current-password"
            />
            <button type="submit" className="btn btn-primary w-100">
                Iniciar sesión
            </button>
        </form>
    );
}

export default FormularioLogin;
