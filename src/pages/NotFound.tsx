import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Helmet>
        <title>404 - Seite nicht gefunden | CMK Studio</title>
        <meta name="description" content="Seite nicht gefunden. Bitte kehren Sie zur Startseite zurück oder nutzen Sie die Navigation." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://cmk.studio/" />
        
        <meta property="og:title" content="404 - Seite nicht gefunden | CMK Studio" />
        <meta property="og:description" content="Diese Seite existiert nicht. Zur Startseite zurückkehren." />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="404 - Seite nicht gefunden | CMK Studio" />
      </Helmet>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
