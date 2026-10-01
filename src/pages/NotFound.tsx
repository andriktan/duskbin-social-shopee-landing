import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Wordmark } from "@/components/site/Wordmark";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-night px-5 text-center">
      <Wordmark />
      <div>
        <p className="label text-gold">404 · Off air</p>
        <h1 className="display mt-4 text-[clamp(2.4rem,7vw,4.5rem)] text-paper">Nothing on this channel.</h1>
      </div>
      <a href="/" className="btn-ember h-12">
        Back to duskbin.com
      </a>
    </div>
  );
};

export default NotFound;
