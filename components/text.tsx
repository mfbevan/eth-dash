import { chakra, Text } from "@chakra-ui/react";

export const PageTitle = chakra(Text, {
    baseStyle: {
        fontSize: "3rem"
    }
})

export const PageSubtitle = chakra(Text, {
    baseStyle: {
        fontSize: "md"
    }
})

/**
 * Add as="span" to inline
 */
export const InlineLink = chakra(Text, {
    baseStyle: {
        color: "teal",
        textDecor: "underline",
    }
})