// Shared store for the application
export interface DataStore {
  nombre_empresa: string;
  codigo_cliente: string;
  accesos_full: number;
  accesos_pos: number;
  accesos_whw: number;
}

let lastBodyData: DataStore | null = null;

export const getLastBodyData = () => lastBodyData;
export const setLastBodyData = (data: DataStore) => {
  lastBodyData = data;
};
