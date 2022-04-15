import { AfterViewChecked, AfterViewInit, Component, HostListener, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  fullScreenImage: string="";
  constructor(private dialog: MatDialog){}
  ngAfterViewInit(): void {
   this.openDialog()
  }
  title = 'farewell-app';
  presentSelectedImage=''
  public getScreenWidth: any;
  public getScreenHeight: any;
  isMobileview: boolean=false;
  panelOpenState = false;
imgList=[
  '../assets/images/image14.jpg',
  '../assets/images/image35.jpg',
  '../assets/images/image11.jpg',
  '../assets/images/image16.jpg',
  '../assets/images/image27.jpg',
  '../assets/images/image30.jpg',
  '../assets/images/image1.jpg',
  '../assets/images/image19.jpg',
  '../assets/images/image21.jpg',
  '../assets/images/image22.jpg',
  '../assets/images/image31.jpg',
  '../assets/images/image26.jpg',
  '../assets/images/image24.jpg',
  '../assets/images/image33.jpg',

'../assets/images/image2.jpg',
'../assets/images/image3.jpg',
'../assets/images/image4.jpg',
'../assets/images/image5.jpg',
'../assets/images/image6.jpg',
'../assets/images/image7.jpg',
'../assets/images/image8.jpg',
'../assets/images/image9.jpg',
'../assets/images/image10.jpg',

'../assets/images/image12.jpg',
'../assets/images/image13.jpg',

'../assets/images/image15.jpg',

'../assets/images/image17.jpg',
'../assets/images/image18.jpg',

'../assets/images/image20.jpg',


'../assets/images/image23.jpg',

'../assets/images/image25.jpg',

'../assets/images/image28.jpg',
'../assets/images/image29.jpg',


'../assets/images/image32.jpg',

'../assets/images/image34.jpg',

]
AlakaImglist=[ 
  '../assets/images/NewspaperAlaka3.jpeg',
  '../assets/images/NewspaperAlaka2.jpeg',
'../assets/images/NewsAlaka5.jpeg',
'../assets/images/NewsAlaka7.jpeg',

'../assets/images/NewspaperAlaka1.jpeg',
'../assets/images/NewsAlaka4.jpeg',

'../assets/images/NewsAlaka6.jpeg',



]
  videoSource=""
  videoList=[{link:'https://www.youtube.com/embed/rbODwV5il_s',desc:"Late BJD MLA Kishore Mohanty's son Purusottam Mohanty (Durgesh) Seen Alongside Minister Naba Das In Biju Jayanti In Jharsuguda"},
  {link:'',desc:''},
  {link:'',desc:''},
  {link:'',desc:''},
  {link:'',desc:''}]
  @ViewChild("dialogRef") dialogRef: TemplateRef<any>; 
  @ViewChild("dialogRefFullScreen") dialogRefFullScreen: TemplateRef<any>;
  ngOnInit() {
      this.getScreenWidth = window.innerWidth;
      this.getScreenHeight = window.innerHeight;
      this.onWindowResize()
    // this.openDialog()
     
  }
  
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    console.log("Width of screen is ",this.getScreenWidth)
    if(this.getScreenWidth<500){
      this.isMobileview=true
    }else{
      this.isMobileview=false
    }
  // this.openDialog()
  }
 
  openDialog(): void {
    //console.log("function called")
    this.dialog.open(this.dialogRef, { data: "some data" });
    
}
openFullScreenDialog(): void {
  console.log("function called")
 
  this.dialog.open(this.dialogRefFullScreen,{ panelClass: 'myapp-no-padding-dialog' });
  
}
getFullImage(img:string){
  console.log("image is ",img)
  this.fullScreenImage=img
  this.presentSelectedImage=img
  this.openFullScreenDialog()
}
scrollToBottom(){
  //this.dialog.closeAll()
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  
}
showNextSlide(img:string){
  if(this.imgList.indexOf(img)>-1 && this.imgList.indexOf(img)!==this.imgList.length-1){
this.presentSelectedImage=this.imgList[this.imgList.indexOf(img)+1]
  }else if(this.AlakaImglist.indexOf(img)>-1 && this.AlakaImglist.indexOf(img)!==this.AlakaImglist.length-1){
    this.presentSelectedImage=this.AlakaImglist[this.AlakaImglist.indexOf(img)+1]
      }else if(this.imgList.indexOf(img)===this.imgList.length-1 || this.AlakaImglist.indexOf(img)===this.AlakaImglist.length-1 ){
        console.log("Should claose all dialog npow")
        this.dialog.closeAll()
            }
  console.log("The present new is ",this.presentSelectedImage)

}
showPrevSlide(img:string){
  if(this.imgList.indexOf(img)>0){
this.presentSelectedImage=this.imgList[this.imgList.indexOf(img)-1]
  }else if(this.AlakaImglist.indexOf(img)>0){
    this.presentSelectedImage=this.AlakaImglist[this.AlakaImglist.indexOf(img)-1]
      }else if(this.imgList.indexOf(img)===0 || this.AlakaImglist.indexOf(img)===0 ){
  this.dialog.closeAll()
      }
  console.log("The present new is ",this.presentSelectedImage)

}
}

