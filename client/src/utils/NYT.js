
import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "?api-key=f9c1f1cee8a84fd483662f212bb7af0e:0:74623931&q=";

// Export an object with a "search" method that searches the article API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + APIKEY + query);
  }
};