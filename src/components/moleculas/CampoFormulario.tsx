import Input from "../atomos/Input";

type Props = {
    etiqueta: string;
    tipo: string;
    nombre: string;
    valor: string;
    alCambiar: (valor: string) => void;
    placeholder?: string;
    autoComplete?: string;
};

function CampoFormulario({
    etiqueta, tipo, nombre, valor, alCambiar, placeholder, autoComplete
}: Props) {
    return (
        <div className="mb-3">
            <label className="form-label" htmlFor={nombre}>{etiqueta}</label>
            <Input
                tipo={tipo}
                nombre={nombre}
                valor={valor}
                alCambiar={alCambiar}
                placeholder={placeholder}
                autoComplete={autoComplete}
            />
        </div>
    );
}

export default CampoFormulario;
