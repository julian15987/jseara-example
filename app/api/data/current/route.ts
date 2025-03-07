import { type NextRequest, NextResponse } from "next/server";
import { getLastBodyData } from "@/app/lib/store";

// This endpoint returns the most recent POST data
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  const lastData = getLastBodyData();
  console.log("lastData en GET de current", lastData);
  return NextResponse.json({ data: lastData });
}
