tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            display: ['Orbitron', 'sans-serif'],
          },
          colors: {
            obsidian: {
              950: '#06080d',
              900: '#0a0d14',
              850: '#0f1420',
              800: '#141b2b',
              700: '#1e283d',
            },
            electric: {
              400: '#38bdf8',
              500: '#00a3ff',
              600: '#0082cc',
            },
            neon: {
              cyan: '#00f0ff',
              blue: '#0d6efd',
            }
          },
          boxShadow: {
            'neon-blue': '0 0 20px rgba(0, 163, 255, 0.4)',
            'neon-cyan': '0 0 25px rgba(0, 240, 255, 0.5)',
            'glow-card': '0 8px 32px 0 rgba(0, 163, 255, 0.15)',
          },
          animation: {
            'pulse-glow': 'pulseGlow 3s ease-in-out infinite alternate',
            'float-subtle': 'floatSubtle 4s ease-in-out infinite',
          },
          keyframes: {
            pulseGlow: {
              '0%': { filter: 'drop-shadow(0 0 5px rgba(0, 163, 255, 0.4))' },
              '100%': { filter: 'drop-shadow(0 0 20px rgba(0, 240, 255, 0.8))' },
            },
            floatSubtle: {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-6px)' },
            }
          }
        }
      }
    }
