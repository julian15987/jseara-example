import { CheckCircle } from "lucide-react";

export function DataForm() {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md">
      <div className="flex items-center gap-4 mb-8">
        <CheckCircle className="w-6 h-6 text-primary" />
        <h3 className="text-2xl font-semibold text-gray-800">
          Enviar datos de prueba
        </h3>
      </div>
      <form action="/api/data" method="POST" className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 items-center">
          <label htmlFor="post-nombre-empresa">
            <span className="text-sm text-gray-600 font-medium">
              Nombre empresa:
            </span>
          </label>
          <input
            id="post-nombre-empresa"
            name="nombre_empresa"
            className="h-10 w-full rounded-md border border-gray-200 px-3 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 items-center">
          <label htmlFor="post-codigo-cliente">
            <span className="text-sm text-gray-600 font-medium">
              Código cliente:
            </span>
          </label>
          <input
            id="post-codigo-cliente"
            name="codigo_cliente"
            className="h-10 w-full rounded-md border border-gray-200 px-3 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 items-center">
          <label htmlFor="post-accesos-full">
            <span className="text-sm text-gray-600 font-medium">
              Accesos Full:
            </span>
          </label>
          <input
            id="post-accesos-full"
            name="accesos_full"
            type="number"
            className="h-10 w-full rounded-md border border-gray-200 px-3 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 items-center">
          <label htmlFor="post-accesos-pos">
            <span className="text-sm text-gray-600 font-medium">
              Accesos POS:
            </span>
          </label>
          <input
            id="post-accesos-pos"
            name="accesos_pos"
            type="number"
            className="h-10 w-full rounded-md border border-gray-200 px-3 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 items-center">
          <label htmlFor="post-accesos-whw">
            <span className="text-sm text-gray-600 font-medium">
              Accesos WHW:
            </span>
          </label>
          <input
            id="post-accesos-whw"
            name="accesos_whw"
            type="number"
            className="h-10 w-full rounded-md border border-gray-200 px-3 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10"
          />
        </div>

        <button
          type="submit"
          className="h-11 px-6 bg-primary text-white border-none rounded-md font-medium text-sm cursor-pointer transition-colors hover:bg-primary-dark mt-4 self-start"
        >
          Enviar datos
        </button>
      </form>
    </div>
  );
}
