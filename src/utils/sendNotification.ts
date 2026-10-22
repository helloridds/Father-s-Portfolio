import { ADVOCATE_INFO } from '../data/legalData';

export interface FormSubmissionPayload {
  formType: string;
  name: string;
  phone: string;
  email?: string;
  serviceOrMatter?: string;
  date?: string;
  time?: string;
  details?: string;
  token?: string;
}

/**
 * Generates direct WhatsApp message link to Advocate Deepak Goyal's phone (9828089628)
 */
export function generateWhatsAppLink(payload: FormSubmissionPayload): string {
  const lines: string[] = [
    `*नमस्ते Advocate Deepak Goyal जी,*`,
    `*New Client Inquiry via Website:*`,
    `--------------------------------`,
    `*Client Name:* ${payload.name || 'Not provided'}`,
    `*Phone:* ${payload.phone || 'Not provided'}`
  ];

  if (payload.email) {
    lines.push(`*Email:* ${payload.email}`);
  }

  if (payload.serviceOrMatter) {
    lines.push(`*Service / Matter:* ${payload.serviceOrMatter}`);
  }

  if (payload.date || payload.time) {
    lines.push(`*Preferred Time:* ${payload.date || ''} ${payload.time ? `(${payload.time})` : ''}`);
  }

  if (payload.details) {
    lines.push(`*Details / Note:* ${payload.details}`);
  }

  if (payload.token) {
    lines.push(`*Ref Token:* ${payload.token}`);
  }

  lines.push(`--------------------------------`);
  lines.push(`*Court:* Jaipur Sessions Court Complex`);

  const message = lines.join('\n');
  return `https://wa.me/91${ADVOCATE_INFO.phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Triggers dispatch directly to phone
 */
export function dispatchToAdvocatePhone(payload: FormSubmissionPayload) {
  const url = generateWhatsAppLink(payload);
  // Try opening in new tab/window for instant message send
  try {
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (!win) {
      // If popup blocked, window.location
      window.location.href = url;
    }
  } catch (err) {
    console.log('Dispatched notification:', url);
  }
}
