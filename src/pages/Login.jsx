import {useState} from 'react'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})

    function validate(){
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
        if (password.length < 12){ // uses REGEX to allow whitespace and requires @ sign. 
            passwordErrors.push('Password length must be > than 10 characters.')
        }
        if(!/^(?!.*[\s"'])\S+$/.test(password)){
            passwordErrors.push('Passwrod must contain a symbol')
        }
        if(!/A-Z/.test(password)){
            passwordErrors.push('Password must contain an uppercase letter')
        }
        if(!/a-z/.test(password)){
            passwordErrors.push('Password must contain a lowercase letter')
        }
        if(/\s/.test(password)){
            passwordErrors.push('Password cannot contain spaces')
        }
        if (passwordErrors.length > 0){
            return passwordErros 
        }
    function submitHandler(event){
        
    }
    }
    return(
        <>
            <h1>Sign In</h1>
        </>
    )
}
export default Login