const SignIn = (props) => {
    return(
        <div>
            <h2>Sign-in</h2>
            <form>
                <input type="email" placeholder="Email address"/>
                <input type="password" placeholder="Password"/>
                <button onClick={props.toggleFun}>signin</button>
            </form>
        </div>
    )
}

export default SignIn