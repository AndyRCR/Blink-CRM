import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalStateContext';
import { useContext } from 'react';
import './Menu.css'

const Menu = () => {

    const navigate = useNavigate()

    const { user, userStatuses, menuState } = useContext(GlobalContext)

    const handleNavigation = path => user.status === userStatuses['completo'] ? navigate(path) : false

    return (
        <div className={user.status === userStatuses['nuevo']
            ? `menu inactiveMenu ${menuState ? 'folded' : ''}`
            : user.status === userStatuses['aprobado']
                ? `menu semiActiveMenu ${menuState ? 'folded' : ''}`
                : `menu activeMenu ${menuState ? 'folded' : ''}`}>
            <div>
                <div
                    onClick={() => navigate('/home')}
                    className={window.location.pathname === '/home'
                        ? `menuItem activeMenuItem`
                        : 'menuItem'}>
                    <div style={{width: '24px', height: '24px'}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.121 9.06911L15.536 1.48311C14.5973 0.5471 13.3257 0.0214844 12 0.0214844C10.6744 0.0214844 9.40277 0.5471 8.46401 1.48311L0.879012 9.06911C0.599438 9.3469 0.377782 9.67741 0.226895 10.0415C0.0760072 10.4056 -0.0011104 10.796 1.20795e-05 11.1901V21.0071C1.20795e-05 21.8028 0.316083 22.5658 0.878692 23.1284C1.4413 23.691 2.20436 24.0071 3.00001 24.0071H21C21.7957 24.0071 22.5587 23.691 23.1213 23.1284C23.6839 22.5658 24 21.8028 24 21.0071V11.1901C24.0011 10.796 23.924 10.4056 23.7731 10.0415C23.6222 9.67741 23.4006 9.3469 23.121 9.06911ZM15 22.0071H9.00001V18.0731C9.00001 17.2775 9.31608 16.5144 9.87869 15.9518C10.4413 15.3892 11.2044 15.0731 12 15.0731C12.7957 15.0731 13.5587 15.3892 14.1213 15.9518C14.6839 16.5144 15 17.2775 15 18.0731V22.0071ZM22 21.0071C22 21.2723 21.8947 21.5267 21.7071 21.7142C21.5196 21.9018 21.2652 22.0071 21 22.0071H17V18.0731C17 16.747 16.4732 15.4753 15.5355 14.5376C14.5979 13.5999 13.3261 13.0731 12 13.0731C10.6739 13.0731 9.40216 13.5999 8.46448 14.5376C7.5268 15.4753 7.00001 16.747 7.00001 18.0731V22.0071H3.00001C2.7348 22.0071 2.48044 21.9018 2.29291 21.7142C2.10537 21.5267 2.00001 21.2723 2.00001 21.0071V11.1901C2.00094 10.9251 2.1062 10.6711 2.29301 10.4831L9.87801 2.90011C10.4417 2.33904 11.2047 2.02405 12 2.02405C12.7953 2.02405 13.5583 2.33904 14.122 2.90011L21.707 10.4861C21.8931 10.6734 21.9983 10.9261 22 11.1901V21.0071Z"
                                fill={window.location.pathname === '/home' ? 'white' : '#5275DE'} />
                        </svg>
                    </div>
                    <p>Inicio</p>
                </div>
                <div
                    onClick={() => handleNavigation('/cotizador')}
                    className={window.location.pathname === '/cotizador' ? `menuItem activeMenuItem` : 'menuItem'}>
                    <div style={{width: '24px', height: '24px'}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1022_9255)">
                                <path d="M23 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H23C23.2652 24 23.5196 23.8946 23.7071 23.7071C23.8946 23.5196 24 23.2652 24 23C24 22.7348 23.8946 22.4804 23.7071 22.2929C23.5196 22.1054 23.2652 22 23 22Z" fill={window.location.pathname === '/cotizador' ? 'white' : '#5275DE'} />
                                <path d="M6 20C6.26521 20 6.51957 19.8946 6.7071 19.7071C6.89464 19.5196 7 19.2652 7 19V12C7 11.7348 6.89464 11.4804 6.7071 11.2929C6.51957 11.1054 6.26521 11 6 11C5.73478 11 5.48043 11.1054 5.29289 11.2929C5.10536 11.4804 5 11.7348 5 12V19C5 19.2652 5.10536 19.5196 5.29289 19.7071C5.48043 19.8946 5.73478 20 6 20Z" fill={window.location.pathname === '/cotizador' ? 'white' : '#5275DE'} />
                                <path d="M10 10V19C10 19.2652 10.1054 19.5196 10.2929 19.7071C10.4804 19.8946 10.7348 20 11 20C11.2652 20 11.5196 19.8946 11.7071 19.7071C11.8947 19.5196 12 19.2652 12 19V10C12 9.73478 11.8947 9.48043 11.7071 9.29289C11.5196 9.10536 11.2652 9 11 9C10.7348 9 10.4804 9.10536 10.2929 9.29289C10.1054 9.48043 10 9.73478 10 10Z" fill={window.location.pathname === '/cotizador' ? 'white' : '#5275DE'} />
                                <path d="M15 13V19C15 19.2652 15.1054 19.5196 15.2929 19.7071C15.4804 19.8946 15.7348 20 16 20C16.2652 20 16.5196 19.8946 16.7071 19.7071C16.8947 19.5196 17 19.2652 17 19V13C17 12.7348 16.8947 12.4804 16.7071 12.2929C16.5196 12.1054 16.2652 12 16 12C15.7348 12 15.4804 12.1054 15.2929 12.2929C15.1054 12.4804 15 12.7348 15 13Z" fill={window.location.pathname === '/cotizador' ? 'white' : '#5275DE'} />
                                <path d="M20 9V19C20 19.2652 20.1054 19.5196 20.2929 19.7071C20.4804 19.8946 20.7348 20 21 20C21.2652 20 21.5196 19.8946 21.7071 19.7071C21.8947 19.5196 22 19.2652 22 19V9C22 8.73478 21.8947 8.48043 21.7071 8.29289C21.5196 8.10536 21.2652 8 21 8C20.7348 8 20.4804 8.10536 20.2929 8.29289C20.1054 8.48043 20 8.73478 20 9Z" fill={window.location.pathname === '/cotizador' ? 'white' : '#5275DE'} />
                                <path d="M5.99979 8.99992C6.26498 8.99986 6.51929 8.89447 6.70679 8.70692L10.2928 5.12092C10.4834 4.93934 10.7365 4.83806 10.9998 4.83806C11.263 4.83806 11.5162 4.93934 11.7068 5.12092L13.8788 7.29292C14.4414 7.85533 15.2043 8.17128 15.9998 8.17128C16.7953 8.17128 17.5582 7.85533 18.1208 7.29292L23.7068 1.70692C23.8889 1.51832 23.9897 1.26571 23.9875 1.00352C23.9852 0.741321 23.88 0.490508 23.6946 0.3051C23.5092 0.119692 23.2584 0.0145233 22.9962 0.0122448C22.734 0.00996641 22.4814 0.110761 22.2928 0.292919L16.7068 5.87792C16.5193 6.06539 16.265 6.17071 15.9998 6.17071C15.7346 6.17071 15.4803 6.06539 15.2928 5.87792L13.1208 3.70692C12.5582 3.14451 11.7953 2.82856 10.9998 2.82856C10.2043 2.82856 9.44137 3.14451 8.87879 3.70692L5.29279 7.29292C5.15298 7.43277 5.05777 7.61093 5.0192 7.80489C4.98064 7.99884 5.00044 8.19987 5.07611 8.38257C5.15178 8.56527 5.27992 8.72144 5.44433 8.83132C5.60874 8.94121 5.80204 8.99988 5.99979 8.99992Z" fill={window.location.pathname === '/cotizador' ? 'white' : '#5275DE'} />
                            </g>
                            <defs>
                                <clipPath id="clip0_1022_9255">
                                    <rect width="24" height="24" fill={window.location.pathname === '/cotizador' ? 'white' : '#5275DE'} />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p>Cotizador</p>
                </div>
                <div
                    onClick={() => handleNavigation('/ventas')}
                    className={window.location.pathname.includes('/ventas') ? `menuItem activeMenuItem` : 'menuItem'}>
                    <div style={{width: '24px', height: '24px'}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill={window.location.pathname.includes('/ventas') ? 'white' : '#5275DE'} xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1022_9256)">
                                <path d="M21 6H5C4.141 6 3.328 5.628 2.765 5.001C3.315 4.387 4.114 4 5 4H23C23.553 4 24 3.552 24 3C24 2.448 23.553 2 23 2H5C2.239 2 0 4.239 0 7V17C0 19.761 2.239 22 5 22H21C22.657 22 24 20.657 24 19V9C24 7.343 22.657 6 21 6ZM22 19C22 19.551 21.552 20 21 20H5C3.346 20 2 18.654 2 17V6.998C2.854 7.637 3.904 8 5 8H21C21.552 8 22 8.449 22 9V19ZM20 14C20 14.552 19.552 15 19 15C18.448 15 18 14.552 18 14C18 13.448 18.448 13 19 13C19.552 13 20 13.448 20 14Z" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1022_9256">
                                    <rect width="24" height="24" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p>Ventas</p>
                </div>
                <div
                    onClick={() => handleNavigation('/clientes')}
                    className={window.location.pathname === '/clientes' ? `menuItem activeMenuItem` : 'menuItem'}>
                    <div style={{width: '24px', height: '24px'}}>
                        <svg width="22" height="24" viewBox="0 0 22 24" fill={window.location.pathname.includes('/clientes') ? 'white' : '#5275DE'} xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 0H7C6.02823 0.00127838 5.0779 0.285705 4.26521 0.818499C3.45252 1.35129 2.81271 2.10936 2.424 3H1C0.734784 3 0.48043 3.10536 0.292893 3.29289C0.105357 3.48043 0 3.73478 0 4C0 4.26522 0.105357 4.51957 0.292893 4.70711C0.48043 4.89464 0.734784 5 1 5H2V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H2V11H1C0.734784 11 0.48043 11.1054 0.292893 11.2929C0.105357 11.4804 0 11.7348 0 12C0 12.2652 0.105357 12.5196 0.292893 12.7071C0.48043 12.8946 0.734784 13 1 13H2V15H1C0.734784 15 0.48043 15.1054 0.292893 15.2929C0.105357 15.4804 0 15.7348 0 16C0 16.2652 0.105357 16.5196 0.292893 16.7071C0.48043 16.8946 0.734784 17 1 17H2V19H1C0.734784 19 0.48043 19.1054 0.292893 19.2929C0.105357 19.4804 0 19.7348 0 20C0 20.2652 0.105357 20.5196 0.292893 20.7071C0.48043 20.8946 0.734784 21 1 21H2.424C2.81271 21.8906 3.45252 22.6487 4.26521 23.1815C5.0779 23.7143 6.02823 23.9987 7 24H17C18.3256 23.9984 19.5964 23.4711 20.5338 22.5338C21.4711 21.5964 21.9984 20.3256 22 19V5C21.9984 3.67441 21.4711 2.40356 20.5338 1.46622C19.5964 0.528882 18.3256 0.00158786 17 0V0ZM20 19C20 19.7956 19.6839 20.5587 19.1213 21.1213C18.5587 21.6839 17.7956 22 17 22H7C6.20435 22 5.44129 21.6839 4.87868 21.1213C4.31607 20.5587 4 19.7956 4 19V5C4 4.20435 4.31607 3.44129 4.87868 2.87868C5.44129 2.31607 6.20435 2 7 2H17C17.7956 2 18.5587 2.31607 19.1213 2.87868C19.6839 3.44129 20 4.20435 20 5V19ZM12 12C12.7956 12 13.5587 11.6839 14.1213 11.1213C14.6839 10.5587 15 9.79565 15 9C15 8.20435 14.6839 7.44129 14.1213 6.87868C13.5587 6.31607 12.7956 6 12 6C11.2044 6 10.4413 6.31607 9.87868 6.87868C9.31607 7.44129 9 8.20435 9 9C9 9.79565 9.31607 10.5587 9.87868 11.1213C10.4413 11.6839 11.2044 12 12 12ZM17 18C17 18.2652 16.8946 18.5196 16.7071 18.7071C16.5196 18.8946 16.2652 19 16 19C15.7348 19 15.4804 18.8946 15.2929 18.7071C15.1054 18.5196 15 18.2652 15 18C15 17.2044 14.6839 16.4413 14.1213 15.8787C13.5587 15.3161 12.7956 15 12 15C11.2044 15 10.4413 15.3161 9.87868 15.8787C9.31607 16.4413 9 17.2044 9 18C9 18.2652 8.89464 18.5196 8.70711 18.7071C8.51957 18.8946 8.26522 19 8 19C7.73478 19 7.48043 18.8946 7.29289 18.7071C7.10536 18.5196 7 18.2652 7 18C7.211 11.392 16.791 11.394 17 18Z" />
                        </svg>
                    </div>
                    <p>Clientes</p>
                </div>
                <div
                    onClick={() => handleNavigation('/prepagas')}
                    className={window.location.pathname === '/prepagas' ? `menuItem activeMenuItem` : 'menuItem'}>
                    <div style={{width: '24px', height: '24px'}}>
                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 4H16V3C16 2.20435 15.6839 1.44129 15.1213 0.87868C14.5587 0.31607 13.7956 0 13 0H11C10.2044 0 9.44129 0.31607 8.87868 0.87868C8.31607 1.44129 8 2.20435 8 3V4H5C3.67441 4.00159 2.40356 4.52888 1.46622 5.46622C0.528882 6.40356 0.00158786 7.67441 0 9L0 17C0.00158786 18.3256 0.528882 19.5964 1.46622 20.5338C2.40356 21.4711 3.67441 21.9984 5 22H19C20.3256 21.9984 21.5964 21.4711 22.5338 20.5338C23.4711 19.5964 23.9984 18.3256 24 17V9C23.9984 7.67441 23.4711 6.40356 22.5338 5.46622C21.5964 4.52888 20.3256 4.00159 19 4ZM10 3C10 2.73478 10.1054 2.48043 10.2929 2.29289C10.4804 2.10536 10.7348 2 11 2H13C13.2652 2 13.5196 2.10536 13.7071 2.29289C13.8946 2.48043 14 2.73478 14 3V4H10V3ZM22 17C22 17.7956 21.6839 18.5587 21.1213 19.1213C20.5587 19.6839 19.7956 20 19 20H5C4.20435 20 3.44129 19.6839 2.87868 19.1213C2.31607 18.5587 2 17.7956 2 17V9C2 8.20435 2.31607 7.44129 2.87868 6.87868C3.44129 6.31607 4.20435 6 5 6H19C19.7956 6 20.5587 6.31607 21.1213 6.87868C21.6839 7.44129 22 8.20435 22 9V17ZM16 13C16 13.2652 15.8946 13.5196 15.7071 13.7071C15.5196 13.8946 15.2652 14 15 14H13V16C13 16.2652 12.8946 16.5196 12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16V14H9C8.73478 14 8.48043 13.8946 8.29289 13.7071C8.10536 13.5196 8 13.2652 8 13C8 12.7348 8.10536 12.4804 8.29289 12.2929C8.48043 12.1054 8.73478 12 9 12H11V10C11 9.73478 11.1054 9.48043 11.2929 9.29289C11.4804 9.10536 11.7348 9 12 9C12.2652 9 12.5196 9.10536 12.7071 9.29289C12.8946 9.48043 13 9.73478 13 10V12H15C15.2652 12 15.5196 12.1054 15.7071 12.2929C15.8946 12.4804 16 12.7348 16 13Z" fill={window.location.pathname === '/prepagas' ? 'white' : '#5275DE'} />
                        </svg>
                    </div>
                    <p>Prepagas</p>
                </div>
                <div
                    onClick={() => handleNavigation('/escuelita')}
                    className={window.location.pathname === '/escuelita' ? `menuItem activeMenuItem` : 'menuItem'}>
                    <div style={{width: '24px', height: '24px'}}>
                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.057 5.22998L14.683 1.71698C13.0598 0.747414 11.0395 0.730211 9.40003 1.67198L1.94306 5.22998C1.91508 5.24399 1.88606 5.25899 1.85906 5.27498C0.0894372 6.28682 -0.524907 8.54165 0.486937 10.3113C0.829921 10.9112 1.33444 11.4027 1.94306 11.73L4.00008 12.71V17.61C4.0013 19.8011 5.427 21.7368 7.51908 22.388C8.97497 22.8092 10.4846 23.0154 12.0001 23C13.5154 23.017 15.025 22.8125 16.4811 22.393C18.5732 21.7419 19.9989 19.8061 20.0001 17.615V12.708L22.0001 11.752V20C22.0001 20.5522 22.4478 20.9999 23.0001 20.9999C23.5524 20.9999 24.0001 20.5522 24.0001 20V7.99996C24.0067 6.8257 23.0796 5.74091 22.057 5.22998ZM18 17.615C18.0006 18.9256 17.1502 20.0849 15.9 20.478C14.6323 20.8402 13.3185 21.0161 12 21C10.6816 21.0161 9.36783 20.8402 8.10005 20.478C6.84984 20.0848 5.99953 18.9256 6.00005 17.615V13.663L9.31706 15.243C10.1355 15.729 11.0702 15.9844 12.0221 15.982C12.9281 15.9884 13.8188 15.7486 14.5991 15.288L18 13.663V17.615ZM21.2001 9.92498L13.6581 13.525C12.6065 14.1373 11.303 14.12 10.2681 13.48L2.88905 9.96998C2.06653 9.52645 1.75931 8.50012 2.20284 7.67765C2.35284 7.39949 2.57775 7.16891 2.85206 7.01198L10.347 3.43199C11.399 2.82102 12.7017 2.83832 13.737 3.47699L21.111 6.98999C21.6533 7.29112 21.9926 7.85976 22 8.48001C22.001 9.06754 21.6985 9.61391 21.2001 9.92498Z" fill={window.location.pathname === '/escuelita' ? 'white' : '#5275DE'} />
                        </svg>
                    </div>
                    <p>Escuelita</p>
                </div>
                <div className='menuItem'>
                    <div style={{width: '24px', height: '24px'}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 0C16.7348 0 16.4804 0.105357 16.2929 0.292893C16.1054 0.48043 16 0.734784 16 1C16 3.949 13.417 5 11 5H4C2.93913 5 1.92172 5.42143 1.17157 6.17157C0.421427 6.92172 0 7.93913 0 9L0 11C0.00218416 11.5987 0.139462 12.1893 0.401603 12.7276C0.663743 13.2659 1.04399 13.7381 1.514 14.109L5.086 22.081C5.34004 22.6521 5.75417 23.1373 6.27827 23.4779C6.80237 23.8185 7.41396 23.9998 8.039 24C8.53631 23.9997 9.02565 23.875 9.46247 23.6373C9.89929 23.3996 10.2697 23.0564 10.54 22.639C10.8104 22.2215 10.972 21.7431 11.0103 21.2473C11.0485 20.7515 10.9621 20.2539 10.759 19.8L8.559 15H11C13.417 15 16 16.051 16 19C16 19.2652 16.1054 19.5196 16.2929 19.7071C16.4804 19.8946 16.7348 20 17 20C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19V1C18 0.734784 17.8946 0.48043 17.7071 0.292893C17.5196 0.105357 17.2652 0 17 0V0ZM8.937 20.619C9.00324 20.7686 9.03109 20.9323 9.01804 21.0954C9.005 21.2585 8.95145 21.4157 8.86227 21.5529C8.77309 21.69 8.65109 21.8027 8.50733 21.8808C8.36357 21.9589 8.20259 21.9999 8.039 22C7.8004 21.9998 7.56697 21.9304 7.36709 21.8001C7.1672 21.6698 7.00945 21.4842 6.913 21.266L4.105 15H6.359L8.937 20.619ZM16 14.6C14.5713 13.4992 12.8024 12.9331 11 13H4C3.46957 13 2.96086 12.7893 2.58579 12.4142C2.21071 12.0391 2 11.5304 2 11V9C2 8.46957 2.21071 7.96086 2.58579 7.58579C2.96086 7.21071 3.46957 7 4 7H11C12.8018 7.0683 14.5706 6.50403 16 5.405V14.6ZM23.9 15.452C23.8413 15.5696 23.7601 15.6744 23.6609 15.7606C23.5617 15.8467 23.4465 15.9125 23.3218 15.9541C23.1972 15.9957 23.0656 16.0123 22.9345 16.0031C22.8035 15.9938 22.6755 15.9588 22.558 15.9L20.558 14.9C20.3206 14.7814 20.1401 14.5735 20.0561 14.3218C19.972 14.0701 19.9915 13.7954 20.11 13.558C20.2286 13.3206 20.4365 13.1401 20.6882 13.0561C20.9399 12.972 21.2146 12.9914 21.452 13.11L23.452 14.11C23.6882 14.2285 23.8678 14.4356 23.9518 14.6861C24.0357 14.9366 24.0171 15.2102 23.9 15.447V15.452ZM20.11 6.452C20.0512 6.33448 20.0162 6.20653 20.0069 6.07546C19.9977 5.9444 20.0143 5.81279 20.0559 5.68816C20.0975 5.56353 20.1633 5.44832 20.2494 5.34912C20.3356 5.24991 20.4404 5.16866 20.558 5.11L22.558 4.11C22.7954 3.99145 23.0701 3.97205 23.3218 4.05606C23.5735 4.14008 23.7815 4.32063 23.9 4.558C24.0186 4.79537 24.038 5.07011 23.9539 5.32178C23.8699 5.57346 23.6894 5.78145 23.452 5.9L21.452 6.9C21.3345 6.95876 21.2065 6.99378 21.0755 7.00306C20.9444 7.01234 20.8128 6.99571 20.6882 6.9541C20.5635 6.9125 20.4483 6.84674 20.3491 6.76058C20.2499 6.67443 20.1687 6.56957 20.11 6.452ZM20 10C20 9.73478 20.1054 9.48043 20.2929 9.29289C20.4804 9.10536 20.7348 9 21 9H23C23.2652 9 23.5196 9.10536 23.7071 9.29289C23.8946 9.48043 24 9.73478 24 10C24 10.2652 23.8946 10.5196 23.7071 10.7071C23.5196 10.8946 23.2652 11 23 11H21C20.7348 11 20.4804 10.8946 20.2929 10.7071C20.1054 10.5196 20 10.2652 20 10Z" fill="#4744CC" />
                        </svg>
                    </div>
                    <p>Marketing</p>
                </div>
                <div
                    onClick={() => handleNavigation('/soporte')}
                    className={window.location.pathname === '/soporte' ? `menuItem activeMenuItem` : 'menuItem'}>
                    <div style={{width: '24px', height: '24px'}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1022_9262)">
                                <path d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9966 8.81846 22.7312 5.76821 20.4815 3.51852C18.2318 1.26883 15.1815 0.00344108 12 0V0ZM12 22C10.0222 22 8.08879 21.4135 6.4443 20.3147C4.79981 19.2159 3.51809 17.6541 2.76121 15.8268C2.00433 13.9996 1.8063 11.9889 2.19215 10.0491C2.578 8.10929 3.53041 6.32746 4.92894 4.92893C6.32746 3.53041 8.10929 2.578 10.0491 2.19215C11.9889 1.8063 13.9996 2.00433 15.8268 2.7612C17.6541 3.51808 19.2159 4.79981 20.3147 6.4443C21.4135 8.08879 22 10.0222 22 12C21.9971 14.6513 20.9426 17.1931 19.0679 19.0679C17.1931 20.9426 14.6513 21.9971 12 22Z" fill={window.location.pathname === '/soporte' ? 'white' : '#5275DE'} />
                                <path d="M12.717 5.06283C12.1403 4.95776 11.5476 4.98072 10.9808 5.13007C10.414 5.27943 9.88691 5.55154 9.43689 5.92714C8.98688 6.30274 8.62491 6.77265 8.37661 7.30363C8.12831 7.83461 7.99974 8.41367 8 8.99983C8 9.26505 8.10536 9.5194 8.29289 9.70694C8.48043 9.89448 8.73478 9.99983 9 9.99983C9.26522 9.99983 9.51957 9.89448 9.70711 9.70694C9.89464 9.5194 10 9.26505 10 8.99983C9.99975 8.70561 10.0644 8.41495 10.1894 8.14859C10.3144 7.88223 10.4966 7.64672 10.723 7.45886C10.9495 7.271 11.2146 7.13542 11.4994 7.06178C11.7843 6.98814 12.0819 6.97825 12.371 7.03283C12.766 7.10952 13.1293 7.30222 13.4142 7.58632C13.6992 7.87043 13.8931 8.23304 13.971 8.62783C14.0497 9.04224 13.9954 9.47091 13.8158 9.85257C13.6362 10.2342 13.3405 10.5493 12.971 10.7528C12.3592 11.1073 11.8536 11.6193 11.5069 12.2356C11.1603 12.8519 10.9852 13.5499 11 14.2568V14.9998C11 15.265 11.1054 15.5194 11.2929 15.7069C11.4804 15.8945 11.7348 15.9998 12 15.9998C12.2652 15.9998 12.5196 15.8945 12.7071 15.7069C12.8946 15.5194 13 15.265 13 14.9998V14.2568C12.9875 13.9088 13.0668 13.5637 13.2301 13.2561C13.3933 12.9486 13.6347 12.6894 13.93 12.5048C14.6545 12.1069 15.238 11.4943 15.6001 10.7512C15.9622 10.0082 16.0853 9.17119 15.9523 8.35536C15.8193 7.53952 15.4368 6.78492 14.8575 6.19533C14.2782 5.60573 13.5304 5.2101 12.717 5.06283Z" fill={window.location.pathname === '/soporte' ? 'white' : '#5275DE'} />
                                <path d="M13 18C13 17.4477 12.5523 17 12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18Z" fill={window.location.pathname === '/soporte' ? 'white' : '#5275DE'} />
                            </g>
                            <defs>
                                <clipPath id="clip0_1022_9262">
                                    <rect width="24" height="24" fill={window.location.pathname === '/soporte' ? 'white' : '#5275DE'} />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p>Soporte</p>
                </div>
            </div>
            <div
                onClick={() => navigate('/')}
                className='menuItem active'>
                <div style={{width: '24px', height: '24px'}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1022_9266)">
                            <path d="M22.8288 9.17094L18.9498 5.29194C18.7612 5.10978 18.5086 5.00899 18.2464 5.01127C17.9842 5.01355 17.7334 5.11872 17.548 5.30412C17.3625 5.48953 17.2574 5.74034 17.2551 6.00254C17.2528 6.26474 17.3536 6.51734 17.5358 6.70594L21.4148 10.5849C21.53 10.7025 21.6307 10.8334 21.7148 10.9749C21.6998 10.9749 21.6878 10.9669 21.6728 10.9669L5.98877 10.9989C5.72355 10.9989 5.4692 11.1043 5.28166 11.2918C5.09413 11.4794 4.98877 11.7337 4.98877 11.9989C4.98877 12.2642 5.09413 12.5185 5.28166 12.706C5.4692 12.8936 5.72355 12.9989 5.98877 12.9989L21.6668 12.9669C21.6948 12.9669 21.7178 12.9529 21.7448 12.9509C21.6561 13.1201 21.5436 13.2757 21.4108 13.4129L17.5318 17.2919C17.4363 17.3842 17.3601 17.4945 17.3077 17.6165C17.2553 17.7385 17.2277 17.8698 17.2265 18.0025C17.2254 18.1353 17.2507 18.267 17.3009 18.3899C17.3512 18.5128 17.4255 18.6244 17.5194 18.7183C17.6133 18.8122 17.7249 18.8865 17.8478 18.9368C17.9707 18.987 18.1024 19.0123 18.2352 19.0112C18.3679 19.01 18.4992 18.9825 18.6212 18.93C18.7432 18.8776 18.8535 18.8015 18.9458 18.7059L22.8248 14.8269C23.5747 14.0768 23.9959 13.0596 23.9959 11.9989C23.9959 10.9383 23.5747 9.92105 22.8248 9.17094H22.8288Z" fill="#4744CC" />
                            <path d="M7 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H7C7.26522 2 7.51957 1.89464 7.70711 1.70711C7.89464 1.51957 8 1.26522 8 1C8 0.734784 7.89464 0.48043 7.70711 0.292893C7.51957 0.105357 7.26522 0 7 0L5 0C3.67441 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.67441 0 5L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H7C7.26522 24 7.51957 23.8946 7.70711 23.7071C7.89464 23.5196 8 23.2652 8 23C8 22.7348 7.89464 22.4804 7.70711 22.2929C7.51957 22.1054 7.26522 22 7 22Z" fill="#4744CC" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1022_9266">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <p>Salir</p>
            </div>
        </div>
    )
}
export default Menu