import axios from "axios";

export default class DataService {
    static get(url: string, options?: any) {
        return axios
            .get(url, options)
            .catch(this.handleError);
    }
    private static handleError(error: any) {
        //TODO: Handle errors(logger, notifications)
    }
}