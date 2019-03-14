import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import Tether from 'tether';
import * as  Enums from './enums.enum';
import { AppData } from './app-data'
@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {

  constructor() { }
  public isOpen:boolean=false;
  public model:any;
  public popOverPlacement: Enums.PopoverPlacement = Enums.PopoverPlacement.Left;
  ngOnInit() {
  }

  public initializeContent(model) {
    this.model=model;
    let currentTarget=model.jsEvent.currentTarget;
    let currentView= model.view.type;
    let currentEventOffset = $(currentTarget).offset();
    let popoverLeft=0;
    let popoverTop=0;
    if (currentView == 'agendaDay') {
      if (currentEventOffset.top < 300) {
        
        this.popOverPlacement = Enums.PopoverPlacement.Bottom;
      } else {
        this.popOverPlacement = Enums.PopoverPlacement.Top;
        popoverTop=-10;
      }
    }
    else {
      let fromRight = $(window).innerWidth()  - $(currentTarget).offset().left - $(currentTarget).width();
      if (fromRight < 578) {
        this.popOverPlacement = Enums.PopoverPlacement.Left;
      popoverLeft=-10;
      } else {
        this.popOverPlacement = Enums.PopoverPlacement.Right;
      }
    }

    this.isOpen = true;
    let popoverClass = "app-popover-" + this.popOverPlacement;
    let popOverPlacementOffset = AppData.popoverPlacementOffset().get(this.popOverPlacement);
    setTimeout(() => {
      let popoverER = $("popover-container");
      if (popoverER.length) {
        new Tether({
          element: popoverER,
          target: currentTarget,
          attachment: popOverPlacementOffset.attachment,
          targetAttachment: popOverPlacementOffset.targetAttachment
        });
        $('#tempCSS').remove();
        let cssrules = $("<style id='tempCSS' type='text/css'> </style>").appendTo("head");
        cssrules.append(".set-left-value{left:"+popoverLeft+"px !important;top:"+popoverTop+"px !important; visibility:visible !important; }");
      
        $("popover-container").removeClass('set-left-value');
        $("popover-container").addClass('set-left-value');
        $('popover-container').addClass(popoverClass);
      }
    }, 50);
 }


}
