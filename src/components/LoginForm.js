function LoginForm() {
    return (
        <form className="bg-gray-100 w-full flex flex-wrap">
            <label className="w-full">
                Name:
                <input type="text" name="name" className="w-full"/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default LoginForm;