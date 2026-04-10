import { type FunctionComponent } from "react";

export type CertificateCardType = {
  image: string;
  name: string;
  issuer: string;
};

const CertificateCard: FunctionComponent<CertificateCardType> = ({
  image,
  name,
  issuer,
}) => {
  return (
    <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 animate-in zoom-in-95 fade-in">
      {/* Background Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-1">
        <h4 className="m-0 text-white text-base font-bold leading-tight">
          {name}
        </h4>
        <div className="text-white/80 text-xs font-medium uppercase tracking-widest italic flex items-center gap-2">
          <span className="h-[1px] w-4 bg-white/40" />
          {issuer}
        </div>
      </div>

      {/* Hover Overlay Button */}
      <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="bg-white/90 p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
          <img className="w-5 h-5" src="/fluent-edit-24-regular.svg" alt="Edit" />
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
