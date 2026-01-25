import { Phone, Mail, Linkedin, Github, Instagram, Globe, MessageCircle, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact-footer" className="bg-card p-8 rounded-lg shadow-lg mt-8 border border-border">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Let's Connect
        </h3>
        <p className="text-muted-foreground">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
      </div>

      <div className="text-center mb-6">
        <h4 className="text-lg font-semibold text-primary mb-4">SAYYAD FAYAZ BASHA</h4>
        
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-6">
          <a 
            href="mailto:fayaz1234basha@gmail.com" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span>fayaz1234basha@gmail.com</span>
          </a>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone className="w-4 h-4 text-primary" />
            <span>+91 9703029115</span>
          </div>
        </div>

        {/* Professional Hubs */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-3">Professional Hubs</p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <a 
              href="https://sayyad-fayaz-basha-showcase-portfolio.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>Portfolio</span>
            </a>
            <a 
              href="https://github.com/sayyadfayazbasha-developer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/sayyadfayazbasha-developer/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Social Channels */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-3">Social Channels</p>
          <div className="flex justify-center items-center gap-3 flex-wrap">
            <a 
              href="https://www.instagram.com/sayyad_fayaz_basha/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              title="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://x.com/FayazBasha0504" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              title="X (Twitter)"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://www.threads.net/@sayyad_fayaz_basha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              title="Threads"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a 
              href="https://www.facebook.com/SayyadFayazBasha5/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              title="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground text-sm text-center border-t border-border pt-4">
        © 2025 SAYYAD FAYAZ BASHA. All rights reserved.
      </p>
    </footer>
  );
};
