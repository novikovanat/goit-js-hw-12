import axios from "axios";


//  function for HTTP requests.

export default async function fetchPhotos(search,page){
const response = await axios.get("https://pixabay.com/api/", {
	params: {
    key :"42747257-6cb1908b03b224c2fc7af7612",
    q: search,
    image_type: "photo",
    orientation:"horizontal",
    safesearch:true,
    page: page,
    per_page: 15
	}
    })
    return  response.data
  }