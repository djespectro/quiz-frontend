import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClourProvicder } from '../model/clour-provicder.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private subject = new Subject<any>();
  private URL = '/api/v1/quiz';

  constructor(private http: HttpClient) { }

  getQuiz() {
    return this.http.get<Array<ClourProvicder>>(this.URL);
  }

  submitQuiz(provider: string) {
    return this.http.post(this.URL, provider).subscribe(response => {
      this.subject.next(response);
    });
  }

  getSubject(): Observable<Array<ClourProvicder>> {
    return this.subject.asObservable();
  }

}
