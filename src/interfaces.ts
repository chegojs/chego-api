import { IQueryAndWhere, IQuerySelect, IQueryUnionAll } from './interfaces';
import { QuerySyntaxEnum } from './enums';
import { QuerySyntaxTemplate, QueryBuildFunction, AnyButFunction, StringOrProperty, Fn } from './types';

export type CommandProp = QueryBuildFunction<IQuery> | AnyButFunction;

export interface IChego {
    execute(...queries:IQuery[]):Promise<any>;
    connect(callback?:Fn):void;
    disconnect(callback?:Fn):void;
}

export interface IQuery extends IQueryMethods {
    scheme:IQueryScheme;
}

export interface IQueryResult {
    setData(value: any):void;
    getData():AnyButFunction;
}

export type QuerySchemeEntry = IQuerySchemeArray | IQuerySchemeElement;

export interface IQueryScheme {
    add(type:QuerySyntaxEnum, ...args:any[]):void;
    get(index:number):QuerySchemeEntry;
    toArray():IQuerySchemeArray;
}
export interface IQuerySchemeArray extends Array<QuerySchemeEntry> {}

export interface IQueryTemplates {
    get(method:QuerySyntaxEnum):QuerySyntaxTemplate
}

export interface IDatabaseHelpers {
    getValue(result:any):any;
}

export interface IDatabaseDriver {
    initialize(config:any):void;
    execute(queries:IQuery[]):Promise<any>;
    connect(callback?:Fn):void;
    disconnect(callback?:Fn):void;
}

export interface IQuerySchemeElement {
    index:number;
    type:QuerySyntaxEnum;
    params:any[];
}

export interface IQueryHavingAnd {
    and:IQueryHaving & IQueryHavingNot & IQueryHavingEqualTo & IQueryHavingLike & IQueryHavingGT & IQueryHavingLT & IQueryHavingBetween & IQueryHavingWrapped;
}

export interface IQueryHavingAndLite {
    and:IQueryHaving & IQueryHavingWrapped;
}

export interface IQueryAnd {
    and:IQueryNot & IQueryEqualTo & IQueryLike & IQueryGT & IQueryLT & IQueryBetween & IQueryWhere & IQueryWrapped;
}

export interface IQueryAndWhere {
    and:IQueryWhere;
}

export interface IQueryAre {
    are:IQueryNot & IQueryEqualTo & IQueryLike & IQueryGT & IQueryLT & IQueryBetween & IQueryNull;
}

export interface IQueryBetween {
    between(min:number,max:number):IQueryGroupBy & IQueryOrderBy & IQueryLimit & IQueryAnd & IQueryOr;
}

export interface IQueryHavingBetween {
    between(min:number,max:number):IQueryOrderBy & IQueryLimit & IQueryHavingAnd & IQueryHavingOr;
}

export interface IQueryDelete {
    delete():IQueryFrom;
}

export interface IQueryEqualTo {
    eq(...values:CommandProp[]):IQueryGroupBy & IQueryOrderBy & IQueryLimit & IQueryAnd & IQueryOr;
}
export interface IQueryHavingEqualTo {
    eq(...values:CommandProp[]):IQueryOrderBy & IQueryLimit & IQueryHavingAnd & IQueryHavingOr;
}

export interface IQueryExists {
    exists(fn:Fn): IQueryOrderBy & IQueryGroupBy & IQueryLimit & IQueryAndWhere & IQueryOrWhere;
}

export interface IQueryIn {
    in(...values:CommandProp[]): IQueryOrderBy & IQueryGroupBy & IQueryLimit & IQueryAndWhere & IQueryOrWhere;
}

export interface IQueryFrom {
    from(...tables: CommandProp[]): IQueryGroupBy & IQueryUnion & IQueryLeftJoin & IQueryRightJoin & IQueryJoin & IQueryFullJoin & IQueryOrderBy & IQueryWhere & IQueryLimit & IQueryWrapped;
}

export interface IQueryGT {
    gt(...values:CommandProp[]):IQueryGroupBy & IQueryOrderBy & IQueryLimit & IQueryAnd & IQueryOr;
}

export interface IQueryHavingGT {
    gt(...values:CommandProp[]):IQueryOrderBy & IQueryLimit & IQueryHavingAnd & IQueryHavingOr;
}

export interface IQueryInsert {
    insert(...items: object[]):IQueryTo;
}

export interface IQueryIs {
    is:IQueryNot & IQueryEqualTo & IQueryLike & IQueryGT & IQueryLT & IQueryBetween & IQueryNull;
}

export interface IQueryLike {
    like(...values:CommandProp[]):IQueryGroupBy & IQueryOrderBy & IQueryLimit & IQueryAnd & IQueryOr;
}

export interface IQueryHavingLike {
    like(...values:CommandProp[]):IQueryOrderBy & IQueryLimit & IQueryHavingAnd & IQueryHavingOr;
}

export interface IQueryLimit {
    limit(offsetOrCount: number, count?: number):IQueryGroupBy & IQueryOrderBy;
}

export interface IQueryLT {
    lt(...values:CommandProp[]):IQueryGroupBy & IQueryOrderBy & IQueryLimit & IQueryAnd & IQueryOr;
}

export interface IQueryHavingLT {
    lt(...values:CommandProp[]):IQueryOrderBy & IQueryLimit & IQueryHavingAnd & IQueryHavingOr;
}

