package io.koju.autopos.shared.struct.filter;

import com.mysema.query.types.Predicate;
import com.mysema.query.types.path.EntityPathBase;

public interface FilterRequest<T, B extends EntityPathBase<T>> {

    Predicate toQueryDslPredicate(B entityPath);

}
