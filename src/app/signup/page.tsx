'use client';

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {authClient} from "@/lib/auth-client";
import {useState} from "react";

export default function SignUpPage() {

    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = async () => {
        const { data } = await authClient.signUp.email({
            email,
            password,
            name: displayName,
        }, {})

        console.log(data);
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="grid p-8 border border-muted rounded-md w-96 gap-8">
                <div className="grid gap-4">
                    <Input type="text" placeholder="Display name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                    <Input type="email" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <Button onClick={signUp}>Sign up</Button>
            </div>
        </div>
    )
}
