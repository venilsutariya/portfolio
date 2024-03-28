"use client";

import { IoShareSocialSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Compass, Contact, FileText, Info, Loader, PackageSearch } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ModeToggle } from "./mode-toggler";
import { ClerkLoaded, ClerkLoading, SignedOut, SignedIn } from "@clerk/nextjs";

const Sidebar = () => {
    const router = useRouter();
    const pathname = usePathname();

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
        // {
        //     name: "Products",
        //     icon: PackageSearch,
        //     href: "/products",
        // },
    ];

    return (
        <div className="h-full border-r fixed w-[240px] lg:block hidden">
            <div className="flex flex-col items-center gap-y-5 px-3 mt-5">
                {sideRoute.map((route) => (
                    <Button
                        key={route.href}
                        onClick={() => router.push(route.href)}
                        className={cn(
                            "flex justify-start w-full py-6 items-center gap-x-3 text-gray-500",
                            pathname === route.href && "text-black dark:text-white",
                        )}
                        variant={pathname === route.href ? "secondary" : "ghost"}>
                        {<route.icon size={24} />} {route.name}
                    </Button>
                ))}
                <ClerkLoading>
                    <Button
                        className={cn(
                            "flex justify-center w-full py-6 items-center gap-x-3 text-gray-500",
                        )}
                        variant={"ghost"}
                    >
                        <Loader className="h-4 w-4 animate-spin" />
                    </Button>
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedOut>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    variant={"ghost"}
                                    className={cn(
                                        "flex justify-start py-6 w-full items-center gap-x-3 text-gray-500",
                                    )}>
                                    {<Contact size={24} />} Contact
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>You are not authorized!</DialogTitle>
                                    <DialogDescription>
                                        If you want to enable the contact route, you <span className="underline">must be logged in</span>. Please log in or register if you&apos;re not.
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </SignedOut>
                    <SignedIn>
                        <Button
                            onClick={() => router.push("/contact")}
                            className={cn(
                                "flex justify-start w-full py-6 items-center gap-x-3 text-gray-500",
                                pathname === "/contact" && "text-black dark:text-white",
                            )}
                            variant={pathname === "/contact" ? "secondary" : "ghost"}>
                            {<Contact size={24} />} Contact
                        </Button>
                    </SignedIn>
                </ClerkLoaded>
                <div className="w-full mt-5 flex gap-x-2 items-center px-3">
                    <ModeToggle />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;