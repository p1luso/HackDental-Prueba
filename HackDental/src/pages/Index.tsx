import React from "react";
import Section from "@/components/Section";
import Logo from "../assets/logo.svg";
import TestImage from "../assets/imagen-test.svg";

const Index = () => {
  return (
    <div className="bg-background text-foreground text-white min-h-screen pb-20">
      <header className="py-6 px-8 flex items-center justify-center bg-white border-b border-emerald-100">
        <div className="text-center">
          <img src={Logo} alt="" />
        </div>
      </header>

      <div className="text-center mt-12 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold white mb-2">
          Aprende de Nuestro Método Especializado
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold white-200">
          de Marketing Dental🔬
        </h2>
      </div>

      <main>
        <Section
          number="01"
          title="Recibe una auditoría de marketing gratuita"
          description="Aprende más sobre nuestro programa de 180 días y cómo puede cambiar tu práctica dental"
          image={
            <img src={TestImage} className="max-w-full h-auto rounded mb-3" />
          }
          steps={[
            "Puedes ponerte en contacto con nosotros por correo",
            "Análisis personalizado de tu consulta",
            "Estrategias adaptadas a tu especialidad",
          ]}
        />

        <Section
          number="02"
          title="Conozca su audiencia"
          subtitle="Estrategias de marketing personalizadas"
          description="Aprende más sobre nuestro programa de 180 días y cómo puede cambiar tu práctica dental"
          image={
            <img src={TestImage} className="max-w-full h-auto rounded mb-3" />
          }
          steps={[
            "Puedes ponerte en contacto con nosotros por correo",
            "Análisis personalizado de tu consulta",
            "Estrategias adaptadas a tu especialidad",
          ]}
        />
        <Section
          number="03"
          title="Conozca su audiencia"
          subtitle="Estrategias de marketing personalizadas"
          description="Aprende más sobre nuestro programa de 180 días y cómo puede cambiar tu práctica dental"
          image={
            <img src={TestImage} className="max-w-full h-auto rounded mb-3" />
          }
          steps={[
            "Puedes ponerte en contacto con nosotros por correo",
            "Análisis personalizado de tu consulta",
            "Estrategias adaptadas a tu especialidad",
          ]}
        />
      </main>
    </div>
  );
};

export default Index;
