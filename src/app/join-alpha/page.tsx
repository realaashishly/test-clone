"use client";
import { useState } from "react";

export default function WaitlistSection() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            setMessage("Please enter a valid email.");
            return;
        }

        try {
            const res = await fetch("/api/waitlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });
            if (res.ok) {
                setMessage("You’ve been added to the waitlist!");
                setEmail("");
            } else {
                const data = await res.json();
                setMessage(data.error || "Failed to join the waitlist");
            }
        } catch (error) {
            setMessage("Failed to join the waitlist. Please try again.");
        }
    };

    return (
        <div className='flex min-h-screen items-center justify-center bg-white text-black px-4'>
            <div className='text-center max-w-2xl'>
                <p className='text-sm text-orange-500 mb-2'>
                    🔥 Amazing korizen Resources!
                </p>
                <h1 className='text-4xl font-bold mb-4'>
                    Join The Waitlist{" "}
                    <span className='text-gray-700'>Today!</span>
                </h1>
                <p className='text-gray-600 mb-6'>
                    At Korizen, it is our vision to develop a system so good
                    that you can showcase your talents, receive feedback and
                    monetize it later. In this new age, no matter what your
                    background is, you can learn the fundamentals, build your
                    track record and become an expert, because the world needs
                </p>

                {/* Email Input and Button */}
                <form
                    onSubmit={handleSubmit}
                    className='flex justify-center items-center gap-2'
                >
                    <input
                        type='email'
                        placeholder='Your Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='px-4 py-2 w-full max-w-md rounded-md bg-gray-100 text-gray-700 outline-none border border-gray-300 focus:border-gray-500'
                    />
                    <button
                        type='submit'
                        className='bg-gradient-to-r from-[#00B2FF] to-[#0038FF] text-white px-6 py-2 rounded-md font-medium hover:opacity-80 transition'
                    >
                        Join Waitlist!
                    </button>
                </form>

                {/* Message */}
                {message && (
                    <p className='mt-4 text-sm text-green-500'>{message}</p>
                )}

                {/* Footer */}
                <div className='mt-8 text-gray-500 text-sm'>
                    <div className='text-sm text-gray-400 flex items-center gap-2 justify-center'>
                        <span className='w-2 h-2 rounded-full bg-black animate-pulse'></span>
                        Accepting new members soon
                    </div>
                </div>
            </div>
        </div>
    );
}
