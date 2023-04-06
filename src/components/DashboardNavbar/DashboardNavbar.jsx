import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'
import { IconButton } from '@mui/material'
import './DashboardNavbar.css'
import { UserGlobalContext } from '../../context/UserContex'

const obtainTranslateX = (el) => {
    return parseInt(el.style.transform
    .replace('translateX(', '')
    .replace(')', ''))
}

const DashboardNavbar = () => {

    const navigate = useNavigate()

    const {windowHeight, menuState, setMenuState, setResponsiveMenuDisplayed, responsiveMenuDisplayed } = useContext(GlobalContext)
    const { user } = useContext(UserGlobalContext)

    const handleMenu = () => {
        if(windowHeight <= 900) setResponsiveMenuDisplayed(!responsiveMenuDisplayed)
        else{
            setMenuState(!menuState)
            if(menuState){
                document
                .querySelectorAll(".sliderItem")
                .forEach((el) => {
                    const translate = obtainTranslateX(el) === 0 ? 0 : obtainTranslateX(el) + 170
                    el.style.transform = `translateX(${translate}px)`
                })
            } else{
                document
                .querySelectorAll(".sliderItem")
                .forEach((el) => {
                    const translate = obtainTranslateX(el) === 0 ? 0 : obtainTranslateX(el) - 170
                    el.style.transform = `translateX(${translate}px)`
                })
            }
        }
    }

    return (
        <div className='dashboardNavbar'>
            <div className='logoContainer'>
                <div>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handleMenu}
                    >
                        <div className={
                            windowHeight <= 900
                                ? (!responsiveMenuDisplayed
                                ? 'buttonMenu'
                                : 'buttonMenu buttonMenuClosed')
                                : (!menuState
                                ? 'buttonMenu'
                                : 'buttonMenu buttonMenuClosed')
                        }>
                            <div className='line'></div>
                            <div className='line'></div>
                            <div className='line'></div>
                        </div>
                    </IconButton>
                </div>
                <div className='logo'>
                    blink
                </div>
            </div>
            <div className='navbarOptions'>
                <div className='user'>
                    <div className='userInfo'>
                        <div className="userName">Hola, {user?.name.split(' ')[0]}</div>
                        <div className="userLevel">Nivel {user?.level || 0}</div>
                    </div>
                    <div
                        onClick={() => navigate('/perfil')}
                        className='userIcon'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1022_9232)">
                                <path d="M12.0001 11.9998C13.1077 11.9998 14.1904 11.6714 15.1113 11.056C16.0323 10.4407 16.75 9.5661 17.1739 8.54283C17.5977 7.51957 17.7086 6.3936 17.4925 5.3073C17.2765 4.22101 16.7431 3.22318 15.9599 2.44001C15.1768 1.65684 14.1789 1.12349 13.0927 0.90741C12.0064 0.691332 10.8804 0.802231 9.85712 1.22608C8.83385 1.64993 7.95925 2.3677 7.34392 3.28861C6.72858 4.20953 6.40015 5.29223 6.40015 6.39981C6.40163 7.88456 6.9921 9.30809 8.04199 10.358C9.09187 11.4079 10.5154 11.9983 12.0001 11.9998ZM12.0001 2.66647C12.7385 2.66647 13.4603 2.88543 14.0743 3.29565C14.6882 3.70588 15.1667 4.28895 15.4493 4.97112C15.7319 5.6533 15.8058 6.40395 15.6617 7.12814C15.5177 7.85234 15.1621 8.51756 14.64 9.03967C14.1179 9.56179 13.4527 9.91735 12.7285 10.0614C12.0043 10.2055 11.2536 10.1315 10.5715 9.84896C9.88928 9.56639 9.30622 9.08788 8.89599 8.47394C8.48577 7.85999 8.26681 7.13819 8.26681 6.39981C8.26681 5.40967 8.66015 4.46008 9.36028 3.75994C10.0604 3.05981 11.01 2.66647 12.0001 2.66647V2.66647Z" fill="#4744CC" />
                                <path d="M12.0001 13.8672C9.77304 13.8697 7.6379 14.7554 6.06313 16.3302C4.48836 17.905 3.60257 20.0401 3.6001 22.2672C3.6001 22.5147 3.69843 22.7521 3.87346 22.9272C4.0485 23.1022 4.2859 23.2005 4.53343 23.2005C4.78097 23.2005 5.01836 23.1022 5.1934 22.9272C5.36843 22.7521 5.46676 22.5147 5.46676 22.2672C5.46676 20.5344 6.1551 18.8727 7.38033 17.6474C8.60557 16.4222 10.2673 15.7339 12.0001 15.7339C13.7328 15.7339 15.3946 16.4222 16.6199 17.6474C17.8451 18.8727 18.5334 20.5344 18.5334 22.2672C18.5334 22.5147 18.6318 22.7521 18.8068 22.9272C18.9818 23.1022 19.2192 23.2005 19.4668 23.2005C19.7143 23.2005 19.9517 23.1022 20.1267 22.9272C20.3018 22.7521 20.4001 22.5147 20.4001 22.2672C20.3976 20.0401 19.5118 17.905 17.9371 16.3302C16.3623 14.7554 14.2272 13.8697 12.0001 13.8672V13.8672Z" fill="#4744CC" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1022_9232">
                                    <rect width="22.4" height="22.4" fill="white" transform="translate(0.800049 0.799805)" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                </div>
                <svg style={{cursor: 'pointer'}} width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.0733 18.2159L26.54 9.10125C25.7974 6.43102 24.1836 4.08563 21.9551 2.43787C19.7266 0.790116 17.0112 -0.0654387 14.2406 0.00720146C11.47 0.0798416 8.80319 1.07651 6.66406 2.83878C4.52493 4.60105 3.03625 7.02778 2.43464 9.73325L0.473309 18.5532C0.256663 19.5278 0.261672 20.5386 0.487966 21.511C0.71426 22.4834 1.15606 23.3925 1.78075 24.1713C2.40544 24.9501 3.19707 25.5786 4.09719 26.0105C4.99731 26.4424 5.98294 26.6666 6.98131 26.6666H8.46664C8.77266 28.1736 9.59028 29.5285 10.781 30.5017C11.9716 31.475 13.4622 32.0066 15 32.0066C16.5378 32.0066 18.0283 31.475 19.219 30.5017C20.4097 29.5285 21.2273 28.1736 21.5333 26.6666H22.6506C23.6784 26.6667 24.6922 26.4291 25.613 25.9725C26.5337 25.5159 27.3364 24.8526 27.9584 24.0344C28.5804 23.2162 29.0047 22.2653 29.1984 21.256C29.392 20.2466 29.3497 19.2062 29.0746 18.2159H29.0733ZM15 29.3332C14.1756 29.3298 13.3725 29.0718 12.7004 28.5945C12.0283 28.1171 11.5201 27.4438 11.2453 26.6666H18.7546C18.4799 27.4438 17.9717 28.1171 17.2996 28.5945C16.6275 29.0718 15.8243 29.3298 15 29.3332V29.3332ZM25.8346 22.4199C25.4631 22.9128 24.9817 23.3123 24.4288 23.5865C23.8758 23.8608 23.2665 24.0023 22.6493 23.9999H6.98131C6.38236 23.9998 5.79107 23.8652 5.2511 23.606C4.71112 23.3468 4.23625 22.9697 3.86152 22.5024C3.4868 22.0352 3.22179 21.4897 3.08606 20.9064C2.95033 20.323 2.94734 19.7166 3.07731 19.1319L5.03731 10.3106C5.50978 8.18552 6.67905 6.27938 8.35925 4.89518C10.0394 3.51097 12.1341 2.72814 14.3103 2.67113C16.4865 2.61412 18.6193 3.2862 20.3697 4.58054C22.1201 5.87487 23.3876 7.71717 23.9706 9.81458L26.504 18.9292C26.6714 19.5231 26.698 20.1477 26.5818 20.7537C26.4657 21.3596 26.2098 21.9301 25.8346 22.4199V22.4199Z" fill="white" />
                </svg>
            </div>
        </div>
    )
}
export default DashboardNavbar