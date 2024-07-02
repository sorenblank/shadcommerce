import { NextRequest, NextResponse } from "next/server";
import { products } from "./response";


export const GET = async (req: NextRequest) => {
    try {
        const posts = products;
        return NextResponse.json(posts, {status: 200});
    } catch (err: any) {
        return NextResponse.json({error: err.message}, {status: 500});
    }
};