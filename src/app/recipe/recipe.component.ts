import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(private data: DataService, private router: Router, private activeRoute: ActivatedRoute) { }
  recipeId: string;
  selectRecipe = [];
  recipeList: any
  recipeType: string;
  ngOnInit(): void {

    this. recipeId = this.activeRoute.snapshot.params.id;

    this.data.getSelectRecipe(this.recipeId).subscribe((data: any) => {
      this.selectRecipe.push(data);
      console.log(this.selectRecipe);
      this.recipeList = this.selectRecipe[0].recipe.ingredients;
      this.recipeType = this.selectRecipe[0].recipe.mealType[0]
      console.log(this.recipeList)

    })

  }

}
