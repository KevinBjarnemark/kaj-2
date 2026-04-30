export const STYLES = {
    INPUT: {
        BASE:
            "flex-column-relative center w-full h-full bg-[#474a4b] " +
            "rounded px-1.5 text-[#c1c8cd] font-extrabold mb-1.5",
    },
} as const;

// ❕ TypeScript note
//     - Without `as const`:
//          - ❕ APP_CONSTANTS.DIMENSIONS.HEADER.HEIGHT === number
//     - With `as const`:
//          - ❕ APP_CONSTANTS.DIMENSIONS.HEADER.HEIGHT === 88
