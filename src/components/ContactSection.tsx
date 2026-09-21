import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject = '' }) => {
  const [senderName, setSenderName] = useState('');
  const [senderContact, setSenderContact] = useState('');
  const [subject, setSubject] = useState(initialSubject);
  const [message, setMessage] = useState('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Compose mailto query
    const mailtoSubject = encodeURIComponent(
      subject ? `[Portfolio Inquiry] ${subject}` : `Portfolio Inquiry from ${senderName || 'Visitor'}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${senderName}\nContact: ${senderContact}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSentSuccess(true);
  };

  return (
    <section
      id="contact"
      className="w-full py-20 px-4 sm:px-6 lg:px-12 bg-[#070e1c] border-t border-[#151b2a]"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-3xl mb-12">
          <span className="font-code text-xs text-[#5de6ff] uppercase tracking-widest font-semibold">
            Direct Communication Channels
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl text-[#dce2f6] font-bold mt-1">
            Let's Connect & Collaborate
          </h2>
          <p className="font-body text-sm sm:text-base text-[#c3c6d7] mt-2">
            Reach out directly for civil engineering consultations, AI workflows, creative media
            productions, or community projects.
          </p>
        </div>

        {/* Quick Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-4xl mb-12">
          <a
            id="quick-call"
            href={`tel:${PERSONAL_INFO.phoneClean}`}
            className="px-5 py-3 rounded-xl bg-[#19202e] hover:bg-[#232a39] text-[#dce2f6] hover:text-[#5de6ff] font-headline text-sm font-bold transition-all flex items-center gap-2 shadow-md border border-[#232a39] hover:border-[#5de6ff]/40"
          >
            <span className="material-symbols-outlined text-[#5de6ff] text-lg">call</span>
            <span>Call Me</span>
          </a>

          <a
            id="quick-whatsapp"
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-[#19202e] hover:bg-[#232a39] text-[#dce2f6] hover:text-[#5de6ff] font-headline text-sm font-bold transition-all flex items-center gap-2 shadow-md border border-[#232a39] hover:border-[#5de6ff]/40"
          >
            <span className="material-symbols-outlined text-[#5de6ff] text-lg">chat</span>
            <span>WhatsApp Me</span>
          </a>

          <a
            id="quick-email"
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-5 py-3 rounded-xl bg-[#19202e] hover:bg-[#232a39] text-[#dce2f6] hover:text-[#5de6ff] font-headline text-sm font-bold transition-all flex items-center gap-2 shadow-md border border-[#232a39] hover:border-[#5de6ff]/40"
          >
            <span className="material-symbols-outlined text-[#5de6ff] text-lg">mail</span>
            <span>Email Me</span>
          </a>

          <a
            id="quick-facebook"
            href={PERSONAL_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-[#19202e] hover:bg-[#232a39] text-[#dce2f6] hover:text-[#5de6ff] font-headline text-sm font-bold transition-all flex items-center gap-2 shadow-md border border-[#232a39] hover:border-[#5de6ff]/40"
          >
            <span className="material-symbols-outlined text-[#5de6ff] text-lg">public</span>
            <span>Facebook Profile</span>
          </a>

          <a
            id="quick-telegram"
            href={PERSONAL_INFO.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-[#19202e] hover:bg-[#232a39] text-[#dce2f6] hover:text-[#5de6ff] font-headline text-sm font-bold transition-all flex items-center gap-2 shadow-md border border-[#232a39] hover:border-[#5de6ff]/40"
          >
            <span className="material-symbols-outlined text-[#5de6ff] text-lg">send</span>
            <span>Telegram Chat</span>
          </a>
        </div>

        {/* Detailed Communication Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mb-12">
          {/* Phone Target */}
          <div className="p-6 rounded-2xl bg-[#19202e] border border-[#232a39] hover:border-[#5de6ff]/40 transition-all shadow-lg flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="material-symbols-outlined text-[#5de6ff] text-3xl group-hover:scale-110 transition-transform">
                  phone_in_talk
                </span>
                <span className="font-code text-xs text-[#8d90a0]">DIRECT DIAL</span>
              </div>
              <span className="font-headline text-base sm:text-lg text-[#dce2f6] font-bold">
                Telephone
              </span>
              <a
                href={`tel:${PERSONAL_INFO.phoneClean}`}
                className="font-code text-sm text-[#5de6ff] hover:underline block mt-1"
              >
                {PERSONAL_INFO.phone}
              </a>
              <p className="font-body text-xs sm:text-sm text-[#c3c6d7] mt-2">
                Available for urgent professional queries and technical consultations.
              </p>
            </div>
            <button
              onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
              className="mt-4 pt-3 border-t border-[#232a39] flex items-center justify-between font-code text-xs text-[#c3c6d7] hover:text-[#5de6ff]"
            >
              <span>{copiedKey === 'phone' ? 'Copied Number!' : 'Copy Phone Number'}</span>
              <span className="material-symbols-outlined text-sm">
                {copiedKey === 'phone' ? 'check' : 'content_copy'}
              </span>
            </button>
          </div>

          {/* WhatsApp Target */}
          <div className="p-6 rounded-2xl bg-[#19202e] border border-[#232a39] hover:border-[#5de6ff]/40 transition-all shadow-lg flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="material-symbols-outlined text-[#5de6ff] text-3xl group-hover:scale-110 transition-transform">
                  chat
                </span>
                <span className="font-code text-xs text-[#8d90a0]">MESSENGER</span>
              </div>
              <span className="font-headline text-base sm:text-lg text-[#dce2f6] font-bold">
                WhatsApp
              </span>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-code text-sm text-[#5de6ff] hover:underline block mt-1"
              >
                {PERSONAL_INFO.whatsapp}
              </a>
              <p className="font-body text-xs sm:text-sm text-[#c3c6d7] mt-2">
                Fast response messaging for design, video, and collaboration briefs.
              </p>
            </div>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 pt-3 border-t border-[#232a39] flex items-center justify-between font-code text-xs text-[#c3c6d7] hover:text-[#5de6ff]"
            >
              <span>Open WhatsApp Chat</span>
              <span className="material-symbols-outlined text-sm">launch</span>
            </a>
          </div>

          {/* Email Target */}
          <div className="p-6 rounded-2xl bg-[#19202e] border border-[#232a39] hover:border-[#5de6ff]/40 transition-all shadow-lg flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="material-symbols-outlined text-[#5de6ff] text-3xl group-hover:scale-110 transition-transform">
                  alternate_email
                </span>
                <span className="font-code text-xs text-[#8d90a0]">INBOX</span>
              </div>
              <span className="font-headline text-base sm:text-lg text-[#dce2f6] font-bold">
                Direct Email
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-code text-sm text-[#5de6ff] hover:underline block mt-1 truncate"
              >
                {PERSONAL_INFO.email}
              </a>
              <p className="font-body text-xs sm:text-sm text-[#c3c6d7] mt-2">
                Formal inquiries, project proposals, and detailed project outlines.
              </p>
            </div>
            <button
              onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
              className="mt-4 pt-3 border-t border-[#232a39] flex items-center justify-between font-code text-xs text-[#c3c6d7] hover:text-[#5de6ff]"
            >
              <span>{copiedKey === 'email' ? 'Copied Email!' : 'Copy Email Address'}</span>
              <span className="material-symbols-outlined text-sm">
                {copiedKey === 'email' ? 'check' : 'content_copy'}
              </span>
            </button>
          </div>

          {/* Facebook Target */}
          <div className="p-6 rounded-2xl bg-[#19202e] border border-[#232a39] hover:border-[#5de6ff]/40 transition-all shadow-lg flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="material-symbols-outlined text-[#5de6ff] text-3xl group-hover:scale-110 transition-transform">
                  public
                </span>
                <span className="font-code text-xs text-[#8d90a0]">SOCIAL</span>
              </div>
              <span className="font-headline text-base sm:text-lg text-[#dce2f6] font-bold">
                Facebook Profile
              </span>
              <a
                href={PERSONAL_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-code text-sm text-[#5de6ff] hover:underline block mt-1"
              >
                {PERSONAL_INFO.facebook}
              </a>
              <p className="font-body text-xs sm:text-sm text-[#c3c6d7] mt-2">
                Public updates, social discourse, video sharing, and community engagement.
              </p>
            </div>
            <a
              href={PERSONAL_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 pt-3 border-t border-[#232a39] flex items-center justify-between font-code text-xs text-[#c3c6d7] hover:text-[#5de6ff]"
            >
              <span>Visit Profile</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>

          {/* Telegram Target */}
          <div className="p-6 rounded-2xl bg-[#19202e] border border-[#232a39] hover:border-[#5de6ff]/40 transition-all shadow-lg flex flex-col justify-between group md:col-span-2 lg:col-span-2">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="material-symbols-outlined text-[#5de6ff] text-3xl group-hover:scale-110 transition-transform">
                  send
                </span>
                <span className="font-code text-xs text-[#8d90a0]">DIRECT PROFILE LINK</span>
              </div>
              <span className="font-headline text-base sm:text-lg text-[#dce2f6] font-bold">
                Telegram Chat
              </span>
              <a
                href={PERSONAL_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-code text-sm text-[#5de6ff] hover:underline block mt-1"
              >
                {PERSONAL_INFO.telegram} ({PERSONAL_INFO.telegramUrl})
              </a>
              <p className="font-body text-xs sm:text-sm text-[#c3c6d7] mt-2">
                Secure messaging channel for direct communication and quick technical exchanges.
              </p>
            </div>
            <a
              href={PERSONAL_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 pt-3 border-t border-[#232a39] flex items-center justify-between font-code text-xs text-[#c3c6d7] hover:text-[#5de6ff]"
            >
              <span>Connect on Telegram</span>
              <span className="material-symbols-outlined text-sm">send</span>
            </a>
          </div>
        </div>

        {/* Interactive Direct Inquiry Message Form */}
        <div className="w-full max-w-3xl p-6 sm:p-8 rounded-3xl bg-[#151b2a] border border-[#232a39] shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-3 h-3 rounded-full bg-[#5de6ff] shadow-[0_0_8px_#5de6ff]"></span>
            <h3 className="font-headline text-lg sm:text-xl font-bold text-[#dce2f6]">
              Send Direct Message
            </h3>
          </div>

          {sentSuccess && (
            <div className="mb-6 p-4 rounded-xl bg-[#0c1321] border border-[#5de6ff]/50 flex items-center gap-3 text-xs sm:text-sm text-[#5de6ff]">
              <span className="material-symbols-outlined">check_circle</span>
              <span>
                Your default email client was opened. You can also contact directly via WhatsApp for faster response!
              </span>
            </div>
          )}

          <form onSubmit={handleSendMessage} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-code text-xs text-[#c3c6d7] mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Architect / Director"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0c1321] border border-[#232a39] text-sm text-[#dce2f6] placeholder-[#8d90a0]/60 focus:outline-none focus:border-[#5de6ff] transition-colors"
                />
              </div>

              <div>
                <label className="block font-code text-xs text-[#c3c6d7] mb-1.5">
                  Your Contact (Email or Phone)
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. client@domain.com"
                  value={senderContact}
                  onChange={(e) => setSenderContact(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0c1321] border border-[#232a39] text-sm text-[#dce2f6] placeholder-[#8d90a0]/60 focus:outline-none focus:border-[#5de6ff] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-code text-xs text-[#c3c6d7] mb-1.5">Topic / Service Inquiry</label>
              <input
                type="text"
                placeholder="e.g. Civil AutoCAD Project, AI Video Production, UI/UX"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#0c1321] border border-[#232a39] text-sm text-[#dce2f6] placeholder-[#8d90a0]/60 focus:outline-none focus:border-[#5de6ff] transition-colors"
              />
            </div>

            <div>
              <label className="block font-code text-xs text-[#c3c6d7] mb-1.5">Message Details</label>
              <textarea
                required
                rows={4}
                placeholder="Briefly describe your project scope, requirements, or inquiry..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#0c1321] border border-[#232a39] text-sm text-[#dce2f6] placeholder-[#8d90a0]/60 focus:outline-none focus:border-[#5de6ff] transition-colors resize-none"
              ></textarea>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-code text-xs text-[#8d90a0]">
                Response time: usually within 2-6 hours
              </span>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#5de6ff] text-[#002a78] font-headline text-sm font-bold shadow-[0_0_16px_rgba(37,99,235,0.4)] hover:shadow-[0_0_24px_rgba(93,230,255,0.6)] cursor-pointer transition-all flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
