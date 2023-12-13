import{MediaResults} from "../Common/media-type"; 
 
type Speaker = { 
  id: string 
  name: string 
  speakerName: string 
  speakerBio: string 
  Description: string 
  speakerImage: MediaResults 
  // sitecore stores images as a list - this is a data type of a list of media assets
  // mention that
  // rich text = json - delve into this a bit more 
  } 
 
export default Speaker 
 
export type SpeakerResults = { 
  total: string; 
  results: Speaker[]; 
} 