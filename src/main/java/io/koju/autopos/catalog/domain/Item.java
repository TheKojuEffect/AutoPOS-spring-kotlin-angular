package io.koju.autopos.catalog.domain;

import io.koju.autopos.kernel.domain.AuditableBaseEntity;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Generated;
import org.hibernate.annotations.GenerationTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
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
@Getter
@Setter
public class Item extends AuditableBaseEntity {

    @Id
    @SequenceGenerator(name = "item_id_seq", sequenceName = "item_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = SEQUENCE, generator = "item_id_seq")
    private Long id;

    @Setter(PRIVATE)
    @Column(name = "code", length = 14, nullable = false, insertable = false, updatable = false)
    @Generated(GenerationTime.INSERT)
    private String code;

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

    @Min(0)
    @Column(name = "quantity", nullable = false)
    private Integer quantity;

    @Size(max = 250)
    @Column(name = "remarks", length = 250)
    private String remarks;

    @NotNull
    @Min(0)
    @Column(name = "marked_price", precision = 10, scale = 2, nullable = false)
    private BigDecimal markedPrice;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "brand_id")
    private Brand brand;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "item_tag",
            joinColumns = @JoinColumn(name = "item_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id", referencedColumnName = "id"))
    private Set<Tag> tags = new HashSet<>();

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
