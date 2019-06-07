import { QuerySyntaxEnum, SortingOrderEnum } from './enums';

export type Fn<T> = (...args:any[]) => T;
export type PrimaryTypes = string | number | boolean | any[] | undefined | null;
export type Obj = { [key:string] : any };
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
export type Expression = { type:QuerySyntaxEnum, not:boolean, property:Property, value:any };
export type ExpressionScope = { type:QuerySyntaxEnum, expressions:ExpressionOrExpressionScope[] };
export type ExpressionOrExpressionScope = Expression | ExpressionScope;