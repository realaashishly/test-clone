import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            );
        }

        const newEntry = await prisma.waitlist.create({
            data: { email },
        });

        return NextResponse.json(newEntry, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to add to waitlist" },
            { status: 500 }
        );
    }
}
