import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loginApp';

  ngOnInit(){

     // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCGF2opCjeL63Gme5WlyIJDPIrf1HSifDM",
    authDomain: "cap1-2fe86.firebaseapp.com",
    databaseURL: "https://cap1-2fe86.firebaseio.com",
    projectId: "cap1-2fe86",
    storageBucket: "cap1-2fe86.appspot.com",
    messagingSenderId: "482841044576"
  };
  firebase.initializeApp(config);
  } //oninit
}
