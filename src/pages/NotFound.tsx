
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
        <h1 className="text-7xl md:text-9xl font-bold text-primary mb-4">404</h1>
        <p className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 mb-6 text-center">
          Oops! Page not found
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild size="lg">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
