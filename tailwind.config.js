module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#000000", // black - Uncompromising strength, premium quality foundation
        secondary: "#1F2937", // gray-800 - Sophisticated depth, content separation
        accent: "#DC2626", // red-600 - Focused energy, urgent action moments
        background: "#FFFFFF", // white - Clean canvas, content clarity
        surface: "#F9FAFB", // gray-50 - Subtle elevation, card backgrounds
        "text-primary": "#111827", // gray-900 - Extended reading comfort
        "text-secondary": "#6B7280", // gray-500 - Clear information hierarchy
        success: "#059669", // emerald-600 - Achievement celebration, positive progress
        warning: "#D97706", // amber-600 - Motivational urgency, challenge alerts
        error: "#DC2626", // red-600 - Helpful correction, safety emphasis
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
      },
      fontWeight: {
        'anton-normal': '400',
        'anton-bold': '700',
        'inter-normal': '400',
        'inter-medium': '500',
        'inter-semibold': '600',
        'inter-bold': '700',
        'bebas-normal': '400',
      },
      boxShadow: {
        'minimal': '0 1px 3px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        'smooth': '300ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}