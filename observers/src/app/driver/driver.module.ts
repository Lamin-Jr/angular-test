import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DriverComponent } from "./driver.component";
import { DriverService } from "./driver.service";

@NgModule({
    imports: [DriverComponent, DriverService],
    declarations: [DriverComponent, DriverService, CommonModule],
    providers: [DriverService]
})
export class DriverModule {}