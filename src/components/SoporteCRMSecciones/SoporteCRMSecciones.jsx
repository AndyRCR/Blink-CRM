import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'
import SearchIcon from '@mui/icons-material/Search'
import { FormControl, InputAdornment, OutlinedInput } from '@mui/material'
import classes from '../../theme/Styles'
import './SoporteCRMSecciones.css'

const sections = [
    {
        title: 'Mi perfil',
        about: 'tu perfil',
        icon: <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_652_3110)">
                <path d="M40 40C43.9556 40 47.8224 38.827 51.1114 36.6294C54.4004 34.4318 56.9638 31.3082 58.4776 27.6537C59.9913 23.9992 60.3874 19.9778 59.6157 16.0982C58.844 12.2186 56.9392 8.65492 54.1421 5.85787C51.3451 3.06082 47.7814 1.15601 43.9018 0.384303C40.0222 -0.387401 36.0009 0.00866572 32.3463 1.52242C28.6918 3.03617 25.5682 5.59962 23.3706 8.8886C21.173 12.1776 20 16.0444 20 20C20.0053 25.3027 22.1141 30.3867 25.8637 34.1363C29.6133 37.8859 34.6973 39.9947 40 40ZM40 6.66668C42.6371 6.66668 45.2149 7.44866 47.4076 8.91375C49.6003 10.3788 51.3092 12.4612 52.3184 14.8976C53.3276 17.3339 53.5916 20.0148 53.0771 22.6012C52.5627 25.1876 51.2928 27.5634 49.4281 29.4281C47.5634 31.2928 45.1876 32.5627 42.6012 33.0771C40.0148 33.5916 37.3339 33.3276 34.8976 32.3184C32.4612 31.3092 30.3788 29.6003 28.9137 27.4076C27.4487 25.215 26.6667 22.6371 26.6667 20C26.6667 16.4638 28.0714 13.0724 30.5719 10.5719C33.0724 8.07143 36.4638 6.66668 40 6.66668V6.66668Z" fill="#4744CC" />
                <path d="M40 46.6689C32.0462 46.6778 24.4207 49.8413 18.7965 55.4655C13.1724 61.0897 10.0088 68.7152 10 76.6689C10 77.553 10.3512 78.4009 10.9763 79.026C11.6014 79.6511 12.4493 80.0023 13.3333 80.0023C14.2174 80.0023 15.0652 79.6511 15.6904 79.026C16.3155 78.4009 16.6667 77.553 16.6667 76.6689C16.6667 70.4806 19.125 64.5456 23.5008 60.1698C27.8767 55.7939 33.8116 53.3356 40 53.3356C46.1884 53.3356 52.1233 55.7939 56.4992 60.1698C60.875 64.5456 63.3333 70.4806 63.3333 76.6689C63.3333 77.553 63.6845 78.4009 64.3096 79.026C64.9348 79.6511 65.7826 80.0023 66.6667 80.0023C67.5507 80.0023 68.3986 79.6511 69.0237 79.026C69.6488 78.4009 70 77.553 70 76.6689C69.9912 68.7152 66.8276 61.0897 61.2035 55.4655C55.5793 49.8413 47.9538 46.6778 40 46.6689V46.6689Z" fill="#4744CC" />
            </g>
            <defs>
                <clipPath id="clip0_652_3110">
                    <rect width="80" height="80" fill="white" />
                </clipPath>
            </defs>
        </svg>

    },
    {
        title: 'Cotizador',
        about: 'el cotizador',
        icon: <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_652_3103)">
                <path d="M76.6667 73.3333H16.6667C14.0145 73.3333 11.471 72.2798 9.5956 70.4044C7.72024 68.529 6.66667 65.9855 6.66667 63.3333V3.33333C6.66667 2.44928 6.31548 1.60143 5.69036 0.976311C5.06523 0.35119 4.21739 0 3.33333 0C2.44928 0 1.60143 0.35119 0.976311 0.976311C0.35119 1.60143 0 2.44928 0 3.33333L0 63.3333C0.00529286 67.752 1.76294 71.9881 4.8874 75.1126C8.01186 78.2371 12.248 79.9947 16.6667 80H76.6667C77.5507 80 78.3986 79.6488 79.0237 79.0237C79.6488 78.3986 80 77.5507 80 76.6667C80 75.7826 79.6488 74.9348 79.0237 74.3096C78.3986 73.6845 77.5507 73.3333 76.6667 73.3333Z" fill="#4744CC" />
                <path d="M20.0006 66.6665C20.8846 66.6665 21.7325 66.3153 22.3576 65.6902C22.9827 65.0651 23.3339 64.2172 23.3339 63.3332V39.9998C23.3339 39.1158 22.9827 38.2679 22.3576 37.6428C21.7325 37.0177 20.8846 36.6665 20.0006 36.6665C19.1165 36.6665 18.2687 37.0177 17.6435 37.6428C17.0184 38.2679 16.6672 39.1158 16.6672 39.9998V63.3332C16.6672 64.2172 17.0184 65.0651 17.6435 65.6902C18.2687 66.3153 19.1165 66.6665 20.0006 66.6665Z" fill="#4744CC" />
                <path d="M33.3328 33.3333V63.3333C33.3328 64.2173 33.684 65.0652 34.3091 65.6903C34.9342 66.3154 35.7821 66.6666 36.6661 66.6666C37.5502 66.6666 38.398 66.3154 39.0232 65.6903C39.6483 65.0652 39.9995 64.2173 39.9995 63.3333V33.3333C39.9995 32.4493 39.6483 31.6014 39.0232 30.9763C38.398 30.3512 37.5502 30 36.6661 30C35.7821 30 34.9342 30.3512 34.3091 30.9763C33.684 31.6014 33.3328 32.4493 33.3328 33.3333Z" fill="#4744CC" />
                <path d="M50 43.3333V63.3333C50 64.2173 50.3512 65.0652 50.9763 65.6903C51.6014 66.3154 52.4493 66.6666 53.3334 66.6666C54.2174 66.6666 55.0653 66.3154 55.6904 65.6903C56.3155 65.0652 56.6667 64.2173 56.6667 63.3333V43.3333C56.6667 42.4493 56.3155 41.6014 55.6904 40.9763C55.0653 40.3512 54.2174 40 53.3334 40C52.4493 40 51.6014 40.3512 50.9763 40.9763C50.3512 41.6014 50 42.4493 50 43.3333Z" fill="#4744CC" />
                <path d="M66.6672 29.9998V63.3332C66.6672 64.2172 67.0184 65.0651 67.6435 65.6902C68.2687 66.3153 69.1165 66.6665 70.0006 66.6665C70.8846 66.6665 71.7325 66.3153 72.3576 65.6902C72.9827 65.0651 73.3339 64.2172 73.3339 63.3332V29.9998C73.3339 29.1158 72.9827 28.2679 72.3576 27.6428C71.7325 27.0177 70.8846 26.6665 70.0006 26.6665C69.1165 26.6665 68.2687 27.0177 67.6435 27.6428C67.0184 28.2679 66.6672 29.1158 66.6672 29.9998Z" fill="#4744CC" />
                <path d="M19.9995 29.9996C20.8835 29.9994 21.7312 29.6481 22.3562 29.0229L34.3095 17.0696C34.9448 16.4643 35.7887 16.1267 36.6662 16.1267C37.5436 16.1267 38.3875 16.4643 39.0228 17.0696L46.2628 24.3096C48.1381 26.1843 50.6812 27.2374 53.3328 27.2374C55.9845 27.2374 58.5276 26.1843 60.4028 24.3096L79.0228 5.68957C79.63 5.06089 79.966 4.21889 79.9584 3.3449C79.9508 2.47091 79.6002 1.63487 78.9822 1.01684C78.3642 0.398811 77.5281 0.0482481 76.6542 0.0406534C75.7802 0.0330586 74.9382 0.36904 74.3095 0.976234L55.6895 19.5929C55.0644 20.2178 54.2167 20.5689 53.3328 20.5689C52.4489 20.5689 51.6013 20.2178 50.9762 19.5929L43.7362 12.3562C41.8609 10.4815 39.3178 9.42837 36.6662 9.42837C34.0145 9.42837 31.4714 10.4815 29.5962 12.3562L17.6428 24.3096C17.1768 24.7757 16.8594 25.3696 16.7309 26.0161C16.6023 26.6626 16.6683 27.3327 16.9206 27.9417C17.1728 28.5507 17.5999 29.0713 18.148 29.4376C18.696 29.8039 19.3403 29.9994 19.9995 29.9996V29.9996Z" fill="#4744CC" />
            </g>
            <defs>
                <clipPath id="clip0_652_3103">
                    <rect width="80" height="80" fill="white" />
                </clipPath>
            </defs>
        </svg>

    },
    {
        title: 'Ventas',
        about: 'tus cierres',
        icon: <svg width="80" height="68" viewBox="0 0 80 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M70 13.9998H16.6667C13.8033 13.9998 11.0933 12.7598 9.21667 10.6698C11.05 8.62317 13.7133 7.33317 16.6667 7.33317H76.6667C78.51 7.33317 80 5.83984 80 3.99984C80 2.15984 78.51 0.666504 76.6667 0.666504H16.6667C7.46333 0.666504 0 8.12984 0 17.3332V50.6665C0 59.8698 7.46333 67.3332 16.6667 67.3332H70C75.5233 67.3332 80 62.8565 80 57.3332V23.9998C80 18.4765 75.5233 13.9998 70 13.9998ZM73.3333 57.3332C73.3333 59.1698 71.84 60.6665 70 60.6665H16.6667C11.1533 60.6665 6.66667 56.1798 6.66667 50.6665V17.3265C9.51333 19.4565 13.0133 20.6665 16.6667 20.6665H70C71.84 20.6665 73.3333 22.1632 73.3333 23.9998V57.3332ZM66.6667 40.6665C66.6667 42.5065 65.1733 43.9998 63.3333 43.9998C61.4933 43.9998 60 42.5065 60 40.6665C60 38.8265 61.4933 37.3332 63.3333 37.3332C65.1733 37.3332 66.6667 38.8265 66.6667 40.6665Z" fill="#4744CC" />
        </svg>

    },
    {
        title: 'Ejemplo',
        about: 'tu ejemplo',
        icon: <AutoAwesomeOutlinedIcon
            sx={{
                "&.MuiSvgIcon-root": {
                    width: "auto",
                    height: "56px",
                },
            }} />
    }
]

const SoporteCRMSecciones = ({ setPosition }) => {

    return (
        <div className='soporteCRMSecciones'>

            <div className='inputContainer'>
                <FormControl sx={{ width: '100%' }}>
                    <OutlinedInput
                        placeholder='Buscar'
                        name='search'
                        sx={classes.searchBar}
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>

            <div className="secciones">
                {sections.map((section, i) => {
                    return (
                        <div
                            onClick={() => setPosition(1)}
                            className="seccion"
                            key={`seccion${i + 1}`}>
                            {section.icon}
                            <div>
                                <div className="title">{section.title}</div>
                                <p>Todo lo que tenés que saber sobre {section.about}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default SoporteCRMSecciones