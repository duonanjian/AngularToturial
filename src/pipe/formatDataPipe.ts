import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "formatDate" })

export class FormatDataPipe implements PipeTransform {
  constructor() { }

  transform(value: any, context: string) {
    console.log(value, context);
    return value

  }


}
