import { Injectable } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class ChecksService {

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  isImage(file: any) {
    if (file && file.name) {
      const fileName = file.name.toLowerCase();
      const fileExtension = fileName.split('.').pop();
      const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp','svg','webp'];
      if (allowedExtensions.includes(fileExtension)) {
        return true;
      }
    }
    return false;
  }

  getYoutubeId(url: any) {
    const regExp =
      /^.(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  }


  extractVideoId(url: any) {
    // Regular expressions to match YouTube video IDs in different formats
    const regExp1 = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([\w-]{11})/;
    const regExp2 = /^(?:https?:\/\/)?(?:www\.)?youtu\.be\/([\w-]{11})/;


    // Try to match the URL against both regular expressions
    const match1 = url.match(regExp1);
    const match2 = url.match(regExp2);

    // If there's a match in the first regular expression, return the video ID
    if (match1 && match1[1]) {
      return match1[1];
    }
    // If there's a match in the second regular expression, return the video ID
    else if (match2 && match2[1]) {
      return match2[1];
    }
    // If there's no match, return null
    else {
      return null;
    }
  }


  getSanitized(url: any) {
    if (url.indexOf('yout') > -1) {
      url = 'https://www.youtube.com/embed/' + this.extractVideoId(url);
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
