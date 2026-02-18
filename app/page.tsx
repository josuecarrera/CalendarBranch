export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-8">
      
      {/* Contenedor Principal / Tarjeta */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Encabezado */}
        <div className="bg-white p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Agenda de Actividades
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Revisa los eventos y horarios disponibles a continuación.
            </p>
          </div>
          
          {/* Botón opcional de acción (ej. Contacto o Agendar) */}
          <a 
            href="mailto:carlos.giovanni.ramos.work@gmail.com"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Contactar
          </a>
        </div>

        {/* Contenedor del Calendario (Responsive) */}
        <div className="relative w-full h-[600px] sm:h-[750px] bg-white">
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=carlos.giovanni.ramos.work%40gmail.com&ctz=America%2FGuayaquil&showTitle=0&showPrint=0&showTabs=0&showCalendars=0" 
            style={{border: 0}} 
            className="absolute top-0 left-0 w-full h-full"
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no"
            title="Calendario de Actividades"
          ></iframe>
        </div>
      </div>

      {/* Footer simple */}
      <footer className="mt-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Carlos Giovanni Ramos
      </footer>
    </main>
  );
}