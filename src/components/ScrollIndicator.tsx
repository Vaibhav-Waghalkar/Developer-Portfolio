import { ChevronDown } from 'lucide-react';

export function ScrollIndicator() {
  const scrollToNext = () => {
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
      <button
        onClick={scrollToNext}
        className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
        aria-label="Scroll to next section"
      >
        <span className="text-sm font-plus-jakarta font-medium">Scroll ↓</span>
        <ChevronDown className="h-5 w-5 animate-scroll-indicator group-hover:text-primary transition-colors" />
      </button>
    </div>
  );
}