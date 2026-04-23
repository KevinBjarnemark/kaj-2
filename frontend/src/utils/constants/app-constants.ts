export const APP_CONSTANTS = {
    APP_NAME: "Admin",

    DIMENSIONS: {
        HEADER: {
            HEIGHT: 88, // px
        },
        FOOTER: {
            HEIGHT: 88, // px
        },
        NAVBAR: {
            HEIGHT: 30, // px
        },
    },
} as const;

// ❕ TypeScript note
//     - Without `as const`:
//          - ❕ APP_CONSTANTS.DIMENSIONS.HEADER.HEIGHT === number
//     - With `as const`:
//          - ❕ APP_CONSTANTS.DIMENSIONS.HEADER.HEIGHT === 88
