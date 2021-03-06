module.exports = {
    mode: "jit",
    content: ["./*/*{html,js}"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'deep-champagne-lightest': '#FEF2DF',
                'deep-champagne-light': '#FDECCE',
                'deep-champagne-lighter': '#FBD696',
                'deep-champagne': '#FBD38D',
                'deep-champagne-darker': '#FAC873',
                'deep-champagne-dark': '#F8B33D',
                'deep-champagne-darkest': '#D98C08',
                'independence-lightest': '#E1E1EA',
                'independence-lighter': '#615E84',
                'independence-light': '#9895B4',
                'independence': '#3F3D56',
                'independence-darker': '#3B3950'
            },
            fontFamily: {
                roboto: ['Roboto', 'sans-serif']
            },
            keyframes: {
                slide: {
                    '0%': {
                        transform: 'translateX(0)'
                    },
                    '100%': {
                        transform: 'translateX(calc(-28rem * 5))'
                    }
                }
            },
            animation: {
                slide: 'slide 35s ease-out infinite'
            }
        },
    },
    plugins: [],
}
