'use client';

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {authClient} from "@/lib/auth-client";
import {useRouter} from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logIn = async () => {
        const { data, error } = await authClient.signIn.email({
            email,
            password
        })

        if (!error) {
            router.push('/game')
        }
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="grid p-8 border border-muted rounded-md w-96 gap-8">
                <div className="grid gap-4">
                    <Input type="email" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="grid gap-2">
                    <Button onClick={logIn}>Log in</Button>
                    <p>No account ? <a href='/signup' className='text-blue-500 hover:underline hover:underline-offset-4'>Create an account</a></p>
                </div>
            </div>
        </div>
    )
}
