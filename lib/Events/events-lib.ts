import Event, {EventResults} from "../../types/Events/events-type";
import {fetchAPI} from "../Common/api"
import {EVENT_QUERY,ALL_EVENT_QUERY} from "../../graphQl/Events/event-query";


export async function getAllEvents(preview: boolean): Promise<Event[]> {
    const data = await fetchAPI(`${ALL_EVENT_QUERY}`);
    
    return extractPosts(data.data);
}

export async function getEventById(id: string): Promise<Event> {

  const queryEvent = `{ 
    data: event(id: "${id}")
    {
        ${EVENT_QUERY}
    }
  }`;
  
  const data = await fetchAPI(queryEvent);
  return data.data.data;
}

export async function getAllEventsWithIds(): Promise<Event[]> {
  const  query = `{ 
    data: allEvents
    {
      __typename
      total
      results {
        ${EVENT_QUERY}
      }
    }
  }`;

  const data = await fetchAPI(query);
   return extractPosts(data.data);
}

function extractPosts({ data }: { data: EventResults }) {

    return data.results.map((post: Event) => {
      return post;
    });
}

function extractPost({ data }: { data: Event }) {
  return data;
}