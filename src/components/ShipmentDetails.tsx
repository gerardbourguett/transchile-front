export interface ShipmentData {
  trackingId: string;
  status: string;
  origin: string;
  destination: string;
}

export default function ShipmentDetails({ data }: { data: ShipmentData }) {
  if (!data) return null;

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-800 mb-2">
          Detalles del Envío
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">
                ID de Seguimiento
              </h4>
            </div>
            <p className="text-2xl font-mono font-bold text-blue-600 bg-white px-3 py-2 rounded-lg border">
              {data.trackingId}
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">
                Estado Actual
              </h4>
            </div>
            <p className="text-xl font-semibold text-green-700 bg-white px-3 py-2 rounded-lg border">
              {data.status}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-100">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">Origen</h4>
            </div>
            <p className="text-lg font-medium text-orange-700 bg-white px-3 py-2 rounded-lg border">
              {data.origin}
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">Destino</h4>
            </div>
            <p className="text-lg font-medium text-purple-700 bg-white px-3 py-2 rounded-lg border">
              {data.destination}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-sm font-medium">
            Información actualizada en tiempo real
          </span>
        </div>
      </div>
    </div>
  );
}
