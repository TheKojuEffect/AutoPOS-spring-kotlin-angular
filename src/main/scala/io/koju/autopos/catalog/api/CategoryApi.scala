package io.koju.autopos.catalog.api

import io.koju.autopos.catalog.service.CategoryRepository
import io.koju.autopos.kernel.api.BaseApi
import org.springframework.web.bind.annotation.{RequestMapping, RestController}


@RestController
@RequestMapping(Array("/api/categories"))
class CategoryApi(private val categoryRepository: CategoryRepository)
  extends BaseApi(categoryRepository, "category", "/api/categories")

