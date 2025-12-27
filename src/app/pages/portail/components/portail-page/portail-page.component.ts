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
  templateUrl: "./portail-page.component.html",
  styleUrls: ["./portail-page.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortailPageComponent {
}
