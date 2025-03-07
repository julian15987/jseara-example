import { CheckCircle } from "lucide-react";
import type { CompanyData } from "@/types/types";

interface DataSectionProps {
  title: string;
  data: CompanyData | null;
}

export function DataSection({ title, data }: DataSectionProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md">
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center justify-center">
          <CheckCircle className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
      </div>
      <div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h3 className="text-xl text-gray-600 pb-2 border-b border-gray-200">
              <span className="text-gray-800 font-semibold">
                Datos de empresa
              </span>
            </h3>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 items-center">
                <label htmlFor="nombre-empresa" className="flex items-center">
                  <span className="text-sm text-gray-600 font-medium">
                    Nombre empresa:
                  </span>
                </label>
                <input
                  id="nombre-empresa"
                  value={data?.nombre_empresa || ""}
                  readOnly
                  className="h-10 w-full rounded-md border border-gray-200 px-3 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 items-center">
                <label htmlFor="codigo-cliente" className="flex items-center">
                  <span className="text-sm text-gray-600 font-medium">
                    Código cliente:
                  </span>
                </label>
                <input
                  id="codigo-cliente"
                  value={data?.codigo_cliente || ""}
                  readOnly
                  className="h-10 w-full rounded-md border border-gray-200 px-3 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-xl text-gray-600 pb-2 border-b border-gray-200">
              <span className="text-gray-800 font-semibold">Accesos</span>
            </h3>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 items-center">
                <label htmlFor="accesos-full" className="flex items-center">
                  <span className="text-sm text-gray-600 font-medium">
                    Accesos Full:
                  </span>
                </label>
                <input
                  id="accesos-full"
                  value={data?.accesos_full || ""}
                  readOnly
                  className="h-10 w-full rounded-md border border-gray-200 px-3 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 items-center">
                <label htmlFor="accesos-pos" className="flex items-center">
                  <span className="text-sm text-gray-600 font-medium">
                    Accesos POS:
                  </span>
                </label>
                <input
                  id="accesos-pos"
                  value={data?.accesos_pos || ""}
                  readOnly
                  className="h-10 w-full rounded-md border border-gray-200 px-3 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 items-center">
                <label htmlFor="accesos-whw" className="flex items-center">
                  <span className="text-sm text-gray-600 font-medium">
                    Accesos WHW:
                  </span>
                </label>
                <input
                  id="accesos-whw"
                  value={data?.accesos_whw || ""}
                  readOnly
                  className="h-10 w-full rounded-md border border-gray-200 px-3 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
