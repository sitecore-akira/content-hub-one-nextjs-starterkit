import{MediaResults} from "../Common/media-type"; 
 
type Speaker = { 
  id: string 
  name: string 
  speakerName: string 
  speakerBio: string 
  Description: string 
  speakerImage: MediaResults 
  } 
 
export default Speaker 
 
export type SpeakerResults = { 
  total: string; 
  results: Speaker[]; 
} 