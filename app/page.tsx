import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-10 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">¡Bienvenido a Magneseras Web! 🚀</h1>
      <p className="text-lg text-gray-600 mt-4">
        Somos especialistas en la fabricación y venta de magneseras de alta calidad.
      </p>

      <div className="mt-6 flex space-x-4">
        <a href="/about" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Sobre Nosotros
        </a>
        <a href="/services" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Servicios
        </a>
        <a href="/contact" className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
          Contacto
        </a>
      </div>

      {/* Íconos corregidos */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center mt-10">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Docs
        </a>
      </footer>
    </div>
  );
}


