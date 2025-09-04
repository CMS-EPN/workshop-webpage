import React from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("bg-secondary text-white py-12", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CERN Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CERN</h3>
            <p className="text-sm text-gray-300 mb-4">
              Organización Europea para la Investigación Nuclear
            </p>
            <div className="space-y-2">
              <a
                href="https://home.cern"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>home.cern</span>
              </a>
              <a
                href="https://cms.cern"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>CMS Collaboration</span>
              </a>
            </div>
          </div>

          {/* EPN Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">EPN</h3>
            <p className="text-sm text-gray-300 mb-4">
              Escuela Politécnica Nacional
            </p>
            <div className="space-y-2">
              <a
                href="https://www.epn.edu.ec"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>epn.edu.ec</span>
              </a>
              <p className="text-sm text-gray-300">Facultad de Ciencias</p>
            </div>
          </div>

          {/* Workshop Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Workshop CMS 2025</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>9 de septiembre de 2025</p>
              <p>08:00 - 13:00</p>
              <p>E12/P2/E004</p>
              <p className="mt-4">XIX Encuentro de Física</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © 2025 Workshop CMS - CERN & EPN.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
