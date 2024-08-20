import { Metadata } from "next";

export const pagesMetadataList: Array<Metadata & { route: string }> = [
  {
    route: "/about",
    title: "en about",
    description: "estoy en about",
  },
  {
    route: "/profile",
    title: "en profile",
    description: "estoy en profile",
  },
];

export const defaultMetadata: Metadata = {
  title: "soluciones integrales en seguridad automotriz grabado de patentes",
  description:
    "Compromiso en otorgar soluciones integrales que protejan a nuestros clientes y sus vehículos.",
  keywords: [
    "enregla",
    "seguridad",
    "automotriz",
    "integrales",
    "vehiculos",
    "soluciones",
    "grabado",
    "patentes",
  ],
};
