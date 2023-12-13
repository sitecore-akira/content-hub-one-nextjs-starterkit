import {fetchAPI} from "../Common/api" 
import Talk, { TalkResults } from "../../types/Events/talk-type"; 
import ALL_AGENDA_QUERY, { AGENDA_QUERY } from "../../graphQl/Events/agenda-query"; 
 
export async function getAllTalk(preview: boolean): Promise<Talk[]> { 
const data = await fetchAPI(`${ALL_AGENDA_QUERY}`); 
 
 return extractPosts(data.data); 
} 
 
export async function getTalkById(id: string): Promise<Talk> { 
    console.log('getTalkById' + id); 
const queryTalk = `{ 
data: talk(id: "${id}") 
{ 
 ${AGENDA_QUERY} 
 } 
 }`; 
 const data = await fetchAPI(queryTalk); 
 return data.data.data; 
} 
export async function getAllTalksWithIds(): Promise<Talk[]> { 
const query = `{ 
data: allTalk 
{ 
__typename 
total 
results { 
${AGENDA_QUERY } 
} 
} 
}`; 
const data = await fetchAPI(query); 
return extractPosts(data.data); 
} 
function extractPosts({ data }: { data: TalkResults }) { 
 return data.results.map((post: Talk) => { 
 return post; 
 }); 
} 
function extractPost({ data }: { data: Talk }) { 
 return data; 
} 