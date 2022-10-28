import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = '7fcd8d9755c9434d8f1139dfbe14fe97';

  constructor(private http: HttpClient) { }

  newsURl = "https://api.bing.microsoft.com/v7.0/news";



  newsArticles():Observable<any>{
    const headers = new HttpHeaders().set("Ocp-Apim-Subscription-Key", this.api_key);
    return this.http.get(this.newsURl,{headers});
  }

  getBArticleByCategory(category: String):Observable<any>{
    const headers = new HttpHeaders().set("Ocp-Apim-Subscription-Key", this.api_key);
    var url = this.newsURl + "?mkt=en-in&category="+category;
    console.log(url);
    return this.http.get(url, {headers});
  }
}
