"use client";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import { Compass, Contact, FileText, Info } from "lucide-react";
import { IoShareSocialSharp } from "react-icons/io5";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ModeToggle } from "./mode-toggler";
import { Button } from "../ui/button";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileSheet = () => {
    const sideRoute = [
        {
            name: "Browse",
            icon: Compass,
            href: "/",
        },
        {
            name: "About",
            icon: Info,
            href: "/about",
        },
        {
            name: "Social",
            icon: IoShareSocialSharp,
            href: "/social",
        },
        {
            name: "Resume",
            icon: FileText,
            href: "/resume",
        },
        {
            name: "Contact",
            icon: Contact,
            href: "/contact",
            isPrivate: true,
        },
    ];

    const router = useRouter();
    const pathname = usePathname();
    const [isContact, setIsContact] = useState(false);

    const { user } = useUser();

    useEffect(() => {
        if (user) {
            setIsContact(true);
        }
    }, [user?.username]);

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Menu />
            </SheetTrigger>
            <SheetContent side={"left"}>
                <SheetHeader>
                    <SheetTitle>
                        <div className="flex items-center gap-x-3">
                            <img
                                src="/me.jpeg"
                                alt="me"
                                className="h-12 w-12 rounded-full object-cover cursor-pointer"
                            />
                            <div>
                                <div className="text-xl font-semibold">Venil Sutariya</div>
                                <div className="text-sm text-foreground">Build something great!</div>
                            </div>
                        </div>
                    </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col items-center px-3 mt-5">
                    {sideRoute.map((route) => (
                        <SheetClose asChild key={route.href} className="w-full mt-5">
                            <Button
                                onClick={() => router.push(route.href)}
                                className={cn(
                                    "flex justify-start w-full py-6 items-center gap-x-3 text-gray-500",
                                    pathname === route.href && "text-black dark:text-white",
                                    (!isContact && route.isPrivate) && "hidden"
                                )}
                                variant={pathname === route.href ? "secondary" : "ghost"}>
                                {<route.icon size={24} />} {route.name}
                            </Button>
                        </SheetClose>
                    ))}
                    {!isContact && (
                        <Dialog>
                            <DialogTrigger className="" asChild>
                                <Button
                                    variant={"ghost"}
                                    className={cn(
                                        "flex justify-start mt-5 py-6 w-full items-center gap-x-3 text-gray-500",
                                        isContact && "hidden"
                                    )}>
                                    {<Contact size={24} />} Contact
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>You are not authorized!</DialogTitle>
                                    <DialogDescription>
                                        If you want to enable the contact route, you <span className="underline">must be logged in</span>. Please log in or register if you're not.
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    )}
                    <div className="w-full mt-10 flex gap-x-2 items-center px-3">
                        <ModeToggle />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}

export default MobileSheet;