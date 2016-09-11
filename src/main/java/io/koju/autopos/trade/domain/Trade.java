package io.koju.autopos.trade.domain;

import com.fasterxml.jackson.annotation.JsonView;
import io.koju.autopos.kernel.domain.AuditableBaseEntity;
import io.koju.autopos.kernel.json.Views;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@MappedSuperclass
@Getter
@Setter
public abstract class Trade extends AuditableBaseEntity {

    @NotNull
    @Column(name = "date", nullable = false)
    @JsonView(Views.Summary.class)
    private LocalDateTime date;

    @NotNull
    @Min(value = 0)
    @Column(name = "discount", precision = 10, scale = 2, nullable = false)
    private BigDecimal discount = BigDecimal.ZERO;

    @Size(min = 1, max = 50)
    @Column(name = "invoice_number", length = 50)
    @JsonView(Views.Summary.class)
    private String invoiceNumber;

    @Size(max = 250)
    @Column(name = "remarks", length = 250)
    private String remarks;

}
