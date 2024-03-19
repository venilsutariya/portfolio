import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { MdLogin } from "react-icons/md";
import { auth } from '@clerk/nextjs';
import MobileSheet from "./mobile-sheet";

export const Navbar = () => {

    const { userId }: { userId: string | null } = auth();

    return (
        <div className="border-b px-3 py-4 backdrop-blur-xl bg-white/50 dark:bg-black/50">
            <div className="flex justify-between items-center">
                <div className="lg:flex hidden items-center gap-x-3">
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
                <div className=" block lg:hidden">
                    <MobileSheet />
                </div>
                <div>
                    {!userId ? (
                        <SignInButton mode="modal">
                            <Button
                                variant={"outline"}
                                className="flex items-center gap-x-2"
                            >
                                <MdLogin size={18} />
                                Login
                            </Button>
                        </SignInButton>
                    ) : (
                        <UserButton afterSignOutUrl="/" />
                    )}
                </div>
            </div>
        </div>
    )
}