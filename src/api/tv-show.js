import { BASE_URL, API_KEY_PARAM } from "../config";
import axios from "axios";

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    return response.data.results;
  }
  static async fetchRecommendations(tvShowId) {
    const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`);
    return response.data.results;
  }
  static async fetchByTitle(title) {
    const response = await axios.get(`${BASE_URL}search/tv/${API_KEY_PARAM}&query=${title}`);
    return response.data.results;
  }
}
