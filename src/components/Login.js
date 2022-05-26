import Container from "./Containers/Container";
import LoginForm from "./LoginForm";

function LoginPage() {
    return (
        <Container>
            <div className="flex justify-center items-center w-full h-100">
                <div className="flex flex-wrap justify-center">
                    <div className="w-32 h-32 text-center bg-blue-300">This is an image</div>
                    <LoginForm/>
                </div>
            </div>
        </Container>
    )
}

export default LoginPage;