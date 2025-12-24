import { defineRecipe } from "@chakra-ui/react"

export const buttonRecipe = defineRecipe({
    base: {
        border: '3px solid',
        borderRadius: "0",
        borderColor: "gray.900",
        fontWeight: "600",
        transition: "all 0.15s ease",
        p: '1.2rem 1.5rem !important'
    },

    variants: {
        variant: {
            solid: {
                bg: "bg.subtle",
                color: "gray.900",
                _hover: {
                    bg: 'bg.canvas',
                    boxShadow: "3px 3px 0 black",
                },
            }
        },
    },

    defaultVariants: {
        variant: "solid",
    },
})
