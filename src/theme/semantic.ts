export const semanticTokens = {
    colors: {
        bg: {
            canvas: {
                value: {
                    _light: "{colors.gray.50}",
                },
            },
            subtle: {
                value: {
                    _light: "{colors.gray.200}",
                },
            },
            stripped: {
                value: {
                    base: `repeating-linear-gradient(
                        45deg,
                        var(--chakra-colors-gray-50),
                        var(--chakra-colors-gray-50) 16px,
                        var(--chakra-colors-gray-100) 16px,
                        var(--chakra-colors-gray-100) 32px
                      )`
                }
            }
        },

        fg: {
            default: {
                value: {
                    _light: "{colors.gray.900}",
                },
            },
            muted: {
                value: {
                    _light: "{colors.gray.600}",
                },
            },
        },

        border: {
            default: {
                value: {
                    _light: "{colors.gray.300}",
                },
            },
            strong: {
                value: {
                    _light: "{colors.black}",
                },
            },
        },
    },
}
