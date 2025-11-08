import { Award, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/logo.png";

interface HeroProps {
  onOrderClick: () => void;
}

const Hero = ({ onOrderClick }: HeroProps) => {
  const scrollToProducts = () => {
    const element = document.getElementById("produtos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
              Brigadeiros - Tortas - Salgados
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Agradando seu paladar
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Doçes e Salgados artesanais feitos com ingredientes premium para tornar seus momentos
              especiais ainda melhores.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                variant="hero"
                size="lg"
                onClick={scrollToProducts}
                aria-label="Ver cardápio"
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
                <Award className="h-5 w-5 text-accent" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">Ingredientes Premium</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">Ideal para Eventos</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <img
              src={heroImage}
              alt="Salgados e Doçes artesanais com diversos sabores e coberturas premium"
              className="w-full h-auto rounded-[550px] shadow-elevated object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
