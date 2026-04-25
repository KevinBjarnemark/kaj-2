export const STYLES = {
    INPUT: {
        BASE:
            "flex-column-relative center w-full h-full bg-[#474a4b] " +
            "rounded px-[6px] text-[#c1c8cd] font-extrabold mb-[5px]",
    },
} as const;

// ❕ TypeScript note
//     - Without `as const`:
//          - ❕ APP_CONSTANTS.DIMENSIONS.HEADER.HEIGHT === number
//     - With `as const`:
//          - ❕ APP_CONSTANTS.DIMENSIONS.HEADER.HEIGHT === 88
