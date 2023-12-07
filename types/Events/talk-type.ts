import { SpeakerResults } from "./speaker-type"; 
 
type Talk = { 
   id: string 
   name: string 
   talkTitle: string 
   talkDescription: string 
   time: string 
   speaker: SpeakerResults 
   } 
 
export default Talk 
 
export type TalkResults = { 
 total:string; 
 results: Talk[]; 
} 