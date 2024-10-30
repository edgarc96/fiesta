"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X, PartyPopper } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <PartyPopper className="h-6 w-6" />
          <span className="font-bold">EventRent</span>
        </Link>

        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between md:space-x-4 md:px-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar servicios..."
              className="pl-8"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/services">Servicios</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/providers">Proveedores</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/about">Nosotros</Link>
            </Button>
            <ThemeToggle />
            <Button variant="default" asChild>
              <Link href="/login">Iniciar Sesión</Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4 md:hidden">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/services"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Servicios
                </Link>
                <Link
                  href="/providers"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Proveedores
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Nosotros
                </Link>
                <Link
                  href="/login"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Iniciar Sesión
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}