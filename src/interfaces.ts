import { QuerySyntaxEnum } from './enums';
import { QuerySyntaxTemplate, QueryBuildFunction, AnyButFunction, StringOrProperty, Fn } from './types';

export type CommandProp = QueryBuildFunction<IQuery> | AnyButFunction;

export interface IChego {
    execute(...queries:IQuery[]):Promise<any>;
    connect():Promise<any>;
    disconnect():Promise<any>;
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
    connect():Promise<any>;
    disconnect():Promise<any>;
}

export interface IQuerySchemeElement {
    index:number;
    type:QuerySyntaxEnum;
    params:any[];
}

export interface IQueryHavingAnd {
    and:IQueryHaving & IQueryHavingNot & IQueryHavingEqualTo & IQueryHavingLike & IQueryHavingGT & IQueryHavingLT & IQueryHavingBetween & IQueryHavingInParentheses;
}

export interface IQueryHavingAndLite {
    and:IQueryHaving & IQueryHavingInParentheses;
}

export interface IQueryAnd {
    and:IQueryNot & IQueryEqualTo & IQueryLike & IQueryGT & IQueryLT & IQueryBetween & IQueryWhere & IQueryIn & IQueryInParentheses;
}

export interface IQueryAndWhere {
    and:IQueryWhere;
}

export interface IQueryAre {
    are:IQueryNot & IQueryEqualTo & IQueryLike & IQueryGT & IQueryLT & IQueryBetween & IQueryNull;
}

export interface IQueryWhereAre {
    are:IQueryWhereIsNot & IQueryEqualTo & IQueryLike & IQueryGT & IQueryLT & IQueryBetween & IQueryNull & IQueryIn;
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
    exists(fn:Fn<IQuery>): IQueryOrderBy & IQueryGroupBy & IQueryLimit & IQueryAndWhere & IQueryOrWhere;
}

export interface IQueryIn {
    in(...values:CommandProp[]): IQueryOrderBy & IQueryGroupBy & IQueryLimit & IQueryAndWhere & IQueryOrWhere;
}

export interface IQueryFrom {
    from(...tables: CommandProp[]): IQueryGroupBy & IQueryUnion & IQueryUnionAll & IQueryLeftJoin & IQueryRightJoin & IQueryJoin & IQueryFullJoin & IQueryOrderBy & IQueryWhere & IQueryLimit & IQueryInParentheses;
}

