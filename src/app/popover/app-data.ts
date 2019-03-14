import { PopoverPlacement } from './enums.enum';


export interface PopoverPlacementsOffset{
    attachment:string;
    targetAttachment:string;

}

export class AppData{
  private  static popoverPlacements=new Map<PopoverPlacement,PopoverPlacementsOffset>();
  private static instance:AppData;
  private   constructor(){

     AppData.popoverPlacements.set(PopoverPlacement.Top,{ attachment: 'bottom left',
      targetAttachment: 'top left'});  
      AppData.popoverPlacements.set(PopoverPlacement.Bottom,{  attachment: 'top left',
      targetAttachment: 'bottom left'});  

      AppData.popoverPlacements.set(PopoverPlacement.Left,{  attachment: 'top right',
      targetAttachment: 'top left'});  
      AppData.popoverPlacements.set(PopoverPlacement.Right,{  attachment: 'top left',
      targetAttachment: 'top right'});  

    }  
 public static  getInstance(){
         if(!AppData.instance){
             AppData.instance= new AppData();
         return AppData.instance;       
             
    }
}
public  static  popoverPlacementOffset(){
      AppData.getInstance();
      return this.popoverPlacements;
  }
}