export enum QuerySyntaxEnum {
    Undefined = -1,
    And = 0,
    Are = 1,
    Between = 2,
    EQ = 3,
    GT = 4,
    Is = 5,
    Like = 6,
    Limit = 7,
    LT = 8,
    Not = 9,
    Or = 10,
    OrderBy = 11,
    Delete = 12,
    Select = 13,
    Set = 14,
    Update = 15,
    Where = 16,
    To = 17,
    Insert = 18,
    From = 19,
    Null = 20,
    Exists = 21,
    Coalesce = 22,
    Greatest = 23,
    Least = 24,
    On = 25,
    LeftJoin = 26,
    RightJoin = 27,
    Join = 28,
    FullJoin = 29,
    Union = 30,
    WrapInParentheses = 31,
    OpenParentheses = 32,
    CloseParentheses = 33,
    Alias = 34,
    RowId = 35,
    Min = 36,
    Max = 37,
    Sum = 38,
    Avg = 39,
    Sqrt = 40,
    Pow = 41,
    Count = 42,
    GroupBy = 43
}

export enum FilterResultEnum {
    Failed,
    Passed,
    Skipped
}

export enum SortingOrderEnum {
    ASC = 1,
    DESC = -1
}