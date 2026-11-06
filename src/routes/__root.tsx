import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { I18nProvider } from "../lib/i18n";
import { Analytics } from "@/components/site/Analytics";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Khaliq Systems" },
      { name: "theme-color", content: "#F6F7F5" },
      { name: "facebook-domain-verification", content: "vaa1okpup4gg5gkhp0xsuje2caoz4t" },
      { property: "og:site_name", content: "Khaliq Systems" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:wght@400;700&family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700&family=IBM+Plex+Mono:wght@400;500&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Khaliq Systems",
          url: "https://khaliqsystems.com",
          description:
            "Khaliq Systems is a technology company in São Paulo, Brazil, developing AI automation, WhatsApp systems, business websites and intelligent digital infrastructure for modern businesses.",
          areaServed: "Brazil",
          address: {
            "@type": "PostalAddress",
            addressLocality: "São Paulo",
            addressCountry: "BR",
          },
          email: "khaliqsystems@gmail.com",
          sameAs: ["https://www.instagram.com/khaliqsystems"],
          department: [
            {
              "@type": "Organization",
              name: "Khaliq Automations",
              url: "https://khaliqsystems.com/automations",
              description: "AI and business automation division of Khaliq Systems.",
            },
            {
              "@type": "Organization",
              name: "Khaliq Digital",
              url: "https://khaliqsystems.com/digital",
              description:
                "Website design, website development and digital systems division of Khaliq Systems.",
            },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Khaliq Systems Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI Receptionist & WhatsApp Automation",
                  provider: { "@type": "Organization", name: "Khaliq Automations" },
                  description:
                    "AI receptionists and WhatsApp automation systems that respond instantly, automate repetitive work, and escalate to human teams when needed.",
                  serviceType: "AI Receptionist & WhatsApp Automation",
                  areaServed: "Brazil",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Website Development & Digital Systems",
                  provider: { "@type": "Organization", name: "Khaliq Digital" },
                  description:
                    "Business websites, landing pages, web systems and digital infrastructure built for modern companies.",
                  serviceType: "Website Development & Digital Systems",
                  areaServed: "Brazil",
                },
              },
            ],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Khaliq Systems",
          url: "https://khaliqsystems.com",
          description:
            "Khaliq Systems is a technology company in São Paulo, Brazil, developing AI automation, WhatsApp systems, business websites and intelligent digital infrastructure for modern businesses.",
          inLanguage: ["pt-BR", "en"],
          publisher: {
            "@type": "Organization",
            name: "Khaliq Systems",
            url: "https://khaliqsystems.com",
          },
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
        <Analytics />
      </I18nProvider>
    </QueryClientProvider>
  );
}
