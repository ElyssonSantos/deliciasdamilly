import { Gift, Sparkles } from "lucide-react";

const ChristmasBanner = () => {
  return (
    <div className="bg-christmas-gradient text-white py-2 px-4 text-center">
      <div className="container mx-auto flex items-center justify-center gap-3 text-sm font-medium">
        <Sparkles className="h-4 w-4 text-christmas-gold animate-pulse" aria-hidden="true" />
        <span>🎄 Encomendas de Natal abertas! Garanta seus brigadeiros para as festas 🎅</span>
        <Gift className="h-4 w-4 text-christmas-gold animate-pulse" aria-hidden="true" />
      </div>
    </div>
  );
};

export default ChristmasBanner;
