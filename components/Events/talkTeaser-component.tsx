import stylesHp from '../../styles/Homepage/Homepage.module.css' 
import Talk, {TalkResults} from "../../types/Events/talk-type"; 
import Link from 'next/link' 
import Image from 'next/image' 
 
type Props = { 
    allTalks: TalkResults; 
} 
const TalkTeaserComponent = ({allTalks}:Props) => { 
    const talks = allTalks.results; 
     
    return( 
        <div> 
            {talks.map((talk: Talk) => ( 
                <div key={talk.id} className={stylesHp.boxOuter}> 
                    <div className={stylesHp.box}> 
                        <Image  
                            alt='' 
                            src={talk.ImageList.results[0].fileUrl}
                            width='500' 
                            height= '500' 
                            className={stylesHp.boxImage} 
                        /> 
                        <h2>{talk.talkTitle}</h2> 
                        <p className={stylesHp.boxText}> 
                            {talk.talkDescription} 
                        </p> 
                        <p> 
                            <button className={stylesHp.button}> 
                            <Link href={`/talk/${encodeURIComponent(talk.id)}`}>Read more</Link> 
                            </button> 
                        </p> 
                    </div> 
                </div> 
            ))} 
        </div> 
    ) 
} 

export default TalkTeaserComponent 