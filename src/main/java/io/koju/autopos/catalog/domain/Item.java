package io.koju.autopos.catalog.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.koju.autopos.catalog.service.ItemCodeUtil;
import io.koju.autopos.shared.domain.AuditableBaseEntity;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.PostPersist;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import static javax.persistence.GenerationType.SEQUENCE;
import static lombok.AccessLevel.PRIVATE;

@Entity
@Table(name = "item")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Getter
@Setter
public class Item extends AuditableBaseEntity {

    @Id
    @SequenceGenerator(name = "item_id_seq", sequenceName = "item_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = SEQUENCE, generator = "item_id_seq")
    private Long id;

    @Setter(PRIVATE)
    @Column(name = "code", length = 14, nullable = false, insertable = false, updatable = false)
    private String code; // Automatically generated by DB

    @NotNull
    @Size(min = 2, max = 50)
    @Column(name = "name", length = 50, nullable = false)
    private String name;

    @Size(max = 250)
    @Column(name = "description", length = 250)
    private String description;

    @Size(max = 250)
    @Column(name = "location", length = 250)
    private String location;

    @Size(max = 250)
    @Column(name = "remarks", length = 250)
    private String remarks;

    @NotNull
    @Min(0)
    @Column(name = "marked_price", precision = 10, scale = 2, nullable = false)
    private BigDecimal markedPrice;

    @OneToOne(optional = false, orphanRemoval = true)
    @JoinColumn(name = "quantity_info_id", updatable = false, nullable = false)
    @JsonIgnore
    private QuantityInfo quantityInfo;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "brand_id")
    private Brand brand;

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "item_tag",
        joinColumns = @JoinColumn(name = "item_id", referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(name = "tag_id", referencedColumnName = "id"))
    private Set<Tag> tags = new HashSet<>();

    @PostPersist
    public void populateItemCode() {
        setCode(ItemCodeUtil.getCode(id));
    }

    public Integer getQuantity() {
        return quantityInfo.getQuantity();
    }

    @JsonIgnore
    public void setQuantity(Integer quantity) {
        quantityInfo.setQuantity(quantity);
    }

    public Optional<String> getDescription() {
        return Optional.ofNullable(description);
    }

    public Optional<String> getRemarks() {
        return Optional.ofNullable(remarks);
    }

    public Optional<String> getLocation() {
        return Optional.ofNullable(location);
    }

    public Optional<Category> getCategory() {
        return Optional.ofNullable(category);
    }

    public Optional<Brand> getBrand() {
        return Optional.ofNullable(brand);
    }

}
