import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { MdLogin } from "react-icons/md";
import MobileSheet from "./mobile-sheet";
import { Loader } from "lucide-react";

export const Navbar = () => {

    return (
        <div className="z-50 relative border-b px-3 py-4 backdrop-blur-xl bg-white/50 dark:bg-black/50">
            <div className="flex justify-between items-center">
                <div className="lg:flex hidden items-center gap-x-3">
                    <div>
                        <div className="text-xl font-semibold">Venil Sutariya</div>
                        <div className="text-sm text-foreground">Build something great!</div>
                    </div>
                </div>
                <div className=" block lg:hidden">
                    <MobileSheet />
                </div>
                <div>
                    <ClerkLoading>
                        <Button variant={"outline"}>
                            <Loader className="h-4 w-4 animate-spin" />
                        </Button>
                    </ClerkLoading>
                    <ClerkLoaded>
                        <SignedOut>
                            <SignInButton mode="modal">
                                <Button
                                    variant={"outline"}
                                    className="flex items-center gap-x-2"
                                >
                                    <MdLogin size={18} />
                                    Login
                                </Button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton afterSignOutUrl="/" />
                        </SignedIn>
                    </ClerkLoaded>
                </div>
            </div>
        </div>
    )
}