export interface IQueryNull {
    null: IQueryGroupBy & IQueryOrderBy & IQueryLimit & IQueryAnd & IQueryOr;
}

export interface IQueryHavingNull {
    null: IQueryOrderBy & IQueryLimit & IQueryHavingAnd & IQueryHavingOr;
}

export interface IQueryHavingOr {
    or:IQueryHaving & IQueryNot & IQueryHavingEqualTo & IQueryHavingLike & IQueryHavingGT & IQueryHavingLT & IQueryHavingBetween & IQueryHavingWrapped;
}

export interface IQueryHavingOrLite {
    or:IQueryHaving & IQueryHavingWrapped;
}

export interface IQueryOr {
    or:IQueryNot & IQueryEqualTo & IQueryLike & IQueryGT & IQueryLT & IQueryBetween & IQueryWhere & IQueryWrapped;
}

export interface IQueryOrWhere {
    or:IQueryWhere;
}

export interface IQueryOrderBy {
    orderBy(...values:StringOrProperty[]):IQueryGroupBy & IQueryLimit;
}

export interface IQuerySelect {
    select(...args:string[]):IQueryFrom;
}

export interface IQuerySet {
    set(data: object):IQueryOrderBy & IQueryWhere & IQueryLimit & IQueryWrapped;
}

export interface IQueryTo {
    to(...tables: string[]): IQueryLeftJoin & IQueryRightJoin & IQueryJoin & IQueryFullJoin & IQueryOrderBy & IQueryWhere & IQueryLimit & IQueryWrapped;
}

export interface IQueryUpdate {
    update(...tables: string[]): IQueryLeftJoin & IQueryRightJoin & IQueryJoin & IQueryFullJoin & IQuerySet;
}

export interface IQueryWhere {
    where(...values:any[]):IQueryIs & IQueryAre & IQueryAndWhere & IQueryOrWhere & IQueryGroupBy & IQueryWhereNot & IQueryIn & IQueryExists;
}

export interface IQueryHavingWrapped {
    wrapped(fn:QueryBuildFunction<IQuery>):IQueryOrderBy & IQueryLimit & IQueryHavingAnd & IQueryHavingOr;
}

export interface IQueryWrapped {
    wrapped(fn:QueryBuildFunction<IQuery>):IQueryGroupBy & IQueryOrderBy & IQueryLimit & IQueryAnd & IQueryOr;
}

export interface IQueryHaving {
    having(...values:CommandProp[]): IQueryHavingAndLite & IQueryHavingOrLite & IQueryHavingEqualTo & IQueryHavingLT & IQueryHavingGT & IQueryHavingBetween & IQueryHavingNot & IQueryHavingNull & IQueryHavingWrapped;
}

/* JOIN */

export interface IQueryOn {
    on(table:string, key:string):IQueryLeftJoin & IQueryRightJoin & IQueryJoin & IQueryFullJoin & 
    IQueryOrderBy & IQueryWhere & IQueryLimit & IQueryWrapped;
}

export interface IQueryUsing {
    using(key:string):IQueryLeftJoin & IQueryRightJoin & IQueryJoin & IQueryFullJoin & 
    IQueryOrderBy & IQueryWhere & IQueryLimit & IQueryWrapped;
}

export interface IQueryLeftJoin {
    leftJoin(table:string, key:string):IQueryOn & IQueryUsing;
}

export interface IQueryRightJoin {
    rightJoin(table:string, key:string):IQueryOn & IQueryUsing;
}

export interface IQueryFullJoin {
    fullJoin(table:string, key:string):IQueryOn & IQueryUsing;
}

export interface IQueryJoin {
    join(table:string, key:string):IQueryOn & IQueryUsing;
}

export interface IQueryUnion {
    union(...fns:Fn[]):IQueryGroupBy & IQueryOrderBy & IQueryLimit;
}

export interface IQueryUnionAll {
    unionAll(...fns:Fn[]):IQueryGroupBy & IQueryOrderBy & IQueryLimit;
}

export interface IQueryGroupBy {
    groupBy(...values: StringOrProperty[]):IQueryOrderBy & IQueryLimit & IQueryHaving;
}

export interface IQueryWhereNot {
    not:IQueryExists & IQueryIn;
}

export interface IQueryHavingNot {
    not:IQueryHavingEqualTo & IQueryHavingLike & IQueryHavingGT & IQueryHavingLT & IQueryHavingBetween & IQueryHavingNull;
}

export interface IQueryNot {
    not:IQueryEqualTo & IQueryLike & IQueryGT & IQueryLT & IQueryBetween & IQueryNull;
}

export interface IQueryMethods extends IQueryAre,
IQueryIs,
IQueryLimit,
IQueryOrderBy,
IQueryDelete,
IQuerySelect,
IQueryUpdate,
IQueryWhere,
IQueryFrom,
IQueryInsert,
IQueryTo,
IQueryExists,
IQueryIn,
IQuerySet,
IQueryOn,
IQueryUsing,
IQueryLeftJoin ,
IQueryRightJoin ,
IQueryJoin,
IQueryFullJoin,
IQueryHaving,
IQueryGroupBy,
IQueryUnion,
IQueryUnionAll {
   not:any,
   and:any,
   or:any,
   eq:any,
   lt:any,
   gt:any,
   like:any,
   null:any,
   between:any,
   wrapped:any
}
