import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
    base: {
        // display: "inline-flex",
        // alignItems: "center",
        // justifyContent: "center",

        border: "3px solid",
        borderColor: "gray.900",
        borderRadius: "0",

        fontWeight: "600",
        // lineHeight: "1",

        transition: "all 0.15s ease",
        // userSelect: "none",

    },

    variants: {
        variant: {
            solid: {
                bg: "bg.subtle",
                color: "gray.900",
                _hover: {
                    bg: "bg.canvas",
                    boxShadow: "3px 3px 0 black",
                },
                _active: {
                    transform: "translate(2px, 2px)",
                },
            },

            outline: {
                bg: "transparent",
                color: "gray.900",
                _hover: {
                    bg: "bg.subtle",
                    boxShadow: "3px 3px 0 black",
                },
                _active: {
                    transform: "translate(2px, 2px)",
                },
            },

            ghost: {
                bg: "transparent",
                border: 'none',
                borderColor: "transparent",
                color: "gray.900",
                _hover: {
                    bg: "bg.subtle",
                    boxShadow: "3px 3px 0 black",
                },
                _active: {
                    transform: "translate(2px, 2px)",
                },
            },
        },

        size: {
            sm: {
                px: "3",
                py: "2",
                // fontSize: "sm",
            },
            md: {
                px: "5",
                py: "3",
                // fontSize: "md",
            },
            lg: {
                px: "6",
                py: "4",
                // fontSize: "lg",
            },
        },
    },

    defaultVariants: {
        variant: "solid",
        size: "md",
    },
});
