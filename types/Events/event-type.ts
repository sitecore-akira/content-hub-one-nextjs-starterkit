import {MediaResults} from "../Common/media-type" 
import { JSONContent } from "@tiptap/core"; 
// explain tiptap - its an external library - link to it - ChOne uses this for 
// rich text
import {TalkResults} from "./talk-type";  
 
type Event = { 
 
  id: string 
  name: string 
  eventName: string 
  eventDescription: JSONContent 
  // you can't use a string here, it needs to be richtext (JSON)
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