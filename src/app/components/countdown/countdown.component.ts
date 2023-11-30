import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})


export class CountdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const launchDay = new Date('12/09/2023 12:00 AM');
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer: string | number | NodeJS.Timeout | undefined;
    function showRemaining() {
      var now = new Date();
      var distance = launchDay.getTime() - now.getTime();
      if (distance < 0) {

          clearInterval(timer);
          document.getElementById('countdown')!.innerHTML = 'We have liftoff';

          return;
      }
      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);

      document.getElementById('countdown')!.innerHTML = days + ' DAYS&nbsp;&nbsp;';
      document.getElementById('countdown')!.innerHTML += hours + ' HRS&nbsp;&nbsp;';
      document.getElementById('countdown')!.innerHTML += minutes + ' MINS&nbsp;&nbsp;';
      document.getElementById('countdown')!.innerHTML += seconds + ' SEC';
  }

  timer = setInterval(showRemaining, 1000);
  }

}
