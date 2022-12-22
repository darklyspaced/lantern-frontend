import { useRef, useState } from 'react';
import { useAuth } from "../contexts/AuthContext"
import { Link } from 'react-router-dom';

function LoginPage(){
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()

        try {
            setError(null);
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
        }catch{
            setError('Failed to sign in. Please try again later.');
        }
        setLoading(false);
    }

    return(
        <div className="bg-[#0D1117] h-full">
            <h1 className="text-center text-gray-100 text-6xl pb-30 relative top-[8%] font-medium">Sign in to Avagarde</h1>
            <div className="flex-row w-[32%] max-h-[900px] max-w-[750px] text-white text-3xl mx-auto bg-[#161B22] relative top-[16%] p-12 font-bold rounded-lg border border-gray-600">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="usrname" className="text-[1.7rem] font-semibold">Email</label>
                    <input type="email" id="usrname" name="username" placeholder="Email" ref={emailRef}
                        className="h-12 w-full p-3 border-gray-900 box-border text-[1.05rem] font-normal mt-3 mb-10 text-white bg-[#0D1117] rounded-md"
                        />
                    <label htmlFor="passwrd" className="text-[1.7rem] font-semibold">Password</label>
                    <input type="password" id="passwrd" name="password" placeholder="Password" ref={passwordRef}
                        className="h-12 w-full p-3 border-gray-900 box-border text-[1.05rem] font-normal mt-3 mb-14 text-white bg-[#0D1117] rounded-md"
                        />
                    <input 
                        type="submit" value="Sign In" disabled={loading}
                        className="bg-green-800 text-white mb-6 font-semibold box-border text-2xl yellow-300 h-12 w-full self-center rounded-md"
                        />
                </form>
                {error && <ErrorDisplay error={error} />}
            </div>
            <div className= "relative top-[17.5%] flex">
                <p className="relative m-auto text-[1.15rem] text-white top-[5%]">Need an account? <Link to="/signup">Create one here.</Link></p>
            </div>
        </div>
    );
}

export default LoginPage
