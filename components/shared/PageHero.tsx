import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  videoSrc?: string;
  children?: ReactNode;
}

export default function PageHero({ title, subtitle, videoSrc, children }: PageHeroProps) {
  return (
    <section className="relative bg-primary-dark min-h-[80vh] flex items-center pt-40 pb-36 px-4 overflow-hidden">
      {videoSrc && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
          <source src={videoSrc} type="video/quicktime" />
        </video>
      )}
      {!videoSrc && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary" />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h1 className="font-serif text-4xl md:text-6xl font-semibold mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
