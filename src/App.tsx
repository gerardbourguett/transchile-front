import { useState } from "react";
import "./App.css";
import type { ShipmentData } from "./components/ShipmentDetails";
import TrackingForm from "./components/TrackingForm";
import ShipmentDetails from "./components/ShipmentDetails";

function App() {
  const [shipmentData, setShipmentData] = useState<ShipmentData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Simulación de una llamada a la API
  const handleTrackShipment = async (id: string) => {
    setIsLoading(true);
    setError(null);
    setShipmentData(null);

    // Simula un retraso de red
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (id === "error") {
      setError("ID de seguimiento no encontrado.");
    } else {
      setShipmentData({
        trackingId: id,
        status: "En centro de distribución",
        origin: "Valparaíso, Chile",
        destination: "Punta Arenas, Chile",
      });
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <img
            src="/logo-transchile.png"
            alt="TransChile Logo"
            className="h-16 mx-auto mb-6 drop-shadow-lg logo-transchile"
          />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Seguimiento de Envíos
          </h1>
          <p className="text-gray-600 text-lg">
            Rastrea tu envío en tiempo real
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <TrackingForm onTrack={handleTrackShipment} isLoading={isLoading} />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-700 font-medium">{error}</p>
          </div>
        )}

        {shipmentData && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <ShipmentDetails data={shipmentData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
