import './style.css';
import { pedirActividad } from './peticion';


const boton = document.getElementById('boton') as HTMLButtonElement;
const tarjeta = document.getElementById('tarjeta') as HTMLDivElement;
const tipoEl = document.getElementById('tipo') as HTMLSpanElement;
const actividadEl = document.getElementById('actividad') as HTMLHeadingElement;
const participantesEl = document.getElementById('participantes') as HTMLLIElement;
const precioEl = document.getElementById('precio') as HTMLLIElement;
const duracionEl = document.getElementById('duracion') as HTMLLIElement;
const accesibilidadEl = document.getElementById('accesibilidad') as HTMLLIElement;
const disponibilidadEl = document.getElementById('disponibilidad') as HTMLLIElement;
const ninosEl = document.getElementById('ninos') as HTMLLIElement;
const claveEl = document.getElementById('clave') as HTMLLIElement;
const enlaceEl = document.getElementById('enlace') as HTMLAnchorElement;
const errorEl = document.getElementById('error') as HTMLParagraphElement;


const cargarActividad = async (): Promise<void> => {
  errorEl.textContent = '';

  try {
    const a = await pedirActividad();

    tipoEl.textContent = a.type;
    actividadEl.textContent = a.activity;
    participantesEl.textContent = `Participantes: ${a.participants}`;
    precioEl.textContent = `Precio: ${a.price}`;
    duracionEl.textContent = `Duración: ${a.duration}`;
    accesibilidadEl.textContent = `Accesibilidad: ${a.accessibility}`;
    disponibilidadEl.textContent = `Disponibilidad: ${a.availability}`;
    ninosEl.textContent = a.kidFriendly ? 'Apto para niños' : 'No apto para niños';
    claveEl.textContent = `Clave: ${a.key}`;

    if (a.link) {
      enlaceEl.href = a.link;
      enlaceEl.classList.remove('oculto');
    } else {
      enlaceEl.classList.add('oculto');
    }

    tarjeta.classList.remove('oculto');
  } catch (error) {
    console.error('Error al cargar:', (error as Error).message);
    errorEl.textContent = 'No se pudo cargar la actividad. Inténtalo de nuevo.';
  }
};

boton.addEventListener('click', cargarActividad);
cargarActividad();
