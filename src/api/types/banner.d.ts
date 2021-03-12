

export interface Banner {
    banners: BannerElement[];
    code: number;
}

export interface BannerElement {
    imageUrl: string;
    targetId: number;
    adid: null;
    targetType: number;
    titleColor: TitleColor;
    typeTitle: string;
    url: null | string;
    exclusive: boolean;
    monitorImpress: null;
    monitorClick: null;
    monitorType: null;
    monitorImpressList: null;
    monitorClickList: null;
    monitorBlackList: null;
    extMonitor: null;
    extMonitorInfo: null;
    adSource: null;
    adLocation: null;
    adDispatchJson: null;
    encodeId: string;
    program: null;
    event: null;
    video: null;
    song: null;
    scm: string;
}

export enum TitleColor {
    Blue = "blue",
    Red = "red",
}
