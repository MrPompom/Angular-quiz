import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  categories: { id: string, name: string }[] = [
    { id: '1', name: 'Pokemon' },
    { id: '2', name: 'Yu-Gi-Oh' },
    { id: '3', name: 'League of Legends' },
    { id: '4', name: 'Satisfactory' }
  ];
  filteredCategories: { id: string, name: string }[] = [];
  searchQuery: string = '';

  constructor() { }

  ngOnInit() {
    this.filteredCategories = this.categories;

  }

  filterCategories() {
    if (this.searchQuery !== '') {
      this.filteredCategories = this.categories.filter(category =>
        category.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredCategories = this.categories
    }
  }
}
