import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-requests',
  templateUrl: './http-requests.component.html',
  styleUrls: ['./http-requests.component.css']
})
export class HttpRequestsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  fetchedData = [];

  ngOnInit(): void {
   this.onFetchPosts();//to load automatically when the component runs
  }

  onFetchPosts(){
    this.fetchPost();
  }

  //to create post request
  onCreatePost(postData: { title: string; content: string }) {
    this.http.post('https://robust-service-308113-default-rtdb.firebaseio.com/posts.json', postData) //.json is for firebase
      .subscribe(responseData => {
      });
  }

  private fetchPost(){
    this.http.get('https://robust-service-308113-default-rtdb.firebaseio.com/posts.json') //.json is for firebase
    .subscribe(fetched => {
      //you can transform data here as well...
      console.log(fetched)
    });
  }
}
