import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  categories: string[] = ['Technology', 'Health', 'Education', 'Entertainment', 'Sports', 'Fashion'];
  filteredCategories: string[] = [];
  searchQuery: string = '';

  constructor() { }

  ngOnInit() {
    this.filteredCategories = this.categories;

  }

  filterCategories() {
    this.filteredCategories = this.categories.filter(category =>
      category.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  } 
}
