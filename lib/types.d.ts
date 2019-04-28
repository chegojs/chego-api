import { QuerySyntaxEnum, SortingOrderEnum } from './enums';
export declare type Fn = (...args: any[]) => any;
export declare type PrimaryTypes = string | number | boolean | any[] | undefined | null;
export declare type Obj = {
    [key: string]: PrimaryTypes | Obj;
};
export declare type ComparisonFunctions = QuerySyntaxEnum.Greatest | QuerySyntaxEnum.Least | QuerySyntaxEnum.Coalesce;
export declare type AggregateFunctions = QuerySyntaxEnum.Max | QuerySyntaxEnum.Min | QuerySyntaxEnum.Sum | QuerySyntaxEnum.Avg | QuerySyntaxEnum.Count;
export declare type MathFunctions = QuerySyntaxEnum.Sqrt | QuerySyntaxEnum.Pow;
export declare type FunctionType = ComparisonFunctions | AggregateFunctions | MathFunctions;
export declare type FunctionData = {
    properties: Property[];
    alias: string;
    type: FunctionType;
    exponent?: number;
};
export declare type LogicalOperatorType = QuerySyntaxEnum.And | QuerySyntaxEnum.Or | QuerySyntaxEnum.Not;
export declare type Limit = {
    offsetOrCount: number;
    count?: number;
};
export declare type Table = {
    name: string;
    alias: string;
};
export declare type Property = {
    table: Table;
    name: string;
    alias: string;
    type: QuerySyntaxEnum;
};
export declare type LogicalOperatorScope = {
    type: QuerySyntaxEnum;
    properties: PropertyOrLogicalOperatorScope[];
};
export declare type PropertyOrLogicalOperatorScope = Property | LogicalOperatorScope;
export declare type SortingData = {
    property: Property;
    order: SortingOrderEnum;
};
export declare type StringOrProperty = string | Property;
export declare type QuerySyntaxTemplate = (...values: any[]) => (property?: any) => (item?: any) => any;
export declare type QueryBuildFunction<T> = (query: T) => T;
export declare type AnyButFunction = Exclude<PrimaryTypes | Obj, (...args: any[]) => any>;
export declare type CommandProp<T> = QueryBuildFunction<T> | AnyButFunction;
