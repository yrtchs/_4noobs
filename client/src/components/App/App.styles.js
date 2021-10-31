import { createMuiTheme } from "@mui/material/styles";
import {
  blue,
  blueGrey,
  common,
  grey,
  orange,
  red,
  yellow,
} from "@mui/material/colors";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat"].join(","),
    body2: {
      fontSize: "0.9375rem",
    },
  },
  overrides: {
    palette: {
      primary: {
        lighter: "#E2EBE9",
        light: "#00ad51",
        main: "#00664f",
        dark: "#00523e",
        contrastText: "#fff",
      },
      secondary: {
        lighter: blueGrey[100],
        light: blueGrey[400],
        main: blueGrey[500],
        dark: blueGrey[700],
        darker: blueGrey[900],
        contrastText: "#fff",
      },
      info: {
        lighter: blue[100],
        light: blue[400],
        main: blue[500],
        dark: blue[700],
        darker: blue[900],
        contrastText: "#fff",
      },
      warning: {
        lighter: orange[100],
        light: orange[400],
        main: orange[500],
        dark: orange[700],
        darker: orange[900],
        contrastText: "#fff",
      },
      notice: {
        lighter: yellow[100],
        light: yellow[400],
        main: yellow[500],
        dark: yellow[700],
        darker: yellow[900],
        contrastText: "#fff",
      },
      error: {
        lighter: red[100],
        light: red[400],
        main: red[500],
        dark: red[700],
        darker: red[900],
        contrastText: "#fff",
      },
      neutral: {
        lighter: grey[100],
        light: grey[400],
        main: grey[500],
        dark: grey[700],
        darker: grey[900],
        contrastText: "#fff",
      },
      black: {
        lighter: common[100],
        light: common[400],
        main: common[500],
        dark: common[700],
        darker: common[900],
        contrastText: "#fff",
      },
    },
    MuiDataGrid: {
      root: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,

        "& .MuiDataGrid-toolbar": {
          padding: "4px 12px",
          borderBottom: "1px solid rgba(224, 224, 224, 1)",
          "& button": {
            "&:not(:last-child)": {
              marginRight: "12px",
            },
          },
        },
      },
    },
    MuiListItem: {
      button: {
        "&.active": {
          backgroundColor: "rgba(6, 101, 79, .1)",
          color: "#06654F",
          borderLeft: "3px solid #06654F",
        },
        "&.active .MuiListItemIcon-root": {
          color: "#06654F",
        },
      },
    },
    MuiInputLabel: {
      outlined: {
        transform: "translate(14px, 17px) scale(1)",
        "@media (max-width: 576px)": {
          // eslint-disable-line no-useless-computed-key
          transform: "translate(11px, 14px) scale(1)",
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        "& .MuiOutlinedInput-input": {
          padding: "13.5px 16px",
          "@media (max-width: 576px)": {
            // eslint-disable-line no-useless-computed-key
            padding: "11.5px 13px",
          },
        },
      },
    },
    MuiAutocomplete: {
      root: {
        "& .MuiAutocomplete-input": {
          padding: "4.5px 16px 4.5px 6px!important",
          border: "none!important",
          "@media (max-width: 576px)": {
            // eslint-disable-line no-useless-computed-key
            padding: "2.5px 13px 2.5px 6px!important",
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      root: {
        background: "none",
      },
    },
    MuiToggleButton: {
      root: {
        border: "1px solid rgba(0, 0, 0, 0.12)!important",
        borderRadius: "4px!important",
        padding: "11px 20px",
        "@media (max-width: 576px)": {
          // eslint-disable-line no-useless-computed-key
          padding: "9px 17px",
        },
        "&.Mui-selected": {
          background: "rgba(6, 101, 79, .1)",
          border: "1px solid rgba(6, 101, 79, .3)",
          color: "#06654F",
          "&:hover": {
            background: "rgba(6, 101, 79, .1)",
          },
        },
      },
    },
    searchContainer: {
      root: {
        background: "red",
      },
    },
    MuiCardHeader: {
      root: {
        fontSize: "1rem",
      },
    },
  },
});

export default theme;
