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
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ // uses REGEX to allow whitespace and requires @ sign. 
            emailErrors.push('Please enter a valid email')
        }
        if (!password){
            passwordErrors.push('Password is required')
        }
        if(/\s/.test(password)){
            passwordErrors.push('Password cannot contain spaces')
        }
        if (password.length < 12){ // uses REGEX to allow whitespace and requires @ sign. 
            passwordErrors.push('Password length must be > than 10 characters.')
        }
        if(!/A-Z/.test(password)){
            passwordErrors.push('Password must contain an uppercase letter')
        }
        if(!/a-z/.test(password)){
            passwordErrors.push('Password must contain a lowercase letter')
        }
        
        if(!/^(?!.*[\s"'])\S+$/.test(password)){
            passwordErrors.push('Password must contain a symbol')
        }

        
    return({email:emailErrors,password: passwordErrors})
    }
    return(
        <>
            <h1>Sign In</h1>
            <form onSubmit={submit}>
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
                </div>
                <button type="submit">Sign in</button>
            </form>
            
        </>
    )
}
export default Login