import {useState} from 'react'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})

    function submit(event){
        setErrors(validate(event))
    }
    function validate(event){
        event.preventDefault()
        const passwordErrors = []
        const emailErrors = []
        if (!email){
            emailErrors.push ('Email is required')
        }
        else if(/\s/.test(email)){
            emailErrors.push('Email cannot contain spaces')
        }
        else if (!email.includes('@')) {
            emailErrors.push('Email must contain @')
        }
        else if (email.indexOf('@') === 0) {
            emailErrors.push('Email must have text before @')
        }
        else if (email.indexOf('@') === email.length - 1) {
            emailErrors.push('Email must have text after @')
        }
        if (!password){
            passwordErrors.push('Password is required')
        }
        else if(/\s/.test(password)){
            passwordErrors.push('Password cannot contain spaces')
        }
        else if (password.length < 12){ // uses REGEX to allow whitespace and requires @ sign. 
            passwordErrors.push('Password length must be > than 10 characters.')
        }
        else if(!/[A-Z]/.test(password)){
            passwordErrors.push('Password must contain an uppercase letter')
        }
        else if(!/[a-z]/.test(password)){
            passwordErrors.push('Password must contain a lowercase letter')
        }
        else if(!/[0-9]/.test(password)){
            passwordErrors.push('Password must contain a number')
        }
        else if(!/[^A-Za-z0-9]/.test(password)){
            passwordErrors.push('Password must contain a symbol')
}

        
    return({email:emailErrors,password: passwordErrors})
    }
    return(
        <>
            <h1>Sign In</h1>
            <form onSubmit={submit} noValidate>
                <div>
                    <label>Email</label>
                    <input 
                    type = "email"
                    value = {email} 
                    onChange = {(event) => setEmail(event.target.value)}
                    />
                    {errors.email &&(
                        <p className="error">{errors.email[0]}</p>
                    )}
                    <label>Password</label>
                    <input
                    type = "password"
                    value = {password}
                    onChange = {(event) => setPassword(event.target.value)}
                    />
                    {errors.password &&(
                        <p className="error">{errors.password[0]}</p>
                    )}
                </div>
                <button type="submit">Sign in</button>
            </form>
            
        </>
    )
}
export default Login