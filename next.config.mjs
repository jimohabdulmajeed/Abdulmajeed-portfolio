/** @type {import('next').NextConfig} */
const nextConfig = {
  // The site is now a single page; keep the old routes working by sending
  // them to the matching section.
  async redirects() {
    return [
      { source: "/services", destination: "/#services", permanent: true },
      { source: "/resume", destination: "/#experience", permanent: true },
      { source: "/projects", destination: "/#work", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      // Old CV filename, still linked from earlier applications.
      { source: "/CV__.pdf", destination: "/Abdulmajeed_Jimoh_FullStack_Developer_CV.pdf", permanent: true },
    ];
  },
};

export default nextConfig;
