import { NextRequest,NextResponse } from "next/server";
import {prisma} from '@/prisma/client'

export async function DELETE(req:NextRequest){

    const { pathname } = new URL(req.url);
    const id = pathname.split('/').pop();

    if(!id){
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    try {
        const data=await prisma.issue.delete({
            where:{id:Number(id)}
        })
        return NextResponse.json('Deleted Successfully',{status:200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}