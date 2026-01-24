import { Phone, Mail, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact-footer" className="bg-card p-6 rounded-lg shadow-lg mt-8 border border-border">
      <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
        Developed by SAYYAD FAYAZ BASHA
      </h3>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-muted-foreground">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-primary" />
          <span>9703029115</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-primary" />
          <a 
            href="mailto:fayaz1234basha@gmail.com" 
            className="text-primary hover:underline transition-colors"
          >
            fayaz1234basha@gmail.com
          </a>
        </div>
        <a 
          href="https://www.linkedin.com/in/sayyadfayazbasha-developer/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary hover:underline transition-colors"
        >
          <Linkedin className="w-4 h-4" />
          <span>LinkedIn</span>
        </a>
        <a 
          href="https://github.com/sayyadfayazbasha-developer" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary hover:underline transition-colors"
        >
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </a>
      </div>
      <p className="text-muted-foreground text-sm mt-4 text-center">
        © {new Date().getFullYear()} SAYYAD FAYAZ BASHA. All rights reserved.
      </p>
    </footer>
  );
};
