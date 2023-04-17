import "../styles/_main.scss"
import Offers from "../data.json"

const Main = () => {

    return ( 
        <div className="main">
            {Offers.map(offer => (
                <div className="offer">
                    <div className="wrapper">
                    <img className="photo" src={offer.logo} alt="company photo" />
                     <div className="company">
                        {offer.company}
                        
                     </div>
                     <div className="position">
                        {offer.position}
                     </div>
                     <div className="informations">
                        <div className="information">
                        <span>{offer.postedAt}</span>
                        <span>.</span>
                        <span>{offer.contract}</span>
                        <span>.</span>
                        <span>{offer.location}</span>
                        </div>
                     </div>
                     <div className="skills">
                        <div className="skill">{offer.role}</div>
                        <div className="skill">{offer.level}</div>
                        {offer.languages.map(language => (
                            <div className="skill">
                                {language}
                            </div>
                        ))}
                     </div>
                     </div>
                </div>
            ))}
        </div>
     );
}
 
export default Main;