"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm(); // Destructure reset from useForm
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (data: any) => {
        setIsLoading(true);
        // Handle form submission here
        axios.post(`/api/sendmail`, data)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setIsLoading(false);
                reset();
                toast.success("Your data  has been sent!")
            });
    };

    return (
        <div className="px-5 lg:px-20 w-full flex min-h-[76vh] flex-col items-center justify-center">
            <div className="bg-gray-100 w-full lg:w-[600px] dark:bg-zinc-900/50 p-10 rounded-2xl">
                <h1 className="text-3xl text-center font-semibold mb-10">Contact</h1>
                <form className="mb-5 w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="font-semibold px-1">Email</label>
                        <Input
                            type="email"
                            placeholder="Email"
                            className="mt-2 mb-1"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className="text-red-500">Email is required</span>}
                    </div>
                    <div className="mt-5">
                        <label className="font-semibold px-1">First name</label>
                        <Input
                            type="text"
                            placeholder="First name"
                            className="mt-2 mb-1"
                            {...register("firstName", { required: true })}
                        />
                        {errors.firstName && <span className="text-red-500">First name is required</span>}
                    </div>
                    <div className="mt-5">
                        <label className="font-semibold px-1">Last name</label>
                        <Input
                            type="text"
                            placeholder="Last name"
                            className="mt-2 mb-1"
                            {...register("lastName", { required: true })}
                        />
                        {errors.lastName && <span className="text-red-500">Last name is required</span>}
                    </div>
                    <div className="mt-5">
                        <label className="font-semibold px-1">Message</label>
                        <Textarea
                            placeholder="Message"
                            className="mt-2 mb-1"
                            {...register("message", { required: true })}
                        />
                        {errors.message && <span className="text-red-500 px-1">Message is required</span>}
                    </div>
                    <Button
                        type="submit"
                        className="mt-10"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="flex gap-x-2 items-center">
                                <LoaderCircle className="animate-spin" />
                                Please Wait
                            </div>
                        ) : "Submit"}
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Contact;