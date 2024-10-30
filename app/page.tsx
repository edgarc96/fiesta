import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Music2,
  UtensilsCrossed,
  Tent,
  PartyPopper,
  Camera,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    title: "DJ y Música",
    description: "Ameniza tu evento con los mejores DJs y equipos de sonido",
    icon: Music2,
    href: "/services/music",
  },
  {
    title: "Catering",
    description: "Deliciosa comida y servicio profesional para tu evento",
    icon: UtensilsCrossed,
    href: "/services/catering",
  },
  {
    title: "Mobiliario",
    description: "Mesas, sillas, carpas y todo el equipo necesario",
    icon: Tent,
    href: "/services/furniture",
  },
  {
    title: "Decoración",
    description: "Transforma tu espacio con decoraciones únicas",
    icon: Sparkles,
    href: "/services/decoration",
  },
  {
    title: "Entretenimiento",
    description: "Brincolines, juegos y diversión para todas las edades",
    icon: PartyPopper,
    href: "/services/entertainment",
  },
  {
    title: "Fotografía",
    description: "Captura los momentos especiales de tu evento",
    icon: Camera,
    href: "/services/photography",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 mix-blend-multiply" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80')",
            zIndex: -1,
          }}
        />
        <div className="relative container mx-auto px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Todo lo que necesitas para tu evento en un solo lugar
            </h1>
            <p className="mt-6 max-w-xl text-xl text-white">
              Encuentra y reserva los mejores servicios para hacer de tu evento algo inolvidable.
            </p>
            <div className="mt-10 flex gap-4">
              <Button size="lg" asChild>
                <Link href="/services">Explorar Servicios</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white" asChild>
                <Link href="/providers/register">Registrarse como Proveedor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          Categorías de Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="group hover:shadow-lg transition-shadow">
                <Link href={category.href}>
                  <CardHeader>
                    <Icon className="h-8 w-8 mb-2 text-primary group-hover:text-primary/80 transition-colors" />
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                </Link>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            ¿Por qué elegir EventRent?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Proveedores Verificados</h3>
                <p className="text-muted-foreground">
                  Trabajamos solo con los mejores proveedores, verificados y evaluados por nuestra comunidad.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Reservas Seguras</h3>
                <p className="text-muted-foreground">
                  Sistema de pagos seguro y garantía de satisfacción en cada reserva.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Soporte 24/7</h3>
                <p className="text-muted-foreground">
                  Equipo de soporte disponible en todo momento para ayudarte con lo que necesites.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-6">
          ¿Listo para hacer tu evento realidad?
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Únete a miles de personas que ya han confiado en nosotros para hacer de sus eventos algo especial.
        </p>
        <Button size="lg" asChild>
          <Link href="/register">Comenzar Ahora</Link>
        </Button>
      </section>
    </div>
  );
}