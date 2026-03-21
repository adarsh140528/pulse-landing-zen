const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/50">
      <div className="container px-6 h-16 flex items-center justify-between">
        <span className="font-display font-bold text-xl uppercase tracking-wider">
          <span className="text-primary">Pulse</span>
          <span className="text-foreground/60 text-sm ml-1">by Nike</span>
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm font-body font-medium uppercase tracking-widest text-muted-foreground">
          <a href="#highlights" className="hover:text-primary transition-colors duration-200">Product</a>
          <a href="#flavors" className="hover:text-primary transition-colors duration-200">Flavors</a>
          <a href="#athletes" className="hover:text-primary transition-colors duration-200">Athletes</a>
        </div>
        <button className="px-5 py-2 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-wider rounded-lg hover:scale-[1.03] active:scale-[0.97] transition-transform duration-200">
          Buy Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
