import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { ClourProvicder } from '../model/clour-provicder.model';


@Component({
  selector: 'app-cloud-provider',
  templateUrl: './cloud-provider.component.html',
  styleUrls: ['./cloud-provider.component.css']
})
export class CloudProviderComponent implements OnInit {

  clourProvicder: ClourProvicder[] = [];

  constructor(private service: QuizService) { }

  ngOnInit() {
    this.requestQuizResult();
    this.subscribreToSubmittedQuiz();
  }

  requestQuizResult() {
    const REQUEST_MINUTES = 5000;
    setInterval(() => {
      this.service.getQuiz()
        .subscribe((data) => this.clourProvicder = data);
    }, REQUEST_MINUTES);
  }

  subscribreToSubmittedQuiz() {
    this.service.getSubject().subscribe(response => {
      this.clourProvicder = response;
    });
  }

}
