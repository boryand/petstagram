import * as contentful from "contentful";
// importing everything from the library

const client = contentful.createClient({
  space: process.env.REACT_APP_PETSTAGRAM_SPACE_ID,
  accessToken: process.env.REACT_APP_PETSTAGRAM_API_KEY,
});

export default client;
