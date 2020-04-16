import { Component, OnInit } from '@angular/core';
import { AccountingCategoryService } from '../../services';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  Categories: any = [];

  constructor(public restApi: AccountingCategoryService) { }

  ngOnInit() {
    this.listCategories();
  }

  // Get categories list
  listCategories() {
    return this.restApi.getCategories().subscribe((data: {}) => {
      console.log('Received data: ', data);
      this.Categories = data;
      console.log('Categories: ', this.Categories);
    });
  }

  // Delete category
  deleteCategory(id) {
    return this.restApi.deleteCategory(id).subscribe(data => {
      this.listCategories();
    });
  }

}
