"use client";

import { RiCopyrightLine } from "react-icons/ri";
import { Button } from "./ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut } from "@clerk/nextjs";
import { Loader } from "lucide-react";

const Footer = () => {

    const router = useRouter();

    return (
        <div className="border-t mt-5 flex justify-between items-center py-5">
            <div className="flex items-center gap-x-3"><RiCopyrightLine /> 2024 All rights reserved.</div>
            <ClerkLoading>
                <Button
                    variant={"outline"}
                >
                    <Loader className="h-4 w-4 animate-spin" />
                </Button>
            </ClerkLoading>
            <ClerkLoaded>
                <SignedOut>
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
                                    If you want to enable contact route you <span className="underline">must be logged in</span>. Please log in or register if you don&apos;t.
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </SignedOut>
                <SignedIn>
                    <Button onClick={() => router.push("/contact")} variant={"link"}>
                        Contact
                    </Button>
                </SignedIn>
            </ClerkLoaded>
        </div>
    );
}

export default Footer;