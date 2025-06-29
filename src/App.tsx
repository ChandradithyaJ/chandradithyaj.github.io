import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Layout } from "@/components/Layout";
import { Home } from "@/components/pages/Home";
import { Research } from "@/components/pages/Research";
import { HierGraphs } from "@/components/pages/demos/HierGraphs";
import { Blog } from "@/components/pages/Blog";
import { Contact } from "@/components/pages/Contact";
import { CV } from "@/components/pages/CV";
import { Resume } from "@/components/pages/Resume";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ThemeProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/research" element={<Research />} />
              <Route path="/research/demos/hiergraphs" element={<HierGraphs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
