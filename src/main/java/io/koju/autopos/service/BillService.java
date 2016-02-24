package io.koju.autopos.service;

import io.koju.autopos.domain.Bill;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

/**
 * Service Interface for managing Bill.
 */
public interface BillService {

    /**
     * Save a bill.
     * @return the persisted entity
     */
    public Bill save(Bill bill);

    /**
     *  get all the bills.
     *  @return the list of entities
     */
    public Page<Bill> findAll(Pageable pageable);

    /**
     *  get the "id" bill.
     *  @return the entity
     */
    public Bill findOne(Long id);

    /**
     *  delete the "id" bill.
     */
    public void delete(Long id);
}
