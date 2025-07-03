"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, User, Settings, Mail } from "lucide-react"

export default function Component() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Página Principal</CardTitle>
              <CardDescription>Bienvenido a la página de inicio</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Este es el contenido de la página principal.</p>
            </CardContent>
          </Card>
        )
      case "about":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Acerca de</CardTitle>
              <CardDescription>Información sobre nosotros</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Aquí va la información sobre la empresa o proyecto.</p>
            </CardContent>
          </Card>
        )
      case "services":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Servicios</CardTitle>
              <CardDescription>Nuestros servicios disponibles</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Lista de servicios que ofrecemos.</p>
            </CardContent>
          </Card>
        )
      case "contact":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Contacto</CardTitle>
              <CardDescription>Ponte en contacto con nosotros</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Información de contacto y formulario.</p>
            </CardContent>
          </Card>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con navegación */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Mi Sitio Web</h1>
            </div>

            {/* Navegación principal */}
            <nav className="hidden md:flex space-x-8">
              <Button
                variant={currentPage === "home" ? "default" : "ghost"}
                onClick={() => setCurrentPage("home")}
                className="flex items-center gap-2"
              >
                <Home className="h-4 w-4" />
                Inicio
              </Button>
              <Button
                variant={currentPage === "about" ? "default" : "ghost"}
                onClick={() => setCurrentPage("about")}
                className="flex items-center gap-2"
              >
                <User className="h-4 w-4" />
                Acerca de
              </Button>
              <Button
                variant={currentPage === "services" ? "default" : "ghost"}
                onClick={() => setCurrentPage("services")}
                className="flex items-center gap-2"
              >
                <Settings className="h-4 w-4" />
                Servicios
              </Button>
              <Button
                variant={currentPage === "contact" ? "default" : "ghost"}
                onClick={() => setCurrentPage("contact")}
                className="flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Contacto
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">{renderPage()}</div>
      </main>

      {/* Navegación móvil */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="grid grid-cols-4 gap-1 p-2">
          <Button
            variant={currentPage === "home" ? "default" : "ghost"}
            onClick={() => setCurrentPage("home")}
            className="flex flex-col items-center gap-1 h-auto py-2"
          >
            <Home className="h-4 w-4" />
            <span className="text-xs">Inicio</span>
          </Button>
          <Button
            variant={currentPage === "about" ? "default" : "ghost"}
            onClick={() => setCurrentPage("about")}
            className="flex flex-col items-center gap-1 h-auto py-2"
          >
            <User className="h-4 w-4" />
            <span className="text-xs">Acerca</span>
          </Button>
          <Button
            variant={currentPage === "services" ? "default" : "ghost"}
            onClick={() => setCurrentPage("services")}
            className="flex flex-col items-center gap-1 h-auto py-2"
          >
            <Settings className="h-4 w-4" />
            <span className="text-xs">Servicios</span>
          </Button>
          <Button
            variant={currentPage === "contact" ? "default" : "ghost"}
            onClick={() => setCurrentPage("contact")}
            className="flex flex-col items-center gap-1 h-auto py-2"
          >
            <Mail className="h-4 w-4" />
            <span className="text-xs">Contacto</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
