export interface IPlaylistComment {
    isMusician: boolean;
    userId: number;
    topComments: any[];
    moreHot: boolean;
    hotComments: any[];
    commentBanner: null;
    code: number;
    comments: IComment[];
    total: number;
    more: boolean;
}

export interface IComment {
    user: User;
    beReplied: any[];
    pendantData: PendantData | null;
    showFloorComment: null;
    status: number;
    commentId: number;
    content: string;
    time: number;
    likedCount: number;
    expressionUrl: null;
    commentLocationType: number;
    parentCommentId: number;
    decoration: Decoration;
    repliedMark: null;
    liked: boolean;
}

export interface Decoration {
}

export interface PendantData {
    id: number;
    imageUrl: string;
}

export interface User {
    locationInfo: null;
    liveInfo: null;
    anonym: number;
    userId: number;
    avatarDetail: null;
    userType: number;
    remarkName: null;
    vipRights: VipRights | null;
    nickname: string;
    avatarUrl: string;
    authStatus: number;
    expertTags: null;
    experts: null;
    vipType: number;
}

export interface VipRights {
    associator: Associator;
    musicPackage: null;
    redVipAnnualCount: number;
    redVipLevel: number;
}

export interface Associator {
    vipCode: number;
    rights: boolean;
}
