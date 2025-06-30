import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Layout } from "@/components/Layout";
import { Home } from "@/components/pages/Home";
import { Research } from "@/components/pages/Research";
import { HierGraphs } from "@/components/pages/helpers/HierGraphs";
import { Blog } from "@/components/pages/Blog";
import { MarkdownViewer } from "./components/pages/helpers/MarkdownViewer";
import { Contact } from "@/components/pages/Contact";
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
              <Route path="/blog/:filename" element={<MarkdownViewer />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
