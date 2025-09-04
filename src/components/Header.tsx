import React from "react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("w-full bg-white shadow-sm border-b", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* CERN Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://cs3mesh4eosc.eu/sites/default/files/2021-06/CERN-Logo.png"
                alt="CERN Logo"
                className="w-16 h-16 object-contain"
              />
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold text-secondary">CERN</h1>
                <p className="text-xs text-muted-foreground">
                  CMS Collaboration
                </p>
              </div>
            </div>
          </div>

          {/* Workshop Title */}
          <div className="flex-1 text-center hidden md:block">
            <h1 className="text-xl font-bold text-secondary">
              WORKSHOP CMS 2025
            </h1>
            <p className="text-sm text-muted-foreground">
              XIX Encuentro de Física
            </p>
          </div>

          {/* EPN Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="hidden sm:block text-right">
                <h1 className="text-lg font-semibold text-secondary">EPN</h1>
                <p className="text-xs text-muted-foreground">
                  Escuela Politécnica Nacional
                </p>
              </div>
              <img
                src="https://webhistorico.epn.edu.ec/wp-content/uploads/2022/08/logo-epn-vertical.png"
                alt="EPN Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
