import type { MetadataRoute } from "next";
import { articles } from "@/lib/blog";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap { const staticRoutes=["","/course","/personalised-learning","/career-support","/blog","/about","/contact"].map(route=>({url:`${site.url}${route}`,lastModified:new Date("2026-09-17"),changeFrequency:route===""?"weekly" as const:"monthly" as const,priority:route===""?1:0.8})); const posts=articles.map(a=>({url:`${site.url}/blog/${a.slug}`,lastModified:new Date(a.updated),changeFrequency:"monthly" as const,priority:0.7})); return [...staticRoutes,...posts]; }
