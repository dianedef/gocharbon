/* eslint-disable */
/**
 * Generated utilities for the local Convex scaffold.
 *
 * Running `npx convex dev` against a configured deployment will regenerate
 * this file with the same schema-derived types.
 */
import { httpActionGeneric, mutationGeneric, queryGeneric } from "convex/server";
import type {
  GenericActionCtx,
  GenericDatabaseReader,
  GenericDatabaseWriter,
  GenericMutationCtx,
  GenericQueryCtx,
  HttpActionBuilder,
  MutationBuilder,
  QueryBuilder,
} from "convex/server";
import type { DataModel } from "./dataModel.js";

export const query: QueryBuilder<DataModel, "public"> = queryGeneric;
export const mutation: MutationBuilder<DataModel, "public"> = mutationGeneric;
export const httpAction: HttpActionBuilder = httpActionGeneric;

export type QueryCtx = GenericQueryCtx<DataModel>;
export type MutationCtx = GenericMutationCtx<DataModel>;
export type ActionCtx = GenericActionCtx<DataModel>;
export type DatabaseReader = GenericDatabaseReader<DataModel>;
export type DatabaseWriter = GenericDatabaseWriter<DataModel>;