export interface IQueryReplace {
    replace(...values: CommandProp[]): IQueryGroupBy & IQueryUnion & IQueryUnionAll & IQueryLeftJoin & IQueryRightJoin & IQueryJoin & IQueryFullJoin & IQueryOrderBy & IQueryWhere & IQueryLimit & IQueryInParentheses;
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

export interface IQueryWhereIs {
    is:IQueryWhereIsNot & IQueryEqualTo & IQueryLike & IQueryGT & IQueryLT & IQueryBetween & IQueryNull & IQueryIn;
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
    or:IQueryHaving & IQueryNot & IQueryHavingEqualTo & IQueryHavingLike & IQueryHavingGT & IQueryHavingLT & IQueryHavingBetween & IQueryHavingInParentheses;
}

export interface IQueryHavingOrLite {
    or:IQueryHaving & IQueryHavingInParentheses;
}

export interface IQueryOr {
    or:IQueryNot & IQueryEqualTo & IQueryLike & IQueryGT & IQueryLT & IQueryBetween & IQueryWhere & IQueryIn & IQueryInParentheses;
}

export interface IQueryOrWhere {
    or:IQueryWhere;
}

export interface IQueryOrderBy {
    orderBy(...values:any[]):IQueryGroupBy & IQueryLimit;
}

export interface IQuerySelect {
    select(...args:any[]):IQueryFrom /* & IQueryReplace */;
}

export interface IQuerySet {
    set(data: object):IQueryOrderBy & IQueryWhere & IQueryLimit & IQueryInParentheses;
}

export interface IQueryTo {
    to(...tables: string[]): IQueryLeftJoin & IQueryRightJoin & IQueryJoin & IQueryFullJoin & IQueryOrderBy & IQueryWhere & IQueryLimit & IQueryInParentheses;
}

export interface IQueryUpdate {
    update(...tables: string[]): IQueryLeftJoin & IQueryRightJoin & IQueryJoin & IQueryFullJoin & IQuerySet;
}

export interface IQueryWhere {
    where(...values:any[]):IQueryWhereIs & IQueryWhereAre & IQueryAndWhere & IQueryOrWhere & IQueryWhereNot & IQueryExists;
}

export interface IQueryHavingInParentheses {
    inParentheses(fn:QueryBuildFunction<IQuery>):IQueryOrderBy & IQueryLimit & IQueryHavingAnd & IQueryHavingOr;
}

export interface IQueryInParentheses {
    inParentheses(fn:QueryBuildFunction<IQuery>):IQueryGroupBy & IQueryOrderBy & IQueryLimit & IQueryAnd & IQueryOr;
}

export interface IQueryHaving {
    having(...values:CommandProp[]): IQueryHavingAndLite & IQueryHavingOrLite & IQueryHavingEqualTo & IQueryHavingLT & IQueryHavingGT & IQueryHavingBetween & IQueryHavingNot & IQueryHavingNull & IQueryHavingInParentheses;
}

/* JOIN */

export interface IQueryOn {
    on(keyA:StringOrProperty, keyB:StringOrProperty):IQueryLeftJoin & IQueryRightJoin & IQueryJoin & IQueryFullJoin & 
    IQueryOrderBy & IQueryWhere & IQueryLimit & IQueryInParentheses;
}

export interface IQueryUsing {
    using(key:string):IQueryLeftJoin & IQueryRightJoin & IQueryJoin & IQueryFullJoin & 
    IQueryOrderBy & IQueryWhere & IQueryLimit & IQueryInParentheses;
}

export interface IQueryLeftJoin {
    leftJoin(table:string):IQueryOn & IQueryUsing;
}

export interface IQueryRightJoin {
    rightJoin(table:string):IQueryOn & IQueryUsing;
}

export interface IQueryFullJoin {
    fullJoin(table:string):IQueryOn & IQueryUsing;
}

export interface IQueryJoin {
    join(table:string):IQueryOn & IQueryUsing;
}

export interface IQueryUnion {
    union(...fns:Fn<IQuery>[]):IQueryGroupBy & IQueryOrderBy & IQueryLimit;
}

export interface IQueryIntersect {
    intersect(...fns:Fn<IQuery>[]):IQueryGroupBy & IQueryOrderBy & IQueryLimit;
}

export interface IQueryMinus {
    minus(...fns:Fn<IQuery>[]):IQueryGroupBy & IQueryOrderBy & IQueryLimit;
}

export interface IQueryUnionAll {
    unionAll(...fns:Fn<IQuery>[]):IQueryGroupBy & IQueryOrderBy & IQueryLimit;
}

export interface IQueryGroupBy {
    groupBy(...values: any[]):IQueryOrderBy & IQueryLimit & IQueryHaving;
}

export interface IQueryWhereNot {
    not:IQueryExists;
}

export interface IQueryWhereIsNot {
    not:IQueryIn & IQueryEqualTo & IQueryLike & IQueryGT & IQueryLT & IQueryBetween & IQueryNull;
}

export interface IQueryHavingNot {
    not:IQueryHavingEqualTo & IQueryHavingLike & IQueryHavingGT & IQueryHavingLT & IQueryHavingBetween & IQueryHavingNull;
}

export interface IQueryNot {
    not:IQueryEqualTo & IQueryLike & IQueryGT & IQueryLT & IQueryBetween & IQueryNull;
}

export interface IQueryWhereIsNot {
    not:IQueryIn & IQueryEqualTo & IQueryLike & IQueryGT & IQueryLT & IQueryBetween & IQueryNull;
}

export interface IQueryMethods extends IQueryLimit,
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
IQueryIntersect,
IQueryMinus,
IQueryReplace,
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
   inParentheses:any,
   is:any,
   are:any
}
