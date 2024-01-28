import { IValueRange } from "./IValueRange.mjs";

export interface ICombatant {
    hp:IValueRange<number>;
    mp:IValueRange<number>;
    level:IValueRange<number>;
    mdefense:IValueRange<number>
    defense:IValueRange<number>
}