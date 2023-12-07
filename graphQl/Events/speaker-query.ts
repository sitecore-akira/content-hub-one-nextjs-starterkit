import MEDIA_QUERY from "../Common/media-query";

export const SPEAKER_QUERY = ` 
  id
  name
  speakerName
  speakerBio
  speakerImage{
    total
    results{
      ${MEDIA_QUERY}
    }
  }
`;

export const ALL_SPEAKER_QUERY = `{ 
    data: allRecipe
    {
      __typename
      total
      results {
        ${SPEAKER_QUERY}
      }
    }
  }
  `;

export default ALL_SPEAKER_QUERY

