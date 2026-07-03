import type { MetadataRoute } from "next";
import { cases } from "@/data/cases";

const BASE_URL = "https://malina-studio.online";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...cases.map((c) => ({
      url: `${BASE_URL}/cases/${c.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
