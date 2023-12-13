import { MediaResults } from "../Common/media-type";
import { SpeakerResults } from "./speaker-type"; 
 
type Talk = { 
   id: string 
   name: string 
   talkTitle: string 
   talkDescription: string 
   time: string 
   speaker: SpeakerResults 
   image: MediaResults
   } 
 
export default Talk 
 
export type TalkResults = { 
 total:string; 
 results: Talk[]; 
} 