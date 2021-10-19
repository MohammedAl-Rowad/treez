import { createTheme } from '@material-ui/core/styles'
const edraak = {
  50: '#ceebec',
  100: '#9dd8d9',
  200: '#85ced0',
  300: '#54babd',
  400: '#3cb1b3',
  500: '#0b9da0',
  600: '#0a8d90',
  700: '#097e80',
  800: '#086e70',
  900: '#075e60',
  A100: '#84ffff',
  A200: '#18ffff',
  A400: '#00e5ff',
  A700: '#00b8d4',
}

// https://chir.ag/projects/name-that-color/
const alabaster = '#f7f7f7'

const colors = {
  textColor: '#393939',
  LMSWhiteBackground: '#fafafa',
  codeQuestion: {
    testCaseResultBackground: alabaster,
  },
  blankQuestion: {
    inputBgColor: alabaster,
    blankBgColor: '#93dde6',
    blankBorderColor: '#0ba7aa',
    droppedBlankBgColor: '#e3e3e3',
  },
  multipleChoiceQuestion: {
    choiceBg: alabaster,
  },
  numericResponseQuestion: {
    answerFieldBg: alabaster,
  },
  selectedComponent: {
    bgColor: alabaster,
  },
  yellow: '#ffd13f',
  darkGray: '#6D6D6D',
  kournikova: '#ffdc6f',
  lightGray: '#C5C5C5',
  sandGray: '#ECEDEE',
  failed: '#EE4266',
  passed: '#2AE99E',
  black: '#000000',
  white: '#fff',
  azure: '#f0fffc',
  mediumGray: '#c6c6c6',
}

export default createTheme({
  palette: {
    primary: {
      light: edraak[50],
      main: edraak[500],
      dark: edraak[900],
    },
  },
  colors,
  boxShadow: '0 2px 20px 0 rgba(0, 0, 0, 0.08)',
  fibBoxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.12)',
  overrides: {
    MuiCard: {
      root: {
        boxShadow: '0px 3px 9px rgba(0, 0, 0, 8.3%);',
        borderRadius: '8px',
      },
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: edraak[400],
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        // backgroundColor: edraak.A200,
        // color: "white",
      },
    },
    MuiPaper: {
      root: {
        boxShadow: '0px 3px 9px rgba(0, 0, 0, 8.3%);',
        borderRadius: '8px',
      },
      elevation1: {
        boxShadow: '0px 3px 9px rgba(0, 0, 0, 8.3%);',
      },
    },
    MuiPickersDay: {
      day: {
        color: '#000',
      },
      daySelected: {
        backgroundColor: edraak[400],
      },
      dayDisabled: {
        color: edraak[100],
      },
      current: {
        color: edraak[900],
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: edraak[400],
      },
    },
    MuiTypography: {
      root: {
        color: colors.textColor,
      },
    },
  },
  // eslint-disable-next-line no-undef
  direction: 'ltr',
  typography: {
    fontFamily: 'tajawal,Open Sans,serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
})
