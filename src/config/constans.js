export const APP_CONFIG = {
  NAME: "FADSSDRODO7 || STOREE",
  WHATSAPP_PRIMARY: "087713716038",
  ASSETS: {
    LOGO: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",
    QRIS: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400"
  },
  SOCIALS: {
    WHATSAPP_CHANNEL: "https://whatsapp.com/channel/0029VbEIlZC6buMJLTwA4a10",
    TIKTOK: "https://www.tiktok.com/@_899843",
    TELEGRAM: "https://t.me/FADSSDRODO7",
    YOUTUBE: "https://youtu.be/jB-kn3ENpSE"
  }
};

export function createWhatsAppMessage(product, buyerPhone = "") {
  const text = `Halo Admin FADSSDRODO7 || STORE, Saya sudah melakukan pembayaran.\n\nBARANG 📦 : ${product.name}\nNOMINAL 💸 : Rp ${Number(product.price).toLocaleString('id-ID')}\nNO PEMBELI 📱: ${buyerPhone}\nMohon segera dicek dan dikonfirmasi Admin 🙏`;
  return `https://wa.me/6287713716038?text=${encodeURIComponent(text)}`;
}
