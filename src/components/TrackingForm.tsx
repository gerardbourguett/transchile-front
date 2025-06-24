import React, { useState } from "react";

export default function TrackingForm({
  onTrack,
  isLoading,
}: {
  onTrack: (id: string) => void;
  isLoading: boolean;
}) {
  const [id, setId] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id) {
      onTrack(id);
    }
  };

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Rastrea tu Envío
        </h2>
        <p className="text-gray-600">
          Ingresa tu número de seguimiento para obtener información actualizada
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Ej: TR123456789CL"
            disabled={isLoading}
            className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
          />
          {isLoading && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading || !id.trim()}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Buscando...
            </div>
          ) : (
            "Rastrear Envío"
          )}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          ¿No tienes tu número de seguimiento?{" "}
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
            Contáctanos
          </a>
        </p>
      </div>
    </div>
  );
}
