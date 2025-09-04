import React from "react";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const workshopInfo = {
    title:
      "Introducción a la Física de Partículas y Ciencia de Datos con Experimentos del CERN",
    date: "9 de septiembre de 2025",
    time: "08:00 - 13:00",
    location: "E12/P2/E004",
    facilitators: [
      "Eliana Acurio",
      "Diana Martínez",
      "Pablo Jácome",
      "Claudia Constante",
      "Dax Navarrete",
      "Emilio Camino",
    ],
  };

  return (
    <section
      className={cn(
        "py-16 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden",
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lamenteesmaravillosa.com/wp-content/uploads/2021/07/acelerador-de-particulas-1024x576.jpg?auto=webp&quality=7500&width=640&crop=16:9,smart,safe&format=webp&optimize=medium&dpr=2&fit=cover&fm=webp&q=75&w=640&h=360"
          alt="Acelerador de partículas del CERN"
          className="w-full h-full object-cover opacity-100"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-white/80"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight">
            {workshopInfo.title}
          </h1>

          {/* Workshop Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-secondary mb-1">Fecha</h3>
                <p className="text-sm text-muted-foreground">
                  {workshopInfo.date}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-secondary mb-1">Hora</h3>
                <p className="text-sm text-muted-foreground">
                  {workshopInfo.time}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-secondary mb-1">Ubicación</h3>
                <p className="text-sm text-muted-foreground">
                  {workshopInfo.location}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-secondary mb-1">
                  Facilitadores
                </h3>
                <p className="text-sm text-muted-foreground">
                  {workshopInfo.facilitators.length} instructores
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Facilitators */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-secondary mb-6">
              Facilitadores
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {workshopInfo.facilitators.map((facilitator, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {facilitator}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
