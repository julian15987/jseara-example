"use client";

import { useEffect, useState } from "react";
import { DataSection } from "@/components/DataSection";
import { DataForm } from "@/components/DataForm";
import type { CompanyData } from "@/types/types";

export default function Home() {
  // State for both data sources
  const [bodyData, setBodyData] = useState<CompanyData | null>(null);
  const [queryData, setQueryData] = useState<CompanyData | null>(null);

  // Fetch data on component mount
  useEffect(() => {
    // Get query parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("nombre_empresa")) {
      setQueryData({
        nombre_empresa: urlParams.get("nombre_empresa") || "",
        codigo_cliente: urlParams.get("codigo_cliente") || "",
        accesos_full: Number.parseInt(urlParams.get("accesos_full") || "0"),
        accesos_pos: Number.parseInt(urlParams.get("accesos_pos") || "0"),
        accesos_whw: Number.parseInt(urlParams.get("accesos_whw") || "0"),
      });
    }

    // Check if this page was loaded as a result of a form submission
    const checkPostData = async () => {
      try {
        const response = await fetch("/api/data/current");

        if (response.ok) {
          const data = await response.json();
          if (data && data.data) {
            setBodyData(data.data);
          }
        }
      } catch (error) {
        console.error("Error fetching POST data:", error);
      }
    };

    checkPostData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <main className="flex-1 px-4 py-12 md:px-8 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-2">
          Visualizador de Datos
        </h1>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Ejemplo para Juli S. de landing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col">
            <DataSection title="Valores por json en body" data={bodyData} />
          </div>

          <div className="flex flex-col">
            <DataSection title="Valores por query params" data={queryData} />
          </div>
        </div>

        <DataForm />
      </main>
    </div>
  );
}
