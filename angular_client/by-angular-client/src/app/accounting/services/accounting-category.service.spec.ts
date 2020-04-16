/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccountingCategoryService } from './accounting-category.service';

describe('Service: AccountingCategory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountingCategoryService]
    });
  });

  it('should ...', inject([AccountingCategoryService], (service: AccountingCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
