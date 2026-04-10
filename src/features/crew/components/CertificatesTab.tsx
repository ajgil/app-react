import { type FunctionComponent, useState } from "react";
import CertificateCard from "./CertificateCard";
import CertificateViewerModal, { type CertificateData } from "./CertificateViewerModal";

const CertificatesTab: FunctionComponent = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certificates: CertificateData[] = [
    {
      id: 1,
      name: "STCW Basic Safety Training",
      issuer: "MCA",
      image: "https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=800&auto=format&fit=crop",
      issuedDate: "1/15/2022",
      expiryDate: "1/15/2027",
    },
    {
      id: 2,
      name: "ENG1 Medical Certificate",
      issuer: "MCA",
      image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=800&auto=format&fit=crop",
      issuedDate: "5/20/2023",
      expiryDate: "5/20/2025",
    },
    {
      id: 3,
      name: "Powerboat Level 2",
      issuer: "RYA",
      image: "https://images.unsplash.com/photo-1606326666490-45757474e788?q=80&w=800&auto=format&fit=crop",
      issuedDate: "3/10/2021",
      expiryDate: "N/A",
    },
  ];

  const handleOpenCert = (cert: CertificateData) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const handleNext = () => {
    if (!selectedCert) return;
    const currentIndex = certificates.findIndex(c => c.id === selectedCert.id);
    const nextIndex = (currentIndex + 1) % certificates.length;
    setSelectedCert(certificates[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedCert) return;
    const currentIndex = certificates.findIndex(c => c.id === selectedCert.id);
    const prevIndex = (currentIndex - 1 + certificates.length) % certificates.length;
    setSelectedCert(certificates[prevIndex]);
  };

  return (
    <div className="flex flex-col animate-in fade-in duration-500">
      {/* Tab Header */}
      <div className="w-full flex items-center justify-between p-6 gap-4">
        <div className="flex flex-col gap-0.5">
          <h2 className="m-0 text-xl font-semibold text-[#393939]">Certificate Wall</h2>
          <div className="text-sm tracking-[0.25px] text-[#727272]">
            Manage your professional certificates
          </div>
        </div>
        <button className="cursor-pointer py-3 px-6 bg-white border border-blue-600 rounded-lg flex items-center gap-3 hover:bg-blue-50 transition-all text-blue-600 font-semibold shadow-sm">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16V8M12 8L9 11M12 8L15 11M4 16.5V17.5C4 18.8807 5.11929 20 6.5 20H17.5C18.8807 20 20 18.8807 20 17.5V16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Upload Certificate
        </button>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 pt-2">
        {certificates.map((cert) => (
          <div key={cert.id} onClick={() => handleOpenCert(cert)}>
            <CertificateCard
              image={cert.image}
              name={cert.name}
              issuer={cert.issuer}
            />
          </div>
        ))}

        {/* Empty Slot / CTA */}
        <div className="group aspect-[4/3] rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-100 group-hover:scale-110 transition-all">
            <span className="text-2xl text-gray-400 group-hover:text-blue-600">+</span>
          </div>
          <span className="text-sm font-medium text-gray-400 group-hover:text-blue-600">Add New</span>
        </div>
      </div>

      {/* The Master Viewer Modal */}
      <CertificateViewerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        certificate={selectedCert}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default CertificatesTab;
