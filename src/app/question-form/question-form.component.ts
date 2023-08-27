import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  currentQuestionIndex: number = 0;
  selectedOptions: string[] = [];
  allQuestionsAnswered: boolean = false;
  nextQuestion:boolean = false;
  constructor(private router: Router) { }

  questions: any[] = [
    {
      question: 'Which of these elements in HTML can be used for making a text bold?',
      options: ['<a>', '<pre>', '<br>', '<b>'],
      answer: '<b>',
    },
    {
      question: 'HTML is the standard ____language for creating Web pages.',
      options: ['scripting', 'programming', 'styling', 'markup'],
      answer: 'markup',
    },
    {
      question: 'Which is the correct syntax to include comment in an HTML document?',
      options: ['//', '/* Comment */', '// Comment //', '<!-- Comment -->'],
      answer: '<!-- Comment -->',
    },
    {
      question: 'Which element/tag defines a paragraph?',
      options: ['<p>', '<pre>', '<panel>', 'None of the above'],
      answer: '<p>',
    },
    {
      question: 'Which tag contains the meta information about the HTML page?',
      options: ['<html>', '<title>', '<head>', '<body>'],
      answer: '<head>',
    }
    
  ];
 
  ngOnInit() {
    this.selectedOptions = new Array(this.questions.length).fill('');
  }

  goToNextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }
  goToPreviousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
  }
}
  isSubmittedEnabled: boolean = false;

  submitAnswers() {
    //Swal.fire('Thank you ..', 'you submittes succesfully', 'success')
   
    const score = this.calculateScore(); 
    
    Swal.fire({
      title: 'Thank you!',
      text: 'Your answers have been submitted successfully.',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        
        const selectedOptionsForResults = this.selectedOptions.slice();
  
       
        this.router.navigate(['/result'], 
        { queryParams:
           { results: selectedOptionsForResults,
            score: score }
           });
      }
    });
}

calculateScore() {
 
  // let score = 0;
  // for (let i = 0; i < this.selectedOptions.length; i++) {
  //   if (this.selectedOptions[i] === this.questions[i].answer) {
  //     score++;
  //   }
  // }
  // return score;
  let score = 0;

  for (let i = 0; i < this.selectedOptions.length; i++) {
    if (this.selectedOptions[i] === this.questions[i].answer) {
      score++;
    }
  }

 
  return score;
}
}

