import { Component, OnInit } from '@angular/core';
import { Chart , registerables } from 'chart.js';
import { NavbarContent } from './../../interface/navbar-content';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {
      Chart.register(...registerables);
  }

  // for making navbar mmore dynamic if i will increase dropdown and more readble and decrease line in dom
  navbar:NavbarContent[]=[
    {name:'Contacts',icon:'fas fa-users me-1'},
    {name:'Activities',icon:'fas fa-users me-1'},
    {name:'Deals',icon:'fas fa-globe me-1'},
    {name:'User',icon:'fas fa-users me-1'}
  ]


  ngOnInit(): void {
    const myChart = new Chart("myChart", {
        type: 'bar',
        data: {
            labels: ['4/22/21', '4/29/21', '5/5/21', '5/12/21', '5/17/21'],
            datasets: [{
                label: 'Next 60 Days',
                data: [600, 400, 30, 600, 80],
                backgroundColor: [
                    '#324191',
                    '#324191',
                    '#324191',
                    '#324191',
                    '#324191',
                    '#324191'
                ],
                borderWidth: 1,
                barPercentage:.5
            }]
        },

        options: {
          plugins:{
            legend:{
              position:'bottom'
            },

          }
        }
    });

    const myChart2 = new Chart("myChart2", {
      type: 'pie',
      data: {
          labels: ['Frum Lezilia', 'Opus Mei', 'Blinky Scene', 'Governor R', 'Yeezu Joy', 'Mercy Windsor','lucy'],
          datasets: [{
              label: '# of Votes',
              data: [15, 8, 5, 32, 2, 20,18],
              backgroundColor: [
                  '#FC8452',
                  '#5470C4',
                  '#91CC72',
                  '#FAC859',
                  '#F06467',
                  '#73C0DE',
                  '#3BA372'
              ],
              borderWidth: 0
          }]
      },

      options: {
        rotation:300,
        plugins:{

          legend:{
            labels:{
            textAlign:'left'            },
            position:'bottom'
          },

        }
      }
  });
  }

}
