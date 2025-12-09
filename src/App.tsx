import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Parent Site Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import EmployeesPage from "./pages/EmployeesPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

// Lekali Chulo Pages
import LekaliChuloHome from "./pages/lekalichulo/LekaliChuloHome";
import LekaliChuloMenu from "./pages/lekalichulo/LekaliChuloMenu";
import LekaliChuloGallery from "./pages/lekalichulo/LekaliChuloGallery";
import LekaliChuloLocation from "./pages/lekalichulo/LekaliChuloLocation";
import LekaliChuloBooking from "./pages/lekalichulo/LekaliChuloBooking";
import LekaliChuloContact from "./pages/lekalichulo/LekaliChuloContact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Parent Site Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:category" element={<ServicesPage />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Lekali Chulo Routes */}
          <Route path="/lekalichulo" element={<LekaliChuloHome />} />
          <Route path="/lekalichulo/menu" element={<LekaliChuloMenu />} />
          <Route path="/lekalichulo/gallery" element={<LekaliChuloGallery />} />
          <Route path="/lekalichulo/location" element={<LekaliChuloLocation />} />
          <Route path="/lekalichulo/booking" element={<LekaliChuloBooking />} />
          <Route path="/lekalichulo/contact" element={<LekaliChuloContact />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
