import React from "react";

const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Templates", "Integrations"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Press"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Help Center", "Community", "Contact"],
  },
];

const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies"];

const InstagramIcon = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4.5v-7h2.4l.4-3h-2.8V9.3c0-.9.3-1.5 1.6-1.5H17V5.1c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8.7v3h2.4v7H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
  </svg>
);

const XIcon = () => (
  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socials = [
  { label: "Instagram", icon: <InstagramIcon /> },
  { label: "Facebook", icon: <FacebookIcon /> },
  { label: "X", icon: <XIcon /> },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#111827] px-5 pb-8 pt-14 font-['Manrope',sans-serif] text-white">
      {/* top gradient line */}
      <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#5f33f7] via-[#7c22f5] to-[#9318fb]" />

      <div className="mx-auto max-w-4xl">
        {/* top part: brand + 3 link columns + social */}
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          {/* brand */}
          <div className="max-w-[250px]">
            <h3 className="text-3xl font-extrabold tracking-tight">DigiTools</h3>
            <p className="mt-3 text-xs leading-[18px] text-gray-300">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* link columns */}
          <div className="flex flex-wrap gap-x-12 gap-y-8 lg:gap-x-14">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-[15px] font-medium">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="link link-hover text-xs text-gray-300 no-underline hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* social */}
            <div>
              <h4 className="text-[15px] font-medium">Social Links</h4>
              <div className="mt-3 flex gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="btn btn-circle h-[30px] min-h-0 w-[30px] border-none bg-white p-0 text-[#111827] shadow-none hover:bg-gray-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 text-xs text-gray-400 md:flex-row">
          <p>&copy; 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-6">
            {legalLinks.map((l) => (
              <a
                key={l}
                href="#"
                className="link link-hover no-underline hover:text-white"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
