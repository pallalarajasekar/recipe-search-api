import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fb: FormBuilder, private data: DataService, private router: Router) { }
  formGroup: FormGroup;
  receipeData: any;
  dietValue = [];
  healthValue = [];
  cuisineValue = [];
  mealValue = [];
  dishValue = [];
  recipeCount: any;
  ngOnInit(): void {

    this.data.getRecipe().subscribe((data: any) => {
      this.receipeData = data.hits;
      console.log(this.receipeData);

    })
    this.dietValue = ['balanced', 'high-fiber', 'high-protein', 'low-carb', 'low-fat', 'low-sodium'];
    this.healthValue = [
      "vegetarian",
      "pescatarian",
      "gluten-Free",
      "wheat-Free",
      "egg-free",
      "peanut-free",
      "tree-nut-free",
      "soy-free",
      "fish-free",
      "shellfish-free",
      "pork-free",
      "red-meat-free",
      "celery-free",
      "mustard-free",
      "sesame-free",
      "lupine-free",
      "mollusk-free",
      "alcohol-free",
      "kosher"
    ];
    this.cuisineValue =  ["american", "Asian","British", "South American", "South East Asian","Kosher"];
    this.mealValue = ['Breakfast','Lunch','Dinner','Snack','Teatime'];
    this.dishValue = ['Biscuits and cookies','Bread','Cereals','Drinks','Sweets','Desserts','Main course','Starter']

    this.formGroup = this.fb.group({
      diet: ['', [Validators.required]],
      health: ['', [Validators.required]],
      cuisineType: ['', [Validators.required]],
      mealType: ['', [Validators.required]],
      dishType: ['', [Validators.required]]
    })

  }
  viewBlock(id: string) {
    console.log(id);
    let recipeIds = id.split("_");
    console.log(recipeIds[1]);
    this.router.navigate(['dashboard/recipe', recipeIds[1]]);
  }
  searchRecipe() {
    console.log(this.formGroup.value);
    this.data.getSearchRecipe(this.formGroup.value).subscribe((data: any) => {
      this.receipeData = data.hits;
      this.recipeCount = this.receipeData.length;
      console.log(this.recipeCount);
      console.log(this.receipeData);

    })
  }

}
