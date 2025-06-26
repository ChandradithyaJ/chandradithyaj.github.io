
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            Chandradithya S Jonnalagadda
          </div>
          <div className="text-sm text-muted-foreground">
            Please hire me 🥺
          </div>
        </div>
      </div>
    </footer>
  );
};
