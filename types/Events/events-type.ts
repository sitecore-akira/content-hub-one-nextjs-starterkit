import {MediaResults} from "../Common/media-type" 
import { JSONContent } from "@tiptap/core"; 
import {TalkResults} from "./talk-type";  
 
type Event = { 
 
  id: string 
  name: string 
  eventName: string 
  eventDescription: JSONContent 
  eventLocation: string 
  eventDate: Date 
  eventImage: MediaResults 
  agenda: TalkResults 
 } 
 
export default Event  
 
export type EventResults = { 
      total:string; 
      results: Event[]; 
}  