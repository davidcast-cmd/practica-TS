import type { Actividad } from './interfaces';


export const pedirActividad = async (): Promise<Actividad> => {
  const response = await fetch('/bored/random');
  if (!response.ok) throw new Error('HTTP ' + response.status);
  const datos: Actividad = await response.json();
  return datos;
};
