import React, { useState } from 'react';

const APP_CONFIG = {
  NAME: "FADSSDRODO7 || STOREE",
  WHATSAPP_PRIMARY: "087713716038",
  SOCIALS: {
    WHATSAPP_CHANNEL: "https://whatsapp.com/channel/0029VbEIlZC6buMJLTwA4a10",
    TIKTOK: "https://www.tiktok.com/@_899843",
    TELEGRAM: "https://t.me/FADSSDRODO7",
    YOUTUBE: "https://youtu.be/jB-kn3ENpSE"
  }
};

function createWhatsAppMessage(product, buyerPhone = "") {
  const text = `Halo Admin FADSSDRODO7 || STORE, Saya sudah melakukan pembayaran.\n\nBARANG 📦 : ${product.name}\nNOMINAL 💸 : Rp ${Number(product.price).toLocaleString('id-ID')}\nNO PEMBELI 📱: ${buyerPhone}\nMohon segera dicek dan dikonfirmasi Admin 🙏`;
  return `https://wa.me/6287713716038?text=${encodeURIComponent(text)}`;
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [route, setRoute] = useState('/');
  const [selected, setSelected] = useState(null);

  if (!loaded) {
    return (
      <div className="fixed inset-0 bg-[#09050d] flex flex-col items-center justify-center p-6 text-center text-white">
        <h1 className="text-xl font-bold tracking-widest mb-2">FADSSDRODO7 || STOREE</h1>
        <p className="text-xs text-purple-300 mb-6">Memuat Store...</p>
        <button onClick={() => setLoaded(true)} className="px-8 py-3 rounded-full bg-purple-600 text-xs font-bold shadow-[0_0_15px_#a855f7]">[ MASUK ]</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#09050d] text-white p-4">
      <header className="flex justify-between items-center pb-4 border-b border-purple-500/30">
        <span className="font-extrabold text-sm">FADSSDRODO7</span>
        <div className="space-x-3 text-xs">
          <button onClick={() => setRoute('/')} className="hover:text-purple-300">HOME</button>
          <button onClick={() => setRoute('/joki')} className="hover:text-purple-300">JOKI</button>
          <button onClick={() => setRoute('/contact')} className="hover:text-purple-300">CONTACT</button>
        </div>
      </header>

      <main className="py-8 max-w-lg mx-auto">
        {route === '/' && (
          <div className="text-center space-y-4">
            <h2 className="text-xl font-bold">Selamat Datang Di Market FADSSDRODO7 || STORE</h2>
            <p className="text-xs text-gray-400">Market digital dengan layanan cepat, praktis, dan harga terjangkau.</p>
            <button onClick={() => { setSelected({name: 'PROMO WEB', price: 10000}); setRoute('/payment'); }} className="w-full py-3 rounded-xl bg-purple-600 text-xs font-bold shadow-[0_0_15px_#a855f7]">[ 📦 PESAN DAN BAYAR ]</button>
          </div>
        )}

        {route === '/joki' && (
          <div className="space-y-4 text-center">
            <h2 className="text-lg font-bold">JASA JOKI KONTAK</h2>
            <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-950/20 flex justify-between items-center">
              <span className="text-xs">JOKI PERMANEN - Rp 5.000</span>
              <button onClick={() => { setSelected({name: 'JOKI PERMANEN', price: 5000}); setRoute('/payment'); }} className="px-4 py-2 rounded-lg bg-purple-600 text-xs font-bold">[ PESAN ]</button>
            </div>
          </div>
        )}

        {route === '/contact' && (
          <div className="text-center space-y-3">
            <h2 className="text-lg font-bold">CONTACT</h2>
            <a href={APP_CONFIG.SOCIALS.WHATSAPP_CHANNEL} target="_blank" rel="noreferrer" className="block w-full py-3 rounded-xl bg-purple-600 text-xs font-bold text-center shadow-[0_0_15px_#a855f7]">[ 📢 MASUK CHANNEL ]</a>
          </div>
        )}

        {route === '/payment' && selected && (
          <div className="p-6 rounded-2xl border border-purple-500/30 bg-purple-950/20 text-center space-y-4">
            <h2 className="text-sm font-bold">PAYMENT FADSSDRODO7 || STORE</h2>
            <p className="text-xs text-purple-300">{selected.name} - Rp {selected.price.toLocaleString('id-ID')}</p>
            <a href={createWhatsAppMessage(selected)} target="_blank" rel="noreferrer" className="block w-full py-3 rounded-xl bg-purple-600 text-xs font-bold text-center shadow-[0_0_15px_#a855f7]">[ 💬 KONFIRMASI PEMBAYARAN ]</a>
            <button onClick={() => setRoute('/')} className="block mx-auto text-xs text-gray-400 mt-2">← Kembali</button>
          </div>
        )}
      </main>
    </div>
  );
}
