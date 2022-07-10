import { IImageService } from "../interfaces/imageService.interface";
import DataService from "./DataService";
//TODO: Add IImage and ImageEntity, IQuery

export default class ImageService implements IImageService {
    private serviceEndpoint: string = 'https://pixabay.com/api/';

    public getImages(query: any): Promise<any> {
        const currentUrl = `${this.serviceEndpoint}?key=10728786-22fcb3fafa93e4468a41cb577&per_page=6`
            + `&page=${query.currentPage}`
            + `&q=${encodeURIComponent(query.searchedString)}`;
        return DataService.get(currentUrl).then((response: any) => {
            return {
                hits: response?.data?.hits || [],
                totalHits: response?.data?.totalHits || 0,
            }
        })
    }
}