import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'exampleTrack'
})
export class ExampleTrackPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);

  }

}
