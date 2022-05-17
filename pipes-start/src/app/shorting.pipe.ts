import { Injectable, Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shortingText",
})
@Injectable()
export class ShortingPipe implements PipeTransform {
  transform(value: string): any {
    if(value.length > 8) {
        return value.substring(0, 8) + "...";
    }else {
        return value
    }
  }
}
