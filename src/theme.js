const fontStyles = {
    font: {
        typeface: 'Karla',
        size: '18px',
    },
};

const themeStyles = {
    light: {
        ...fontStyles,
        colors: {
            background: '#FFFFFF',
            primaryDark: '#663399',
            primaryMedium: '#9370db',
            primaryLight: '#cec8ef',
            secondaryDark: '#5A5052',
            secondaryMedium: '#BBBBBB',
            secondaryLight: '#DCDCDC',
            focusBorder: '#91BA8D',
        },
    },
    dark: {
        ...fontStyles,
        colors: {
            background: '#1f2330',
            primaryDark: '#e34f8c',
            primaryMedium: '#f6f0ff',
            primaryLight: '#373a50',
            secondaryDark: '#f1ebfa',
            secondaryMedium: '#f1ebfa',
            secondaryLight: '#f1ebfa',
            focusBorder: '#91BA8D',
        },
    },
};

export default themeStyles;
