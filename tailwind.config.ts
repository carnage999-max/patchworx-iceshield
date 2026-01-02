export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "arctic-navy": "#030B18",
        "midnight-blue": "#0F2C4D",
        "infrastructure-blue": "#3D6685",
        "iceshield-blue": "#74A4BC",
        "frost-blue": "#B8D4E2",
        "snow-white": "#FDFDFD",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
};
