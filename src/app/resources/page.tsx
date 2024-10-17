import React from "react";
import Resources from "@/components/resources/Resources";
import seoData from "@/components/Constants/resources/resources.json"; // Importing the JSON array
import { Metadata } from "next";

// Define HomeSeoData interface to match your JSON structure
interface resourcesSeoData {
  title: string;
  description: string;
  keywords: string;
  openGraph: {
    title: string;
    description: string;
    images: { url: string; alt: string }[];
  };
  robots: string;
  alternates: {
    canonical: string;
  };
  twitter: {
    card: string;
    site: string;
    title: string;
    description: string;
    image: string;
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata: resourcesSeoData | undefined = seoData?.resourcesSeoData;

  if (!metadata) {
    return {
      title: "Default Title",
      description: "Default Description",
      keywords: "default, keywords",
      openGraph: {
        title: "Default OG Title",
        description: "Default OG Description",
        images: [
          {
            url: "/default-image.webp",
            alt: "Default Image Alt",
          },
        ],
      },
      robots: "index, follow",
      alternates: {
        canonical: "https://www.default.com",
      },
      twitter: {
        card: "summary_large_image", // Fix: Ensure it uses the union type.
        site: "@DefaultTwitter",
        title: "Default Twitter Title",
        description: "Default Twitter Description",
        images: [
          // Fix: Change 'image' to 'images'
          {
            url: "/default-image.webp",
            alt: "Default Twitter Image",
          },
        ],
      },
    };
  }

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.openGraph.title,
      description: metadata.openGraph.description,
      images: metadata.openGraph.images.map((image) => ({
        url: image.url,
        alt: image.alt,
      })),
    },
    robots: metadata.robots,

    alternates: {
      canonical: metadata.alternates.canonical,
    },
    twitter: {
      card: "summary_large_image", // Fix: Use appropriate union type
      site: metadata.twitter.site,
      title: metadata.twitter.title,
      description: metadata.twitter.description,
      images: [
        // Fix: Change 'image' to 'images'
        {
          url: metadata.twitter.image,
          alt: "Twitter Image",
        },
      ],
    },
  };
}
 
export default function resources() {
    return(
        <main>
            <Resources/>
        </main>
    )
}

