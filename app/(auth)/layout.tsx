import React from "react";
import Image from "next/image";
import {ThemeProvider} from "next-themes";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen">
            {/* Left sidebar - branded area */}
            <section className="hidden w-1/2 items-center justify-center bg-brand p-10 lg:flex xl:w-2/5">
                <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
                    <Image
                        src="/assets/icons/logo-full.svg"
                        alt="logo"
                        width={224}
                        height={82}
                        className="h-auto"
                    />

                    <div className="space-y-5 ">
                        <h1 className="h1">Manage your files the best way</h1>
                        <p className="body-1">
                            This is a place where you can store all your documents.
                        </p>
                    </div>
                </div>
            </section>

            {/* Right section - auth form */}
            <section className="flex flex-1 flex-col items-center justify-center  p-4 py-10 lg:p-10 lg:py-0">
                <div className="mb-10 lg:hidden">
                    <Image
                        src="/assets/icons/logo-full-brand.svg"
                        alt="logo"
                        width={224}
                        height={82}
                        className="h-auto w-[180px] lg:w-[224px]"
                    />
                </div>

                <div className="w-full max-w-md">
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem
                        disableTransitionOnChange
                    >
                    {children}
                        </ThemeProvider>
                </div>

                <div className="mt-8 text-center text-xs lg:hidden">
                    By continuing, you agree to our{" "}
                    <a href="#" className="text-brand hover:underline">
                        Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-brand hover:underline">
                        Privacy Policy
                    </a>
                    .
                </div>
            </section>
        </div>
    );
};

export default Layout;