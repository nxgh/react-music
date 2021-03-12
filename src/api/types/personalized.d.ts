export interface Personalized {
    hasTaste: boolean;
    code: number;
    category: number;
    result: PersonalizedResult[];
}

export interface PersonalizedResult {
    id: number;
    type: number;
    name: string;
    copywriter: string;
    picUrl: string;
    canDislike: boolean;
    trackNumberUpdateTime: number;
    playCount: number;
    trackCount: number;
    highQuality: boolean;
    alg: Alg;
}

export enum Alg {
    CityLevelUnknow = "cityLevel_unknow",
    Featured = "featured",
}


