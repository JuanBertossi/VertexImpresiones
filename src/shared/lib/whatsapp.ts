const WHATSAPP_PHONE = '5493573451757'

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
}
