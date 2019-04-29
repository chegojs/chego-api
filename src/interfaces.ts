import { IQueryAndWhere, IQuerySelect } from './interfaces';
import { QuerySyntaxEnum } from './enums';
import { QuerySyntaxTemplate, QueryBuildFunction, CommandProp, AnyButFunction, StringOrProperty, Fn } from './types';

export interface IChego {
    execute(query:IQuery):Promise<any>;
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
    execute(query:IQuery):Promise<any>;
}

export interface IQuerySchemeOld {
    getFromTheEnd(index:number):QuerySyntaxEnum;
    add(element:QuerySyntaxEnum):IQuerySchemeOld;
}

export interface IQuerySchemeElement {
    index:number;
    type:QuerySyntaxEnum;
    params:any[];
}

export interface IQuerySchemeBuilder extends IQueryMethods {
    build():IQuerySchemeElement[];
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
    between(min:number,max:number):IQueryOrder & IQueryLimit & IQueryAnd & IQueryOr;
}

export interface IQueryDelete {
    delete(...args:string[]):IQueryFrom;
}

export interface IQueryEqualTo {
    eq(value:CommandProp<IQuery>):IQueryOrder & IQueryLimit & IQueryAnd & IQueryOr;
}

export interface IQueryWhereExists {
    whereExists(fn:Fn): IQueryOrder & IQueryLimit & IQueryAndWhere & IQueryOrWhere;
}

export interface IQueryFrom {
    from(...tables: string[]): IQueryGroupBy & IQueryWhereExists & IQueryUnion & IQueryLeftJoin & IQueryRightJoin & IQueryJoin & IQueryFullJoin & IQueryOrder & IQueryWhere & IQueryLimit & IQueryWrapped;
}

export interface IQueryGT {
    gt(value:CommandProp<IQuery>):IQueryOrder & IQueryLimit & IQueryAnd & IQueryOr;
}

export interface IQueryInsert {
    insert(...items: object[]):IQueryTo;
}

export interface IQueryIs {
    is:IQueryNot & IQueryEqualTo & IQueryLike & IQueryGT & IQueryLT & IQueryBetween & IQueryNull;
}

export interface IQueryLike {
    like(value:CommandProp<IQuery>):IQueryOrder & IQueryLimit & IQueryAnd & IQueryOr;
}

export interface IQueryLimit {
    limit(offsetOrCount: number, count?: number):IQueryWhere & IQueryOrder;
}

export interface IQueryLT {
    lt(value:CommandProp<IQuery>):IQueryOrder & IQueryLimit & IQueryAnd & IQueryOr;
}

export interface IQueryNot {
    not:IQueryEqualTo & IQueryLike & IQueryGT & IQueryLT & IQueryBetween & IQueryNull;
}

export interface IQueryNull {
    null: IQueryOrder & IQueryLimit & IQueryAnd & IQueryOr;
}

export interface IQueryOr {
    or:IQueryNot & IQueryEqualTo & IQueryLike & IQueryGT & IQueryLT & IQueryBetween & IQueryWhere;
}

export interface IQueryOrWhere {
    or:IQueryWhere;
}

export interface IQueryOrder {
    orderBy(...values:StringOrProperty[]):IQueryWhere & IQueryLimit;
}

export interface IQuerySelect {
    select(...args:string[]):IQueryFrom;
}

export interface IQuerySet {
    set(data: object):IQueryOrder & IQueryWhere & IQueryLimit & IQueryWrapped;
}

export interface IQueryTo {
    to(...tables: string[]): IQueryLeftJoin & IQueryRightJoin & IQueryJoin & IQueryFullJoin & IQueryOrder & IQueryWhere & IQueryLimit & IQueryWrapped;
}

export interface IQueryUpdate {
    update(...tables: string[]): IQueryLeftJoin & IQueryRightJoin & IQueryJoin & IQueryFullJoin & IQuerySet;
}

export interface IQueryWhere {
    where(...values:any[]):IQueryIs & IQueryAre & IQueryAndWhere & IQueryOrWhere & IQueryGroupBy;
}

type GetArgumentType<original extends Fn> =
  original extends (...x: infer argumentsType) => any ? argumentsType : never


export interface IQueryWrapped {
    wrapped(fn:QueryBuildFunction<IQuery>):IQueryOrder & IQueryLimit & IQueryAnd & IQueryOr;
}

/* JOIN */

export interface IQueryOn {
    on(table:string, key:string):IQueryLeftJoin & IQueryRightJoin & IQueryJoin & IQueryFullJoin & 
    IQueryOrder & IQueryWhere & IQueryLimit & IQueryWrapped;
}

export interface IQueryLeftJoin {
    leftJoin(table:string, key:string):IQueryOn;
}

export interface IQueryRightJoin {
    rightJoin(table:string, key:string):IQueryOn;
}

export interface IQueryFullJoin {
    fullJoin(table:string, key:string):IQueryOn;
}

export interface IQueryJoin {
    join(table:string, key:string):IQueryOn;
}

export interface IQueryUnion {
    union(all:boolean):IQuerySelect;
}

export interface IQueryGroupBy {
    groupBy(...values: StringOrProperty[]):IQueryWhere & IQueryOrder & IQueryLimit & IQueryAnd & IQueryOr;
}

export interface IQueryMethods extends IQueryAnd,
IQueryAre,
IQueryBetween,
IQueryEqualTo,
IQueryGT,
IQueryIs,
IQueryLike,
IQueryLimit,
IQueryLT,
IQueryNot,
IQueryOr,
IQueryOrder,
IQueryDelete,
IQuerySelect,
IQueryUpdate,
IQueryWhere,
IQueryWrapped,
IQueryFrom,
IQueryInsert,
IQueryTo,
IQueryNull,
IQueryWhereExists,
IQuerySet,
IQueryOn ,
IQueryLeftJoin ,
IQueryRightJoin ,
IQueryJoin ,
IQueryFullJoin,
IQueryUnion,
IQueryGroupBy {
    
}