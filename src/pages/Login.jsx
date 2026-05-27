import {useState} from 'react'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})

    function validate(){
        const addErrors = {}
        if (!email){
            addErrors.email = 'Email is required'
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ // uses REGEX to allow whitespace and requires @ sign. 
            addErrors.email = 'Please enter a valid email'
        }
        if (!password){
            addErrors.password = 'Password is required'
        }
        if (password.length < 12){ // uses REGEX to allow whitespace and requires @ sign. 
            addErrors.password = 'Password length must be > than 10 characters.'
        }
        if(!/^(?!.*[\s"'])\S+$/.test(password)){
            addErrors.password = 'Passwrod must contain a symbol'
        }
        if(!/A-Z/.test(password)){
            addErrors.password = 'Password must contain an uppercase letter'
        }
        if(!/a-z/.test(password)){
            addErrors.password = 'Password must contain a lowercase letter'
        }
        if(/\s/.test(password)){
            addErrors.password = 'Password cannot contain spaces'
        }

    }
    return(
        <>
            <h1>Sign In</h1>
        </>
    )
}
export default Login