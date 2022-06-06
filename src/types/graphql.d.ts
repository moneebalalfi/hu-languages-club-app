import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  citext: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq: InputMaybe<Scalars['Boolean']>;
  _gt: InputMaybe<Scalars['Boolean']>;
  _gte: InputMaybe<Scalars['Boolean']>;
  _in: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['Boolean']>;
  _lte: InputMaybe<Scalars['Boolean']>;
  _neq: InputMaybe<Scalars['Boolean']>;
  _nin: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq: InputMaybe<Scalars['Int']>;
  _gt: InputMaybe<Scalars['Int']>;
  _gte: InputMaybe<Scalars['Int']>;
  _in: InputMaybe<Array<Scalars['Int']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['Int']>;
  _lte: InputMaybe<Scalars['Int']>;
  _neq: InputMaybe<Scalars['Int']>;
  _nin: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq: InputMaybe<Scalars['String']>;
  _gt: InputMaybe<Scalars['String']>;
  _gte: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike: InputMaybe<Scalars['String']>;
  _in: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex: InputMaybe<Scalars['String']>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like: InputMaybe<Scalars['String']>;
  _lt: InputMaybe<Scalars['String']>;
  _lte: InputMaybe<Scalars['String']>;
  _neq: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike: InputMaybe<Scalars['String']>;
  _nin: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "auth.provider_requests" */
