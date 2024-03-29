const classes = {
    menuButtonIconClosed: {
        transition: ".3s",
        transform: "rotate(0deg)",
    },
    menuButtonIconOpen: {
        transition: ".3s",
        transform: "rotate(180deg)",
    },
    input: {
        backgroundColor: "white",
        height: '57px',
        borderRadius: "4px 4px 0 0",
        borderBottom: "0px solid #383838",
        fontFamily: "'Poppins', sans-serif",
        width: "100%",

        '& .MuiInputBase-input': {
            fontFamily: "'Poppins', sans-serif"
        },
        '.error &.Mui-focused fieldset': {
            borderColor: 'red'
        },

        '& .MuiInputAdornment-root svg': {
            fill: 'var(--blink-gray)'
        },
        '& .Mui-focused .MuiInputAdornment-root svg, &.Mui-focused .MuiInputAdornment-root svg': {
            fill: 'var(--blink-main)'
        },
        '.error & .Mui-focused .MuiInputAdornment-root svg, .error &.Mui-focused .MuiInputAdornment-root svg, .error & .MuiInputAdornment-root svg': {
            fill: 'red'
        },

        '&.Mui-focused .MuiSelect-icon, &.Mui-focused .MuiInputAdornment-root, &.Mui-focused .MuiIconButton-root': {
            color: 'var(--blink-main)'
        },

        '.error &.Mui-focused .MuiSelect-icon, .error &.Mui-focused .MuiInputAdornment-root, .error &.Mui-focused .MuiIconButton-root': {
            color: 'red'
        },

        "& fieldset": {
            border: "none",
            borderBottom: "1px solid #383838",
        },
        "& .MuiOutlinedInput-root": {
            borderRadius: "0px",
        },
        '& .MuiTypography-root': {
            color: 'var(--blink-main)',
            fontWeight: '700'
        }
    },
    searchBar: {
        height: "48px",
        boxSizing: "border-box",
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "12px",
        fontFamily: "'Poppins', sans-serif",
        '&.Mui-focused .MuiInputAdornment-root': {
            color: 'var(--blink-main)'
        },
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
            fontSize: "16px",
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
        // pointerEvents: 'none',
        zIndex: "5",
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
            borderRadius: "8px 12px 12px 12px",
            backgroundColor: "var(--blink-main)",
            transformOrigin: "bottom left",
            transform: "translate(50%, -30%) scale(0)",
            "&:before": {
                content: '""',
                position: "absolute",
                width: "20px",
                height: "20px",
                top: "-10px",
                left: "10px",
                transform: "rotateX(45deg) rotateZ(45deg)",
                backgroundColor: "var(--blink-main)",
            },
            "&.MuiSlider-valueLabelOpen": {
                transform: "translate(120px, 90%)",
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
        '& ul > li button': {
            fontFamily: "'Poppins', sans-serif",
        },
        '& ul > li button:not(.Mui-disabled):not(.MuiPaginationItem-page)': {
            color: 'var(--blink-main)'
        },
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
    miniAccordion: {
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.25)",
        borderRadius: "12px !important",
        "& .MuiAccordionSummary-root": {
            minHeight: "auto !important",
        },
        "&.Mui-expanded": {
            margin: "0",
            minHeight: "auto",
        },
        "&:before": {
            backgroundColor: "transparent",
        },
        "& .MuiAccordionSummary-content": {
            margin: "0 !important",
        },
        "& .MuiSvgIcon-root": {
            color: "var(--blink-main)",
        },
        "& .MuiAccordionDetails-root": {
            padding: "0 16px",
            cursor: 'pointer'
        },
    },
    circularProgress: {
        color: '#4744cc',
        'button:hover &': {
            color: '#34e8ca'
        }
    }
}

export default classes