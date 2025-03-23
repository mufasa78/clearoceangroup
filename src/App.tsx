import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProperties } from './components/FeaturedProperties';
import { SearchPage } from './pages/SearchPage';
import { MarketReport } from './pages/MarketReport';
import { Blog } from './pages/Blog';
import { Communities } from './pages/Communities';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import { Buy } from './pages/Buy';
import { Sell } from './pages/Sell';
import { HomeValuation } from './pages/HomeValuation';
import { MortgageCalculator } from './pages/MortgageCalculator';
import { SellingProcess } from './pages/SellingProcess';
import { BuyingProcess } from './pages/BuyingProcess';
import { About } from './pages/About';

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-grow pt-20">
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <FeaturedProperties />
                  </>
                } />
                <Route path="/buy" element={<Buy />} />
                <Route path="/sell" element={<Sell />} />
                <Route path="/home-valuation" element={<HomeValuation />} />
                <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
                <Route path="/selling-process" element={<SellingProcess />} />
                <Route path="/buying-process" element={<BuyingProcess />} />
                <Route path="/search-properties" element={<SearchPage />} />
                <Route path="/communities" element={<Communities />} />
                <Route path="/market-report" element={<MarketReport />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;