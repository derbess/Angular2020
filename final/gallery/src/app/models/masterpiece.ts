export interface Masterpiece {
    id: number;
    name: string;
    type: string; // painting, sculpture, portraits, landscapes, melody, artifact
    year: number;
    author: string;
    description: string;
    source: string;
    museumId: number;
}