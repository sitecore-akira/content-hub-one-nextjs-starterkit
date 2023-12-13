import SPEAKER, {SpeakerResults} from "../../types/Events/speaker-type";
import {fetchAPI} from "../Common/api"
import {SPEAKER_QUERY,ALL_SPEAKER_QUERY} from "../../graphQl/Events/speaker-query";


export async function getAllSpeakers(preview: boolean): Promise<SPEAKER[]> {
    const data = await fetchAPI(`${ALL_SPEAKER_QUERY}`);
    
    return extractPosts(data.data);
}

export async function getSpeakerById(id: string): Promise<SPEAKER> {

  const queryEvent = `{ 
    data: speaker(id: "${id}")
    {
        ${SPEAKER_QUERY}
    }
  }`;
  
  const data = await fetchAPI(queryEvent);
  return data.data.data;
}

export async function getAllSpeakersWithIds(): Promise<SPEAKER[]> {
  const  query = `{ 
    data: allSpeakers
    {
      __typename
      total
      results {
        ${SPEAKER_QUERY}
      }
    }
  }`;

  const data = await fetchAPI(query);
   return extractPosts(data.data);
}

function extractPosts({ data }: { data: SpeakerResults }) {

    return data.results.map((post: SPEAKER) => {
      return post;
    });
}

function extractPost({ data }: { data: SPEAKER }) {
  return data;
}