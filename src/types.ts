import { QuerySyntaxEnum, SortingOrderEnum } from './enums';

export type Fn = (...args:any[]) => any;
export type PrimaryTypes = string | number | boolean | any[] | undefined | null;
export type Obj = { [key:string] : PrimaryTypes | Obj };
export type ComparisonFunctions = QuerySyntaxEnum.Greatest | QuerySyntaxEnum.Least | QuerySyntaxEnum.Coalesce;
export type AggregateFunctions = QuerySyntaxEnum.Max | QuerySyntaxEnum.Min | QuerySyntaxEnum.Sum | QuerySyntaxEnum.Avg | QuerySyntaxEnum.Count;
export type MathFunctions = QuerySyntaxEnum.Sqrt | QuerySyntaxEnum.Pow;
export type FunctionType = ComparisonFunctions | AggregateFunctions | MathFunctions;
export type FunctionData = { properties:Property[], alias:string, type:FunctionType, exponent?:number };
export type LogicalOperatorType = QuerySyntaxEnum.And | QuerySyntaxEnum.Or | QuerySyntaxEnum.Not;
export type Limit = {offsetOrCount:number, count?:number};
export type Table = { name:string, alias:string };
export type Property = { table:Table, name:string, alias:string, type:QuerySyntaxEnum };
export type LogicalOperatorScope = { type:QuerySyntaxEnum, properties:PropertyOrLogicalOperatorScope[] }
export type PropertyOrLogicalOperatorScope = Property | LogicalOperatorScope;
export type SortingData = { property:Property, order:SortingOrderEnum };
export type StringOrProperty = string | Property;
export type QuerySyntaxTemplate = (...values:any[]) => (property?:any) => (item?:any) => any;
export type QueryBuildFunction<T> = (query:T) => T;
export type AnyButFunction = Exclude<PrimaryTypes | Obj, (...args:any[])=>any>;
export type CommandProp<T> = QueryBuildFunction<T> | AnyButFunction;
