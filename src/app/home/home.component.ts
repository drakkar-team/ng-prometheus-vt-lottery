import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { Option } from "../model/option";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy{
  
  title = 'home';

  mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;

  option:Option[] = [{optionId: 1, code: "00001", description: "Inicio", alternateDescription: "",  uri: "", icon: "home"},
  {optionId: 2, code: "00002", description: "Novedades", alternateDescription: "",  uri: "", icon: "mood"},
  {optionId: 3, code: "00003", description: "Puntos de suerte", alternateDescription: "",  uri: "", icon: "star_half"},
  {optionId: 4, code: "00004", description: "Promociones", alternateDescription: "",  uri: "", icon: "emoji_events"},
  {optionId: 5, code: "00005", description: "Jugar", alternateDescription: "",  uri: "play", icon: "local_play"},
  {optionId: 6, code: "00006", description: "Contáctanos", alternateDescription: "",  uri: "", icon: "local_phone"}];


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
}