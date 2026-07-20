import { Award, Calendar, Gift, Sparkles, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { useAdmin } from "@/contexts/AdminContext";

const heroImage = "/favicon.ico";

interface HeroProps {
  onOrderClick: () => void;
}

const Hero = ({ onOrderClick }: HeroProps) => {
  const { isChristmasTheme } = useAdmin();

  const scrollToProducts = () => {
    const element = document.getElementById("produtos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            {isChristmasTheme ? (
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-christmas-gold" />
                <p className="text-xs uppercase tracking-widest text-christmas-red font-medium">
                  🎅🏼 ESPECIAL DE NATAL 🎅🏼
                </p>
                <Sparkles className="h-4 w-4 text-christmas-gold" />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-primary" />
                <p className="text-xs uppercase tracking-widest text-primary font-medium">
                  FEITO COM AMOR
                </p>
                <Heart className="h-4 w-4 text-primary" />
              </div>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Doçura que encanta­­ 
              {isChristmasTheme ? (
                <>
                  🎄 
                  <span className="block text-christmas-red text-3xl md:text-4xl mt-2">neste Natal!</span>
                </>
              ) : (
                <span className="block text-primary text-3xl md:text-4xl mt-2">em cada pedaço!</span>
              )}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Brigadeiros e doces artesanais feitos com ingredientes premium para tornar seus momentos especiais ainda mais doces.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                variant="hero"
                size="lg"
                onClick={scrollToProducts}
                aria-label="Ver cardápio de brigadeiros"
              >
                Ver Cardápio
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onOrderClick}
                aria-label="Solicitar orçamento personalizado"
              >
                Solicitar Orçamento
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">Ingredientes Premium</span>
              </div>
              <div className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">Perfeito para Presente</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">Encomendas Personalizadas</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center animate-fade-in">
            <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full flex items-center justify-center border-4 border-white shadow-elevated overflow-hidden">
              <img
                src={heroImage}
                alt="Logo Delicias da Milly"
                className="w-full h-full object-contain rounded-full" // Imagem contida e circular
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
