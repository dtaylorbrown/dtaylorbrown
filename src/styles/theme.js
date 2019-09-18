/**
 * Root Theme
 */
const getTheme = () => {
    const rootColors = {
        black: '#000000',
        blacks: [
            '#382F32',
        ],
        white: '#ffffff',
        peach: '#FFB88C',
        purple: '#44223E',
        grey: '#382F32',
    };

    const rootSizeDefinitions = {
        large: '1200px'
    }

    const rootTheme = {
        root: {
            fontSizes: {
                bases: ['16px', '18px'],
            },
        },
        colors: {
            brandPrimary: rootColors.peach,
            uiBase: rootColors.white,
            uiContrast: rootColors.black,
            uiDarkBase: rootColors.purple,
            uiDarkContrast: rootColors.white,
            uiBlack: rootColors.blacks[0],
            uiGrey: rootColors.grey,
        },
        sizes: {
            large: rootSizeDefinitions.large,
        }
    };

    return rootTheme;
};

export const theme = getTheme();