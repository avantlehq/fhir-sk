/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/roadmap",
        destination: "/learn/roadmap",
        permanent: true,
      },
      {
        source: "/fhir",
        destination: "/learn/fhir-foundations",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
