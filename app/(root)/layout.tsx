import { Navbar } from "@/components/customUi/navbar";
import Sidebar from "@/components/customUi/sidebar";
import Footer from "@/components/footer";
import React from "react";

const RootLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <main>
            <div className="flex flex-col h-full">
                <div className="z-50 sticky top-0">
                    <Navbar />
                </div>
                <div className="flex flex-1">
                    <Sidebar />
                    <main className="flex-1 lg:ml-[240px]">
                        <div className="overflow-y-auto mt-5">
                            {children}
                        </div>
                        <div className="px-5 lg:px-20">
                            <Footer />
                        </div>
                    </main>
                </div>
            </div>
        </main>
    );
}

export default RootLayout;