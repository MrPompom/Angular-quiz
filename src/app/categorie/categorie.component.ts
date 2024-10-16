import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/services/quiz.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  // categories: { id: string, name: string }[] = [
  //   { id: '1', name: 'Pokemon' },
  //   { id: '2', name: 'Yu-Gi-Oh' },
  //   { id: '3', name: 'League of Legends' },
  //   { id: '4', name: 'Satisfactory' }
  // ];
  filteredCategories: { id: string, name: string }[] = [];
  categories: any[] = this.quizService.categorieList;
  searchQuery: string = '';

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizService.getQuizCategories();
    this.filteredCategories = this.categories;
    console.log(this.categories);

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
