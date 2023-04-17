import {ReactComponent as BgHeaderMobile } from '../images/bg-header-mobile.svg';
import "../styles/_header.scss"

const Header = () => {
    return ( 
        <div className='header'>
            <BgHeaderMobile className="bg-mobile"/>
        </div>
     );
}
 
export default Header;