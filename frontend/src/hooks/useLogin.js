import { useState } from "react"
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext"


const useLogin = () => {
    const [loading, setloading] = useState()
    const { setAuthUser } = useAuthContext();
    const login = async (userName, password) => {
        const success = handleInputError({ userName, password })

        if (!success) return;
        setloading(true);
        console.log(typeof password)
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userName, password })
            })
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data)
            console.log(data)
        } catch (error) {
            toast.error(error.message)
            console.log(error)
        } finally {
            setloading(false)
        }
    }
    return { loading, login }
}


export default useLogin;

function handleInputError({
    userName,
    password,
}) {
    if (!userName || !password) {
        toast.error("Please fill all fields.");
        return false;
    }
    if (password.length < 6) {
        toast.error("Password must be at least 6 characters.");
        return false;
    }
    return true;
}