export type AuthProviderRequests = {
  id: Scalars['uuid'];
  redirectUrl: Scalars['String'];
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate = {
  aggregate: Maybe<AuthProviderRequests_Aggregate_Fields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_Fields = {
  count: Scalars['Int'];
  max: Maybe<AuthProviderRequests_Max_Fields>;
  min: Maybe<AuthProviderRequests_Min_Fields>;
};


/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequests_Bool_Exp = {
  _and: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  _not: InputMaybe<AuthProviderRequests_Bool_Exp>;
  _or: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  redirectUrl: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequests_Constraint {
  /** unique or primary key constraint */
  ProviderRequestsPkey = 'provider_requests_pkey'
}

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequests_Insert_Input = {
  id: InputMaybe<Scalars['uuid']>;
  redirectUrl: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type AuthProviderRequests_Max_Fields = {
  id: Maybe<Scalars['uuid']>;
  redirectUrl: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthProviderRequests_Min_Fields = {
  id: Maybe<Scalars['uuid']>;
  redirectUrl: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequests_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequests_On_Conflict = {
  constraint: AuthProviderRequests_Constraint;
  update_columns: Array<AuthProviderRequests_Update_Column>;
  where: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequests_Order_By = {
  id: InputMaybe<Order_By>;
  redirectUrl: InputMaybe<Order_By>;
};

/** primary key columns input for table: authProviderRequests */
export type AuthProviderRequests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RedirectUrl = 'redirectUrl'
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequests_Set_Input = {
  id: InputMaybe<Scalars['uuid']>;
  redirectUrl: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RedirectUrl = 'redirectUrl'
}

/** columns and relationships of "auth.providers" */
export type AuthProviders = {
  id: Scalars['String'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** columns and relationships of "auth.providers" */
export type AuthProvidersUserProvidersArgs = {
  distinct_on: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** columns and relationships of "auth.providers" */
export type AuthProvidersUserProviders_AggregateArgs = {
  distinct_on: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProviders_Aggregate = {
  aggregate: Maybe<AuthProviders_Aggregate_Fields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_Fields = {
  count: Scalars['Int'];
  max: Maybe<AuthProviders_Max_Fields>;
  min: Maybe<AuthProviders_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<AuthProviders_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProviders_Bool_Exp = {
  _and: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  _not: InputMaybe<AuthProviders_Bool_Exp>;
  _or: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  id: InputMaybe<String_Comparison_Exp>;
  userProviders: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProviders_Constraint {
  /** unique or primary key constraint */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type AuthProviders_Insert_Input = {
  id: InputMaybe<Scalars['String']>;
  userProviders: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthProviders_Max_Fields = {
  id: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthProviders_Min_Fields = {
  id: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProviders_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProviders_Obj_Rel_Insert_Input = {
  data: AuthProviders_Insert_Input;
  /** on conflict condition */
  on_conflict: InputMaybe<AuthProviders_On_Conflict>;
};

/** on conflict condition type for table "auth.providers" */
export type AuthProviders_On_Conflict = {
  constraint: AuthProviders_Constraint;
  update_columns: Array<AuthProviders_Update_Column>;
  where: InputMaybe<AuthProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProviders_Order_By = {
  id: InputMaybe<Order_By>;
  userProviders_aggregate: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: authProviders */
export type AuthProviders_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "auth.providers" */
export enum AuthProviders_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "auth.providers" */
export type AuthProviders_Set_Input = {
  id: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export enum AuthProviders_Update_Column {
  /** column name */
  Id = 'id'
}

/** columns and relationships of "auth.refresh_tokens" */
export type AuthRefreshTokens = {
  createdAt: Scalars['timestamptz'];
  expiresAt: Scalars['timestamptz'];
  refreshToken: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate = {
  aggregate: Maybe<AuthRefreshTokens_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokens>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Fields = {
  count: Scalars['Int'];
  max: Maybe<AuthRefreshTokens_Max_Fields>;
  min: Maybe<AuthRefreshTokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Order_By = {
  count: InputMaybe<Order_By>;
  max: InputMaybe<AuthRefreshTokens_Max_Order_By>;
  min: InputMaybe<AuthRefreshTokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokens_Arr_Rel_Insert_Input = {
  data: Array<AuthRefreshTokens_Insert_Input>;
  /** on conflict condition */
  on_conflict: InputMaybe<AuthRefreshTokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokens_Bool_Exp = {
  _and: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  _not: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  _or: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  createdAt: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt: InputMaybe<Timestamptz_Comparison_Exp>;
  refreshToken: InputMaybe<Uuid_Comparison_Exp>;
  user: InputMaybe<Users_Bool_Exp>;
  userId: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Constraint {
  /** unique or primary key constraint */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokens_Insert_Input = {
  createdAt: InputMaybe<Scalars['timestamptz']>;
  expiresAt: InputMaybe<Scalars['timestamptz']>;
  refreshToken: InputMaybe<Scalars['uuid']>;
  user: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthRefreshTokens_Max_Fields = {
  createdAt: Maybe<Scalars['timestamptz']>;
  expiresAt: Maybe<Scalars['timestamptz']>;
  refreshToken: Maybe<Scalars['uuid']>;
  userId: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
  createdAt: InputMaybe<Order_By>;
  expiresAt: InputMaybe<Order_By>;
  refreshToken: InputMaybe<Order_By>;
  userId: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthRefreshTokens_Min_Fields = {
  createdAt: Maybe<Scalars['timestamptz']>;
  expiresAt: Maybe<Scalars['timestamptz']>;
  refreshToken: Maybe<Scalars['uuid']>;
  userId: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
  createdAt: InputMaybe<Order_By>;
  expiresAt: InputMaybe<Order_By>;
  refreshToken: InputMaybe<Order_By>;
  userId: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokens_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokens_On_Conflict = {
  constraint: AuthRefreshTokens_Constraint;
  update_columns: Array<AuthRefreshTokens_Update_Column>;
  where: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokens_Order_By = {
  createdAt: InputMaybe<Order_By>;
  expiresAt: InputMaybe<Order_By>;
  refreshToken: InputMaybe<Order_By>;
  user: InputMaybe<Users_Order_By>;
  userId: InputMaybe<Order_By>;
};

/** primary key columns input for table: authRefreshTokens */
export type AuthRefreshTokens_Pk_Columns_Input = {
  refreshToken: Scalars['uuid'];
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokens_Set_Input = {
  createdAt: InputMaybe<Scalars['timestamptz']>;
  expiresAt: InputMaybe<Scalars['timestamptz']>;
  refreshToken: InputMaybe<Scalars['uuid']>;
  userId: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId'
}

/** columns and relationships of "auth.roles" */
export type AuthRoles = {
  role: Scalars['String'];
  /** An array relationship */
  userRoles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  userRoles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  usersByDefaultRole: Array<Users>;
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: Users_Aggregate;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesUserRolesArgs = {
  distinct_on: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesUserRoles_AggregateArgs = {
  distinct_on: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesUsersByDefaultRole_AggregateArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRoles_Aggregate = {
  aggregate: Maybe<AuthRoles_Aggregate_Fields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_Fields = {
  count: Scalars['Int'];
  max: Maybe<AuthRoles_Max_Fields>;
  min: Maybe<AuthRoles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<AuthRoles_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRoles_Bool_Exp = {
  _and: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  _not: InputMaybe<AuthRoles_Bool_Exp>;
  _or: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  role: InputMaybe<String_Comparison_Exp>;
  userRoles: InputMaybe<AuthUserRoles_Bool_Exp>;
  usersByDefaultRole: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRoles_Constraint {
  /** unique or primary key constraint */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type AuthRoles_Insert_Input = {
  role: InputMaybe<Scalars['String']>;
  userRoles: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  usersByDefaultRole: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthRoles_Max_Fields = {
  role: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthRoles_Min_Fields = {
  role: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRoles_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRoles_Obj_Rel_Insert_Input = {
  data: AuthRoles_Insert_Input;
  /** on conflict condition */
  on_conflict: InputMaybe<AuthRoles_On_Conflict>;
};

/** on conflict condition type for table "auth.roles" */
export type AuthRoles_On_Conflict = {
  constraint: AuthRoles_Constraint;
  update_columns: Array<AuthRoles_Update_Column>;
  where: InputMaybe<AuthRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRoles_Order_By = {
  role: InputMaybe<Order_By>;
  userRoles_aggregate: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  usersByDefaultRole_aggregate: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: authRoles */
export type AuthRoles_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export enum AuthRoles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type AuthRoles_Set_Input = {
  role: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export enum AuthRoles_Update_Column {
  /** column name */
  Role = 'role'
}

/** columns and relationships of "auth.user_providers" */
export type AuthUserProviders = {
  accessToken: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  provider: AuthProviders;
  providerId: Scalars['String'];
  providerUserId: Scalars['String'];
  refreshToken: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProviders_Aggregate = {
  aggregate: Maybe<AuthUserProviders_Aggregate_Fields>;
  nodes: Array<AuthUserProviders>;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_Fields = {
  count: Scalars['Int'];
  max: Maybe<AuthUserProviders_Max_Fields>;
  min: Maybe<AuthUserProviders_Min_Fields>;
};


/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProviders_Aggregate_Order_By = {
  count: InputMaybe<Order_By>;
  max: InputMaybe<AuthUserProviders_Max_Order_By>;
  min: InputMaybe<AuthUserProviders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProviders_Arr_Rel_Insert_Input = {
  data: Array<AuthUserProviders_Insert_Input>;
  /** on conflict condition */
  on_conflict: InputMaybe<AuthUserProviders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProviders_Bool_Exp = {
  _and: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  _not: InputMaybe<AuthUserProviders_Bool_Exp>;
  _or: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  accessToken: InputMaybe<String_Comparison_Exp>;
  createdAt: InputMaybe<Timestamptz_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  provider: InputMaybe<AuthProviders_Bool_Exp>;
  providerId: InputMaybe<String_Comparison_Exp>;
  providerUserId: InputMaybe<String_Comparison_Exp>;
  refreshToken: InputMaybe<String_Comparison_Exp>;
  updatedAt: InputMaybe<Timestamptz_Comparison_Exp>;
  user: InputMaybe<Users_Bool_Exp>;
  userId: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProviders_Constraint {
  /** unique or primary key constraint */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key',
  /** unique or primary key constraint */
  UserProvidersUserIdProviderIdKey = 'user_providers_user_id_provider_id_key'
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProviders_Insert_Input = {
  accessToken: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  provider: InputMaybe<AuthProviders_Obj_Rel_Insert_Input>;
  providerId: InputMaybe<Scalars['String']>;
  providerUserId: InputMaybe<Scalars['String']>;
  refreshToken: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['timestamptz']>;
  user: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserProviders_Max_Fields = {
  accessToken: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  providerId: Maybe<Scalars['String']>;
  providerUserId: Maybe<Scalars['String']>;
  refreshToken: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['timestamptz']>;
  userId: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProviders_Max_Order_By = {
  accessToken: InputMaybe<Order_By>;
  createdAt: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  providerId: InputMaybe<Order_By>;
  providerUserId: InputMaybe<Order_By>;
  refreshToken: InputMaybe<Order_By>;
  updatedAt: InputMaybe<Order_By>;
  userId: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserProviders_Min_Fields = {
  accessToken: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  providerId: Maybe<Scalars['String']>;
  providerUserId: Maybe<Scalars['String']>;
  refreshToken: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['timestamptz']>;
  userId: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProviders_Min_Order_By = {
  accessToken: InputMaybe<Order_By>;
  createdAt: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  providerId: InputMaybe<Order_By>;
  providerUserId: InputMaybe<Order_By>;
  refreshToken: InputMaybe<Order_By>;
  updatedAt: InputMaybe<Order_By>;
  userId: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProviders_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on conflict condition type for table "auth.user_providers" */
export type AuthUserProviders_On_Conflict = {
  constraint: AuthUserProviders_Constraint;
  update_columns: Array<AuthUserProviders_Update_Column>;
  where: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProviders_Order_By = {
  accessToken: InputMaybe<Order_By>;
  createdAt: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  provider: InputMaybe<AuthProviders_Order_By>;
  providerId: InputMaybe<Order_By>;
  providerUserId: InputMaybe<Order_By>;
  refreshToken: InputMaybe<Order_By>;
  updatedAt: InputMaybe<Order_By>;
  user: InputMaybe<Users_Order_By>;
  userId: InputMaybe<Order_By>;
};

/** primary key columns input for table: authUserProviders */
export type AuthUserProviders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_providers" */
export enum AuthUserProviders_Select_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProviders_Set_Input = {
  accessToken: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  providerId: InputMaybe<Scalars['String']>;
  providerUserId: InputMaybe<Scalars['String']>;
  refreshToken: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['timestamptz']>;
  userId: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_providers" */
export enum AuthUserProviders_Update_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** columns and relationships of "auth.user_roles" */
export type AuthUserRoles = {
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: AuthRoles;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRoles_Aggregate = {
  aggregate: Maybe<AuthUserRoles_Aggregate_Fields>;
  nodes: Array<AuthUserRoles>;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_Fields = {
  count: Scalars['Int'];
  max: Maybe<AuthUserRoles_Max_Fields>;
  min: Maybe<AuthUserRoles_Min_Fields>;
};


/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRoles_Aggregate_Order_By = {
  count: InputMaybe<Order_By>;
  max: InputMaybe<AuthUserRoles_Max_Order_By>;
  min: InputMaybe<AuthUserRoles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRoles_Arr_Rel_Insert_Input = {
  data: Array<AuthUserRoles_Insert_Input>;
  /** on conflict condition */
  on_conflict: InputMaybe<AuthUserRoles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRoles_Bool_Exp = {
  _and: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  _not: InputMaybe<AuthUserRoles_Bool_Exp>;
  _or: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  createdAt: InputMaybe<Timestamptz_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  role: InputMaybe<String_Comparison_Exp>;
  roleByRole: InputMaybe<AuthRoles_Bool_Exp>;
  user: InputMaybe<Users_Bool_Exp>;
  userId: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRoles_Constraint {
  /** unique or primary key constraint */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key'
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRoles_Insert_Input = {
  createdAt: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  role: InputMaybe<Scalars['String']>;
  roleByRole: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  user: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserRoles_Max_Fields = {
  createdAt: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  role: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRoles_Max_Order_By = {
  createdAt: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  role: InputMaybe<Order_By>;
  userId: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserRoles_Min_Fields = {
  createdAt: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  role: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRoles_Min_Order_By = {
  createdAt: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  role: InputMaybe<Order_By>;
  userId: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRoles_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on conflict condition type for table "auth.user_roles" */
export type AuthUserRoles_On_Conflict = {
  constraint: AuthUserRoles_Constraint;
  update_columns: Array<AuthUserRoles_Update_Column>;
  where: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRoles_Order_By = {
  createdAt: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  role: InputMaybe<Order_By>;
  roleByRole: InputMaybe<AuthRoles_Order_By>;
  user: InputMaybe<Users_Order_By>;
  userId: InputMaybe<Order_By>;
};

/** primary key columns input for table: authUserRoles */
export type AuthUserRoles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_roles" */
export enum AuthUserRoles_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRoles_Set_Input = {
  createdAt: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  role: InputMaybe<Scalars['String']>;
  userId: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_roles" */
export enum AuthUserRoles_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** columns and relationships of "auth.clubs" */
export type Auth_Clubs = {
  author_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "auth.clubs" */
export type Auth_Clubs_Aggregate = {
  aggregate: Maybe<Auth_Clubs_Aggregate_Fields>;
  nodes: Array<Auth_Clubs>;
};

/** aggregate fields of "auth.clubs" */
export type Auth_Clubs_Aggregate_Fields = {
  count: Scalars['Int'];
  max: Maybe<Auth_Clubs_Max_Fields>;
  min: Maybe<Auth_Clubs_Min_Fields>;
};


/** aggregate fields of "auth.clubs" */
export type Auth_Clubs_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Auth_Clubs_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.clubs" */
export type Auth_Clubs_Aggregate_Order_By = {
  count: InputMaybe<Order_By>;
  max: InputMaybe<Auth_Clubs_Max_Order_By>;
  min: InputMaybe<Auth_Clubs_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.clubs" */
export type Auth_Clubs_Arr_Rel_Insert_Input = {
  data: Array<Auth_Clubs_Insert_Input>;
  /** on conflict condition */
  on_conflict: InputMaybe<Auth_Clubs_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.clubs". All fields are combined with a logical 'AND'. */
export type Auth_Clubs_Bool_Exp = {
  _and: InputMaybe<Array<Auth_Clubs_Bool_Exp>>;
  _not: InputMaybe<Auth_Clubs_Bool_Exp>;
  _or: InputMaybe<Array<Auth_Clubs_Bool_Exp>>;
  author_id: InputMaybe<Uuid_Comparison_Exp>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  name: InputMaybe<String_Comparison_Exp>;
  updated_at: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.clubs" */
export enum Auth_Clubs_Constraint {
  /** unique or primary key constraint */
  ClubsPkey = 'clubs_pkey'
}

/** input type for inserting data into table "auth.clubs" */
export type Auth_Clubs_Insert_Input = {
  author_id: InputMaybe<Scalars['uuid']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  name: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Auth_Clubs_Max_Fields = {
  author_id: Maybe<Scalars['uuid']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.clubs" */
export type Auth_Clubs_Max_Order_By = {
  author_id: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Clubs_Min_Fields = {
  author_id: Maybe<Scalars['uuid']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.clubs" */
export type Auth_Clubs_Min_Order_By = {
  author_id: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.clubs" */
export type Auth_Clubs_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Clubs>;
};

/** on conflict condition type for table "auth.clubs" */
export type Auth_Clubs_On_Conflict = {
  constraint: Auth_Clubs_Constraint;
  update_columns: Array<Auth_Clubs_Update_Column>;
  where: InputMaybe<Auth_Clubs_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.clubs". */
export type Auth_Clubs_Order_By = {
  author_id: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth_clubs */
export type Auth_Clubs_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "auth.clubs" */
export enum Auth_Clubs_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "auth.clubs" */
export type Auth_Clubs_Set_Input = {
  author_id: InputMaybe<Scalars['uuid']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  name: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.clubs" */
export enum Auth_Clubs_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "auth.comments" */
export type Auth_Comments = {
  /** An object relationship */
  author: Users;
  author_id: Scalars['uuid'];
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  post: Maybe<Auth_Posts>;
  post_id: Maybe<Scalars['uuid']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "auth.comments" */
export type Auth_Comments_Aggregate = {
  aggregate: Maybe<Auth_Comments_Aggregate_Fields>;
  nodes: Array<Auth_Comments>;
};

/** aggregate fields of "auth.comments" */
export type Auth_Comments_Aggregate_Fields = {
  count: Scalars['Int'];
  max: Maybe<Auth_Comments_Max_Fields>;
  min: Maybe<Auth_Comments_Min_Fields>;
};


/** aggregate fields of "auth.comments" */
export type Auth_Comments_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Auth_Comments_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.comments" */
export type Auth_Comments_Aggregate_Order_By = {
  count: InputMaybe<Order_By>;
  max: InputMaybe<Auth_Comments_Max_Order_By>;
  min: InputMaybe<Auth_Comments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.comments" */
export type Auth_Comments_Arr_Rel_Insert_Input = {
  data: Array<Auth_Comments_Insert_Input>;
  /** on conflict condition */
  on_conflict: InputMaybe<Auth_Comments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.comments". All fields are combined with a logical 'AND'. */
export type Auth_Comments_Bool_Exp = {
  _and: InputMaybe<Array<Auth_Comments_Bool_Exp>>;
  _not: InputMaybe<Auth_Comments_Bool_Exp>;
  _or: InputMaybe<Array<Auth_Comments_Bool_Exp>>;
  author: InputMaybe<Users_Bool_Exp>;
  author_id: InputMaybe<Uuid_Comparison_Exp>;
  content: InputMaybe<String_Comparison_Exp>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  post: InputMaybe<Auth_Posts_Bool_Exp>;
  post_id: InputMaybe<Uuid_Comparison_Exp>;
  updated_at: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.comments" */
export enum Auth_Comments_Constraint {
  /** unique or primary key constraint */
  CommentsPkey = 'comments_pkey'
}

/** input type for inserting data into table "auth.comments" */
export type Auth_Comments_Insert_Input = {
  author: InputMaybe<Users_Obj_Rel_Insert_Input>;
  author_id: InputMaybe<Scalars['uuid']>;
  content: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  post: InputMaybe<Auth_Posts_Obj_Rel_Insert_Input>;
  post_id: InputMaybe<Scalars['uuid']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Auth_Comments_Max_Fields = {
  author_id: Maybe<Scalars['uuid']>;
  content: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  post_id: Maybe<Scalars['uuid']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.comments" */
export type Auth_Comments_Max_Order_By = {
  author_id: InputMaybe<Order_By>;
  content: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  post_id: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Comments_Min_Fields = {
  author_id: Maybe<Scalars['uuid']>;
  content: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  post_id: Maybe<Scalars['uuid']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.comments" */
export type Auth_Comments_Min_Order_By = {
  author_id: InputMaybe<Order_By>;
  content: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  post_id: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.comments" */
export type Auth_Comments_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Comments>;
};

/** on conflict condition type for table "auth.comments" */
export type Auth_Comments_On_Conflict = {
  constraint: Auth_Comments_Constraint;
  update_columns: Array<Auth_Comments_Update_Column>;
  where: InputMaybe<Auth_Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.comments". */
export type Auth_Comments_Order_By = {
  author: InputMaybe<Users_Order_By>;
  author_id: InputMaybe<Order_By>;
  content: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  post: InputMaybe<Auth_Posts_Order_By>;
  post_id: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth_comments */
export type Auth_Comments_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.comments" */
export enum Auth_Comments_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "auth.comments" */
export type Auth_Comments_Set_Input = {
  author_id: InputMaybe<Scalars['uuid']>;
  content: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  post_id: InputMaybe<Scalars['uuid']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.comments" */
export enum Auth_Comments_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "auth.posts" */
export type Auth_Posts = {
  /** An object relationship */
  author: Users;
  author_id: Scalars['uuid'];
  /** An array relationship */
  club: Array<Auth_Clubs>;
  /** An aggregate relationship */
  club_aggregate: Auth_Clubs_Aggregate;
  club_id: Scalars['uuid'];
  /** An array relationship */
  comments: Array<Auth_Comments>;
  /** An aggregate relationship */
  comments_aggregate: Auth_Comments_Aggregate;
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  image: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "auth.posts" */
export type Auth_PostsClubArgs = {
  distinct_on: InputMaybe<Array<Auth_Clubs_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Auth_Clubs_Order_By>>;
  where: InputMaybe<Auth_Clubs_Bool_Exp>;
};


/** columns and relationships of "auth.posts" */
export type Auth_PostsClub_AggregateArgs = {
  distinct_on: InputMaybe<Array<Auth_Clubs_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Auth_Clubs_Order_By>>;
  where: InputMaybe<Auth_Clubs_Bool_Exp>;
};


/** columns and relationships of "auth.posts" */
export type Auth_PostsCommentsArgs = {
  distinct_on: InputMaybe<Array<Auth_Comments_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Auth_Comments_Order_By>>;
  where: InputMaybe<Auth_Comments_Bool_Exp>;
};


/** columns and relationships of "auth.posts" */
export type Auth_PostsComments_AggregateArgs = {
  distinct_on: InputMaybe<Array<Auth_Comments_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Auth_Comments_Order_By>>;
  where: InputMaybe<Auth_Comments_Bool_Exp>;
};

/** aggregated selection of "auth.posts" */
export type Auth_Posts_Aggregate = {
  aggregate: Maybe<Auth_Posts_Aggregate_Fields>;
  nodes: Array<Auth_Posts>;
};

/** aggregate fields of "auth.posts" */
export type Auth_Posts_Aggregate_Fields = {
  count: Scalars['Int'];
  max: Maybe<Auth_Posts_Max_Fields>;
  min: Maybe<Auth_Posts_Min_Fields>;
};


/** aggregate fields of "auth.posts" */
export type Auth_Posts_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Auth_Posts_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.posts". All fields are combined with a logical 'AND'. */
export type Auth_Posts_Bool_Exp = {
  _and: InputMaybe<Array<Auth_Posts_Bool_Exp>>;
  _not: InputMaybe<Auth_Posts_Bool_Exp>;
  _or: InputMaybe<Array<Auth_Posts_Bool_Exp>>;
  author: InputMaybe<Users_Bool_Exp>;
  author_id: InputMaybe<Uuid_Comparison_Exp>;
  club: InputMaybe<Auth_Clubs_Bool_Exp>;
  club_id: InputMaybe<Uuid_Comparison_Exp>;
  comments: InputMaybe<Auth_Comments_Bool_Exp>;
  content: InputMaybe<String_Comparison_Exp>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  image: InputMaybe<String_Comparison_Exp>;
  updated_at: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.posts" */
export enum Auth_Posts_Constraint {
  /** unique or primary key constraint */
  PostsPkey = 'posts_pkey'
}

/** input type for inserting data into table "auth.posts" */
export type Auth_Posts_Insert_Input = {
  author: InputMaybe<Users_Obj_Rel_Insert_Input>;
  author_id: InputMaybe<Scalars['uuid']>;
  club: InputMaybe<Auth_Clubs_Arr_Rel_Insert_Input>;
  club_id: InputMaybe<Scalars['uuid']>;
  comments: InputMaybe<Auth_Comments_Arr_Rel_Insert_Input>;
  content: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  image: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Auth_Posts_Max_Fields = {
  author_id: Maybe<Scalars['uuid']>;
  club_id: Maybe<Scalars['uuid']>;
  content: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  image: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Auth_Posts_Min_Fields = {
  author_id: Maybe<Scalars['uuid']>;
  club_id: Maybe<Scalars['uuid']>;
  content: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  image: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "auth.posts" */
export type Auth_Posts_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Posts>;
};

/** input type for inserting object relation for remote table "auth.posts" */
export type Auth_Posts_Obj_Rel_Insert_Input = {
  data: Auth_Posts_Insert_Input;
  /** on conflict condition */
  on_conflict: InputMaybe<Auth_Posts_On_Conflict>;
};

/** on conflict condition type for table "auth.posts" */
export type Auth_Posts_On_Conflict = {
  constraint: Auth_Posts_Constraint;
  update_columns: Array<Auth_Posts_Update_Column>;
  where: InputMaybe<Auth_Posts_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.posts". */
export type Auth_Posts_Order_By = {
  author: InputMaybe<Users_Order_By>;
  author_id: InputMaybe<Order_By>;
  club_aggregate: InputMaybe<Auth_Clubs_Aggregate_Order_By>;
  club_id: InputMaybe<Order_By>;
  comments_aggregate: InputMaybe<Auth_Comments_Aggregate_Order_By>;
  content: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  image: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth_posts */
export type Auth_Posts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.posts" */
export enum Auth_Posts_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  ClubId = 'club_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "auth.posts" */
export type Auth_Posts_Set_Input = {
  author_id: InputMaybe<Scalars['uuid']>;
  club_id: InputMaybe<Scalars['uuid']>;
  content: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  image: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.posts" */
export enum Auth_Posts_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  ClubId = 'club_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "storage.buckets" */
export type Buckets = {
  cacheControl: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  downloadExpiration: Scalars['Int'];
  /** fetch data from the table: "storage.files" */
  files: Array<Files>;
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate;
  id: Scalars['String'];
  maxUploadFileSize: Scalars['Int'];
  minUploadFileSize: Scalars['Int'];
  presignedUrlsEnabled: Scalars['Boolean'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "storage.buckets" */
export type BucketsFilesArgs = {
  distinct_on: InputMaybe<Array<Files_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Files_Order_By>>;
  where: InputMaybe<Files_Bool_Exp>;
};


/** columns and relationships of "storage.buckets" */
export type BucketsFiles_AggregateArgs = {
  distinct_on: InputMaybe<Array<Files_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Files_Order_By>>;
  where: InputMaybe<Files_Bool_Exp>;
};

/** aggregated selection of "storage.buckets" */
export type Buckets_Aggregate = {
  aggregate: Maybe<Buckets_Aggregate_Fields>;
  nodes: Array<Buckets>;
};

/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_Fields = {
  avg: Maybe<Buckets_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Buckets_Max_Fields>;
  min: Maybe<Buckets_Min_Fields>;
  stddev: Maybe<Buckets_Stddev_Fields>;
  stddev_pop: Maybe<Buckets_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Buckets_Stddev_Samp_Fields>;
  sum: Maybe<Buckets_Sum_Fields>;
  var_pop: Maybe<Buckets_Var_Pop_Fields>;
  var_samp: Maybe<Buckets_Var_Samp_Fields>;
  variance: Maybe<Buckets_Variance_Fields>;
};


/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Buckets_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Buckets_Avg_Fields = {
  downloadExpiration: Maybe<Scalars['Float']>;
  maxUploadFileSize: Maybe<Scalars['Float']>;
  minUploadFileSize: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type Buckets_Bool_Exp = {
  _and: InputMaybe<Array<Buckets_Bool_Exp>>;
  _not: InputMaybe<Buckets_Bool_Exp>;
  _or: InputMaybe<Array<Buckets_Bool_Exp>>;
  cacheControl: InputMaybe<String_Comparison_Exp>;
  createdAt: InputMaybe<Timestamptz_Comparison_Exp>;
  downloadExpiration: InputMaybe<Int_Comparison_Exp>;
  files: InputMaybe<Files_Bool_Exp>;
  id: InputMaybe<String_Comparison_Exp>;
  maxUploadFileSize: InputMaybe<Int_Comparison_Exp>;
  minUploadFileSize: InputMaybe<Int_Comparison_Exp>;
  presignedUrlsEnabled: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export enum Buckets_Constraint {
  /** unique or primary key constraint */
  BucketsPkey = 'buckets_pkey'
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export type Buckets_Inc_Input = {
  downloadExpiration: InputMaybe<Scalars['Int']>;
  maxUploadFileSize: InputMaybe<Scalars['Int']>;
  minUploadFileSize: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.buckets" */
export type Buckets_Insert_Input = {
  cacheControl: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration: InputMaybe<Scalars['Int']>;
  files: InputMaybe<Files_Arr_Rel_Insert_Input>;
  id: InputMaybe<Scalars['String']>;
  maxUploadFileSize: InputMaybe<Scalars['Int']>;
  minUploadFileSize: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled: InputMaybe<Scalars['Boolean']>;
  updatedAt: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Buckets_Max_Fields = {
  cacheControl: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['timestamptz']>;
  downloadExpiration: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['String']>;
  maxUploadFileSize: Maybe<Scalars['Int']>;
  minUploadFileSize: Maybe<Scalars['Int']>;
  updatedAt: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Buckets_Min_Fields = {
  cacheControl: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['timestamptz']>;
  downloadExpiration: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['String']>;
  maxUploadFileSize: Maybe<Scalars['Int']>;
  minUploadFileSize: Maybe<Scalars['Int']>;
  updatedAt: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "storage.buckets" */
export type Buckets_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Buckets>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
export type Buckets_Obj_Rel_Insert_Input = {
  data: Buckets_Insert_Input;
  /** on conflict condition */
  on_conflict: InputMaybe<Buckets_On_Conflict>;
};

/** on conflict condition type for table "storage.buckets" */
export type Buckets_On_Conflict = {
  constraint: Buckets_Constraint;
  update_columns: Array<Buckets_Update_Column>;
  where: InputMaybe<Buckets_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type Buckets_Order_By = {
  cacheControl: InputMaybe<Order_By>;
  createdAt: InputMaybe<Order_By>;
  downloadExpiration: InputMaybe<Order_By>;
  files_aggregate: InputMaybe<Files_Aggregate_Order_By>;
  id: InputMaybe<Order_By>;
  maxUploadFileSize: InputMaybe<Order_By>;
  minUploadFileSize: InputMaybe<Order_By>;
  presignedUrlsEnabled: InputMaybe<Order_By>;
  updatedAt: InputMaybe<Order_By>;
};

/** primary key columns input for table: buckets */
export type Buckets_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "storage.buckets" */
export enum Buckets_Select_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "storage.buckets" */
export type Buckets_Set_Input = {
  cacheControl: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['String']>;
  maxUploadFileSize: InputMaybe<Scalars['Int']>;
  minUploadFileSize: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled: InputMaybe<Scalars['Boolean']>;
  updatedAt: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Buckets_Stddev_Fields = {
  downloadExpiration: Maybe<Scalars['Float']>;
  maxUploadFileSize: Maybe<Scalars['Float']>;
  minUploadFileSize: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Buckets_Stddev_Pop_Fields = {
  downloadExpiration: Maybe<Scalars['Float']>;
  maxUploadFileSize: Maybe<Scalars['Float']>;
  minUploadFileSize: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Buckets_Stddev_Samp_Fields = {
  downloadExpiration: Maybe<Scalars['Float']>;
  maxUploadFileSize: Maybe<Scalars['Float']>;
  minUploadFileSize: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Buckets_Sum_Fields = {
  downloadExpiration: Maybe<Scalars['Int']>;
  maxUploadFileSize: Maybe<Scalars['Int']>;
  minUploadFileSize: Maybe<Scalars['Int']>;
};

/** update columns of table "storage.buckets" */
export enum Buckets_Update_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Buckets_Var_Pop_Fields = {
  downloadExpiration: Maybe<Scalars['Float']>;
  maxUploadFileSize: Maybe<Scalars['Float']>;
  minUploadFileSize: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Buckets_Var_Samp_Fields = {
  downloadExpiration: Maybe<Scalars['Float']>;
  maxUploadFileSize: Maybe<Scalars['Float']>;
  minUploadFileSize: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Buckets_Variance_Fields = {
  downloadExpiration: Maybe<Scalars['Float']>;
  maxUploadFileSize: Maybe<Scalars['Float']>;
  minUploadFileSize: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq: InputMaybe<Scalars['citext']>;
  _gt: InputMaybe<Scalars['citext']>;
  _gte: InputMaybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike: InputMaybe<Scalars['citext']>;
  _in: InputMaybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex: InputMaybe<Scalars['citext']>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like: InputMaybe<Scalars['citext']>;
  _lt: InputMaybe<Scalars['citext']>;
  _lte: InputMaybe<Scalars['citext']>;
  _neq: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike: InputMaybe<Scalars['citext']>;
  _nin: InputMaybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar: InputMaybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex: InputMaybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar: InputMaybe<Scalars['citext']>;
};

/** columns and relationships of "storage.files" */
export type Files = {
  /** An object relationship */
  bucket: Buckets;
  bucketId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  etag: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  isUploaded: Maybe<Scalars['Boolean']>;
  mimeType: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
  uploadedByUserId: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "storage.files" */
export type Files_Aggregate = {
  aggregate: Maybe<Files_Aggregate_Fields>;
  nodes: Array<Files>;
};

/** aggregate fields of "storage.files" */
export type Files_Aggregate_Fields = {
  avg: Maybe<Files_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Files_Max_Fields>;
  min: Maybe<Files_Min_Fields>;
  stddev: Maybe<Files_Stddev_Fields>;
  stddev_pop: Maybe<Files_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Files_Stddev_Samp_Fields>;
  sum: Maybe<Files_Sum_Fields>;
  var_pop: Maybe<Files_Var_Pop_Fields>;
  var_samp: Maybe<Files_Var_Samp_Fields>;
  variance: Maybe<Files_Variance_Fields>;
};


/** aggregate fields of "storage.files" */
export type Files_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Files_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "storage.files" */
export type Files_Aggregate_Order_By = {
  avg: InputMaybe<Files_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Files_Max_Order_By>;
  min: InputMaybe<Files_Min_Order_By>;
  stddev: InputMaybe<Files_Stddev_Order_By>;
  stddev_pop: InputMaybe<Files_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Files_Stddev_Samp_Order_By>;
  sum: InputMaybe<Files_Sum_Order_By>;
  var_pop: InputMaybe<Files_Var_Pop_Order_By>;
  var_samp: InputMaybe<Files_Var_Samp_Order_By>;
  variance: InputMaybe<Files_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "storage.files" */
export type Files_Arr_Rel_Insert_Input = {
  data: Array<Files_Insert_Input>;
  /** on conflict condition */
  on_conflict: InputMaybe<Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Files_Avg_Fields = {
  size: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "storage.files" */
export type Files_Avg_Order_By = {
  size: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and: InputMaybe<Array<Files_Bool_Exp>>;
  _not: InputMaybe<Files_Bool_Exp>;
  _or: InputMaybe<Array<Files_Bool_Exp>>;
  bucket: InputMaybe<Buckets_Bool_Exp>;
  bucketId: InputMaybe<String_Comparison_Exp>;
  createdAt: InputMaybe<Timestamptz_Comparison_Exp>;
  etag: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  isUploaded: InputMaybe<Boolean_Comparison_Exp>;
  mimeType: InputMaybe<String_Comparison_Exp>;
  name: InputMaybe<String_Comparison_Exp>;
  size: InputMaybe<Int_Comparison_Exp>;
  updatedAt: InputMaybe<Timestamptz_Comparison_Exp>;
  uploadedByUserId: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.files" */
export enum Files_Constraint {
  /** unique or primary key constraint */
  FilesPkey = 'files_pkey'
}

/** input type for incrementing numeric columns in table "storage.files" */
export type Files_Inc_Input = {
  size: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.files" */
export type Files_Insert_Input = {
  bucket: InputMaybe<Buckets_Obj_Rel_Insert_Input>;
  bucketId: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['timestamptz']>;
  etag: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['uuid']>;
  isUploaded: InputMaybe<Scalars['Boolean']>;
  mimeType: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  size: InputMaybe<Scalars['Int']>;
  updatedAt: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Files_Max_Fields = {
  bucketId: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['timestamptz']>;
  etag: Maybe<Scalars['String']>;
  id: Maybe<Scalars['uuid']>;
  mimeType: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Int']>;
  updatedAt: Maybe<Scalars['timestamptz']>;
  uploadedByUserId: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "storage.files" */
export type Files_Max_Order_By = {
  bucketId: InputMaybe<Order_By>;
  createdAt: InputMaybe<Order_By>;
  etag: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  mimeType: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
  size: InputMaybe<Order_By>;
  updatedAt: InputMaybe<Order_By>;
  uploadedByUserId: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Min_Fields = {
  bucketId: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['timestamptz']>;
  etag: Maybe<Scalars['String']>;
  id: Maybe<Scalars['uuid']>;
  mimeType: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Int']>;
  updatedAt: Maybe<Scalars['timestamptz']>;
  uploadedByUserId: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "storage.files" */
export type Files_Min_Order_By = {
  bucketId: InputMaybe<Order_By>;
  createdAt: InputMaybe<Order_By>;
  etag: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  mimeType: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
  size: InputMaybe<Order_By>;
  updatedAt: InputMaybe<Order_By>;
  uploadedByUserId: InputMaybe<Order_By>;
};

/** response of any mutation on the table "storage.files" */
export type Files_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** on conflict condition type for table "storage.files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint;
  update_columns: Array<Files_Update_Column>;
  where: InputMaybe<Files_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.files". */
export type Files_Order_By = {
  bucket: InputMaybe<Buckets_Order_By>;
  bucketId: InputMaybe<Order_By>;
  createdAt: InputMaybe<Order_By>;
  etag: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  isUploaded: InputMaybe<Order_By>;
  mimeType: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
  size: InputMaybe<Order_By>;
  updatedAt: InputMaybe<Order_By>;
  uploadedByUserId: InputMaybe<Order_By>;
};

/** primary key columns input for table: files */
export type Files_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "storage.files" */
export enum Files_Select_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

/** input type for updating data in table "storage.files" */
export type Files_Set_Input = {
  bucketId: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['timestamptz']>;
  etag: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['uuid']>;
  isUploaded: InputMaybe<Scalars['Boolean']>;
  mimeType: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  size: InputMaybe<Scalars['Int']>;
  updatedAt: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Files_Stddev_Fields = {
  size: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "storage.files" */
export type Files_Stddev_Order_By = {
  size: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Files_Stddev_Pop_Fields = {
  size: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type Files_Stddev_Pop_Order_By = {
  size: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Files_Stddev_Samp_Fields = {
  size: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type Files_Stddev_Samp_Order_By = {
  size: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Files_Sum_Fields = {
  size: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "storage.files" */
export type Files_Sum_Order_By = {
  size: InputMaybe<Order_By>;
};

/** update columns of table "storage.files" */
export enum Files_Update_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

/** aggregate var_pop on columns */
export type Files_Var_Pop_Fields = {
  size: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "storage.files" */
export type Files_Var_Pop_Order_By = {
  size: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Files_Var_Samp_Fields = {
  size: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "storage.files" */
export type Files_Var_Samp_Order_By = {
  size: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Files_Variance_Fields = {
  size: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "storage.files" */
export type Files_Variance_Order_By = {
  size: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests: Maybe<AuthProviderRequests_Mutation_Response>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders: Maybe<AuthProviders_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken: Maybe<AuthRefreshTokens>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles: Maybe<AuthRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders: Maybe<AuthUserProviders_Mutation_Response>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles: Maybe<AuthUserRoles_Mutation_Response>;
  /** delete single row from the table: "storage.buckets" */
  deleteBucket: Maybe<Buckets>;
  /** delete data from the table: "storage.buckets" */
  deleteBuckets: Maybe<Buckets_Mutation_Response>;
  /** delete single row from the table: "storage.files" */
  deleteFile: Maybe<Files>;
  /** delete data from the table: "storage.files" */
  deleteFiles: Maybe<Files_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  deleteUser: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  deleteUsers: Maybe<Users_Mutation_Response>;
  /** delete data from the table: "auth.clubs" */
  delete_auth_clubs: Maybe<Auth_Clubs_Mutation_Response>;
  /** delete single row from the table: "auth.clubs" */
  delete_auth_clubs_by_pk: Maybe<Auth_Clubs>;
  /** delete data from the table: "auth.comments" */
  delete_auth_comments: Maybe<Auth_Comments_Mutation_Response>;
  /** delete single row from the table: "auth.comments" */
  delete_auth_comments_by_pk: Maybe<Auth_Comments>;
  /** delete data from the table: "auth.posts" */
  delete_auth_posts: Maybe<Auth_Posts_Mutation_Response>;
  /** delete single row from the table: "auth.posts" */
  delete_auth_posts_by_pk: Maybe<Auth_Posts>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests: Maybe<AuthProviderRequests_Mutation_Response>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders: Maybe<AuthProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken: Maybe<AuthRefreshTokens>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles: Maybe<AuthRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders: Maybe<AuthUserProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles: Maybe<AuthUserRoles_Mutation_Response>;
  /** insert a single row into the table: "storage.buckets" */
  insertBucket: Maybe<Buckets>;
  /** insert data into the table: "storage.buckets" */
  insertBuckets: Maybe<Buckets_Mutation_Response>;
  /** insert a single row into the table: "storage.files" */
  insertFile: Maybe<Files>;
  /** insert data into the table: "storage.files" */
  insertFiles: Maybe<Files_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insertUser: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insertUsers: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "auth.clubs" */
  insert_auth_clubs: Maybe<Auth_Clubs_Mutation_Response>;
  /** insert a single row into the table: "auth.clubs" */
  insert_auth_clubs_one: Maybe<Auth_Clubs>;
  /** insert data into the table: "auth.comments" */
  insert_auth_comments: Maybe<Auth_Comments_Mutation_Response>;
  /** insert a single row into the table: "auth.comments" */
  insert_auth_comments_one: Maybe<Auth_Comments>;
  /** insert data into the table: "auth.posts" */
  insert_auth_posts: Maybe<Auth_Posts_Mutation_Response>;
  /** insert a single row into the table: "auth.posts" */
  insert_auth_posts_one: Maybe<Auth_Posts>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests: Maybe<AuthProviderRequests_Mutation_Response>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders: Maybe<AuthProviders_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken: Maybe<AuthRefreshTokens>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles: Maybe<AuthRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders: Maybe<AuthUserProviders_Mutation_Response>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles: Maybe<AuthUserRoles_Mutation_Response>;
  /** update single row of the table: "storage.buckets" */
  updateBucket: Maybe<Buckets>;
  /** update data of the table: "storage.buckets" */
  updateBuckets: Maybe<Buckets_Mutation_Response>;
  /** update single row of the table: "storage.files" */
  updateFile: Maybe<Files>;
  /** update data of the table: "storage.files" */
  updateFiles: Maybe<Files_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  updateUser: Maybe<Users>;
  /** update data of the table: "auth.users" */
  updateUsers: Maybe<Users_Mutation_Response>;
  /** update data of the table: "auth.clubs" */
  update_auth_clubs: Maybe<Auth_Clubs_Mutation_Response>;
  /** update single row of the table: "auth.clubs" */
  update_auth_clubs_by_pk: Maybe<Auth_Clubs>;
  /** update data of the table: "auth.comments" */
  update_auth_comments: Maybe<Auth_Comments_Mutation_Response>;
  /** update single row of the table: "auth.comments" */
  update_auth_comments_by_pk: Maybe<Auth_Comments>;
  /** update data of the table: "auth.posts" */
  update_auth_posts: Maybe<Auth_Posts_Mutation_Response>;
  /** update single row of the table: "auth.posts" */
  update_auth_posts_by_pk: Maybe<Auth_Posts>;
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthProvidersArgs = {
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRoleArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRolesArgs = {
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProvidersArgs = {
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRolesArgs = {
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteBucketArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteBucketsArgs = {
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteFileArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteFilesArgs = {
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_ClubsArgs = {
  where: Auth_Clubs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Clubs_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_CommentsArgs = {
  where: Auth_Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Comments_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_PostsArgs = {
  where: Auth_Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Posts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsertAuthProviderArgs = {
  object: AuthProviders_Insert_Input;
  on_conflict: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequests_Insert_Input;
  on_conflict: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequests_Insert_Input>;
  on_conflict: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProvidersArgs = {
  objects: Array<AuthProviders_Insert_Input>;
  on_conflict: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokens_Insert_Input;
  on_conflict: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokens_Insert_Input>;
  on_conflict: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRoleArgs = {
  object: AuthRoles_Insert_Input;
  on_conflict: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRolesArgs = {
  objects: Array<AuthRoles_Insert_Input>;
  on_conflict: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProviderArgs = {
  object: AuthUserProviders_Insert_Input;
  on_conflict: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProviders_Insert_Input>;
  on_conflict: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRoleArgs = {
  object: AuthUserRoles_Insert_Input;
  on_conflict: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRoles_Insert_Input>;
  on_conflict: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketArgs = {
  object: Buckets_Insert_Input;
  on_conflict: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketsArgs = {
  objects: Array<Buckets_Insert_Input>;
  on_conflict: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFileArgs = {
  object: Files_Insert_Input;
  on_conflict: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFilesArgs = {
  objects: Array<Files_Insert_Input>;
  on_conflict: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUserArgs = {
  object: Users_Insert_Input;
  on_conflict: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_ClubsArgs = {
  objects: Array<Auth_Clubs_Insert_Input>;
  on_conflict: InputMaybe<Auth_Clubs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Clubs_OneArgs = {
  object: Auth_Clubs_Insert_Input;
  on_conflict: InputMaybe<Auth_Clubs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_CommentsArgs = {
  objects: Array<Auth_Comments_Insert_Input>;
  on_conflict: InputMaybe<Auth_Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Comments_OneArgs = {
  object: Auth_Comments_Insert_Input;
  on_conflict: InputMaybe<Auth_Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_PostsArgs = {
  objects: Array<Auth_Posts_Insert_Input>;
  on_conflict: InputMaybe<Auth_Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Posts_OneArgs = {
  object: Auth_Posts_Insert_Input;
  on_conflict: InputMaybe<Auth_Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderArgs = {
  _set: InputMaybe<AuthProviders_Set_Input>;
  pk_columns: AuthProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestArgs = {
  _set: InputMaybe<AuthProviderRequests_Set_Input>;
  pk_columns: AuthProviderRequests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsArgs = {
  _set: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProvidersArgs = {
  _set: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenArgs = {
  _set: InputMaybe<AuthRefreshTokens_Set_Input>;
  pk_columns: AuthRefreshTokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensArgs = {
  _set: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRoleArgs = {
  _set: InputMaybe<AuthRoles_Set_Input>;
  pk_columns: AuthRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRolesArgs = {
  _set: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProviderArgs = {
  _set: InputMaybe<AuthUserProviders_Set_Input>;
  pk_columns: AuthUserProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersArgs = {
  _set: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRoleArgs = {
  _set: InputMaybe<AuthUserRoles_Set_Input>;
  pk_columns: AuthUserRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRolesArgs = {
  _set: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateBucketArgs = {
  _inc: InputMaybe<Buckets_Inc_Input>;
  _set: InputMaybe<Buckets_Set_Input>;
  pk_columns: Buckets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBucketsArgs = {
  _inc: InputMaybe<Buckets_Inc_Input>;
  _set: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateFileArgs = {
  _inc: InputMaybe<Files_Inc_Input>;
  _set: InputMaybe<Files_Set_Input>;
  pk_columns: Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateFilesArgs = {
  _inc: InputMaybe<Files_Inc_Input>;
  _set: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _set: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _set: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_ClubsArgs = {
  _set: InputMaybe<Auth_Clubs_Set_Input>;
  where: Auth_Clubs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Clubs_By_PkArgs = {
  _set: InputMaybe<Auth_Clubs_Set_Input>;
  pk_columns: Auth_Clubs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_CommentsArgs = {
  _set: InputMaybe<Auth_Comments_Set_Input>;
  where: Auth_Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Comments_By_PkArgs = {
  _set: InputMaybe<Auth_Comments_Set_Input>;
  pk_columns: Auth_Comments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_PostsArgs = {
  _set: InputMaybe<Auth_Posts_Set_Input>;
  where: Auth_Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Posts_By_PkArgs = {
  _set: InputMaybe<Auth_Posts_Set_Input>;
  pk_columns: Auth_Posts_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "auth.clubs" */
  auth_clubs: Array<Auth_Clubs>;
  /** fetch aggregated fields from the table: "auth.clubs" */
  auth_clubs_aggregate: Auth_Clubs_Aggregate;
  /** fetch data from the table: "auth.clubs" using primary key columns */
  auth_clubs_by_pk: Maybe<Auth_Clubs>;
  /** fetch data from the table: "auth.comments" */
  auth_comments: Array<Auth_Comments>;
  /** fetch aggregated fields from the table: "auth.comments" */
  auth_comments_aggregate: Auth_Comments_Aggregate;
  /** fetch data from the table: "auth.comments" using primary key columns */
  auth_comments_by_pk: Maybe<Auth_Comments>;
  /** fetch data from the table: "auth.posts" */
  auth_posts: Array<Auth_Posts>;
  /** fetch aggregated fields from the table: "auth.posts" */
  auth_posts_aggregate: Auth_Posts_Aggregate;
  /** fetch data from the table: "auth.posts" using primary key columns */
  auth_posts_by_pk: Maybe<Auth_Posts>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table: "storage.files" using primary key columns */
  file: Maybe<Files>;
  /** fetch data from the table: "storage.files" */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  user: Maybe<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  userAggregate: Users_Aggregate;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
};


export type Query_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Query_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthProviderRequestsArgs = {
  distinct_on: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProviderRequestsAggregateArgs = {
  distinct_on: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProvidersArgs = {
  distinct_on: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthProviders_Order_By>>;
  where: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthProvidersAggregateArgs = {
  distinct_on: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthProviders_Order_By>>;
  where: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type Query_RootAuthRefreshTokensArgs = {
  distinct_on: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensAggregateArgs = {
  distinct_on: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Query_RootAuthRolesArgs = {
  distinct_on: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthRoles_Order_By>>;
  where: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthRolesAggregateArgs = {
  distinct_on: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthRoles_Order_By>>;
  where: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserProvidersArgs = {
  distinct_on: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserProvidersAggregateArgs = {
  distinct_on: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserRolesArgs = {
  distinct_on: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserRolesAggregateArgs = {
  distinct_on: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuth_ClubsArgs = {
  distinct_on: InputMaybe<Array<Auth_Clubs_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Auth_Clubs_Order_By>>;
  where: InputMaybe<Auth_Clubs_Bool_Exp>;
};


export type Query_RootAuth_Clubs_AggregateArgs = {
  distinct_on: InputMaybe<Array<Auth_Clubs_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Auth_Clubs_Order_By>>;
  where: InputMaybe<Auth_Clubs_Bool_Exp>;
};


export type Query_RootAuth_Clubs_By_PkArgs = {
  name: Scalars['String'];
};


export type Query_RootAuth_CommentsArgs = {
  distinct_on: InputMaybe<Array<Auth_Comments_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Auth_Comments_Order_By>>;
  where: InputMaybe<Auth_Comments_Bool_Exp>;
};


export type Query_RootAuth_Comments_AggregateArgs = {
  distinct_on: InputMaybe<Array<Auth_Comments_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Auth_Comments_Order_By>>;
  where: InputMaybe<Auth_Comments_Bool_Exp>;
};


export type Query_RootAuth_Comments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuth_PostsArgs = {
  distinct_on: InputMaybe<Array<Auth_Posts_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Auth_Posts_Order_By>>;
  where: InputMaybe<Auth_Posts_Bool_Exp>;
};


export type Query_RootAuth_Posts_AggregateArgs = {
  distinct_on: InputMaybe<Array<Auth_Posts_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Auth_Posts_Order_By>>;
  where: InputMaybe<Auth_Posts_Bool_Exp>;
};


export type Query_RootAuth_Posts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBucketArgs = {
  id: Scalars['String'];
};


export type Query_RootBucketsArgs = {
  distinct_on: InputMaybe<Array<Buckets_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Buckets_Order_By>>;
  where: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootBucketsAggregateArgs = {
  distinct_on: InputMaybe<Array<Buckets_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Buckets_Order_By>>;
  where: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFilesArgs = {
  distinct_on: InputMaybe<Array<Files_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Files_Order_By>>;
  where: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootFilesAggregateArgs = {
  distinct_on: InputMaybe<Array<Files_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Files_Order_By>>;
  where: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserAggregateArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsersArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_Root = {
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "auth.clubs" */
  auth_clubs: Array<Auth_Clubs>;
  /** fetch aggregated fields from the table: "auth.clubs" */
  auth_clubs_aggregate: Auth_Clubs_Aggregate;
  /** fetch data from the table: "auth.clubs" using primary key columns */
  auth_clubs_by_pk: Maybe<Auth_Clubs>;
  /** fetch data from the table: "auth.comments" */
  auth_comments: Array<Auth_Comments>;
  /** fetch aggregated fields from the table: "auth.comments" */
  auth_comments_aggregate: Auth_Comments_Aggregate;
  /** fetch data from the table: "auth.comments" using primary key columns */
  auth_comments_by_pk: Maybe<Auth_Comments>;
  /** fetch data from the table: "auth.posts" */
  auth_posts: Array<Auth_Posts>;
  /** fetch aggregated fields from the table: "auth.posts" */
  auth_posts_aggregate: Auth_Posts_Aggregate;
  /** fetch data from the table: "auth.posts" using primary key columns */
  auth_posts_by_pk: Maybe<Auth_Posts>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table: "storage.files" using primary key columns */
  file: Maybe<Files>;
  /** fetch data from the table: "storage.files" */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  user: Maybe<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  userAggregate: Users_Aggregate;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
};


export type Subscription_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthProviderRequestsArgs = {
  distinct_on: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequestsAggregateArgs = {
  distinct_on: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProvidersArgs = {
  distinct_on: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthProviders_Order_By>>;
  where: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProvidersAggregateArgs = {
  distinct_on: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthProviders_Order_By>>;
  where: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type Subscription_RootAuthRefreshTokensArgs = {
  distinct_on: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensAggregateArgs = {
  distinct_on: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Subscription_RootAuthRolesArgs = {
  distinct_on: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthRoles_Order_By>>;
  where: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRolesAggregateArgs = {
  distinct_on: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthRoles_Order_By>>;
  where: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserProvidersArgs = {
  distinct_on: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProvidersAggregateArgs = {
  distinct_on: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserRolesArgs = {
  distinct_on: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRolesAggregateArgs = {
  distinct_on: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuth_ClubsArgs = {
  distinct_on: InputMaybe<Array<Auth_Clubs_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Auth_Clubs_Order_By>>;
  where: InputMaybe<Auth_Clubs_Bool_Exp>;
};


export type Subscription_RootAuth_Clubs_AggregateArgs = {
  distinct_on: InputMaybe<Array<Auth_Clubs_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Auth_Clubs_Order_By>>;
  where: InputMaybe<Auth_Clubs_Bool_Exp>;
};


export type Subscription_RootAuth_Clubs_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootAuth_CommentsArgs = {
  distinct_on: InputMaybe<Array<Auth_Comments_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Auth_Comments_Order_By>>;
  where: InputMaybe<Auth_Comments_Bool_Exp>;
};


export type Subscription_RootAuth_Comments_AggregateArgs = {
  distinct_on: InputMaybe<Array<Auth_Comments_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Auth_Comments_Order_By>>;
  where: InputMaybe<Auth_Comments_Bool_Exp>;
};


export type Subscription_RootAuth_Comments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuth_PostsArgs = {
  distinct_on: InputMaybe<Array<Auth_Posts_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Auth_Posts_Order_By>>;
  where: InputMaybe<Auth_Posts_Bool_Exp>;
};


export type Subscription_RootAuth_Posts_AggregateArgs = {
  distinct_on: InputMaybe<Array<Auth_Posts_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Auth_Posts_Order_By>>;
  where: InputMaybe<Auth_Posts_Bool_Exp>;
};


export type Subscription_RootAuth_Posts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBucketArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBucketsArgs = {
  distinct_on: InputMaybe<Array<Buckets_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Buckets_Order_By>>;
  where: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBucketsAggregateArgs = {
  distinct_on: InputMaybe<Array<Buckets_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Buckets_Order_By>>;
  where: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFilesArgs = {
  distinct_on: InputMaybe<Array<Files_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Files_Order_By>>;
  where: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFilesAggregateArgs = {
  distinct_on: InputMaybe<Array<Files_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Files_Order_By>>;
  where: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserAggregateArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq: InputMaybe<Scalars['timestamptz']>;
  _gt: InputMaybe<Scalars['timestamptz']>;
  _gte: InputMaybe<Scalars['timestamptz']>;
  _in: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['timestamptz']>;
  _lte: InputMaybe<Scalars['timestamptz']>;
  _neq: InputMaybe<Scalars['timestamptz']>;
  _nin: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "auth.users" */
export type Users = {
  activeMfaType: Maybe<Scalars['String']>;
  avatarUrl: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  defaultRole: Scalars['String'];
  /** An object relationship */
  defaultRoleByRole: AuthRoles;
  disabled: Scalars['Boolean'];
  displayName: Scalars['String'];
  email: Maybe<Scalars['citext']>;
  emailVerified: Scalars['Boolean'];
  id: Scalars['uuid'];
  isAnonymous: Scalars['Boolean'];
  lastSeen: Maybe<Scalars['timestamptz']>;
  locale: Scalars['String'];
  newEmail: Maybe<Scalars['citext']>;
  otpHash: Maybe<Scalars['String']>;
  otpHashExpiresAt: Scalars['timestamptz'];
  otpMethodLastUsed: Maybe<Scalars['String']>;
  passwordHash: Maybe<Scalars['String']>;
  phoneNumber: Maybe<Scalars['String']>;
  phoneNumberVerified: Scalars['Boolean'];
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  roles_aggregate: AuthUserRoles_Aggregate;
  ticket: Maybe<Scalars['String']>;
  ticketExpiresAt: Scalars['timestamptz'];
  totpSecret: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** columns and relationships of "auth.users" */
export type UsersRefreshTokensArgs = {
  distinct_on: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersRefreshTokens_AggregateArgs = {
  distinct_on: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersRolesArgs = {
  distinct_on: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersRoles_AggregateArgs = {
  distinct_on: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersUserProvidersArgs = {
  distinct_on: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersUserProviders_AggregateArgs = {
  distinct_on: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.users" */
export type Users_Aggregate = {
  aggregate: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_Fields = {
  count: Scalars['Int'];
  max: Maybe<Users_Max_Fields>;
  min: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "auth.users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Users_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.users" */
export type Users_Aggregate_Order_By = {
  count: InputMaybe<Order_By>;
  max: InputMaybe<Users_Max_Order_By>;
  min: InputMaybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** on conflict condition */
  on_conflict: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and: InputMaybe<Array<Users_Bool_Exp>>;
  _not: InputMaybe<Users_Bool_Exp>;
  _or: InputMaybe<Array<Users_Bool_Exp>>;
  activeMfaType: InputMaybe<String_Comparison_Exp>;
  avatarUrl: InputMaybe<String_Comparison_Exp>;
  createdAt: InputMaybe<Timestamptz_Comparison_Exp>;
  defaultRole: InputMaybe<String_Comparison_Exp>;
  defaultRoleByRole: InputMaybe<AuthRoles_Bool_Exp>;
  disabled: InputMaybe<Boolean_Comparison_Exp>;
  displayName: InputMaybe<String_Comparison_Exp>;
  email: InputMaybe<Citext_Comparison_Exp>;
  emailVerified: InputMaybe<Boolean_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  isAnonymous: InputMaybe<Boolean_Comparison_Exp>;
  lastSeen: InputMaybe<Timestamptz_Comparison_Exp>;
  locale: InputMaybe<String_Comparison_Exp>;
  newEmail: InputMaybe<Citext_Comparison_Exp>;
  otpHash: InputMaybe<String_Comparison_Exp>;
  otpHashExpiresAt: InputMaybe<Timestamptz_Comparison_Exp>;
  otpMethodLastUsed: InputMaybe<String_Comparison_Exp>;
  passwordHash: InputMaybe<String_Comparison_Exp>;
  phoneNumber: InputMaybe<String_Comparison_Exp>;
  phoneNumberVerified: InputMaybe<Boolean_Comparison_Exp>;
  refreshTokens: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  roles: InputMaybe<AuthUserRoles_Bool_Exp>;
  ticket: InputMaybe<String_Comparison_Exp>;
  ticketExpiresAt: InputMaybe<Timestamptz_Comparison_Exp>;
  totpSecret: InputMaybe<String_Comparison_Exp>;
  updatedAt: InputMaybe<Timestamptz_Comparison_Exp>;
  userProviders: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "auth.users" */
export type Users_Insert_Input = {
  activeMfaType: InputMaybe<Scalars['String']>;
  avatarUrl: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['timestamptz']>;
  defaultRole: InputMaybe<Scalars['String']>;
  defaultRoleByRole: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  disabled: InputMaybe<Scalars['Boolean']>;
  displayName: InputMaybe<Scalars['String']>;
  email: InputMaybe<Scalars['citext']>;
  emailVerified: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['uuid']>;
  isAnonymous: InputMaybe<Scalars['Boolean']>;
  lastSeen: InputMaybe<Scalars['timestamptz']>;
  locale: InputMaybe<Scalars['String']>;
  newEmail: InputMaybe<Scalars['citext']>;
  otpHash: InputMaybe<Scalars['String']>;
  otpHashExpiresAt: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed: InputMaybe<Scalars['String']>;
  passwordHash: InputMaybe<Scalars['String']>;
  phoneNumber: InputMaybe<Scalars['String']>;
  phoneNumberVerified: InputMaybe<Scalars['Boolean']>;
  refreshTokens: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  roles: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  ticket: InputMaybe<Scalars['String']>;
  ticketExpiresAt: InputMaybe<Scalars['timestamptz']>;
  totpSecret: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['timestamptz']>;
  userProviders: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  activeMfaType: Maybe<Scalars['String']>;
  avatarUrl: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['timestamptz']>;
  defaultRole: Maybe<Scalars['String']>;
  displayName: Maybe<Scalars['String']>;
  email: Maybe<Scalars['citext']>;
  id: Maybe<Scalars['uuid']>;
  lastSeen: Maybe<Scalars['timestamptz']>;
  locale: Maybe<Scalars['String']>;
  newEmail: Maybe<Scalars['citext']>;
  otpHash: Maybe<Scalars['String']>;
  otpHashExpiresAt: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed: Maybe<Scalars['String']>;
  passwordHash: Maybe<Scalars['String']>;
  phoneNumber: Maybe<Scalars['String']>;
  ticket: Maybe<Scalars['String']>;
  ticketExpiresAt: Maybe<Scalars['timestamptz']>;
  totpSecret: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.users" */
export type Users_Max_Order_By = {
  activeMfaType: InputMaybe<Order_By>;
  avatarUrl: InputMaybe<Order_By>;
  createdAt: InputMaybe<Order_By>;
  defaultRole: InputMaybe<Order_By>;
  displayName: InputMaybe<Order_By>;
  email: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  lastSeen: InputMaybe<Order_By>;
  locale: InputMaybe<Order_By>;
  newEmail: InputMaybe<Order_By>;
  otpHash: InputMaybe<Order_By>;
  otpHashExpiresAt: InputMaybe<Order_By>;
  otpMethodLastUsed: InputMaybe<Order_By>;
  passwordHash: InputMaybe<Order_By>;
  phoneNumber: InputMaybe<Order_By>;
  ticket: InputMaybe<Order_By>;
  ticketExpiresAt: InputMaybe<Order_By>;
  totpSecret: InputMaybe<Order_By>;
  updatedAt: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  activeMfaType: Maybe<Scalars['String']>;
  avatarUrl: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['timestamptz']>;
  defaultRole: Maybe<Scalars['String']>;
  displayName: Maybe<Scalars['String']>;
  email: Maybe<Scalars['citext']>;
  id: Maybe<Scalars['uuid']>;
  lastSeen: Maybe<Scalars['timestamptz']>;
  locale: Maybe<Scalars['String']>;
  newEmail: Maybe<Scalars['citext']>;
  otpHash: Maybe<Scalars['String']>;
  otpHashExpiresAt: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed: Maybe<Scalars['String']>;
  passwordHash: Maybe<Scalars['String']>;
  phoneNumber: Maybe<Scalars['String']>;
  ticket: Maybe<Scalars['String']>;
  ticketExpiresAt: Maybe<Scalars['timestamptz']>;
  totpSecret: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.users" */
export type Users_Min_Order_By = {
  activeMfaType: InputMaybe<Order_By>;
  avatarUrl: InputMaybe<Order_By>;
  createdAt: InputMaybe<Order_By>;
  defaultRole: InputMaybe<Order_By>;
  displayName: InputMaybe<Order_By>;
  email: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  lastSeen: InputMaybe<Order_By>;
  locale: InputMaybe<Order_By>;
  newEmail: InputMaybe<Order_By>;
  otpHash: InputMaybe<Order_By>;
  otpHashExpiresAt: InputMaybe<Order_By>;
  otpMethodLastUsed: InputMaybe<Order_By>;
  passwordHash: InputMaybe<Order_By>;
  phoneNumber: InputMaybe<Order_By>;
  ticket: InputMaybe<Order_By>;
  ticketExpiresAt: InputMaybe<Order_By>;
  totpSecret: InputMaybe<Order_By>;
  updatedAt: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.users" */
export type Users_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict: InputMaybe<Users_On_Conflict>;
};

/** on conflict condition type for table "auth.users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
  activeMfaType: InputMaybe<Order_By>;
  avatarUrl: InputMaybe<Order_By>;
  createdAt: InputMaybe<Order_By>;
  defaultRole: InputMaybe<Order_By>;
  defaultRoleByRole: InputMaybe<AuthRoles_Order_By>;
  disabled: InputMaybe<Order_By>;
  displayName: InputMaybe<Order_By>;
  email: InputMaybe<Order_By>;
  emailVerified: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  isAnonymous: InputMaybe<Order_By>;
  lastSeen: InputMaybe<Order_By>;
  locale: InputMaybe<Order_By>;
  newEmail: InputMaybe<Order_By>;
  otpHash: InputMaybe<Order_By>;
  otpHashExpiresAt: InputMaybe<Order_By>;
  otpMethodLastUsed: InputMaybe<Order_By>;
  passwordHash: InputMaybe<Order_By>;
  phoneNumber: InputMaybe<Order_By>;
  phoneNumberVerified: InputMaybe<Order_By>;
  refreshTokens_aggregate: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  roles_aggregate: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  ticket: InputMaybe<Order_By>;
  ticketExpiresAt: InputMaybe<Order_By>;
  totpSecret: InputMaybe<Order_By>;
  updatedAt: InputMaybe<Order_By>;
  userProviders_aggregate: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.users" */
export enum Users_Select_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "auth.users" */
export type Users_Set_Input = {
  activeMfaType: InputMaybe<Scalars['String']>;
  avatarUrl: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['timestamptz']>;
  defaultRole: InputMaybe<Scalars['String']>;
  disabled: InputMaybe<Scalars['Boolean']>;
  displayName: InputMaybe<Scalars['String']>;
  email: InputMaybe<Scalars['citext']>;
  emailVerified: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['uuid']>;
  isAnonymous: InputMaybe<Scalars['Boolean']>;
  lastSeen: InputMaybe<Scalars['timestamptz']>;
  locale: InputMaybe<Scalars['String']>;
  newEmail: InputMaybe<Scalars['citext']>;
  otpHash: InputMaybe<Scalars['String']>;
  otpHashExpiresAt: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed: InputMaybe<Scalars['String']>;
  passwordHash: InputMaybe<Scalars['String']>;
  phoneNumber: InputMaybe<Scalars['String']>;
  phoneNumberVerified: InputMaybe<Scalars['Boolean']>;
  ticket: InputMaybe<Scalars['String']>;
  ticketExpiresAt: InputMaybe<Scalars['timestamptz']>;
  totpSecret: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.users" */
export enum Users_Update_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq: InputMaybe<Scalars['uuid']>;
  _gt: InputMaybe<Scalars['uuid']>;
  _gte: InputMaybe<Scalars['uuid']>;
  _in: InputMaybe<Array<Scalars['uuid']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['uuid']>;
  _lte: InputMaybe<Scalars['uuid']>;
  _neq: InputMaybe<Scalars['uuid']>;
  _nin: InputMaybe<Array<Scalars['uuid']>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Int_comparison_exp: Int_Comparison_Exp;
  String: ResolverTypeWrapper<Scalars['String']>;
  String_comparison_exp: String_Comparison_Exp;
  authProviderRequests: ResolverTypeWrapper<AuthProviderRequests>;
  authProviderRequests_aggregate: ResolverTypeWrapper<AuthProviderRequests_Aggregate>;
  authProviderRequests_aggregate_fields: ResolverTypeWrapper<AuthProviderRequests_Aggregate_Fields>;
  authProviderRequests_bool_exp: AuthProviderRequests_Bool_Exp;
  authProviderRequests_constraint: AuthProviderRequests_Constraint;
  authProviderRequests_insert_input: AuthProviderRequests_Insert_Input;
  authProviderRequests_max_fields: ResolverTypeWrapper<AuthProviderRequests_Max_Fields>;
  authProviderRequests_min_fields: ResolverTypeWrapper<AuthProviderRequests_Min_Fields>;
  authProviderRequests_mutation_response: ResolverTypeWrapper<AuthProviderRequests_Mutation_Response>;
  authProviderRequests_on_conflict: AuthProviderRequests_On_Conflict;
  authProviderRequests_order_by: AuthProviderRequests_Order_By;
  authProviderRequests_pk_columns_input: AuthProviderRequests_Pk_Columns_Input;
  authProviderRequests_select_column: AuthProviderRequests_Select_Column;
  authProviderRequests_set_input: AuthProviderRequests_Set_Input;
  authProviderRequests_update_column: AuthProviderRequests_Update_Column;
  authProviders: ResolverTypeWrapper<AuthProviders>;
  authProviders_aggregate: ResolverTypeWrapper<AuthProviders_Aggregate>;
  authProviders_aggregate_fields: ResolverTypeWrapper<AuthProviders_Aggregate_Fields>;
  authProviders_bool_exp: AuthProviders_Bool_Exp;
  authProviders_constraint: AuthProviders_Constraint;
  authProviders_insert_input: AuthProviders_Insert_Input;
  authProviders_max_fields: ResolverTypeWrapper<AuthProviders_Max_Fields>;
  authProviders_min_fields: ResolverTypeWrapper<AuthProviders_Min_Fields>;
  authProviders_mutation_response: ResolverTypeWrapper<AuthProviders_Mutation_Response>;
  authProviders_obj_rel_insert_input: AuthProviders_Obj_Rel_Insert_Input;
  authProviders_on_conflict: AuthProviders_On_Conflict;
  authProviders_order_by: AuthProviders_Order_By;
  authProviders_pk_columns_input: AuthProviders_Pk_Columns_Input;
  authProviders_select_column: AuthProviders_Select_Column;
  authProviders_set_input: AuthProviders_Set_Input;
  authProviders_update_column: AuthProviders_Update_Column;
  authRefreshTokens: ResolverTypeWrapper<AuthRefreshTokens>;
  authRefreshTokens_aggregate: ResolverTypeWrapper<AuthRefreshTokens_Aggregate>;
  authRefreshTokens_aggregate_fields: ResolverTypeWrapper<AuthRefreshTokens_Aggregate_Fields>;
  authRefreshTokens_aggregate_order_by: AuthRefreshTokens_Aggregate_Order_By;
  authRefreshTokens_arr_rel_insert_input: AuthRefreshTokens_Arr_Rel_Insert_Input;
  authRefreshTokens_bool_exp: AuthRefreshTokens_Bool_Exp;
  authRefreshTokens_constraint: AuthRefreshTokens_Constraint;
  authRefreshTokens_insert_input: AuthRefreshTokens_Insert_Input;
  authRefreshTokens_max_fields: ResolverTypeWrapper<AuthRefreshTokens_Max_Fields>;
  authRefreshTokens_max_order_by: AuthRefreshTokens_Max_Order_By;
  authRefreshTokens_min_fields: ResolverTypeWrapper<AuthRefreshTokens_Min_Fields>;
  authRefreshTokens_min_order_by: AuthRefreshTokens_Min_Order_By;
  authRefreshTokens_mutation_response: ResolverTypeWrapper<AuthRefreshTokens_Mutation_Response>;
  authRefreshTokens_on_conflict: AuthRefreshTokens_On_Conflict;
  authRefreshTokens_order_by: AuthRefreshTokens_Order_By;
  authRefreshTokens_pk_columns_input: AuthRefreshTokens_Pk_Columns_Input;
  authRefreshTokens_select_column: AuthRefreshTokens_Select_Column;
  authRefreshTokens_set_input: AuthRefreshTokens_Set_Input;
  authRefreshTokens_update_column: AuthRefreshTokens_Update_Column;
  authRoles: ResolverTypeWrapper<AuthRoles>;
  authRoles_aggregate: ResolverTypeWrapper<AuthRoles_Aggregate>;
  authRoles_aggregate_fields: ResolverTypeWrapper<AuthRoles_Aggregate_Fields>;
  authRoles_bool_exp: AuthRoles_Bool_Exp;
  authRoles_constraint: AuthRoles_Constraint;
  authRoles_insert_input: AuthRoles_Insert_Input;
  authRoles_max_fields: ResolverTypeWrapper<AuthRoles_Max_Fields>;
  authRoles_min_fields: ResolverTypeWrapper<AuthRoles_Min_Fields>;
  authRoles_mutation_response: ResolverTypeWrapper<AuthRoles_Mutation_Response>;
  authRoles_obj_rel_insert_input: AuthRoles_Obj_Rel_Insert_Input;
  authRoles_on_conflict: AuthRoles_On_Conflict;
  authRoles_order_by: AuthRoles_Order_By;
  authRoles_pk_columns_input: AuthRoles_Pk_Columns_Input;
  authRoles_select_column: AuthRoles_Select_Column;
  authRoles_set_input: AuthRoles_Set_Input;
  authRoles_update_column: AuthRoles_Update_Column;
  authUserProviders: ResolverTypeWrapper<AuthUserProviders>;
  authUserProviders_aggregate: ResolverTypeWrapper<AuthUserProviders_Aggregate>;
  authUserProviders_aggregate_fields: ResolverTypeWrapper<AuthUserProviders_Aggregate_Fields>;
  authUserProviders_aggregate_order_by: AuthUserProviders_Aggregate_Order_By;
  authUserProviders_arr_rel_insert_input: AuthUserProviders_Arr_Rel_Insert_Input;
  authUserProviders_bool_exp: AuthUserProviders_Bool_Exp;
  authUserProviders_constraint: AuthUserProviders_Constraint;
  authUserProviders_insert_input: AuthUserProviders_Insert_Input;
  authUserProviders_max_fields: ResolverTypeWrapper<AuthUserProviders_Max_Fields>;
  authUserProviders_max_order_by: AuthUserProviders_Max_Order_By;
  authUserProviders_min_fields: ResolverTypeWrapper<AuthUserProviders_Min_Fields>;
  authUserProviders_min_order_by: AuthUserProviders_Min_Order_By;
  authUserProviders_mutation_response: ResolverTypeWrapper<AuthUserProviders_Mutation_Response>;
  authUserProviders_on_conflict: AuthUserProviders_On_Conflict;
  authUserProviders_order_by: AuthUserProviders_Order_By;
  authUserProviders_pk_columns_input: AuthUserProviders_Pk_Columns_Input;
  authUserProviders_select_column: AuthUserProviders_Select_Column;
  authUserProviders_set_input: AuthUserProviders_Set_Input;
  authUserProviders_update_column: AuthUserProviders_Update_Column;
  authUserRoles: ResolverTypeWrapper<AuthUserRoles>;
  authUserRoles_aggregate: ResolverTypeWrapper<AuthUserRoles_Aggregate>;
  authUserRoles_aggregate_fields: ResolverTypeWrapper<AuthUserRoles_Aggregate_Fields>;
  authUserRoles_aggregate_order_by: AuthUserRoles_Aggregate_Order_By;
  authUserRoles_arr_rel_insert_input: AuthUserRoles_Arr_Rel_Insert_Input;
  authUserRoles_bool_exp: AuthUserRoles_Bool_Exp;
  authUserRoles_constraint: AuthUserRoles_Constraint;
  authUserRoles_insert_input: AuthUserRoles_Insert_Input;
  authUserRoles_max_fields: ResolverTypeWrapper<AuthUserRoles_Max_Fields>;
  authUserRoles_max_order_by: AuthUserRoles_Max_Order_By;
  authUserRoles_min_fields: ResolverTypeWrapper<AuthUserRoles_Min_Fields>;
  authUserRoles_min_order_by: AuthUserRoles_Min_Order_By;
  authUserRoles_mutation_response: ResolverTypeWrapper<AuthUserRoles_Mutation_Response>;
  authUserRoles_on_conflict: AuthUserRoles_On_Conflict;
  authUserRoles_order_by: AuthUserRoles_Order_By;
  authUserRoles_pk_columns_input: AuthUserRoles_Pk_Columns_Input;
  authUserRoles_select_column: AuthUserRoles_Select_Column;
  authUserRoles_set_input: AuthUserRoles_Set_Input;
  authUserRoles_update_column: AuthUserRoles_Update_Column;
  auth_clubs: ResolverTypeWrapper<Auth_Clubs>;
  auth_clubs_aggregate: ResolverTypeWrapper<Auth_Clubs_Aggregate>;
  auth_clubs_aggregate_fields: ResolverTypeWrapper<Auth_Clubs_Aggregate_Fields>;
  auth_clubs_aggregate_order_by: Auth_Clubs_Aggregate_Order_By;
  auth_clubs_arr_rel_insert_input: Auth_Clubs_Arr_Rel_Insert_Input;
  auth_clubs_bool_exp: Auth_Clubs_Bool_Exp;
  auth_clubs_constraint: Auth_Clubs_Constraint;
  auth_clubs_insert_input: Auth_Clubs_Insert_Input;
  auth_clubs_max_fields: ResolverTypeWrapper<Auth_Clubs_Max_Fields>;
  auth_clubs_max_order_by: Auth_Clubs_Max_Order_By;
  auth_clubs_min_fields: ResolverTypeWrapper<Auth_Clubs_Min_Fields>;
  auth_clubs_min_order_by: Auth_Clubs_Min_Order_By;
  auth_clubs_mutation_response: ResolverTypeWrapper<Auth_Clubs_Mutation_Response>;
  auth_clubs_on_conflict: Auth_Clubs_On_Conflict;
  auth_clubs_order_by: Auth_Clubs_Order_By;
  auth_clubs_pk_columns_input: Auth_Clubs_Pk_Columns_Input;
  auth_clubs_select_column: Auth_Clubs_Select_Column;
  auth_clubs_set_input: Auth_Clubs_Set_Input;
  auth_clubs_update_column: Auth_Clubs_Update_Column;
  auth_comments: ResolverTypeWrapper<Auth_Comments>;
  auth_comments_aggregate: ResolverTypeWrapper<Auth_Comments_Aggregate>;
  auth_comments_aggregate_fields: ResolverTypeWrapper<Auth_Comments_Aggregate_Fields>;
  auth_comments_aggregate_order_by: Auth_Comments_Aggregate_Order_By;
  auth_comments_arr_rel_insert_input: Auth_Comments_Arr_Rel_Insert_Input;
  auth_comments_bool_exp: Auth_Comments_Bool_Exp;
  auth_comments_constraint: Auth_Comments_Constraint;
  auth_comments_insert_input: Auth_Comments_Insert_Input;
  auth_comments_max_fields: ResolverTypeWrapper<Auth_Comments_Max_Fields>;
  auth_comments_max_order_by: Auth_Comments_Max_Order_By;
  auth_comments_min_fields: ResolverTypeWrapper<Auth_Comments_Min_Fields>;
  auth_comments_min_order_by: Auth_Comments_Min_Order_By;
  auth_comments_mutation_response: ResolverTypeWrapper<Auth_Comments_Mutation_Response>;
  auth_comments_on_conflict: Auth_Comments_On_Conflict;
  auth_comments_order_by: Auth_Comments_Order_By;
  auth_comments_pk_columns_input: Auth_Comments_Pk_Columns_Input;
  auth_comments_select_column: Auth_Comments_Select_Column;
  auth_comments_set_input: Auth_Comments_Set_Input;
  auth_comments_update_column: Auth_Comments_Update_Column;
  auth_posts: ResolverTypeWrapper<Auth_Posts>;
  auth_posts_aggregate: ResolverTypeWrapper<Auth_Posts_Aggregate>;
  auth_posts_aggregate_fields: ResolverTypeWrapper<Auth_Posts_Aggregate_Fields>;
  auth_posts_bool_exp: Auth_Posts_Bool_Exp;
  auth_posts_constraint: Auth_Posts_Constraint;
  auth_posts_insert_input: Auth_Posts_Insert_Input;
  auth_posts_max_fields: ResolverTypeWrapper<Auth_Posts_Max_Fields>;
  auth_posts_min_fields: ResolverTypeWrapper<Auth_Posts_Min_Fields>;
  auth_posts_mutation_response: ResolverTypeWrapper<Auth_Posts_Mutation_Response>;
  auth_posts_obj_rel_insert_input: Auth_Posts_Obj_Rel_Insert_Input;
  auth_posts_on_conflict: Auth_Posts_On_Conflict;
  auth_posts_order_by: Auth_Posts_Order_By;
  auth_posts_pk_columns_input: Auth_Posts_Pk_Columns_Input;
  auth_posts_select_column: Auth_Posts_Select_Column;
  auth_posts_set_input: Auth_Posts_Set_Input;
  auth_posts_update_column: Auth_Posts_Update_Column;
  buckets: ResolverTypeWrapper<Buckets>;
  buckets_aggregate: ResolverTypeWrapper<Buckets_Aggregate>;
  buckets_aggregate_fields: ResolverTypeWrapper<Buckets_Aggregate_Fields>;
  buckets_avg_fields: ResolverTypeWrapper<Buckets_Avg_Fields>;
  buckets_bool_exp: Buckets_Bool_Exp;
  buckets_constraint: Buckets_Constraint;
  buckets_inc_input: Buckets_Inc_Input;
  buckets_insert_input: Buckets_Insert_Input;
  buckets_max_fields: ResolverTypeWrapper<Buckets_Max_Fields>;
  buckets_min_fields: ResolverTypeWrapper<Buckets_Min_Fields>;
  buckets_mutation_response: ResolverTypeWrapper<Buckets_Mutation_Response>;
  buckets_obj_rel_insert_input: Buckets_Obj_Rel_Insert_Input;
  buckets_on_conflict: Buckets_On_Conflict;
  buckets_order_by: Buckets_Order_By;
  buckets_pk_columns_input: Buckets_Pk_Columns_Input;
  buckets_select_column: Buckets_Select_Column;
  buckets_set_input: Buckets_Set_Input;
  buckets_stddev_fields: ResolverTypeWrapper<Buckets_Stddev_Fields>;
  buckets_stddev_pop_fields: ResolverTypeWrapper<Buckets_Stddev_Pop_Fields>;
  buckets_stddev_samp_fields: ResolverTypeWrapper<Buckets_Stddev_Samp_Fields>;
  buckets_sum_fields: ResolverTypeWrapper<Buckets_Sum_Fields>;
  buckets_update_column: Buckets_Update_Column;
  buckets_var_pop_fields: ResolverTypeWrapper<Buckets_Var_Pop_Fields>;
  buckets_var_samp_fields: ResolverTypeWrapper<Buckets_Var_Samp_Fields>;
  buckets_variance_fields: ResolverTypeWrapper<Buckets_Variance_Fields>;
  citext: ResolverTypeWrapper<Scalars['citext']>;
  citext_comparison_exp: Citext_Comparison_Exp;
  files: ResolverTypeWrapper<Files>;
  files_aggregate: ResolverTypeWrapper<Files_Aggregate>;
  files_aggregate_fields: ResolverTypeWrapper<Files_Aggregate_Fields>;
  files_aggregate_order_by: Files_Aggregate_Order_By;
  files_arr_rel_insert_input: Files_Arr_Rel_Insert_Input;
  files_avg_fields: ResolverTypeWrapper<Files_Avg_Fields>;
  files_avg_order_by: Files_Avg_Order_By;
  files_bool_exp: Files_Bool_Exp;
  files_constraint: Files_Constraint;
  files_inc_input: Files_Inc_Input;
  files_insert_input: Files_Insert_Input;
  files_max_fields: ResolverTypeWrapper<Files_Max_Fields>;
  files_max_order_by: Files_Max_Order_By;
  files_min_fields: ResolverTypeWrapper<Files_Min_Fields>;
  files_min_order_by: Files_Min_Order_By;
  files_mutation_response: ResolverTypeWrapper<Files_Mutation_Response>;
  files_on_conflict: Files_On_Conflict;
  files_order_by: Files_Order_By;
  files_pk_columns_input: Files_Pk_Columns_Input;
  files_select_column: Files_Select_Column;
  files_set_input: Files_Set_Input;
  files_stddev_fields: ResolverTypeWrapper<Files_Stddev_Fields>;
  files_stddev_order_by: Files_Stddev_Order_By;
  files_stddev_pop_fields: ResolverTypeWrapper<Files_Stddev_Pop_Fields>;
  files_stddev_pop_order_by: Files_Stddev_Pop_Order_By;
  files_stddev_samp_fields: ResolverTypeWrapper<Files_Stddev_Samp_Fields>;
  files_stddev_samp_order_by: Files_Stddev_Samp_Order_By;
  files_sum_fields: ResolverTypeWrapper<Files_Sum_Fields>;
  files_sum_order_by: Files_Sum_Order_By;
  files_update_column: Files_Update_Column;
  files_var_pop_fields: ResolverTypeWrapper<Files_Var_Pop_Fields>;
  files_var_pop_order_by: Files_Var_Pop_Order_By;
  files_var_samp_fields: ResolverTypeWrapper<Files_Var_Samp_Fields>;
  files_var_samp_order_by: Files_Var_Samp_Order_By;
  files_variance_fields: ResolverTypeWrapper<Files_Variance_Fields>;
  files_variance_order_by: Files_Variance_Order_By;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: Order_By;
  query_root: ResolverTypeWrapper<{}>;
  subscription_root: ResolverTypeWrapper<{}>;
  timestamptz: ResolverTypeWrapper<Scalars['timestamptz']>;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  users: ResolverTypeWrapper<Users>;
  users_aggregate: ResolverTypeWrapper<Users_Aggregate>;
  users_aggregate_fields: ResolverTypeWrapper<Users_Aggregate_Fields>;
  users_aggregate_order_by: Users_Aggregate_Order_By;
  users_arr_rel_insert_input: Users_Arr_Rel_Insert_Input;
  users_bool_exp: Users_Bool_Exp;
  users_constraint: Users_Constraint;
  users_insert_input: Users_Insert_Input;
  users_max_fields: ResolverTypeWrapper<Users_Max_Fields>;
  users_max_order_by: Users_Max_Order_By;
  users_min_fields: ResolverTypeWrapper<Users_Min_Fields>;
  users_min_order_by: Users_Min_Order_By;
  users_mutation_response: ResolverTypeWrapper<Users_Mutation_Response>;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_select_column: Users_Select_Column;
  users_set_input: Users_Set_Input;
  users_update_column: Users_Update_Column;
  uuid: ResolverTypeWrapper<Scalars['uuid']>;
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  Int_comparison_exp: Int_Comparison_Exp;
  String: Scalars['String'];
  String_comparison_exp: String_Comparison_Exp;
  authProviderRequests: AuthProviderRequests;
  authProviderRequests_aggregate: AuthProviderRequests_Aggregate;
  authProviderRequests_aggregate_fields: AuthProviderRequests_Aggregate_Fields;
  authProviderRequests_bool_exp: AuthProviderRequests_Bool_Exp;
  authProviderRequests_insert_input: AuthProviderRequests_Insert_Input;
  authProviderRequests_max_fields: AuthProviderRequests_Max_Fields;
  authProviderRequests_min_fields: AuthProviderRequests_Min_Fields;
  authProviderRequests_mutation_response: AuthProviderRequests_Mutation_Response;
  authProviderRequests_on_conflict: AuthProviderRequests_On_Conflict;
  authProviderRequests_order_by: AuthProviderRequests_Order_By;
  authProviderRequests_pk_columns_input: AuthProviderRequests_Pk_Columns_Input;
  authProviderRequests_set_input: AuthProviderRequests_Set_Input;
  authProviders: AuthProviders;
  authProviders_aggregate: AuthProviders_Aggregate;
  authProviders_aggregate_fields: AuthProviders_Aggregate_Fields;
  authProviders_bool_exp: AuthProviders_Bool_Exp;
  authProviders_insert_input: AuthProviders_Insert_Input;
  authProviders_max_fields: AuthProviders_Max_Fields;
  authProviders_min_fields: AuthProviders_Min_Fields;
  authProviders_mutation_response: AuthProviders_Mutation_Response;
  authProviders_obj_rel_insert_input: AuthProviders_Obj_Rel_Insert_Input;
  authProviders_on_conflict: AuthProviders_On_Conflict;
  authProviders_order_by: AuthProviders_Order_By;
  authProviders_pk_columns_input: AuthProviders_Pk_Columns_Input;
  authProviders_set_input: AuthProviders_Set_Input;
  authRefreshTokens: AuthRefreshTokens;
  authRefreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  authRefreshTokens_aggregate_fields: AuthRefreshTokens_Aggregate_Fields;
  authRefreshTokens_aggregate_order_by: AuthRefreshTokens_Aggregate_Order_By;
  authRefreshTokens_arr_rel_insert_input: AuthRefreshTokens_Arr_Rel_Insert_Input;
  authRefreshTokens_bool_exp: AuthRefreshTokens_Bool_Exp;
  authRefreshTokens_insert_input: AuthRefreshTokens_Insert_Input;
  authRefreshTokens_max_fields: AuthRefreshTokens_Max_Fields;
  authRefreshTokens_max_order_by: AuthRefreshTokens_Max_Order_By;
  authRefreshTokens_min_fields: AuthRefreshTokens_Min_Fields;
  authRefreshTokens_min_order_by: AuthRefreshTokens_Min_Order_By;
  authRefreshTokens_mutation_response: AuthRefreshTokens_Mutation_Response;
  authRefreshTokens_on_conflict: AuthRefreshTokens_On_Conflict;
  authRefreshTokens_order_by: AuthRefreshTokens_Order_By;
  authRefreshTokens_pk_columns_input: AuthRefreshTokens_Pk_Columns_Input;
  authRefreshTokens_set_input: AuthRefreshTokens_Set_Input;
  authRoles: AuthRoles;
  authRoles_aggregate: AuthRoles_Aggregate;
  authRoles_aggregate_fields: AuthRoles_Aggregate_Fields;
  authRoles_bool_exp: AuthRoles_Bool_Exp;
  authRoles_insert_input: AuthRoles_Insert_Input;
  authRoles_max_fields: AuthRoles_Max_Fields;
  authRoles_min_fields: AuthRoles_Min_Fields;
  authRoles_mutation_response: AuthRoles_Mutation_Response;
  authRoles_obj_rel_insert_input: AuthRoles_Obj_Rel_Insert_Input;
  authRoles_on_conflict: AuthRoles_On_Conflict;
  authRoles_order_by: AuthRoles_Order_By;
  authRoles_pk_columns_input: AuthRoles_Pk_Columns_Input;
  authRoles_set_input: AuthRoles_Set_Input;
  authUserProviders: AuthUserProviders;
  authUserProviders_aggregate: AuthUserProviders_Aggregate;
  authUserProviders_aggregate_fields: AuthUserProviders_Aggregate_Fields;
  authUserProviders_aggregate_order_by: AuthUserProviders_Aggregate_Order_By;
  authUserProviders_arr_rel_insert_input: AuthUserProviders_Arr_Rel_Insert_Input;
  authUserProviders_bool_exp: AuthUserProviders_Bool_Exp;
  authUserProviders_insert_input: AuthUserProviders_Insert_Input;
  authUserProviders_max_fields: AuthUserProviders_Max_Fields;
  authUserProviders_max_order_by: AuthUserProviders_Max_Order_By;
  authUserProviders_min_fields: AuthUserProviders_Min_Fields;
  authUserProviders_min_order_by: AuthUserProviders_Min_Order_By;
  authUserProviders_mutation_response: AuthUserProviders_Mutation_Response;
  authUserProviders_on_conflict: AuthUserProviders_On_Conflict;
  authUserProviders_order_by: AuthUserProviders_Order_By;
  authUserProviders_pk_columns_input: AuthUserProviders_Pk_Columns_Input;
  authUserProviders_set_input: AuthUserProviders_Set_Input;
  authUserRoles: AuthUserRoles;
  authUserRoles_aggregate: AuthUserRoles_Aggregate;
  authUserRoles_aggregate_fields: AuthUserRoles_Aggregate_Fields;
  authUserRoles_aggregate_order_by: AuthUserRoles_Aggregate_Order_By;
  authUserRoles_arr_rel_insert_input: AuthUserRoles_Arr_Rel_Insert_Input;
  authUserRoles_bool_exp: AuthUserRoles_Bool_Exp;
  authUserRoles_insert_input: AuthUserRoles_Insert_Input;
  authUserRoles_max_fields: AuthUserRoles_Max_Fields;
  authUserRoles_max_order_by: AuthUserRoles_Max_Order_By;
  authUserRoles_min_fields: AuthUserRoles_Min_Fields;
  authUserRoles_min_order_by: AuthUserRoles_Min_Order_By;
  authUserRoles_mutation_response: AuthUserRoles_Mutation_Response;
  authUserRoles_on_conflict: AuthUserRoles_On_Conflict;
  authUserRoles_order_by: AuthUserRoles_Order_By;
  authUserRoles_pk_columns_input: AuthUserRoles_Pk_Columns_Input;
  authUserRoles_set_input: AuthUserRoles_Set_Input;
  auth_clubs: Auth_Clubs;
  auth_clubs_aggregate: Auth_Clubs_Aggregate;
  auth_clubs_aggregate_fields: Auth_Clubs_Aggregate_Fields;
  auth_clubs_aggregate_order_by: Auth_Clubs_Aggregate_Order_By;
  auth_clubs_arr_rel_insert_input: Auth_Clubs_Arr_Rel_Insert_Input;
  auth_clubs_bool_exp: Auth_Clubs_Bool_Exp;
  auth_clubs_insert_input: Auth_Clubs_Insert_Input;
  auth_clubs_max_fields: Auth_Clubs_Max_Fields;
  auth_clubs_max_order_by: Auth_Clubs_Max_Order_By;
  auth_clubs_min_fields: Auth_Clubs_Min_Fields;
  auth_clubs_min_order_by: Auth_Clubs_Min_Order_By;
  auth_clubs_mutation_response: Auth_Clubs_Mutation_Response;
  auth_clubs_on_conflict: Auth_Clubs_On_Conflict;
  auth_clubs_order_by: Auth_Clubs_Order_By;
  auth_clubs_pk_columns_input: Auth_Clubs_Pk_Columns_Input;
  auth_clubs_set_input: Auth_Clubs_Set_Input;
  auth_comments: Auth_Comments;
  auth_comments_aggregate: Auth_Comments_Aggregate;
  auth_comments_aggregate_fields: Auth_Comments_Aggregate_Fields;
  auth_comments_aggregate_order_by: Auth_Comments_Aggregate_Order_By;
  auth_comments_arr_rel_insert_input: Auth_Comments_Arr_Rel_Insert_Input;
  auth_comments_bool_exp: Auth_Comments_Bool_Exp;
  auth_comments_insert_input: Auth_Comments_Insert_Input;
  auth_comments_max_fields: Auth_Comments_Max_Fields;
  auth_comments_max_order_by: Auth_Comments_Max_Order_By;
  auth_comments_min_fields: Auth_Comments_Min_Fields;
  auth_comments_min_order_by: Auth_Comments_Min_Order_By;
  auth_comments_mutation_response: Auth_Comments_Mutation_Response;
  auth_comments_on_conflict: Auth_Comments_On_Conflict;
  auth_comments_order_by: Auth_Comments_Order_By;
  auth_comments_pk_columns_input: Auth_Comments_Pk_Columns_Input;
  auth_comments_set_input: Auth_Comments_Set_Input;
  auth_posts: Auth_Posts;
  auth_posts_aggregate: Auth_Posts_Aggregate;
  auth_posts_aggregate_fields: Auth_Posts_Aggregate_Fields;
  auth_posts_bool_exp: Auth_Posts_Bool_Exp;
  auth_posts_insert_input: Auth_Posts_Insert_Input;
  auth_posts_max_fields: Auth_Posts_Max_Fields;
  auth_posts_min_fields: Auth_Posts_Min_Fields;
  auth_posts_mutation_response: Auth_Posts_Mutation_Response;
  auth_posts_obj_rel_insert_input: Auth_Posts_Obj_Rel_Insert_Input;
  auth_posts_on_conflict: Auth_Posts_On_Conflict;
  auth_posts_order_by: Auth_Posts_Order_By;
  auth_posts_pk_columns_input: Auth_Posts_Pk_Columns_Input;
  auth_posts_set_input: Auth_Posts_Set_Input;
  buckets: Buckets;
  buckets_aggregate: Buckets_Aggregate;
  buckets_aggregate_fields: Buckets_Aggregate_Fields;
  buckets_avg_fields: Buckets_Avg_Fields;
  buckets_bool_exp: Buckets_Bool_Exp;
  buckets_inc_input: Buckets_Inc_Input;
  buckets_insert_input: Buckets_Insert_Input;
  buckets_max_fields: Buckets_Max_Fields;
  buckets_min_fields: Buckets_Min_Fields;
  buckets_mutation_response: Buckets_Mutation_Response;
  buckets_obj_rel_insert_input: Buckets_Obj_Rel_Insert_Input;
  buckets_on_conflict: Buckets_On_Conflict;
  buckets_order_by: Buckets_Order_By;
  buckets_pk_columns_input: Buckets_Pk_Columns_Input;
  buckets_set_input: Buckets_Set_Input;
  buckets_stddev_fields: Buckets_Stddev_Fields;
  buckets_stddev_pop_fields: Buckets_Stddev_Pop_Fields;
  buckets_stddev_samp_fields: Buckets_Stddev_Samp_Fields;
  buckets_sum_fields: Buckets_Sum_Fields;
  buckets_var_pop_fields: Buckets_Var_Pop_Fields;
  buckets_var_samp_fields: Buckets_Var_Samp_Fields;
  buckets_variance_fields: Buckets_Variance_Fields;
  citext: Scalars['citext'];
  citext_comparison_exp: Citext_Comparison_Exp;
  files: Files;
  files_aggregate: Files_Aggregate;
  files_aggregate_fields: Files_Aggregate_Fields;
  files_aggregate_order_by: Files_Aggregate_Order_By;
  files_arr_rel_insert_input: Files_Arr_Rel_Insert_Input;
  files_avg_fields: Files_Avg_Fields;
  files_avg_order_by: Files_Avg_Order_By;
  files_bool_exp: Files_Bool_Exp;
  files_inc_input: Files_Inc_Input;
  files_insert_input: Files_Insert_Input;
  files_max_fields: Files_Max_Fields;
  files_max_order_by: Files_Max_Order_By;
  files_min_fields: Files_Min_Fields;
  files_min_order_by: Files_Min_Order_By;
  files_mutation_response: Files_Mutation_Response;
  files_on_conflict: Files_On_Conflict;
  files_order_by: Files_Order_By;
  files_pk_columns_input: Files_Pk_Columns_Input;
  files_set_input: Files_Set_Input;
  files_stddev_fields: Files_Stddev_Fields;
  files_stddev_order_by: Files_Stddev_Order_By;
  files_stddev_pop_fields: Files_Stddev_Pop_Fields;
  files_stddev_pop_order_by: Files_Stddev_Pop_Order_By;
  files_stddev_samp_fields: Files_Stddev_Samp_Fields;
  files_stddev_samp_order_by: Files_Stddev_Samp_Order_By;
  files_sum_fields: Files_Sum_Fields;
  files_sum_order_by: Files_Sum_Order_By;
  files_var_pop_fields: Files_Var_Pop_Fields;
  files_var_pop_order_by: Files_Var_Pop_Order_By;
  files_var_samp_fields: Files_Var_Samp_Fields;
  files_var_samp_order_by: Files_Var_Samp_Order_By;
  files_variance_fields: Files_Variance_Fields;
  files_variance_order_by: Files_Variance_Order_By;
  mutation_root: {};
  query_root: {};
  subscription_root: {};
  timestamptz: Scalars['timestamptz'];
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  users: Users;
  users_aggregate: Users_Aggregate;
  users_aggregate_fields: Users_Aggregate_Fields;
  users_aggregate_order_by: Users_Aggregate_Order_By;
  users_arr_rel_insert_input: Users_Arr_Rel_Insert_Input;
  users_bool_exp: Users_Bool_Exp;
  users_insert_input: Users_Insert_Input;
  users_max_fields: Users_Max_Fields;
  users_max_order_by: Users_Max_Order_By;
  users_min_fields: Users_Min_Fields;
  users_min_order_by: Users_Min_Order_By;
  users_mutation_response: Users_Mutation_Response;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_set_input: Users_Set_Input;
  uuid: Scalars['uuid'];
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

export type CachedDirectiveArgs = {
  refresh?: Scalars['Boolean'];
  ttl?: Scalars['Int'];
};

export type CachedDirectiveResolver<Result, Parent, ContextType = any, Args = CachedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AuthProviderRequestsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authProviderRequests'] = ResolversParentTypes['authProviderRequests']> = {
  id: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  redirectUrl: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthProviderRequests_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['authProviderRequests_aggregate'] = ResolversParentTypes['authProviderRequests_aggregate']> = {
  aggregate: Resolver<Maybe<ResolversTypes['authProviderRequests_aggregate_fields']>, ParentType, ContextType>;
  nodes: Resolver<Array<ResolversTypes['authProviderRequests']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthProviderRequests_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authProviderRequests_aggregate_fields'] = ResolversParentTypes['authProviderRequests_aggregate_fields']> = {
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<AuthProviderRequests_Aggregate_FieldsCountArgs, never>>;
  max: Resolver<Maybe<ResolversTypes['authProviderRequests_max_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<ResolversTypes['authProviderRequests_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthProviderRequests_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authProviderRequests_max_fields'] = ResolversParentTypes['authProviderRequests_max_fields']> = {
  id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  redirectUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthProviderRequests_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authProviderRequests_min_fields'] = ResolversParentTypes['authProviderRequests_min_fields']> = {
  id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  redirectUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthProviderRequests_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['authProviderRequests_mutation_response'] = ResolversParentTypes['authProviderRequests_mutation_response']> = {
  affected_rows: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning: Resolver<Array<ResolversTypes['authProviderRequests']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthProvidersResolvers<ContextType = any, ParentType extends ResolversParentTypes['authProviders'] = ResolversParentTypes['authProviders']> = {
  id: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userProviders: Resolver<Array<ResolversTypes['authUserProviders']>, ParentType, ContextType, RequireFields<AuthProvidersUserProvidersArgs, never>>;
  userProviders_aggregate: Resolver<ResolversTypes['authUserProviders_aggregate'], ParentType, ContextType, RequireFields<AuthProvidersUserProviders_AggregateArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthProviders_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['authProviders_aggregate'] = ResolversParentTypes['authProviders_aggregate']> = {
  aggregate: Resolver<Maybe<ResolversTypes['authProviders_aggregate_fields']>, ParentType, ContextType>;
  nodes: Resolver<Array<ResolversTypes['authProviders']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthProviders_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authProviders_aggregate_fields'] = ResolversParentTypes['authProviders_aggregate_fields']> = {
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<AuthProviders_Aggregate_FieldsCountArgs, never>>;
  max: Resolver<Maybe<ResolversTypes['authProviders_max_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<ResolversTypes['authProviders_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthProviders_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authProviders_max_fields'] = ResolversParentTypes['authProviders_max_fields']> = {
  id: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthProviders_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authProviders_min_fields'] = ResolversParentTypes['authProviders_min_fields']> = {
  id: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthProviders_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['authProviders_mutation_response'] = ResolversParentTypes['authProviders_mutation_response']> = {
  affected_rows: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning: Resolver<Array<ResolversTypes['authProviders']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthRefreshTokensResolvers<ContextType = any, ParentType extends ResolversParentTypes['authRefreshTokens'] = ResolversParentTypes['authRefreshTokens']> = {
  createdAt: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  expiresAt: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  refreshToken: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  user: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  userId: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthRefreshTokens_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['authRefreshTokens_aggregate'] = ResolversParentTypes['authRefreshTokens_aggregate']> = {
  aggregate: Resolver<Maybe<ResolversTypes['authRefreshTokens_aggregate_fields']>, ParentType, ContextType>;
  nodes: Resolver<Array<ResolversTypes['authRefreshTokens']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthRefreshTokens_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authRefreshTokens_aggregate_fields'] = ResolversParentTypes['authRefreshTokens_aggregate_fields']> = {
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<AuthRefreshTokens_Aggregate_FieldsCountArgs, never>>;
  max: Resolver<Maybe<ResolversTypes['authRefreshTokens_max_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<ResolversTypes['authRefreshTokens_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthRefreshTokens_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authRefreshTokens_max_fields'] = ResolversParentTypes['authRefreshTokens_max_fields']> = {
  createdAt: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  expiresAt: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  refreshToken: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  userId: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthRefreshTokens_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authRefreshTokens_min_fields'] = ResolversParentTypes['authRefreshTokens_min_fields']> = {
  createdAt: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  expiresAt: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  refreshToken: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  userId: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthRefreshTokens_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['authRefreshTokens_mutation_response'] = ResolversParentTypes['authRefreshTokens_mutation_response']> = {
  affected_rows: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning: Resolver<Array<ResolversTypes['authRefreshTokens']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthRolesResolvers<ContextType = any, ParentType extends ResolversParentTypes['authRoles'] = ResolversParentTypes['authRoles']> = {
  role: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userRoles: Resolver<Array<ResolversTypes['authUserRoles']>, ParentType, ContextType, RequireFields<AuthRolesUserRolesArgs, never>>;
  userRoles_aggregate: Resolver<ResolversTypes['authUserRoles_aggregate'], ParentType, ContextType, RequireFields<AuthRolesUserRoles_AggregateArgs, never>>;
  usersByDefaultRole: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType, RequireFields<AuthRolesUsersByDefaultRoleArgs, never>>;
  usersByDefaultRole_aggregate: Resolver<ResolversTypes['users_aggregate'], ParentType, ContextType, RequireFields<AuthRolesUsersByDefaultRole_AggregateArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthRoles_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['authRoles_aggregate'] = ResolversParentTypes['authRoles_aggregate']> = {
  aggregate: Resolver<Maybe<ResolversTypes['authRoles_aggregate_fields']>, ParentType, ContextType>;
  nodes: Resolver<Array<ResolversTypes['authRoles']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthRoles_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authRoles_aggregate_fields'] = ResolversParentTypes['authRoles_aggregate_fields']> = {
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<AuthRoles_Aggregate_FieldsCountArgs, never>>;
  max: Resolver<Maybe<ResolversTypes['authRoles_max_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<ResolversTypes['authRoles_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthRoles_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authRoles_max_fields'] = ResolversParentTypes['authRoles_max_fields']> = {
  role: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthRoles_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authRoles_min_fields'] = ResolversParentTypes['authRoles_min_fields']> = {
  role: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthRoles_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['authRoles_mutation_response'] = ResolversParentTypes['authRoles_mutation_response']> = {
  affected_rows: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning: Resolver<Array<ResolversTypes['authRoles']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthUserProvidersResolvers<ContextType = any, ParentType extends ResolversParentTypes['authUserProviders'] = ResolversParentTypes['authUserProviders']> = {
  accessToken: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  provider: Resolver<ResolversTypes['authProviders'], ParentType, ContextType>;
  providerId: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  providerUserId: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refreshToken: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  userId: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthUserProviders_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['authUserProviders_aggregate'] = ResolversParentTypes['authUserProviders_aggregate']> = {
  aggregate: Resolver<Maybe<ResolversTypes['authUserProviders_aggregate_fields']>, ParentType, ContextType>;
  nodes: Resolver<Array<ResolversTypes['authUserProviders']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthUserProviders_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authUserProviders_aggregate_fields'] = ResolversParentTypes['authUserProviders_aggregate_fields']> = {
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<AuthUserProviders_Aggregate_FieldsCountArgs, never>>;
  max: Resolver<Maybe<ResolversTypes['authUserProviders_max_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<ResolversTypes['authUserProviders_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthUserProviders_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authUserProviders_max_fields'] = ResolversParentTypes['authUserProviders_max_fields']> = {
  accessToken: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  providerId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerUserId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refreshToken: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  userId: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthUserProviders_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authUserProviders_min_fields'] = ResolversParentTypes['authUserProviders_min_fields']> = {
  accessToken: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  providerId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerUserId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refreshToken: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  userId: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthUserProviders_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['authUserProviders_mutation_response'] = ResolversParentTypes['authUserProviders_mutation_response']> = {
  affected_rows: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning: Resolver<Array<ResolversTypes['authUserProviders']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthUserRolesResolvers<ContextType = any, ParentType extends ResolversParentTypes['authUserRoles'] = ResolversParentTypes['authUserRoles']> = {
  createdAt: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  role: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roleByRole: Resolver<ResolversTypes['authRoles'], ParentType, ContextType>;
  user: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  userId: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthUserRoles_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['authUserRoles_aggregate'] = ResolversParentTypes['authUserRoles_aggregate']> = {
  aggregate: Resolver<Maybe<ResolversTypes['authUserRoles_aggregate_fields']>, ParentType, ContextType>;
  nodes: Resolver<Array<ResolversTypes['authUserRoles']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthUserRoles_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authUserRoles_aggregate_fields'] = ResolversParentTypes['authUserRoles_aggregate_fields']> = {
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<AuthUserRoles_Aggregate_FieldsCountArgs, never>>;
  max: Resolver<Maybe<ResolversTypes['authUserRoles_max_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<ResolversTypes['authUserRoles_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthUserRoles_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authUserRoles_max_fields'] = ResolversParentTypes['authUserRoles_max_fields']> = {
  createdAt: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  role: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthUserRoles_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authUserRoles_min_fields'] = ResolversParentTypes['authUserRoles_min_fields']> = {
  createdAt: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  role: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthUserRoles_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['authUserRoles_mutation_response'] = ResolversParentTypes['authUserRoles_mutation_response']> = {
  affected_rows: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning: Resolver<Array<ResolversTypes['authUserRoles']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auth_ClubsResolvers<ContextType = any, ParentType extends ResolversParentTypes['auth_clubs'] = ResolversParentTypes['auth_clubs']> = {
  author_id: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  created_at: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auth_Clubs_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['auth_clubs_aggregate'] = ResolversParentTypes['auth_clubs_aggregate']> = {
  aggregate: Resolver<Maybe<ResolversTypes['auth_clubs_aggregate_fields']>, ParentType, ContextType>;
  nodes: Resolver<Array<ResolversTypes['auth_clubs']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auth_Clubs_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['auth_clubs_aggregate_fields'] = ResolversParentTypes['auth_clubs_aggregate_fields']> = {
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Auth_Clubs_Aggregate_FieldsCountArgs, never>>;
  max: Resolver<Maybe<ResolversTypes['auth_clubs_max_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<ResolversTypes['auth_clubs_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auth_Clubs_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['auth_clubs_max_fields'] = ResolversParentTypes['auth_clubs_max_fields']> = {
  author_id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auth_Clubs_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['auth_clubs_min_fields'] = ResolversParentTypes['auth_clubs_min_fields']> = {
  author_id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auth_Clubs_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['auth_clubs_mutation_response'] = ResolversParentTypes['auth_clubs_mutation_response']> = {
  affected_rows: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning: Resolver<Array<ResolversTypes['auth_clubs']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auth_CommentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['auth_comments'] = ResolversParentTypes['auth_comments']> = {
  author: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  author_id: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  content: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  post: Resolver<Maybe<ResolversTypes['auth_posts']>, ParentType, ContextType>;
  post_id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auth_Comments_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['auth_comments_aggregate'] = ResolversParentTypes['auth_comments_aggregate']> = {
  aggregate: Resolver<Maybe<ResolversTypes['auth_comments_aggregate_fields']>, ParentType, ContextType>;
  nodes: Resolver<Array<ResolversTypes['auth_comments']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auth_Comments_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['auth_comments_aggregate_fields'] = ResolversParentTypes['auth_comments_aggregate_fields']> = {
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Auth_Comments_Aggregate_FieldsCountArgs, never>>;
  max: Resolver<Maybe<ResolversTypes['auth_comments_max_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<ResolversTypes['auth_comments_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auth_Comments_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['auth_comments_max_fields'] = ResolversParentTypes['auth_comments_max_fields']> = {
  author_id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  content: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  post_id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auth_Comments_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['auth_comments_min_fields'] = ResolversParentTypes['auth_comments_min_fields']> = {
  author_id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  content: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  post_id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auth_Comments_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['auth_comments_mutation_response'] = ResolversParentTypes['auth_comments_mutation_response']> = {
  affected_rows: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning: Resolver<Array<ResolversTypes['auth_comments']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auth_PostsResolvers<ContextType = any, ParentType extends ResolversParentTypes['auth_posts'] = ResolversParentTypes['auth_posts']> = {
  author: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  author_id: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  club: Resolver<Array<ResolversTypes['auth_clubs']>, ParentType, ContextType, RequireFields<Auth_PostsClubArgs, never>>;
  club_aggregate: Resolver<ResolversTypes['auth_clubs_aggregate'], ParentType, ContextType, RequireFields<Auth_PostsClub_AggregateArgs, never>>;
  club_id: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  comments: Resolver<Array<ResolversTypes['auth_comments']>, ParentType, ContextType, RequireFields<Auth_PostsCommentsArgs, never>>;
  comments_aggregate: Resolver<ResolversTypes['auth_comments_aggregate'], ParentType, ContextType, RequireFields<Auth_PostsComments_AggregateArgs, never>>;
  content: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  image: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auth_Posts_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['auth_posts_aggregate'] = ResolversParentTypes['auth_posts_aggregate']> = {
  aggregate: Resolver<Maybe<ResolversTypes['auth_posts_aggregate_fields']>, ParentType, ContextType>;
  nodes: Resolver<Array<ResolversTypes['auth_posts']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auth_Posts_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['auth_posts_aggregate_fields'] = ResolversParentTypes['auth_posts_aggregate_fields']> = {
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Auth_Posts_Aggregate_FieldsCountArgs, never>>;
  max: Resolver<Maybe<ResolversTypes['auth_posts_max_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<ResolversTypes['auth_posts_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auth_Posts_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['auth_posts_max_fields'] = ResolversParentTypes['auth_posts_max_fields']> = {
  author_id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  club_id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  content: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  image: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auth_Posts_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['auth_posts_min_fields'] = ResolversParentTypes['auth_posts_min_fields']> = {
  author_id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  club_id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  content: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  image: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auth_Posts_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['auth_posts_mutation_response'] = ResolversParentTypes['auth_posts_mutation_response']> = {
  affected_rows: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning: Resolver<Array<ResolversTypes['auth_posts']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BucketsResolvers<ContextType = any, ParentType extends ResolversParentTypes['buckets'] = ResolversParentTypes['buckets']> = {
  cacheControl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  downloadExpiration: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  files: Resolver<Array<ResolversTypes['files']>, ParentType, ContextType, RequireFields<BucketsFilesArgs, never>>;
  files_aggregate: Resolver<ResolversTypes['files_aggregate'], ParentType, ContextType, RequireFields<BucketsFiles_AggregateArgs, never>>;
  id: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maxUploadFileSize: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  minUploadFileSize: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  presignedUrlsEnabled: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Buckets_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['buckets_aggregate'] = ResolversParentTypes['buckets_aggregate']> = {
  aggregate: Resolver<Maybe<ResolversTypes['buckets_aggregate_fields']>, ParentType, ContextType>;
  nodes: Resolver<Array<ResolversTypes['buckets']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Buckets_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['buckets_aggregate_fields'] = ResolversParentTypes['buckets_aggregate_fields']> = {
  avg: Resolver<Maybe<ResolversTypes['buckets_avg_fields']>, ParentType, ContextType>;
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Buckets_Aggregate_FieldsCountArgs, never>>;
  max: Resolver<Maybe<ResolversTypes['buckets_max_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<ResolversTypes['buckets_min_fields']>, ParentType, ContextType>;
  stddev: Resolver<Maybe<ResolversTypes['buckets_stddev_fields']>, ParentType, ContextType>;
  stddev_pop: Resolver<Maybe<ResolversTypes['buckets_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp: Resolver<Maybe<ResolversTypes['buckets_stddev_samp_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<ResolversTypes['buckets_sum_fields']>, ParentType, ContextType>;
  var_pop: Resolver<Maybe<ResolversTypes['buckets_var_pop_fields']>, ParentType, ContextType>;
  var_samp: Resolver<Maybe<ResolversTypes['buckets_var_samp_fields']>, ParentType, ContextType>;
  variance: Resolver<Maybe<ResolversTypes['buckets_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Buckets_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['buckets_avg_fields'] = ResolversParentTypes['buckets_avg_fields']> = {
  downloadExpiration: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxUploadFileSize: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  minUploadFileSize: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Buckets_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['buckets_max_fields'] = ResolversParentTypes['buckets_max_fields']> = {
  cacheControl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  downloadExpiration: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxUploadFileSize: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minUploadFileSize: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Buckets_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['buckets_min_fields'] = ResolversParentTypes['buckets_min_fields']> = {
  cacheControl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  downloadExpiration: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxUploadFileSize: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minUploadFileSize: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Buckets_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['buckets_mutation_response'] = ResolversParentTypes['buckets_mutation_response']> = {
  affected_rows: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning: Resolver<Array<ResolversTypes['buckets']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Buckets_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['buckets_stddev_fields'] = ResolversParentTypes['buckets_stddev_fields']> = {
  downloadExpiration: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxUploadFileSize: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  minUploadFileSize: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Buckets_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['buckets_stddev_pop_fields'] = ResolversParentTypes['buckets_stddev_pop_fields']> = {
  downloadExpiration: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxUploadFileSize: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  minUploadFileSize: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Buckets_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['buckets_stddev_samp_fields'] = ResolversParentTypes['buckets_stddev_samp_fields']> = {
  downloadExpiration: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxUploadFileSize: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  minUploadFileSize: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Buckets_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['buckets_sum_fields'] = ResolversParentTypes['buckets_sum_fields']> = {
  downloadExpiration: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxUploadFileSize: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minUploadFileSize: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Buckets_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['buckets_var_pop_fields'] = ResolversParentTypes['buckets_var_pop_fields']> = {
  downloadExpiration: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxUploadFileSize: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  minUploadFileSize: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Buckets_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['buckets_var_samp_fields'] = ResolversParentTypes['buckets_var_samp_fields']> = {
  downloadExpiration: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxUploadFileSize: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  minUploadFileSize: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Buckets_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['buckets_variance_fields'] = ResolversParentTypes['buckets_variance_fields']> = {
  downloadExpiration: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxUploadFileSize: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  minUploadFileSize: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface CitextScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['citext'], any> {
  name: 'citext';
}

export type FilesResolvers<ContextType = any, ParentType extends ResolversParentTypes['files'] = ResolversParentTypes['files']> = {
  bucket: Resolver<ResolversTypes['buckets'], ParentType, ContextType>;
  bucketId: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  etag: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  isUploaded: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  mimeType: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  uploadedByUserId: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Files_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['files_aggregate'] = ResolversParentTypes['files_aggregate']> = {
  aggregate: Resolver<Maybe<ResolversTypes['files_aggregate_fields']>, ParentType, ContextType>;
  nodes: Resolver<Array<ResolversTypes['files']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Files_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['files_aggregate_fields'] = ResolversParentTypes['files_aggregate_fields']> = {
  avg: Resolver<Maybe<ResolversTypes['files_avg_fields']>, ParentType, ContextType>;
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Files_Aggregate_FieldsCountArgs, never>>;
  max: Resolver<Maybe<ResolversTypes['files_max_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<ResolversTypes['files_min_fields']>, ParentType, ContextType>;
  stddev: Resolver<Maybe<ResolversTypes['files_stddev_fields']>, ParentType, ContextType>;
  stddev_pop: Resolver<Maybe<ResolversTypes['files_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp: Resolver<Maybe<ResolversTypes['files_stddev_samp_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<ResolversTypes['files_sum_fields']>, ParentType, ContextType>;
  var_pop: Resolver<Maybe<ResolversTypes['files_var_pop_fields']>, ParentType, ContextType>;
  var_samp: Resolver<Maybe<ResolversTypes['files_var_samp_fields']>, ParentType, ContextType>;
  variance: Resolver<Maybe<ResolversTypes['files_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Files_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['files_avg_fields'] = ResolversParentTypes['files_avg_fields']> = {
  size: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Files_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['files_max_fields'] = ResolversParentTypes['files_max_fields']> = {
  bucketId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  etag: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  mimeType: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  uploadedByUserId: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Files_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['files_min_fields'] = ResolversParentTypes['files_min_fields']> = {
  bucketId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  etag: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  mimeType: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  uploadedByUserId: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Files_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['files_mutation_response'] = ResolversParentTypes['files_mutation_response']> = {
  affected_rows: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning: Resolver<Array<ResolversTypes['files']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Files_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['files_stddev_fields'] = ResolversParentTypes['files_stddev_fields']> = {
  size: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Files_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['files_stddev_pop_fields'] = ResolversParentTypes['files_stddev_pop_fields']> = {
  size: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Files_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['files_stddev_samp_fields'] = ResolversParentTypes['files_stddev_samp_fields']> = {
  size: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Files_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['files_sum_fields'] = ResolversParentTypes['files_sum_fields']> = {
  size: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Files_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['files_var_pop_fields'] = ResolversParentTypes['files_var_pop_fields']> = {
  size: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Files_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['files_var_samp_fields'] = ResolversParentTypes['files_var_samp_fields']> = {
  size: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Files_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['files_variance_fields'] = ResolversParentTypes['files_variance_fields']> = {
  size: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mutation_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']> = {
  deleteAuthProvider: Resolver<Maybe<ResolversTypes['authProviders']>, ParentType, ContextType, RequireFields<Mutation_RootDeleteAuthProviderArgs, 'id'>>;
  deleteAuthProviderRequest: Resolver<Maybe<ResolversTypes['authProviderRequests']>, ParentType, ContextType, RequireFields<Mutation_RootDeleteAuthProviderRequestArgs, 'id'>>;
  deleteAuthProviderRequests: Resolver<Maybe<ResolversTypes['authProviderRequests_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDeleteAuthProviderRequestsArgs, 'where'>>;
  deleteAuthProviders: Resolver<Maybe<ResolversTypes['authProviders_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDeleteAuthProvidersArgs, 'where'>>;
  deleteAuthRefreshToken: Resolver<Maybe<ResolversTypes['authRefreshTokens']>, ParentType, ContextType, RequireFields<Mutation_RootDeleteAuthRefreshTokenArgs, 'refreshToken'>>;
  deleteAuthRefreshTokens: Resolver<Maybe<ResolversTypes['authRefreshTokens_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDeleteAuthRefreshTokensArgs, 'where'>>;
  deleteAuthRole: Resolver<Maybe<ResolversTypes['authRoles']>, ParentType, ContextType, RequireFields<Mutation_RootDeleteAuthRoleArgs, 'role'>>;
  deleteAuthRoles: Resolver<Maybe<ResolversTypes['authRoles_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDeleteAuthRolesArgs, 'where'>>;
  deleteAuthUserProvider: Resolver<Maybe<ResolversTypes['authUserProviders']>, ParentType, ContextType, RequireFields<Mutation_RootDeleteAuthUserProviderArgs, 'id'>>;
  deleteAuthUserProviders: Resolver<Maybe<ResolversTypes['authUserProviders_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDeleteAuthUserProvidersArgs, 'where'>>;
  deleteAuthUserRole: Resolver<Maybe<ResolversTypes['authUserRoles']>, ParentType, ContextType, RequireFields<Mutation_RootDeleteAuthUserRoleArgs, 'id'>>;
  deleteAuthUserRoles: Resolver<Maybe<ResolversTypes['authUserRoles_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDeleteAuthUserRolesArgs, 'where'>>;
  deleteBucket: Resolver<Maybe<ResolversTypes['buckets']>, ParentType, ContextType, RequireFields<Mutation_RootDeleteBucketArgs, 'id'>>;
  deleteBuckets: Resolver<Maybe<ResolversTypes['buckets_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDeleteBucketsArgs, 'where'>>;
  deleteFile: Resolver<Maybe<ResolversTypes['files']>, ParentType, ContextType, RequireFields<Mutation_RootDeleteFileArgs, 'id'>>;
  deleteFiles: Resolver<Maybe<ResolversTypes['files_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDeleteFilesArgs, 'where'>>;
  deleteUser: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootDeleteUserArgs, 'id'>>;
  deleteUsers: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDeleteUsersArgs, 'where'>>;
  delete_auth_clubs: Resolver<Maybe<ResolversTypes['auth_clubs_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Auth_ClubsArgs, 'where'>>;
  delete_auth_clubs_by_pk: Resolver<Maybe<ResolversTypes['auth_clubs']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Auth_Clubs_By_PkArgs, 'name'>>;
  delete_auth_comments: Resolver<Maybe<ResolversTypes['auth_comments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Auth_CommentsArgs, 'where'>>;
  delete_auth_comments_by_pk: Resolver<Maybe<ResolversTypes['auth_comments']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Auth_Comments_By_PkArgs, 'id'>>;
  delete_auth_posts: Resolver<Maybe<ResolversTypes['auth_posts_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Auth_PostsArgs, 'where'>>;
  delete_auth_posts_by_pk: Resolver<Maybe<ResolversTypes['auth_posts']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Auth_Posts_By_PkArgs, 'id'>>;
  insertAuthProvider: Resolver<Maybe<ResolversTypes['authProviders']>, ParentType, ContextType, RequireFields<Mutation_RootInsertAuthProviderArgs, 'object'>>;
  insertAuthProviderRequest: Resolver<Maybe<ResolversTypes['authProviderRequests']>, ParentType, ContextType, RequireFields<Mutation_RootInsertAuthProviderRequestArgs, 'object'>>;
  insertAuthProviderRequests: Resolver<Maybe<ResolversTypes['authProviderRequests_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsertAuthProviderRequestsArgs, 'objects'>>;
  insertAuthProviders: Resolver<Maybe<ResolversTypes['authProviders_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsertAuthProvidersArgs, 'objects'>>;
  insertAuthRefreshToken: Resolver<Maybe<ResolversTypes['authRefreshTokens']>, ParentType, ContextType, RequireFields<Mutation_RootInsertAuthRefreshTokenArgs, 'object'>>;
  insertAuthRefreshTokens: Resolver<Maybe<ResolversTypes['authRefreshTokens_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsertAuthRefreshTokensArgs, 'objects'>>;
  insertAuthRole: Resolver<Maybe<ResolversTypes['authRoles']>, ParentType, ContextType, RequireFields<Mutation_RootInsertAuthRoleArgs, 'object'>>;
  insertAuthRoles: Resolver<Maybe<ResolversTypes['authRoles_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsertAuthRolesArgs, 'objects'>>;
  insertAuthUserProvider: Resolver<Maybe<ResolversTypes['authUserProviders']>, ParentType, ContextType, RequireFields<Mutation_RootInsertAuthUserProviderArgs, 'object'>>;
  insertAuthUserProviders: Resolver<Maybe<ResolversTypes['authUserProviders_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsertAuthUserProvidersArgs, 'objects'>>;
  insertAuthUserRole: Resolver<Maybe<ResolversTypes['authUserRoles']>, ParentType, ContextType, RequireFields<Mutation_RootInsertAuthUserRoleArgs, 'object'>>;
  insertAuthUserRoles: Resolver<Maybe<ResolversTypes['authUserRoles_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsertAuthUserRolesArgs, 'objects'>>;
  insertBucket: Resolver<Maybe<ResolversTypes['buckets']>, ParentType, ContextType, RequireFields<Mutation_RootInsertBucketArgs, 'object'>>;
  insertBuckets: Resolver<Maybe<ResolversTypes['buckets_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsertBucketsArgs, 'objects'>>;
  insertFile: Resolver<Maybe<ResolversTypes['files']>, ParentType, ContextType, RequireFields<Mutation_RootInsertFileArgs, 'object'>>;
  insertFiles: Resolver<Maybe<ResolversTypes['files_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsertFilesArgs, 'objects'>>;
  insertUser: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootInsertUserArgs, 'object'>>;
  insertUsers: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsertUsersArgs, 'objects'>>;
  insert_auth_clubs: Resolver<Maybe<ResolversTypes['auth_clubs_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Auth_ClubsArgs, 'objects'>>;
  insert_auth_clubs_one: Resolver<Maybe<ResolversTypes['auth_clubs']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Auth_Clubs_OneArgs, 'object'>>;
  insert_auth_comments: Resolver<Maybe<ResolversTypes['auth_comments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Auth_CommentsArgs, 'objects'>>;
  insert_auth_comments_one: Resolver<Maybe<ResolversTypes['auth_comments']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Auth_Comments_OneArgs, 'object'>>;
  insert_auth_posts: Resolver<Maybe<ResolversTypes['auth_posts_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Auth_PostsArgs, 'objects'>>;
  insert_auth_posts_one: Resolver<Maybe<ResolversTypes['auth_posts']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Auth_Posts_OneArgs, 'object'>>;
  updateAuthProvider: Resolver<Maybe<ResolversTypes['authProviders']>, ParentType, ContextType, RequireFields<Mutation_RootUpdateAuthProviderArgs, 'pk_columns'>>;
  updateAuthProviderRequest: Resolver<Maybe<ResolversTypes['authProviderRequests']>, ParentType, ContextType, RequireFields<Mutation_RootUpdateAuthProviderRequestArgs, 'pk_columns'>>;
  updateAuthProviderRequests: Resolver<Maybe<ResolversTypes['authProviderRequests_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdateAuthProviderRequestsArgs, 'where'>>;
  updateAuthProviders: Resolver<Maybe<ResolversTypes['authProviders_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdateAuthProvidersArgs, 'where'>>;
  updateAuthRefreshToken: Resolver<Maybe<ResolversTypes['authRefreshTokens']>, ParentType, ContextType, RequireFields<Mutation_RootUpdateAuthRefreshTokenArgs, 'pk_columns'>>;
  updateAuthRefreshTokens: Resolver<Maybe<ResolversTypes['authRefreshTokens_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdateAuthRefreshTokensArgs, 'where'>>;
  updateAuthRole: Resolver<Maybe<ResolversTypes['authRoles']>, ParentType, ContextType, RequireFields<Mutation_RootUpdateAuthRoleArgs, 'pk_columns'>>;
  updateAuthRoles: Resolver<Maybe<ResolversTypes['authRoles_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdateAuthRolesArgs, 'where'>>;
  updateAuthUserProvider: Resolver<Maybe<ResolversTypes['authUserProviders']>, ParentType, ContextType, RequireFields<Mutation_RootUpdateAuthUserProviderArgs, 'pk_columns'>>;
  updateAuthUserProviders: Resolver<Maybe<ResolversTypes['authUserProviders_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdateAuthUserProvidersArgs, 'where'>>;
  updateAuthUserRole: Resolver<Maybe<ResolversTypes['authUserRoles']>, ParentType, ContextType, RequireFields<Mutation_RootUpdateAuthUserRoleArgs, 'pk_columns'>>;
  updateAuthUserRoles: Resolver<Maybe<ResolversTypes['authUserRoles_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdateAuthUserRolesArgs, 'where'>>;
  updateBucket: Resolver<Maybe<ResolversTypes['buckets']>, ParentType, ContextType, RequireFields<Mutation_RootUpdateBucketArgs, 'pk_columns'>>;
  updateBuckets: Resolver<Maybe<ResolversTypes['buckets_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdateBucketsArgs, 'where'>>;
  updateFile: Resolver<Maybe<ResolversTypes['files']>, ParentType, ContextType, RequireFields<Mutation_RootUpdateFileArgs, 'pk_columns'>>;
  updateFiles: Resolver<Maybe<ResolversTypes['files_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdateFilesArgs, 'where'>>;
  updateUser: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootUpdateUserArgs, 'pk_columns'>>;
  updateUsers: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdateUsersArgs, 'where'>>;
  update_auth_clubs: Resolver<Maybe<ResolversTypes['auth_clubs_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Auth_ClubsArgs, 'where'>>;
  update_auth_clubs_by_pk: Resolver<Maybe<ResolversTypes['auth_clubs']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Auth_Clubs_By_PkArgs, 'pk_columns'>>;
  update_auth_comments: Resolver<Maybe<ResolversTypes['auth_comments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Auth_CommentsArgs, 'where'>>;
  update_auth_comments_by_pk: Resolver<Maybe<ResolversTypes['auth_comments']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Auth_Comments_By_PkArgs, 'pk_columns'>>;
  update_auth_posts: Resolver<Maybe<ResolversTypes['auth_posts_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Auth_PostsArgs, 'where'>>;
  update_auth_posts_by_pk: Resolver<Maybe<ResolversTypes['auth_posts']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Auth_Posts_By_PkArgs, 'pk_columns'>>;
};

export type Query_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root']> = {
  authProvider: Resolver<Maybe<ResolversTypes['authProviders']>, ParentType, ContextType, RequireFields<Query_RootAuthProviderArgs, 'id'>>;
  authProviderRequest: Resolver<Maybe<ResolversTypes['authProviderRequests']>, ParentType, ContextType, RequireFields<Query_RootAuthProviderRequestArgs, 'id'>>;
  authProviderRequests: Resolver<Array<ResolversTypes['authProviderRequests']>, ParentType, ContextType, RequireFields<Query_RootAuthProviderRequestsArgs, never>>;
  authProviderRequestsAggregate: Resolver<ResolversTypes['authProviderRequests_aggregate'], ParentType, ContextType, RequireFields<Query_RootAuthProviderRequestsAggregateArgs, never>>;
  authProviders: Resolver<Array<ResolversTypes['authProviders']>, ParentType, ContextType, RequireFields<Query_RootAuthProvidersArgs, never>>;
  authProvidersAggregate: Resolver<ResolversTypes['authProviders_aggregate'], ParentType, ContextType, RequireFields<Query_RootAuthProvidersAggregateArgs, never>>;
  authRefreshToken: Resolver<Maybe<ResolversTypes['authRefreshTokens']>, ParentType, ContextType, RequireFields<Query_RootAuthRefreshTokenArgs, 'refreshToken'>>;
  authRefreshTokens: Resolver<Array<ResolversTypes['authRefreshTokens']>, ParentType, ContextType, RequireFields<Query_RootAuthRefreshTokensArgs, never>>;
  authRefreshTokensAggregate: Resolver<ResolversTypes['authRefreshTokens_aggregate'], ParentType, ContextType, RequireFields<Query_RootAuthRefreshTokensAggregateArgs, never>>;
  authRole: Resolver<Maybe<ResolversTypes['authRoles']>, ParentType, ContextType, RequireFields<Query_RootAuthRoleArgs, 'role'>>;
  authRoles: Resolver<Array<ResolversTypes['authRoles']>, ParentType, ContextType, RequireFields<Query_RootAuthRolesArgs, never>>;
  authRolesAggregate: Resolver<ResolversTypes['authRoles_aggregate'], ParentType, ContextType, RequireFields<Query_RootAuthRolesAggregateArgs, never>>;
  authUserProvider: Resolver<Maybe<ResolversTypes['authUserProviders']>, ParentType, ContextType, RequireFields<Query_RootAuthUserProviderArgs, 'id'>>;
  authUserProviders: Resolver<Array<ResolversTypes['authUserProviders']>, ParentType, ContextType, RequireFields<Query_RootAuthUserProvidersArgs, never>>;
  authUserProvidersAggregate: Resolver<ResolversTypes['authUserProviders_aggregate'], ParentType, ContextType, RequireFields<Query_RootAuthUserProvidersAggregateArgs, never>>;
  authUserRole: Resolver<Maybe<ResolversTypes['authUserRoles']>, ParentType, ContextType, RequireFields<Query_RootAuthUserRoleArgs, 'id'>>;
  authUserRoles: Resolver<Array<ResolversTypes['authUserRoles']>, ParentType, ContextType, RequireFields<Query_RootAuthUserRolesArgs, never>>;
  authUserRolesAggregate: Resolver<ResolversTypes['authUserRoles_aggregate'], ParentType, ContextType, RequireFields<Query_RootAuthUserRolesAggregateArgs, never>>;
  auth_clubs: Resolver<Array<ResolversTypes['auth_clubs']>, ParentType, ContextType, RequireFields<Query_RootAuth_ClubsArgs, never>>;
  auth_clubs_aggregate: Resolver<ResolversTypes['auth_clubs_aggregate'], ParentType, ContextType, RequireFields<Query_RootAuth_Clubs_AggregateArgs, never>>;
  auth_clubs_by_pk: Resolver<Maybe<ResolversTypes['auth_clubs']>, ParentType, ContextType, RequireFields<Query_RootAuth_Clubs_By_PkArgs, 'name'>>;
  auth_comments: Resolver<Array<ResolversTypes['auth_comments']>, ParentType, ContextType, RequireFields<Query_RootAuth_CommentsArgs, never>>;
  auth_comments_aggregate: Resolver<ResolversTypes['auth_comments_aggregate'], ParentType, ContextType, RequireFields<Query_RootAuth_Comments_AggregateArgs, never>>;
  auth_comments_by_pk: Resolver<Maybe<ResolversTypes['auth_comments']>, ParentType, ContextType, RequireFields<Query_RootAuth_Comments_By_PkArgs, 'id'>>;
  auth_posts: Resolver<Array<ResolversTypes['auth_posts']>, ParentType, ContextType, RequireFields<Query_RootAuth_PostsArgs, never>>;
  auth_posts_aggregate: Resolver<ResolversTypes['auth_posts_aggregate'], ParentType, ContextType, RequireFields<Query_RootAuth_Posts_AggregateArgs, never>>;
  auth_posts_by_pk: Resolver<Maybe<ResolversTypes['auth_posts']>, ParentType, ContextType, RequireFields<Query_RootAuth_Posts_By_PkArgs, 'id'>>;
  bucket: Resolver<Maybe<ResolversTypes['buckets']>, ParentType, ContextType, RequireFields<Query_RootBucketArgs, 'id'>>;
  buckets: Resolver<Array<ResolversTypes['buckets']>, ParentType, ContextType, RequireFields<Query_RootBucketsArgs, never>>;
  bucketsAggregate: Resolver<ResolversTypes['buckets_aggregate'], ParentType, ContextType, RequireFields<Query_RootBucketsAggregateArgs, never>>;
  file: Resolver<Maybe<ResolversTypes['files']>, ParentType, ContextType, RequireFields<Query_RootFileArgs, 'id'>>;
  files: Resolver<Array<ResolversTypes['files']>, ParentType, ContextType, RequireFields<Query_RootFilesArgs, never>>;
  filesAggregate: Resolver<ResolversTypes['files_aggregate'], ParentType, ContextType, RequireFields<Query_RootFilesAggregateArgs, never>>;
  user: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Query_RootUserArgs, 'id'>>;
  userAggregate: Resolver<ResolversTypes['users_aggregate'], ParentType, ContextType, RequireFields<Query_RootUserAggregateArgs, never>>;
  users: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Query_RootUsersArgs, never>>;
};

export type Subscription_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root']> = {
  authProvider: SubscriptionResolver<Maybe<ResolversTypes['authProviders']>, "authProvider", ParentType, ContextType, RequireFields<Subscription_RootAuthProviderArgs, 'id'>>;
  authProviderRequest: SubscriptionResolver<Maybe<ResolversTypes['authProviderRequests']>, "authProviderRequest", ParentType, ContextType, RequireFields<Subscription_RootAuthProviderRequestArgs, 'id'>>;
  authProviderRequests: SubscriptionResolver<Array<ResolversTypes['authProviderRequests']>, "authProviderRequests", ParentType, ContextType, RequireFields<Subscription_RootAuthProviderRequestsArgs, never>>;
  authProviderRequestsAggregate: SubscriptionResolver<ResolversTypes['authProviderRequests_aggregate'], "authProviderRequestsAggregate", ParentType, ContextType, RequireFields<Subscription_RootAuthProviderRequestsAggregateArgs, never>>;
  authProviders: SubscriptionResolver<Array<ResolversTypes['authProviders']>, "authProviders", ParentType, ContextType, RequireFields<Subscription_RootAuthProvidersArgs, never>>;
  authProvidersAggregate: SubscriptionResolver<ResolversTypes['authProviders_aggregate'], "authProvidersAggregate", ParentType, ContextType, RequireFields<Subscription_RootAuthProvidersAggregateArgs, never>>;
  authRefreshToken: SubscriptionResolver<Maybe<ResolversTypes['authRefreshTokens']>, "authRefreshToken", ParentType, ContextType, RequireFields<Subscription_RootAuthRefreshTokenArgs, 'refreshToken'>>;
  authRefreshTokens: SubscriptionResolver<Array<ResolversTypes['authRefreshTokens']>, "authRefreshTokens", ParentType, ContextType, RequireFields<Subscription_RootAuthRefreshTokensArgs, never>>;
  authRefreshTokensAggregate: SubscriptionResolver<ResolversTypes['authRefreshTokens_aggregate'], "authRefreshTokensAggregate", ParentType, ContextType, RequireFields<Subscription_RootAuthRefreshTokensAggregateArgs, never>>;
  authRole: SubscriptionResolver<Maybe<ResolversTypes['authRoles']>, "authRole", ParentType, ContextType, RequireFields<Subscription_RootAuthRoleArgs, 'role'>>;
  authRoles: SubscriptionResolver<Array<ResolversTypes['authRoles']>, "authRoles", ParentType, ContextType, RequireFields<Subscription_RootAuthRolesArgs, never>>;
  authRolesAggregate: SubscriptionResolver<ResolversTypes['authRoles_aggregate'], "authRolesAggregate", ParentType, ContextType, RequireFields<Subscription_RootAuthRolesAggregateArgs, never>>;
  authUserProvider: SubscriptionResolver<Maybe<ResolversTypes['authUserProviders']>, "authUserProvider", ParentType, ContextType, RequireFields<Subscription_RootAuthUserProviderArgs, 'id'>>;
  authUserProviders: SubscriptionResolver<Array<ResolversTypes['authUserProviders']>, "authUserProviders", ParentType, ContextType, RequireFields<Subscription_RootAuthUserProvidersArgs, never>>;
  authUserProvidersAggregate: SubscriptionResolver<ResolversTypes['authUserProviders_aggregate'], "authUserProvidersAggregate", ParentType, ContextType, RequireFields<Subscription_RootAuthUserProvidersAggregateArgs, never>>;
  authUserRole: SubscriptionResolver<Maybe<ResolversTypes['authUserRoles']>, "authUserRole", ParentType, ContextType, RequireFields<Subscription_RootAuthUserRoleArgs, 'id'>>;
  authUserRoles: SubscriptionResolver<Array<ResolversTypes['authUserRoles']>, "authUserRoles", ParentType, ContextType, RequireFields<Subscription_RootAuthUserRolesArgs, never>>;
  authUserRolesAggregate: SubscriptionResolver<ResolversTypes['authUserRoles_aggregate'], "authUserRolesAggregate", ParentType, ContextType, RequireFields<Subscription_RootAuthUserRolesAggregateArgs, never>>;
  auth_clubs: SubscriptionResolver<Array<ResolversTypes['auth_clubs']>, "auth_clubs", ParentType, ContextType, RequireFields<Subscription_RootAuth_ClubsArgs, never>>;
  auth_clubs_aggregate: SubscriptionResolver<ResolversTypes['auth_clubs_aggregate'], "auth_clubs_aggregate", ParentType, ContextType, RequireFields<Subscription_RootAuth_Clubs_AggregateArgs, never>>;
  auth_clubs_by_pk: SubscriptionResolver<Maybe<ResolversTypes['auth_clubs']>, "auth_clubs_by_pk", ParentType, ContextType, RequireFields<Subscription_RootAuth_Clubs_By_PkArgs, 'name'>>;
  auth_comments: SubscriptionResolver<Array<ResolversTypes['auth_comments']>, "auth_comments", ParentType, ContextType, RequireFields<Subscription_RootAuth_CommentsArgs, never>>;
  auth_comments_aggregate: SubscriptionResolver<ResolversTypes['auth_comments_aggregate'], "auth_comments_aggregate", ParentType, ContextType, RequireFields<Subscription_RootAuth_Comments_AggregateArgs, never>>;
  auth_comments_by_pk: SubscriptionResolver<Maybe<ResolversTypes['auth_comments']>, "auth_comments_by_pk", ParentType, ContextType, RequireFields<Subscription_RootAuth_Comments_By_PkArgs, 'id'>>;
  auth_posts: SubscriptionResolver<Array<ResolversTypes['auth_posts']>, "auth_posts", ParentType, ContextType, RequireFields<Subscription_RootAuth_PostsArgs, never>>;
  auth_posts_aggregate: SubscriptionResolver<ResolversTypes['auth_posts_aggregate'], "auth_posts_aggregate", ParentType, ContextType, RequireFields<Subscription_RootAuth_Posts_AggregateArgs, never>>;
  auth_posts_by_pk: SubscriptionResolver<Maybe<ResolversTypes['auth_posts']>, "auth_posts_by_pk", ParentType, ContextType, RequireFields<Subscription_RootAuth_Posts_By_PkArgs, 'id'>>;
  bucket: SubscriptionResolver<Maybe<ResolversTypes['buckets']>, "bucket", ParentType, ContextType, RequireFields<Subscription_RootBucketArgs, 'id'>>;
  buckets: SubscriptionResolver<Array<ResolversTypes['buckets']>, "buckets", ParentType, ContextType, RequireFields<Subscription_RootBucketsArgs, never>>;
  bucketsAggregate: SubscriptionResolver<ResolversTypes['buckets_aggregate'], "bucketsAggregate", ParentType, ContextType, RequireFields<Subscription_RootBucketsAggregateArgs, never>>;
  file: SubscriptionResolver<Maybe<ResolversTypes['files']>, "file", ParentType, ContextType, RequireFields<Subscription_RootFileArgs, 'id'>>;
  files: SubscriptionResolver<Array<ResolversTypes['files']>, "files", ParentType, ContextType, RequireFields<Subscription_RootFilesArgs, never>>;
  filesAggregate: SubscriptionResolver<ResolversTypes['files_aggregate'], "filesAggregate", ParentType, ContextType, RequireFields<Subscription_RootFilesAggregateArgs, never>>;
  user: SubscriptionResolver<Maybe<ResolversTypes['users']>, "user", ParentType, ContextType, RequireFields<Subscription_RootUserArgs, 'id'>>;
  userAggregate: SubscriptionResolver<ResolversTypes['users_aggregate'], "userAggregate", ParentType, ContextType, RequireFields<Subscription_RootUserAggregateArgs, never>>;
  users: SubscriptionResolver<Array<ResolversTypes['users']>, "users", ParentType, ContextType, RequireFields<Subscription_RootUsersArgs, never>>;
};

export interface TimestamptzScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamptz'], any> {
  name: 'timestamptz';
}

export type UsersResolvers<ContextType = any, ParentType extends ResolversParentTypes['users'] = ResolversParentTypes['users']> = {
  activeMfaType: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatarUrl: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  defaultRole: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  defaultRoleByRole: Resolver<ResolversTypes['authRoles'], ParentType, ContextType>;
  disabled: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  displayName: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email: Resolver<Maybe<ResolversTypes['citext']>, ParentType, ContextType>;
  emailVerified: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  isAnonymous: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastSeen: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  locale: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  newEmail: Resolver<Maybe<ResolversTypes['citext']>, ParentType, ContextType>;
  otpHash: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  otpHashExpiresAt: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  otpMethodLastUsed: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  passwordHash: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumberVerified: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  refreshTokens: Resolver<Array<ResolversTypes['authRefreshTokens']>, ParentType, ContextType, RequireFields<UsersRefreshTokensArgs, never>>;
  refreshTokens_aggregate: Resolver<ResolversTypes['authRefreshTokens_aggregate'], ParentType, ContextType, RequireFields<UsersRefreshTokens_AggregateArgs, never>>;
  roles: Resolver<Array<ResolversTypes['authUserRoles']>, ParentType, ContextType, RequireFields<UsersRolesArgs, never>>;
  roles_aggregate: Resolver<ResolversTypes['authUserRoles_aggregate'], ParentType, ContextType, RequireFields<UsersRoles_AggregateArgs, never>>;
  ticket: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ticketExpiresAt: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  totpSecret: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  userProviders: Resolver<Array<ResolversTypes['authUserProviders']>, ParentType, ContextType, RequireFields<UsersUserProvidersArgs, never>>;
  userProviders_aggregate: Resolver<ResolversTypes['authUserProviders_aggregate'], ParentType, ContextType, RequireFields<UsersUserProviders_AggregateArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_aggregate'] = ResolversParentTypes['users_aggregate']> = {
  aggregate: Resolver<Maybe<ResolversTypes['users_aggregate_fields']>, ParentType, ContextType>;
  nodes: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_aggregate_fields'] = ResolversParentTypes['users_aggregate_fields']> = {
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Users_Aggregate_FieldsCountArgs, never>>;
  max: Resolver<Maybe<ResolversTypes['users_max_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<ResolversTypes['users_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_max_fields'] = ResolversParentTypes['users_max_fields']> = {
  activeMfaType: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatarUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  defaultRole: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email: Resolver<Maybe<ResolversTypes['citext']>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  lastSeen: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  locale: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  newEmail: Resolver<Maybe<ResolversTypes['citext']>, ParentType, ContextType>;
  otpHash: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  otpHashExpiresAt: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  otpMethodLastUsed: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  passwordHash: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ticket: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ticketExpiresAt: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  totpSecret: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_min_fields'] = ResolversParentTypes['users_min_fields']> = {
  activeMfaType: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatarUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  defaultRole: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email: Resolver<Maybe<ResolversTypes['citext']>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  lastSeen: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  locale: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  newEmail: Resolver<Maybe<ResolversTypes['citext']>, ParentType, ContextType>;
  otpHash: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  otpHashExpiresAt: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  otpMethodLastUsed: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  passwordHash: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ticket: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ticketExpiresAt: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  totpSecret: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_mutation_response'] = ResolversParentTypes['users_mutation_response']> = {
  affected_rows: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uuid'], any> {
  name: 'uuid';
}

export type Resolvers<ContextType = any> = {
  authProviderRequests: AuthProviderRequestsResolvers<ContextType>;
  authProviderRequests_aggregate: AuthProviderRequests_AggregateResolvers<ContextType>;
  authProviderRequests_aggregate_fields: AuthProviderRequests_Aggregate_FieldsResolvers<ContextType>;
  authProviderRequests_max_fields: AuthProviderRequests_Max_FieldsResolvers<ContextType>;
  authProviderRequests_min_fields: AuthProviderRequests_Min_FieldsResolvers<ContextType>;
  authProviderRequests_mutation_response: AuthProviderRequests_Mutation_ResponseResolvers<ContextType>;
  authProviders: AuthProvidersResolvers<ContextType>;
  authProviders_aggregate: AuthProviders_AggregateResolvers<ContextType>;
  authProviders_aggregate_fields: AuthProviders_Aggregate_FieldsResolvers<ContextType>;
  authProviders_max_fields: AuthProviders_Max_FieldsResolvers<ContextType>;
  authProviders_min_fields: AuthProviders_Min_FieldsResolvers<ContextType>;
  authProviders_mutation_response: AuthProviders_Mutation_ResponseResolvers<ContextType>;
  authRefreshTokens: AuthRefreshTokensResolvers<ContextType>;
  authRefreshTokens_aggregate: AuthRefreshTokens_AggregateResolvers<ContextType>;
  authRefreshTokens_aggregate_fields: AuthRefreshTokens_Aggregate_FieldsResolvers<ContextType>;
  authRefreshTokens_max_fields: AuthRefreshTokens_Max_FieldsResolvers<ContextType>;
  authRefreshTokens_min_fields: AuthRefreshTokens_Min_FieldsResolvers<ContextType>;
  authRefreshTokens_mutation_response: AuthRefreshTokens_Mutation_ResponseResolvers<ContextType>;
  authRoles: AuthRolesResolvers<ContextType>;
  authRoles_aggregate: AuthRoles_AggregateResolvers<ContextType>;
  authRoles_aggregate_fields: AuthRoles_Aggregate_FieldsResolvers<ContextType>;
  authRoles_max_fields: AuthRoles_Max_FieldsResolvers<ContextType>;
  authRoles_min_fields: AuthRoles_Min_FieldsResolvers<ContextType>;
  authRoles_mutation_response: AuthRoles_Mutation_ResponseResolvers<ContextType>;
  authUserProviders: AuthUserProvidersResolvers<ContextType>;
  authUserProviders_aggregate: AuthUserProviders_AggregateResolvers<ContextType>;
  authUserProviders_aggregate_fields: AuthUserProviders_Aggregate_FieldsResolvers<ContextType>;
  authUserProviders_max_fields: AuthUserProviders_Max_FieldsResolvers<ContextType>;
  authUserProviders_min_fields: AuthUserProviders_Min_FieldsResolvers<ContextType>;
  authUserProviders_mutation_response: AuthUserProviders_Mutation_ResponseResolvers<ContextType>;
  authUserRoles: AuthUserRolesResolvers<ContextType>;
  authUserRoles_aggregate: AuthUserRoles_AggregateResolvers<ContextType>;
  authUserRoles_aggregate_fields: AuthUserRoles_Aggregate_FieldsResolvers<ContextType>;
  authUserRoles_max_fields: AuthUserRoles_Max_FieldsResolvers<ContextType>;
  authUserRoles_min_fields: AuthUserRoles_Min_FieldsResolvers<ContextType>;
  authUserRoles_mutation_response: AuthUserRoles_Mutation_ResponseResolvers<ContextType>;
  auth_clubs: Auth_ClubsResolvers<ContextType>;
  auth_clubs_aggregate: Auth_Clubs_AggregateResolvers<ContextType>;
  auth_clubs_aggregate_fields: Auth_Clubs_Aggregate_FieldsResolvers<ContextType>;
  auth_clubs_max_fields: Auth_Clubs_Max_FieldsResolvers<ContextType>;
  auth_clubs_min_fields: Auth_Clubs_Min_FieldsResolvers<ContextType>;
  auth_clubs_mutation_response: Auth_Clubs_Mutation_ResponseResolvers<ContextType>;
  auth_comments: Auth_CommentsResolvers<ContextType>;
  auth_comments_aggregate: Auth_Comments_AggregateResolvers<ContextType>;
  auth_comments_aggregate_fields: Auth_Comments_Aggregate_FieldsResolvers<ContextType>;
  auth_comments_max_fields: Auth_Comments_Max_FieldsResolvers<ContextType>;
  auth_comments_min_fields: Auth_Comments_Min_FieldsResolvers<ContextType>;
  auth_comments_mutation_response: Auth_Comments_Mutation_ResponseResolvers<ContextType>;
  auth_posts: Auth_PostsResolvers<ContextType>;
  auth_posts_aggregate: Auth_Posts_AggregateResolvers<ContextType>;
  auth_posts_aggregate_fields: Auth_Posts_Aggregate_FieldsResolvers<ContextType>;
  auth_posts_max_fields: Auth_Posts_Max_FieldsResolvers<ContextType>;
  auth_posts_min_fields: Auth_Posts_Min_FieldsResolvers<ContextType>;
  auth_posts_mutation_response: Auth_Posts_Mutation_ResponseResolvers<ContextType>;
  buckets: BucketsResolvers<ContextType>;
  buckets_aggregate: Buckets_AggregateResolvers<ContextType>;
  buckets_aggregate_fields: Buckets_Aggregate_FieldsResolvers<ContextType>;
  buckets_avg_fields: Buckets_Avg_FieldsResolvers<ContextType>;
  buckets_max_fields: Buckets_Max_FieldsResolvers<ContextType>;
  buckets_min_fields: Buckets_Min_FieldsResolvers<ContextType>;
  buckets_mutation_response: Buckets_Mutation_ResponseResolvers<ContextType>;
  buckets_stddev_fields: Buckets_Stddev_FieldsResolvers<ContextType>;
  buckets_stddev_pop_fields: Buckets_Stddev_Pop_FieldsResolvers<ContextType>;
  buckets_stddev_samp_fields: Buckets_Stddev_Samp_FieldsResolvers<ContextType>;
  buckets_sum_fields: Buckets_Sum_FieldsResolvers<ContextType>;
  buckets_var_pop_fields: Buckets_Var_Pop_FieldsResolvers<ContextType>;
  buckets_var_samp_fields: Buckets_Var_Samp_FieldsResolvers<ContextType>;
  buckets_variance_fields: Buckets_Variance_FieldsResolvers<ContextType>;
  citext: GraphQLScalarType;
  files: FilesResolvers<ContextType>;
  files_aggregate: Files_AggregateResolvers<ContextType>;
  files_aggregate_fields: Files_Aggregate_FieldsResolvers<ContextType>;
  files_avg_fields: Files_Avg_FieldsResolvers<ContextType>;
  files_max_fields: Files_Max_FieldsResolvers<ContextType>;
  files_min_fields: Files_Min_FieldsResolvers<ContextType>;
  files_mutation_response: Files_Mutation_ResponseResolvers<ContextType>;
  files_stddev_fields: Files_Stddev_FieldsResolvers<ContextType>;
  files_stddev_pop_fields: Files_Stddev_Pop_FieldsResolvers<ContextType>;
  files_stddev_samp_fields: Files_Stddev_Samp_FieldsResolvers<ContextType>;
  files_sum_fields: Files_Sum_FieldsResolvers<ContextType>;
  files_var_pop_fields: Files_Var_Pop_FieldsResolvers<ContextType>;
  files_var_samp_fields: Files_Var_Samp_FieldsResolvers<ContextType>;
  files_variance_fields: Files_Variance_FieldsResolvers<ContextType>;
  mutation_root: Mutation_RootResolvers<ContextType>;
  query_root: Query_RootResolvers<ContextType>;
  subscription_root: Subscription_RootResolvers<ContextType>;
  timestamptz: GraphQLScalarType;
  users: UsersResolvers<ContextType>;
  users_aggregate: Users_AggregateResolvers<ContextType>;
  users_aggregate_fields: Users_Aggregate_FieldsResolvers<ContextType>;
  users_max_fields: Users_Max_FieldsResolvers<ContextType>;
  users_min_fields: Users_Min_FieldsResolvers<ContextType>;
  users_mutation_response: Users_Mutation_ResponseResolvers<ContextType>;
  uuid: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  cached: CachedDirectiveResolver<any, any, ContextType>;
};
