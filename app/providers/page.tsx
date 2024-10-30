import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Award, Shield, Star, Users } from "lucide-react";

export default function ProvidersPage() {
  const featuredProviders = [
    {
      name: "Eventos Mágicos",
      rating: 4.9,
      reviews: 128,
      services: ["Decoración", "Catering", "Mobiliario"],
      image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80",
    },
    {
      name: "DJ Pro Events",
      rating: 4.8,
      reviews: 95,
      services: ["Música", "Iluminación", "Sonido"],
      image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&q=80",
    },
    {
      name: "Delicias Gourmet",
      rating: 4.7,
      reviews: 156,
      services: ["Catering", "Banquetes", "Personal"],
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Nuestros Proveedores Destacados
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Trabajamos con los mejores proveedores de servicios para eventos, todos verificados y evaluados por nuestra comunidad.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {featuredProviders.map((provider) => (
          <Card key={provider.name} className="overflow-hidden">
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${provider.image})` }}
            />
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {provider.name}
                <span className="flex items-center text-sm">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  {provider.rating}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  {provider.reviews} reseñas
                </p>
                <div className="flex flex-wrap gap-2">
                  {provider.services.map((service) => (
                    <span
                      key={service}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader>
            <Shield className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Proveedores Verificados</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Todos nuestros proveedores pasan por un riguroso proceso de verificación.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Users className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Comunidad Activa</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Miles de usuarios confían en nuestros proveedores para sus eventos.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Award className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Calidad Garantizada</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Garantizamos la calidad de todos los servicios ofrecidos.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button size="lg" asChild>
          <Link href="/providers/register">Conviértete en Proveedor</Link>
        </Button>
      </div>
    </div>
  );
}