import { defineSlotRecipe } from "@chakra-ui/react"
import { cardAnatomy } from "@chakra-ui/react/anatomy"

export const cardRecipe = defineSlotRecipe({
    className: "chakra-card",
    slots: cardAnatomy.keys(),

    base: {
        root: {
            border: '3px solid black !important',
            maxW: 'sm',
            borderRadius: 0,
            boxShadow: '3px 3px 0 black'
        },

        header: {
            p: 0,
            gap: 0
        },

        body: {
            p: '5',

        },

        footer: {
            p: "5"
        },
    },
})