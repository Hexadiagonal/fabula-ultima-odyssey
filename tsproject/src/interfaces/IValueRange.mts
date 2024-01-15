export interface IValueRange<T> {
    max:T;
    min:T;
    value:T;
}

export interface IValueMax<T> {
    max:T;
    value:T;
}

export interface IValueMin<T> {
    min:T;
    value:T;
}

export interface IValueLabel<T> {
    value:T;
    label:string;
}