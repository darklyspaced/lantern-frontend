import { FormEvent, FormEventHandler, useRef, useState } from 'react';
import { auth } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom"

export function ErrorDisplay(props: { error: string }) {
    return (
        <>
            <div className="h-14 text-red-300 font-semibold text-lg border bg-red-800/50 m-auto left-0 right-0 z-10 border-red-800 rounded-lg top-5 text-center flex justify-center">
                <div className="m-auto">
                    {props.error}
                </div>
            </div>
        </>
    )
}

function SignUpPage() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmationRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (passwordRef.current?.value !== passwordConfirmationRef.current?.value) {
            return setError('Passwords do not match.');
        }

        setError(null);
        setLoading(true);

        createUserWithEmailAndPassword(auth, emailRef.current?.value!, passwordRef.current?.value!)
            .then(() => {
                setLoading(false);
                navigate("/dashboard");
            })
            .catch((e) => {
                setError(e.code);
            })
    }

    return (
        <>
            <div className="bg-[#0D1117] h-full">
                <h1 className="text-center text-gray-100 text-6xl pb-30 relative top-[8%] font-medium">Create an Account</h1>
                <div className="flex-row w-[32%] max-h-[900px] max-w-[750px] text-white text-3xl mx-auto bg-[#161B22] relative top-[16%] p-12 font-bold rounded-lg border border-gray-600">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email_id" className="text-[1.7rem] font-semibold">Email</label>
                        <input type="email" id="email_id" name="username" placeholder="Email" ref={emailRef}
                            className="h-12 w-full p-3 border-gray-900 box-border text-[1.05rem] font-normal mt-3 mb-10 text-white bg-[#0D1117] rounded-md"
                        />
                        <label htmlFor="password_id" className="text-[1.7rem] font-semibold">Password</label>
                        <input type="password" id="password_id" name="password" placeholder="Password" ref={passwordRef}
                            className="h-12 w-full p-3 border-gray-900 box-border text-[1.05rem] font-normal mt-3 mb-10 text-white bg-[#0D1117] rounded-md"
                        />
                        <label htmlFor="password_confirmation_id" className="text-[1.7rem] font-semibold">Confirm Password</label>
                        <input type="password" id="password_confirmation_id" name="password_confirmation" placeholder="Confirm Password" ref={passwordConfirmationRef}
                            className="h-12 w-full p-3 border-gray-900 box-border text-[1.05rem] font-normal mt-3 mb-14 text-white bg-[#0D1117] rounded-md"
                        />
                        <input
                            type="submit" value="Create" disabled={loading}
                            className="bg-green-800 hover:bg-green-700 transition linear delay-150 text-white mb-8 font-semibold border box-border border-green-700 text-2xl yellow-300 h-12 w-full self-center rounded-md"
                        />
                    </form>
                    {error && <ErrorDisplay error={error} />}
                </div>
                <div className="relative top-[17.5%] flex">
                    <p className="relative m-auto text-[1.15rem] text-white top-[5%]">Already have an account? <Link className="text-blue-500 hover:underline" to="/login">Log In</Link></p>
                </div>
            </div>
        </>
    );
}

export default SignUpPage
