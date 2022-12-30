import { useOperators, OperatorType } from 'mingo/core';
import { Query } from 'mingo/query';
import { $sort } from 'mingo/operators/pipeline/sort';
import { $project } from 'mingo/operators/pipeline/project';
import { $and, $eq, $elemMatch, $exists, $gt, $gte, $in, $lt, $lte, $ne, $nin, $mod, $nor, $not, $or, $regex, $size, $type } from 'mingo/operators/query';
var mingoInitDone = false;

/**
 * The MongoDB query library is huge and we do not need all the operators.
 * If you add an operator here, make sure that you properly add a test in
 * the file /test/unit/rx-storage-query-correctness.test.ts
 *
 * @link https://github.com/kofrasa/mingo#es6
 */
export function getMingoQuery(selector) {
  if (!mingoInitDone) {
    useOperators(OperatorType.PIPELINE, {
      $sort: $sort,
      $project: $project
    });
    useOperators(OperatorType.QUERY, {
      $and: $and,
      $eq: $eq,
      $elemMatch: $elemMatch,
      $exists: $exists,
      $gt: $gt,
      $gte: $gte,
      $in: $in,
      $lt: $lt,
      $lte: $lte,
      $ne: $ne,
      $nin: $nin,
      $mod: $mod,
      $nor: $nor,
      $not: $not,
      $or: $or,
      $regex: $regex,
      $size: $size,
      $type: $type
    });
    mingoInitDone = true;
  }
  return new Query(selector);
}
//# sourceMappingURL=rx-query-mingo.js.map