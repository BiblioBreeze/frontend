import plusIcon from '../../assets/icons/plus.svg'
import notificationsIcon from '../../assets/icons/notifications.svg'
import accountIcon from '../../assets/icons/account.svg'

export const Header = () => {
    return (
        <div
            style={
                {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap-reverse'
                }
            }
        >
            <a>
                <img alt='Create book' src={plusIcon}/>
            </a>
            <h2 style={
                {
                    color: '#646660',
                    fontSize: '35px',
                    fontFamily: 'Comic Sans MS'
                }
            }>BiblioBreeze</h2>
            <a>
                <img alt='Notifications' src={notificationsIcon}/>
            </a>
            <a>
                <img alt='Account' src={accountIcon}/>
            </a>
        </div>
    )
}