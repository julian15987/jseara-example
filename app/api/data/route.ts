import { type NextRequest, NextResponse } from "next/server";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getLastBodyData, setLastBodyData } from "@/app/lib/store";

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, prefer-const
let lastBodyData: any = null;

export async function GET(request: NextRequest) {
  // Get query parameters
  const searchParams = request.nextUrl.searchParams;

  const queryData = {
    nombre_empresa: searchParams.get("nombre_empresa") || "",
    codigo_cliente: searchParams.get("codigo_cliente") || "",
    accesos_full: Number.parseInt(searchParams.get("accesos_full") || "0"),
    accesos_pos: Number.parseInt(searchParams.get("accesos_pos") || "0"),
    accesos_whw: Number.parseInt(searchParams.get("accesos_whw") || "0"),
  };

  return NextResponse.json({ source: "query", data: queryData });
}

export async function POST(request: NextRequest) {
  try {
    // Get body data
    const contentType = request.headers.get("content-type") || "";
    let bodyData;

    if (contentType.includes("application/json")) {
      // Handle JSON data
      bodyData = await request.json();
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      // Handle form data
      const formData = await request.formData();
      bodyData = {
        nombre_empresa: formData.get("nombre_empresa") || "",
        codigo_cliente: formData.get("codigo_cliente") || "",
        accesos_full: Number.parseInt(
          (formData.get("accesos_full") as string) || "0"
        ),
        accesos_pos: Number.parseInt(
          (formData.get("accesos_pos") as string) || "0"
        ),
        accesos_whw: Number.parseInt(
          (formData.get("accesos_whw") as string) || "0"
        ),
      };
    } else {
      return NextResponse.json(
        { error: "Unsupported content type" },
        { status: 400 }
      );
    }

    setLastBodyData(bodyData);

    // Redirect back to the main page to display the data
    return NextResponse.redirect(new URL("/", request.url));
  } catch (error) {
    console.error("Error processing POST request:", error);
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}
