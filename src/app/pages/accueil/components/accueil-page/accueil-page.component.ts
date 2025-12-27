import { ChangeDetectionStrategy, Component } from "@angular/core";
//import { ParametersPageComponent } from "../../../parameters/parameters.component";
//import { ParametersMyprofilPageComponent } from "../../../parameters-myprofil/parameters-myprofil.component";
//import { ParametersHistoriquePageComponent } from "../../../parameters-historique/parameters-historique.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-account-page",
  standalone: true,
  imports: [
    CommonModule,
    //ParametersPageComponent,
    //ParametersMyprofilPageComponent,
    //ParametersHistoriquePageComponent
  ],
  templateUrl: "./accueil-page.component.html",
  styleUrls: ["./accueil-page.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccueilPageComponent {
}
