import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod'
import { prisma } from '@/prisma/client'

const createIssueSchema = z.object({
    title: z.string().min(1, 'Title is required').max(255),
    description: z.string().min(1, 'Description is required')
})

export async function POST(req: NextRequest) {
    const body = await req.json()
    const validate = createIssueSchema.safeParse(body)

    if (!validate.success) {
        return NextResponse.json(validate.error.format(), { status: 400 })
    }

    const newIssue = await prisma.issue.create({
        data: {
            title: body.title,
            description: body.description
        }
    })

    return NextResponse.json(newIssue, { status: 200 })

}

export async function GET() {
    try {
        const data = await prisma.issue.findMany();
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

