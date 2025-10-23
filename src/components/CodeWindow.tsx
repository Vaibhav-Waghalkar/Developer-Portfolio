import { cn } from '@/lib/utils';

interface CodeWindowProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export function CodeWindow({ children, className, title = "Code" }: CodeWindowProps) {
  return (
    <div className={cn(
      "bg-card border border-border rounded-2xl shadow-elegant overflow-hidden",
      "backdrop-blur-sm bg-opacity-90",
      className
    )}>
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center">
          <span className="text-xs text-muted-foreground font-plus-jakarta">{title}</span>
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm bg-[hsl(var(--terminal-bg))] text-[hsl(var(--terminal-text))]">
        {children}
      </div>
    </div>
  );
}