const classes = {
  menuButtonIconClosed: {
    transition: '.3s',
    transform: "rotate(0deg)",
  },
  menuButtonIconOpen: {
    transition: '.3s',
    transform: "rotate(180deg)",
  },
  input: {
    backgroundColor: "white",
    borderRadius: "4px 4px 0 0",
    borderBottom: "1px solid black",
    "& fieldset": {
      border: "none",
      borderBottom: "1px solid black",
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '0px'
    },
    width: "100%",
  },
  searchBar: {
    height: "58px",
    boxSizing: "border-box",
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "12px",
    "&.MuiInputBase-root.Mui-focused": {
      border: "2px solid var(--blink-main)",
    },
    "& fieldset": {
      border: "none",
    },
    width: "100%",
  },
  checkbox: {
    marginBottom: "0 !important",
    "&.MuiFormControlLabel-root .MuiTypography-root": {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "13px",
      fontWeight: "500",
      color: "var(--blink-main)",
    },
  },
  radioGroup: {
    padding: "12px",
    "&.MuiFormGroup-root .MuiTypography-root": {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "15px",
      fontWeight: "500",
    },
  },
  icon: {
    "&.MuiSvgIcon-root": {
      width: "auto",
      height: "2em",
    },
  },
  menuIcon: {
    "&.MuiSvgIcon-root": {
      width: "auto",
      height: "26px",
    },
  },
  customSlider: {
    zIndex: "100",
    height: 24,
    "& .MuiSlider-thumb": {
      height: 32,
      width: 32,
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
    },
    "& .MuiSlider-rail": {
      backgroundColor: "#AEAEAE",
      opacity: 1,
    },
    "& .MuiSlider-valueLabel": {
      fontSize: "15px",
      fontWeight: "500",
      padding: "20px 25px",
      borderRadius: "12px",
      backgroundColor: "var(--blink-main)",
      transformOrigin: "bottom left",
      transform: "translate(50%, -30%) scale(0)",
      "&:before": {
        content: '""',
        position: "absolute",
        width: "20px",
        height: "20px",
        top: "-10px",
        left: "calc(50% - 10px)",
        transform: "rotateX(45deg) rotateZ(45deg)",
        backgroundColor: "var(--blink-main)",
      },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(0, 90%)",
      },
    },
  },
  table: {
    "& .MuiTableCell-root": {
      fontSize: "15px",
      textAlign: "center",
      fontFamily: "'Poppins', sans-serif",
    },
    "& .MuiTableCell-head": {
      fontWeight: "700",
      color: "var(--blink-main)",
      // padding: 0
    },
    "& .MuiTableCell-body": {
      fontWeight: "500",
    },
    "& .MuiTableRow-root": {
      height: "63px",
    },
    "& .MuiTableBody-root .MuiTableRow-root:last-child .MuiTableCell-root": {
      borderBottom: "none",
    },
  },
  pagination: {
    "& ul > li:not(:first-of-type):not(:last-child) > button.Mui-selected": {
      backgroundColor: "#4744CC",
      color: "#fff",
      fontWeight: "bold",
    },
    "& ul > li:not(:first-of-type):not(:last-child) > button:not(.Mui-selected)":
      {
        fontWeight: "bold",
      },
  },
  accordion: {
    "&.MuiAccordion-root": {
      borderRadius: "20px",
      margin: "0",
      boxShadow: "none",
    },
    "&.MuiAccordion-root:before": {
      backgroundColor: "transparent",
    },
    "& .MuiAccordionSummary-root": {
      padding: "22px 8px",
    },
    "& .MuiAccordionSummary-root.Mui-expanded": {
      borderBottom: "1px solid #AEAEAE",
      color: "var(--blink-main)",
    },
    "&.withoutLine .MuiAccordionSummary-root.Mui-expanded": {
      borderBottom: "none",
    },
    "& .MuiAccordionSummary-content": {
      padding: "0",
      margin: "0",
      fontSize: "23px",
      fontWeight: "700",
    },
    "& .MuiAccordionSummary-content.Mui-expanded": {
      margin: "0",
    },
    "& .MuiAccordionDetails-root": {
      padding: "21px 14px",
      borderBottom: "1px solid #AEAEAE",
      fontSize: "15px",
      fontWeight: "700",
    },
    "&.withoutLine .MuiAccordionDetails-root": {
      borderBottom: "none",
    },
    "& .MuiAccordionSummary-root .MuiSvgIcon-root": {
      color: "var(--blink-main)",
      height: "auto",
      width: "50px",
    },
  },
};

export default classes;
