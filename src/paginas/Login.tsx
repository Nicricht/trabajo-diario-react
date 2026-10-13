import FormularioLogin from "../components/organismos/FormularioLogin";

function Login() {
    return (
        <main className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-5">
                    <div className="card shadow-sm p-4">
                        <h1 className="h3 mb-4 text-center">Iniciar sesión</h1>
                        <FormularioLogin />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;
