//TODO: Add IImage interface
export interface IImageService {
    getImages: { (query: any): Promise<any> },
}