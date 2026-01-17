import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";

// GET all items
export async function GET() {
  const itemsCollection = await dbConnect("items");
  const items = await itemsCollection.find().toArray();

  return NextResponse.json(items);
}

// ADD new item
export async function POST(request) {
  const body = await request.json();
  const itemsCollection = await dbConnect("items");

  await itemsCollection.insertOne({
    ...body,
    createdAt: new Date(),
  });

  return NextResponse.json({ success: true });
}
