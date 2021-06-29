import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  authtoken = "5bc07d492835c1a514d392283f9054da";
  
  constructor(private http:HttpClient) { }

  getRecipe(){
    console.log(this.authtoken);
    return this.http.get('https://api.edamam.com/api/recipes/v2?' + 'app_key=' + this.authtoken + '&type=public&app_id=f5ab289a&diet=balanced') 
  }

  getSelectRecipe(id: string){
    return this.http.get('https://api.edamam.com/api/recipes/v2/' + id + '?app_key=' + this.authtoken + '&type=public&app_id=f5ab289a') 
  }
  getSearchRecipe(serchValue){
    let url = 'https://api.edamam.com/api/recipes/v2?' + 'app_key=' + this.authtoken + '&type=public&app_id=f5ab289a&diet=' + serchValue.diet + '&cuisineType=' + serchValue.cuisineType + '&mealType=' + serchValue.mealType + '&dishType=' + serchValue.dishType + '&health=' + serchValue.health;
    console.log(url);
    return this.http.get('https://api.edamam.com/api/recipes/v2?' + 'app_key=' + this.authtoken + '&type=public&app_id=f5ab289a&diet=' + serchValue.diet + '&cuisineType=' + serchValue.cuisineType + '&mealType=' + serchValue.mealType + '&dishType=' + serchValue.dishType + '&health=' + serchValue.health); 
  }

}
