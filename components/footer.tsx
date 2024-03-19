"use client";

import { RiCopyrightLine } from "react-icons/ri";
import { Button } from "./ui/button";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

const Footer = () => {
    const [isContact, setIsContact] = useState(false);

    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            setIsContact(true);
        }
    }, [user]);

    return (
        <div className="border-t mt-5 flex justify-between items-center py-5">
            <div className="flex items-center gap-x-3"><RiCopyrightLine /> 2024 All rights reserved.</div>
            {!isContact ? (
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant={"link"}>
                            Contact
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>You are not authorized!</DialogTitle>
                            <DialogDescription>
                                If you want to enable contact route you <span className="underline">must be logged in</span>. Please log in or register if you don't.
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            ) : (
                <Button onClick={() => router.push("/contact")} variant={"link"}>
                    Contact
                </Button>
            )}
        </div>
    );
}

export default Footer;