import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(images: any[]): any {
    if (images.length == 0) {
      return "assets/images/noImage.png";
    }

    return images[0].url;
  }

}
