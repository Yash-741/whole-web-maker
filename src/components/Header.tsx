import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, BarChart3, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">DataFlow</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#workflow" className="text-muted-foreground hover:text-primary transition-colors">
              Workflow
            </a>
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#technology" className="text-muted-foreground hover:text-primary transition-colors">
              Technology
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </a>
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground">Welcome back!</span>
                <Button 
                  onClick={handleSignOut}
                  variant="ghost" 
                  className="text-muted-foreground hover:text-primary"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                    Sign In
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              <a 
                href="#workflow" 
                className="text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Workflow
              </a>
              <a 
                href="#features" 
                className="text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Features
              </a>
              <a 
                href="#technology" 
                className="text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Technology
              </a>
              <a 
                href="#pricing" 
                className="text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Pricing
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
                {user ? (
                  <Button 
                    onClick={handleSignOut}
                    variant="ghost" 
                    className="justify-start"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                ) : (
                  <>
                    <Link to="/auth">
                      <Button variant="ghost" className="justify-start">
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/auth">
                      <Button className="bg-gradient-primary">
                        Get Started
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;