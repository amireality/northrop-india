
import { Helmet } from 'react-helmet-async';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#111a22] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <Helmet>
        <title>404 - Page Not Found | Northrop India</title>
        <meta name="description" content="The page you are looking for does not exist. Return to Northrop India homepage for institutional financial advisory services." />
      </Helmet>

      {/* Background Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl opacity-50" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-teal-500/5 blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Decorative Element */}
        <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl">
          <Search size={40} className="text-blue-400 opacity-80" />
        </div>

        <h1 className="text-[120px] md:text-[180px] font-serif font-bold text-white leading-none tracking-tighter opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          404
        </h1>

        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Lost in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Transition.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-lg mx-auto">
            The coordinates you requested are not part of our current mandate. The page may have been moved, renamed, or temporarily archived.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/" 
              className="group flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-medium transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] w-full sm:w-auto"
            >
              <Home size={18} />
              Return to Core
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-medium transition-all backdrop-blur-sm w-full sm:w-auto overflow-hidden relative"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>
        </div>

        {/* Support Link */}
        <div className="mt-20 pt-10 border-t border-white/5">
          <p className="text-slate-500 text-sm">
            Need immediate assistance? <Link to="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">Speak with an advisor</Link>
          </p>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-10 left-0 w-full text-center px-6">
        <p className="text-[10px] uppercase tracking-[0.4em] text-slate-600 font-bold">
          Northrop Management Private Limited
        </p>
      </div>
    </div>
  );
};

export default NotFound;
