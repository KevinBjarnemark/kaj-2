export const APP_CONSTANTS = {
    APP_NAME: "Admin",
} as const;

// ❕ TypeScript note
//     - Without `as const`:
//          - ❕ APP_CONSTANTS.DIMENSIONS.HEADER.HEIGHT === number
//     - With `as const`:
//          - ❕ APP_CONSTANTS.DIMENSIONS.HEADER.HEIGHT === 88
