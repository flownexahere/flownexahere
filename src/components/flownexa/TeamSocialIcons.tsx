import { Mail, Phone, Linkedin, Instagram, Facebook, Globe, Github } from "lucide-react";

interface TeamSocialIconsProps {
  name: string;
  title: string;
  email?: string;
  phone?: string;
  instagram?: string;
  linkedin?: string;
  website?: string;
  facebook?: string;
  github?: string;
}

export function TeamSocialIcons({
  name,
  title,
  email,
  phone,
  instagram,
  linkedin,
  website,
  facebook,
  github,
}: TeamSocialIconsProps) {
  const socialLinks = [
    { icon: Instagram, href: instagram, label: "Instagram", color: "hover:text-pink-400" },
    { icon: Linkedin, href: linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Github, href: github, label: "GitHub", color: "hover:text-purple-400" },
    { icon: Globe, href: website, label: "Website", color: "hover:text-cyan-400" },
    { icon: Facebook, href: facebook, label: "Facebook", color: "hover:text-blue-600" },
    { icon: Phone, href: phone ? `tel:${phone}` : "#", label: "Phone", color: "hover:text-green-400" },
    { icon: Mail, href: email ? `mailto:${email}` : "#", label: "Email", color: "hover:text-red-400" },
  ];

  return (
    <div className="mt-4 space-y-3">
      <div>
        <h4 className="font-display font-semibold text-base">{name}</h4>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>

      <div className="flex gap-3 flex-wrap">
        {socialLinks.map(({ icon: Icon, href, label, color }) => (
          <a
            key={label}
            href={href && href !== "#" ? href : "#"}
            target={href && !href.startsWith("tel:") && !href.startsWith("mailto:") ? "_blank" : undefined}
            rel={href && !href.startsWith("tel:") && !href.startsWith("mailto:") ? "noopener noreferrer" : undefined}
            aria-label={label}
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/50 border border-accent/20 transition-all duration-300 ${color} ${
              href && href !== "#" ? "cursor-pointer hover:bg-background/80 hover:border-accent/50" : "opacity-50 cursor-not-allowed"
            }`}
            onClick={(e) => {
              if (!href || href === "#") {
                e.preventDefault();
              }
            }}
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  );
}
