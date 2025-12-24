import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import { colors } from "./colors"
import { buttonRecipe } from "./recipes/button"
import { semanticTokens } from "./semantic"
import { cardRecipe } from "./recipes/card"

const config = defineConfig({
    theme: {
        tokens: {
            colors,
            fonts: {
                body: { value: "Poppins, sans-serif" },
                heading: { value: "Poppins, sans-serif" },
                mono: { value: "Poppins, monospace" },
            },
        },

        semanticTokens,

        recipes: {
            button: buttonRecipe,
        },

        slotRecipes: {
            card: cardRecipe
        }
    },

    globalCss: {

        body: {
            bg: "gray.50",
            color: "gray.900",
        },
    },
})

export const system = createSystem(defaultConfig, config)
