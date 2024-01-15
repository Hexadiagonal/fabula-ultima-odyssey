import { IValueRange } from "./IValueRange.mjs";

export interface IHero {
    pronouns:string;
    ip: IValueRange<number>;
    fabula: IValueRange<number>;
    exp: IValueRange<number>;

}

export interface IHeroTraits {
    identity:string;
    theme:string;
    origin:string;
}

export interface IBond {
    target:string;
    qualities: any;
}

export interface IBondQuality {
    pos:string;
    neg:string;
    posVal:boolean;
    negVal:boolean
}