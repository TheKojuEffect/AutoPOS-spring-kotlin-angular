package io.koju.autopos.repository;

import io.koju.autopos.domain.Vendor;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Vendor entity.
 */
public interface VendorRepository extends JpaRepository<Vendor,Long> {

}
