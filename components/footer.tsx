import Link from "next/link";
import { PartyPopper } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <PartyPopper className="h-6 w-6" />
              <span className="font-bold">EventRent</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Tu plataforma para encontrar todo lo necesario para tu evento
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/furniture" className="text-muted-foreground hover:text-foreground">
                  Mobiliario
                </Link>
              </li>
              <li>
                <Link href="/services/entertainment" className="text-muted-foreground hover:text-foreground">
                  Entretenimiento
                </Link>
              </li>
              <li>
                <Link href="/services/catering" className="text-muted-foreground hover:text-foreground">
                  Catering
                </Link>
              </li>
              <li>
                <Link href="/services/decoration" className="text-muted-foreground hover:text-foreground">
                  Decoración
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Trabaja con Nosotros
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Términos
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EventRent. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}