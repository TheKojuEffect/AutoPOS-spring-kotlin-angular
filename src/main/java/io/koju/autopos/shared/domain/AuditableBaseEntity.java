package io.koju.autopos.shared.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AuditableBaseEntity
    extends AuditableEntity<Long>
    implements BaseEntity {

    @JsonIgnore
    @Override
    public final Long getIdentity() {
        return getId();
    }

}
