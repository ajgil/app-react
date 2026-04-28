import type { FC } from "react";
import { useState, useMemo } from "react";
import SidebarOpen from "../components/SidebarOpen";
import { JobFilterCard } from "../../../components/common/ui";
import { Search, ListFilter, Navigation, Plus, Minus } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

// Fix for default marker icons in Leaflet with Vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const MapControls: FC = () => {
  const map = useMap();
  return (
    <div className="absolute right-4 top-1/2 -translate-y-1/2 z-[1000] flex flex-col gap-2">
      <button
        onClick={() => map.zoomIn()}
        className="w-10 h-10 bg-white rounded-lg border border-[#e6e6e6] shadow-md flex items-center justify-center hover:bg-gray-50 transition-all cursor-pointer border-none"
      >
        <Plus size={20} className="text-[#393939]" />
      </button>
      <button
        onClick={() => map.zoomOut()}
        className="w-10 h-10 bg-white rounded-lg border border-[#e6e6e6] shadow-md flex items-center justify-center hover:bg-gray-50 transition-all cursor-pointer border-none"
      >
        <Minus size={20} className="text-[#393939]" />
      </button>
      <button
        className="w-10 h-10 bg-white rounded-lg border border-[#e6e6e6] shadow-md flex items-center justify-center hover:bg-gray-50 transition-all cursor-pointer border-none mt-2"
      >
        <Navigation size={20} className="text-[#393939]" />
      </button>
    </div>
  );
};

const CrewJobMapView: FC = () => {
  const [showFilters, setShowFilters] = useState(false);

  const jobs = useMemo(() => [
    {
      id: 1,
      title: "Deckhand",
      shipName: "M/Y Oceanus",
      location: [43.7384, 7.4246], // Monaco
      matchQuality: 88,
      color: "#1849d6",
    },
    {
      id: 2,
      title: "Bosun",
      shipName: "M/Y Neptune",
      location: [43.5804, 7.1251], // Antibes
      matchQuality: 92,
      color: "#e1a613",
    },
    {
      id: 3,
      title: "Chief Stewardess",
      shipName: "M/Y Serenity",
      location: [39.5696, 2.6502], // Palma
      matchQuality: 75,
      color: "#8b5cf6",
    },
    {
      id: 4,
      title: "Deckhand",
      shipName: "S/Y Spirit",
      location: [43.2965, 5.3698], // Marseille
      matchQuality: 82,
      color: "#1849d6",
    },
    {
      id: 5,
      title: "Chef",
      shipName: "M/Y Horizon",
      location: [43.4801, 6.7674], // Saint-Raphaël
      matchQuality: 85,
      color: "#1849d6",
    }
  ], []);

  const createCustomIcon = (color: string) => {
    return L.divIcon({
      html: `
        <div style="
          background-color: ${color};
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        ">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
            <path d="M19.38 20.42a2.4 2.4 0 0 0 .02-1.92l-1.4-4.5h-12l-1.4 4.5a2.4 2.4 0 0 0 .02 1.92"/>
            <path d="M19 14V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v8"/>
            <path d="M12 4v4"/>
            <path d="M10 4V2"/>
            <path d="M14 4V2"/>
          </svg>
        </div>
      `,
      className: "",
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });
  };

  return (
    <div className="w-full min-h-screen bg-[#fff] flex overflow-x-hidden leading-[normal] tracking-[normal] text-left text-base text-[#1849d6] font-[Inter]">
      <SidebarOpen className="fixed left-0 top-0 h-full z-50" />

      <div className="flex-1 ml-[260px] flex flex-col min-h-screen">
        <main className="flex-1 p-6 flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col gap-0.5">
            <div className="text-lg font-semibold text-[#393939]">Job Map</div>
            <div className="text-sm text-[#727272]">Discover positions worldwide</div>
          </div>

          {/* Search and Filter */}
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#727272]" size={20} />
              <input
                type="text"
                placeholder="Search locations..."
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[#e6e6e6] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#e6e6e6] text-sm font-semibold transition-all cursor-pointer ${showFilters ? "bg-[#f4f4f4] text-[#1849d6] border-[#1849d6]" : "bg-white text-[#212121] hover:bg-gray-50"
                }`}
            >
              <ListFilter size={20} />
              Filter
            </button>
          </div>

          {showFilters && (
            <JobFilterCard
              onApply={() => setShowFilters(false)}
              onClear={() => { }}
            />
          )}

          {/* Map Container */}
          <div className="flex-1 min-h-[500px] relative rounded-2xl overflow-hidden border border-[#e6e6e6] shadow-sm">
            <MapContainer
              center={[43.6, 7.2]} // Nice Mediterranean center
              zoom={8}
              style={{ height: "100%", width: "100%" }}
              zoomControl={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {jobs.map((job) => (
                <Marker
                  key={job.id}
                  position={job.location as [number, number]}
                  icon={createCustomIcon(job.color)}
                >
                  <Popup>
                    <div className="p-1">
                      <div className="font-semibold text-sm">{job.title}</div>
                      <div className="text-xs text-[#727272]">{job.shipName}</div>
                      <div className="mt-2 text-xs font-medium text-blue-600">Match: {job.matchQuality}%</div>
                    </div>
                  </Popup>
                </Marker>
              ))}

              <MapControls />
            </MapContainer>

            {/* In-map Overlays */}
            <div className="absolute left-4 top-4 z-[1000]">
              <div className="bg-white px-4 py-2 rounded-lg shadow-md border border-[#e6e6e6] text-sm font-semibold text-[#393939]">
                5 jobs in view
              </div>
            </div>

            <div className="absolute left-4 bottom-4 z-[1000]">
              <div className="bg-white p-4 rounded-xl shadow-md border border-[#e6e6e6] flex flex-col gap-2">
                <div className="text-xs font-bold text-[#393939] uppercase tracking-wider">Match Quality</div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-xs text-[#727272]">
                    <div className="w-3 h-3 rounded-full bg-[#e1a613]" />
                    90%+ Match
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#727272]">
                    <div className="w-3 h-3 rounded-full bg-[#1849d6]" />
                    80%+ Match
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#727272]">
                    <div className="w-3 h-3 rounded-full bg-[#8b5cf6]" />
                    Below 80%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CrewJobMapView;
