import MEDIA_QUERY from "../Common/media-query";
import { AGENDA_QUERY } from "./agenda-query";

export const EVENT_QUERY = ` 
  id
  name
  eventName
  eventDescription:description
  eventDate
  eventImage{
    total
    results{
      ${MEDIA_QUERY}
    }
  }
  agenda{
    total
      results{
        __typename
        ...on Talk{
          ${AGENDA_QUERY}
        }
      }
  }
`;

export const ALL_EVENT_QUERY = `{ 
    data: allEvent
    {
      __typename
      total
      results {
        ${EVENT_QUERY}
      }
    }
  }
  `;

export default ALL_EVENT_QUERY

