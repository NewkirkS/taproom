import { Pipe,PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "almostEmpty",
  pure: false
})
export class AlmostEmptyPipe implements PipeTransform {
  transform(input: Keg[], desiredLevel) {
    var output: Keg[] = [];
    if(desiredLevel === "underTen"){
    for (var i =0; i < input.length; i++) {
      if (input[i].pints <= 10) {
        output.push(input[i]);
      }
    }
    return output;
  }else {
    return input;
    }
  }
}
