import React from "react";
import { ExternalLink, Users, Code, Video, Database } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Activity {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  links: {
    label: string;
    url: string;
  }[];
  type: "outdoor" | "video" | "technical" | "presentation";
}

interface ActivitiesSectionProps {
  className?: string;
}

const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({ className }) => {
  const activities: Activity[] = [
    {
      id: "rutherford",
      title: "Rodando con Rutherford",
      description:
        "Actividad al aire libre para entender el experimento de Rutherford y la estructura del átomo.",
      icon: <Users className="w-6 h-6" />,
      type: "outdoor",
      links: [
        {
          label: "Notas para Tutores",
          url: "https://quarknet.org/sites/default/files/content/portfolio/file/2024-01/RwRTeacherNotes%20Spanish%20%20posted%201122%20%281%29.pdf",
        },
        {
          label: "Actividad Estudiantes",
          url: "https://quarknet.org/data-portfolio/activity/rolling-rutherford",
        },
      ],
    },
    {
      id: "higgs",
      title: "Descubrimiento del Bosón de Higgs",
      description:
        "Video explicativo sobre uno de los descubrimientos más importantes de la física de partículas.",
      icon: <Video className="w-6 h-6" />,
      type: "video",
      links: [
        {
          label: "Ver Video",
          url: "https://epnecuador.sharepoint.com/:v:/s/CMS-EPN/EYJThHiDxXZPlcXPcqFYUnkB3VSFI89zi_6D3xickuU4cQ?e=G9LYhK",
        },
      ],
    },
    {
      id: "docker",
      title: "Docker Containers",
      description:
        "Introducción a la containerización y su uso en experimentos científicos.",
      icon: <Code className="w-6 h-6" />,
      type: "technical",
      links: [
        {
          label: "Documentación",
          url: "https://cms-opendata-workshop.github.io/workshop2024-lesson-docker/instructor/index.html",
        },
      ],
    },
    {
      id: "data-analysis",
      title: "Análisis de Datos Abiertos",
      description:
        "Análisis de datos del CERN usando C++ y Python con datos reales de experimentos.",
      icon: <Database className="w-6 h-6" />,
      type: "technical",
      links: [
        {
          label: "Workshop CMS",
          url: "https://cms-opendata-workshop.github.io/workshop2024-lesson-cpp-root-python/instructor/index.html",
        },
      ],
    },
    {
      id: "epn-collaboration",
      title: "Avances Colaboración EPN-DPOA",
      description:
        "Presentación de los avances en la colaboración entre EPN y el proyecto DPOA.",
      icon: <Users className="w-6 h-6" />,
      type: "presentation",
      links: [
        {
          label: "Presentacion 1",
          url: "https://epnecuador-my.sharepoint.com/:b:/g/personal/ariel_navarrete_epn_edu_ec/ETWFnPGjJzJAm7erzaDlmewBP4TkvZYxbGJFsGq0pEzWlg?e=Sdpm4C",
        },
        {
          label: "Presentación 2",
          url: "https://www.overleaf.com/6799628194dbkzvjzwjfcc#8de1df",
        },
      ],
    },
  ];

  const getTypeColor = (type: Activity["type"]) => {
    switch (type) {
      case "outdoor":
        return "bg-green-100 text-green-800 border-green-200";
      case "video":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "technical":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "presentation":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getTypeLabel = (type: Activity["type"]) => {
    switch (type) {
      case "outdoor":
        return "Actividad al Aire Libre";
      case "video":
        return "Video Educativo";
      case "technical":
        return "Técnica";
      case "presentation":
        return "Presentación";
      default:
        return "General";
    }
  };

  return (
    <section className={cn("py-16 bg-white", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Actividades del Workshop
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora las diferentes actividades diseñadas para introducirte al
            fascinante mundo de la física de partículas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <Card key={activity.id} className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 text-primary rounded-lg">
                      {activity.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        {activity.title}
                      </CardTitle>
                      <span
                        className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${getTypeColor(
                          activity.type
                        )}`}
                      >
                        {getTypeLabel(activity.type)}
                      </span>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-sm">
                  {activity.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-end">
                <div className="space-y-2">
                  {activity.links.map((link, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => window.open(link.url, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {link.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
