import "../styles/_main.scss"
import Offers from "../data.json"

interface MainProps{
    handleTags: Function
    tags:string[]
}

const Main = ({handleTags, tags}: MainProps) => {

    const addToTag = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLInputElement;
        const innerHTML = target.innerHTML
        handleTags(innerHTML)
    }
    console.log(Offers);
    return ( 
        <div className="main">
            {
            Offers.filter(offer => {
                const tmp = [...offer.languages, offer.role, offer.level]
                return tags.every(tag => tmp.includes(tag))
            }).map(offer => (
                <div className="offer">
                    <div className="wrapper">
                    <img className="photo" src={offer.logo} alt="company photo" />
                     <span className="group">
                     <div className="company">
                        {offer.company}
                        
                     </div>
                     <div className="position">
                        {offer.position}
                     </div>
                     <div className="informations">
                        <div className="information">
                        <span>{offer.postedAt}</span>
                        <span>•</span>
                        <span>{offer.contract}</span>
                        <span>•</span>
                        <span>{offer.location}</span>
                        </div>
                     </div>
                     </span>
                     <div className="skills">
                        <div onClick={addToTag} className="skill">{offer.role}</div>
                        <div onClick={addToTag} className="skill">{offer.level}</div>
                        {offer.languages.map(language => (
                            <div onClick={addToTag} className="skill">
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