import React from "react";
import { Clock, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  location: string;
  facilitators: string[];
  type: "welcome" | "activity" | "break" | "presentation" | "closing";
}

interface ScheduleSectionProps {
  className?: string;
}

const ScheduleSection: React.FC<ScheduleSectionProps> = ({ className }) => {
  const schedule: ScheduleItem[] = [
    {
      time: "08:00 - 08:15",
      title: "Registro",
      description: "Recepción de participantes",
      location: "E12/P2/E004",
      facilitators: ["Equipo Organizador"],
      type: "welcome",
    },
    {
      time: "08:15 - 08:45",
      title: "Charla introductoria sobre el CERN/CMS",
      description: "Introducción a los experimentos del CERN y CMS",
      location: "E12/P2/E004",
      facilitators: ["Eliana Acurio"],
      type: "presentation",
    },
    {
      time: "08:45 - 10:00",
      title: "Actividad al aire libre: Rodando con Rutherford",
      description:
        "Actividad práctica para entender el experimento de Rutherford y la estructura del átomo",
      location: "Áreas verdes de la EPN",
      facilitators: ["Pablo Jácome", "Claudia Constante"],
      type: "activity",
    },
    {
      time: "10:00 - 10:15",
      title: "Video: Explicación del descubrimiento del Bosón de Higgs",
      description: "Proyección de un video explicativo sobre el Bosón de Higgs",
      location: "E12/P2/E004",
      facilitators: [],
      type: "presentation",
    },
    {
      time: "10:15 - 10:30",
      title: "Coffee break",
      description: "Descanso",
      location: "Área de coffee break",
      facilitators: [],
      type: "break",
    },
    {
      time: "10:30 - 12:15",
      title: "Docker Containers y Análisis de Datos Abiertos",
      description:
        "Sesión práctica sobre Docker Containers (para estudiantes de la colaboración) y análisis de datos abiertos en C++ y Python",
      location: "E12/P2/E004",
      facilitators: ["Estudiantes de la colaboración"],
      type: "activity",
    },
    {
      time: "12:15 - 12:45",
      title: "Presentación Avances colaboración EPN-DPOA",
      description:
        "Presentación de los avances de la colaboración EPN-DPOA (por estudiantes de la colaboración)",
      location: "E12/P2/E004",
      facilitators: ["Estudiantes de la colaboración"],
      type: "presentation",
    },
    {
      time: "12:45 - 13:00",
      title: "Entrega de certificados y fotografía",
      description: "Ceremonia de entrega de certificados y foto grupal",
      location: "E12/P2/E004",
      facilitators: ["Equipo Organizador"],
      type: "closing",
    },
  ];

  const getTypeColor = (type: ScheduleItem["type"]) => {
    switch (type) {
      case "welcome":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "activity":
        return "bg-green-100 text-green-800 border-green-200";
      case "break":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "presentation":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "closing":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getTypeLabel = (type: ScheduleItem["type"]) => {
    switch (type) {
      case "welcome":
        return "Bienvenida";
      case "activity":
        return "Actividad";
      case "break":
        return "Descanso";
      case "presentation":
        return "Presentación";
      case "closing":
        return "Cierre";
      default:
        return "General";
    }
  };

  return (
    <section
      className={cn(
        "py-16 bg-gradient-to-br from-secondary/5 to-primary/5",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Cronograma del Workshop
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Programa detallado de actividades para el 9 de septiembre de 2025
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <Card key={index} className="relative">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="flex items-center space-x-2 text-primary">
                          <Clock className="w-4 h-4" />
                          <span className="font-semibold text-sm">
                            {item.time}
                          </span>
                        </div>
                        <span
                          className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${getTypeColor(
                            item.type
                          )}`}
                        >
                          {getTypeLabel(item.type)}
                        </span>
                      </div>
                      <CardTitle className="text-lg mb-2">
                        {item.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mb-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>

                    {item.facilitators.length > 0 && (
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{item.facilitators.join(", ")}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
