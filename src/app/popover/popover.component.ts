import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {

  constructor() { }
  public isOpen:boolean=false;
  public model:any;
  ngOnInit() {
  }

  public initializeContent(model) {
    this.isOpen = true;
     this.model=model;
     let currentTarget=model.jsEvent.currentTarget;
    setTimeout(() => {
      let appFcOffset = $(currentTarget).offset();
      let eventWidth = $(currentTarget).width();
      let popoverLeftY = appFcOffset.left + eventWidth;

      if (appFcOffset.top == 0 && appFcOffset.left == 0) {
        let fcPopoverOffset = $('.fc-popover').offset();

        if (fcPopoverOffset.left > 576) {
          popoverLeftY = 20;
        } else if (fcPopoverOffset.left < 500) {
          popoverLeftY = 800;
        }
      }
      else if (appFcOffset.left > 576) {
        popoverLeftY = 20;
      } else if (appFcOffset.left < 500) {
        popoverLeftY = 800;
      }

      $('#tempCSS').remove();
      let cssrules = $("<style id='tempCSS' type='text/css'> </style>").appendTo("head");
      cssrules.append(".set-left-value{top:"+appFcOffset.top+"px !important;left:" + popoverLeftY + "px !important; visibility:visible}");
      $("popover-container").removeClass('set-left-value');
      $("popover-container").addClass('set-left-value');
    }, 100);
 }


}
