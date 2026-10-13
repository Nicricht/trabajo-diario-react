type Props = {
    tipo: string;
    nombre: string;
    valor: string;
    alCambiar: (valor: string) => void;
    placeholder?: string;
    autoComplete?: string;
};

function Input({ tipo, nombre, valor, alCambiar, placeholder, autoComplete }: Props) {
    return (
        <input
            type={tipo}
            id={nombre}
            name={nombre}
            className="form-control"
            value={valor}
            onChange={(e) => alCambiar(e.target.value)}
            placeholder={placeholder}
            autoComplete={autoComplete}
        />
    );
}

export default Input;
