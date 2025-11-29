export default function SEOJsonLD() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Local Business",
    name: "CtrlX Studios",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://ctrlxstudios.vercel.app",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://ctrlxstudios.vercel.app"}/logo.svg`,
    sameAs: [
      "https://x.com/ctrlxstudios",
      "https://www.instagram.com/ctrlxstudioss"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
