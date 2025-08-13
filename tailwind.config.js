/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {spacing: {
      '0.75': '0.1875rem'
    },
    borderWidth: {
      '3': '3px'
    },
  },
  boxShadow: {
    DEFAULT: '4px 4px 36px rgba(var(--color-primary) / 0.2)',
    'none': 'none',
    'card': '-4px 4px 36px rgba(var(--color-primary) / 0.08)',
    // 'card': '-4px 4px 36px purple',
    'modal' : '4px 4px 24px rgba(var(--color-primary) / 0.15)',
    'sm': '2px 2px 8px rgba(var(--color-primary) / 0.45)',
    'md': '4px 4px 48px rgba(var(--color-primary) / 0.08)',
    'md-prev': '-4px 4px 8px rgba(var(--color-primary) / 0.2)',
    'md-next': '4px 4px 8px rgba(var(--color-primary) / 0.2)',
    'mobile-nav': '0 -2px 0 0, 0 2px 0 0',
  },
  screens: {
    '2xs': '350px',
    'xs': '450px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  },
  fontFamily: {
    'main': ['IRANSans'],
    'title': ['Pinar-VF'],
  },
  colors: {
    ...colors,
    primary: 'rgba(var(--color-primary) / <alpha-value>)',
    'primary-dark': 'rgba(var(--color-primary-dark) / <alpha-value>)',
    'primary-light': 'rgba(var(--color-primary-light) / <alpha-value>)',
    accent: 'rgba(var(--color-accent) / <alpha-value>)',
    amazing: 'rgba(var(--color-amazing) / <alpha-value>)',
    star: 'rgba(var(--color-star) / <alpha-value>)',
    success: 'rgba(var(--color-success) / <alpha-value>)',
    warning: 'rgba(var(--color-warning) / <alpha-value>)',
    error: 'rgba(var(--color-error) / <alpha-value>)',
    gray: {
      50: 'rgba(var(--color-gray-50) / <alpha-value>)',//10
      100: 'rgba(var(--color-gray-100) / <alpha-value>)',//20
      200: 'rgba(var(--color-gray-200) / <alpha-value>)',//30
      300: 'rgba(var(--color-gray-300) / <alpha-value>)',//40
      400: 'rgba(var(--color-gray-400) / <alpha-value>)',//50
      500: 'rgba(var(--color-gray-500) / <alpha-value>)',//60
      600: 'rgba(var(--color-gray-600) / <alpha-value>)',//70
      700: 'rgba(var(--color-gray-700) / <alpha-value>)',//80
      800: 'rgba(var(--color-gray-800) / <alpha-value>)',//90
      900: 'rgba(var(--color-gray-900) / <alpha-value>)',//100
    },
    transparent: '#00000000',
  },
  fontSize: {
    '7xs': '0.5rem',//8px
    '6xs': '0.5625rem',//9px
    '5xs': '0.625rem',//10px
    '4xs': '0.6875rem',//11px
    '3xs': '0.75rem',//12px
    '2xs': '0.8125rem',//13px
    'xs': '0.875rem',//14px
    'sm': '0.9375rem',//15px
    'base': '1rem',//16px
    'md': '1.0625rem',//17px
    'lg': '1.125rem',//18px
    'xl': '1.1875rem',//19px
    '2xl': '1.25rem',//20px
    '3xl': '1.3125rem',//21px
    '4xl': '1.375rem',//22px
    '5xl': '1.4375rem',//23px
    '6xl': '1.5rem',//24px
    '7xl': '1.5625rem',//25px
    '8xl': '1.625rem',//26px
    '9xl': '1.6875rem',//27px
    '10xl': '1.75rem',//28px
    '11xl': '1.8125rem',//29px
    '12xl': '1.875rem',//30px
    '14xl': '2rem',//32px
    '16xl': '2.125rem',//34px
    '18xl': '2.25rem',//36px
    '20xl': '2.375rem',//38px
    '22xl': '2.5rem',//40px
    '24xl': '2.625rem',//42px
    '26xl': '2.75rem',//44px
    '28xl': '2.875rem',//46px
    '30xl': '3rem',//48px
    '32xl': '3.125',//50px
    '34xl': '3.25rem',//52px
    '36xl': '3.375rem',//54px
    '38xl': '3.5rem',//56px
    '40xl': '3.625rem',//58px
    '42xl': '3.75rem',//60px
    '44xl': '3.875rem',//62px
    '46xl': '4rem',//64px
    '48xl': '4.125rem',//66px
    '50xl': '4.25rem',//68px
    '52xl': '4.375rem',//70px
    '54xl': '4.5rem',//72px
  }},
  },
  plugins: [],

}

