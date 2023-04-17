import {ReactComponent as BgHeaderMobile } from '../images/bg-header-mobile.svg';
import {ReactComponent as BgHeaderDesktop } from '../images/bg-header-desktop.svg';
import "../styles/_header.scss"

const Header = () => {
    return ( 
        <div className='header'>
            <BgHeaderMobile className="bg-mobile"/>
            <BgHeaderDesktop className="bg-desktop"/>
        </div>
     );
}
 
export default Header;