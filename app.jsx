import React, { useState } from 'react';
import { APP_CONFIG, createWhatsAppMessage } from './config/constants';
export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [route, setRoute] = useState('/');
  const [selected, setSelected] = useState(null);
  if (!loaded) {
    return (
      <div className="fixed inset-0 bg-[#09050d] flex flex-col items-center justify-center p-6 text-center text-white">
        <h1 className="text-xl font-bold tracking-widest mb-4">FADSSDRODO7 || STOREE</h1>
        <p className="text-xs text-purple-300 mb-6">Memuat Store...</p>
        <button onClick={() => setLoaded(true)} className="px-8 py-3 rounded-full btn-custom text-xs font-bold">[ MASUK ]</button>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#09050d] text-white p-4">
      <header className="flex justify-between items-center pb-4 border-b border-purple-500/30">
        <span className="font-extrabold text-sm">FADSSDRODO7</span>
        <div className="space-x-2 text-xs">
          <button onClick={() => setRoute('/')}>HOME</button>
          <button onClick={() => setRoute('/joki')}>JOKI</button>
          <button onClick={() => setRoute('/contact')}>CONTACT</button>
        </div>
      </header>
      <main className="py-8">
        {route === '/' && (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Selamat Datang Di Market FADSSDRODO7 || STORE</h2>
            <button onClick={() => { setSelected({name: 'PROMO WEB', price: 10000}); setRoute('/payment'); }} className="px-6 py-3 rounded-xl btn-custom text-xs font-bold">[ 📦 PESAN DAN BAYAR ]</button>
          </div>
        )}
        {route === '/joki' && (
          <div className="space-y-4 text-center">
            <h2 className="text-lg font-bold">JASA JOKI KONTAK</h2>
            <div className="glass-morphism p-4 rounded-xl flex justify-between items-center max-w-md mx-auto">
              <span>JOKI PERMANEN - Rp 5.000</span>
              <button onClick={() => { setSelected({name: 'JOKI PERMANEN', price: 5000}); setRoute('/payment'); }} className="px-4 py-2 rounded-lg btn-custom text-xs font-bold">[ PESAN ]</button>
            </div>
          </div>
        )}
        {route === '/contact' && (
          <div className="text-center space-y-3">
            <h2 className="text-lg font-bold">CONTACT</h2>
            <a href={APP_CONFIG.SOCIALS.WHATSAPP_CHANNEL} target="_blank" rel="noreferrer" className="block max-w-sm mx-auto py-3 rounded-xl btn-custom text-xs font-bold">[ 📢 MASUK CHANNEL ]</a>
          </div>
        )}
        {route === '/payment' && selected && (
          <div className="glass-morphism max-w-md mx-auto p-6 rounded-2xl text-center space-y-4">
            <h2 className="text-sm font-bold">PAYMENT FADSSDRODO7 || STORE</h2>
            <p className="text-xs text-purple-300">{selected.name} - Rp {selected.price.toLocaleString('id-ID')}</p>
            <a href={createWhatsAppMessage(selected)} target="_blank" rel="noreferrer" className="block w-full py-3 rounded-xl btn-custom text-xs font-bold">[ 💬 KONFIRMASI PEMBAYARAN ]</a>
            <button onClick={() => setRoute('/')} className="text-xs text-silver">Kembali</button>
          </div>
        )}
      </main>
    </div>
  );
      }
