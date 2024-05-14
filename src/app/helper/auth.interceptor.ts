import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestService } from '../services/rest.service';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private restService: RestService,
    private authService: AuthService,
    private userService: UserService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let headers = new HttpHeaders({
      'Authorization' : `Basic `+window.btoa("admin" + ':' + "1234")
    });
    request = request.clone({
      headers: headers,
  
  });
    return next.handle(request);
  }
}

// constructor(private userService: UserService) {}

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // add authorization header with jwt token if available
//   //  console.log(this.userService.getUser().instituteDb);
//       const user = this.userService.getUser();
   
//         if(user){
//           if(user.instituteDb){
//             request = request.clone({
//               setHeaders: { 
//                   Authorization: `Basic `+window.btoa("admin" + ':' + "1234"),
//                   INSTITUTEDB: this.userService.getUser().instituteDb,
//               }
//             });
//           }else{
            
//             request = request.clone({
//                 setHeaders: { 
//                     Authorization: `Basic `+window.btoa("admin" + ':' + "1234")
//                 }
//             });
//           }
//         }else{
//           request = request.clone({
//             setHeaders: { 
//                 Authorization: `Basic `+window.btoa("admin" + ':' + "1234")
//             }
//           });
//         }
//           // request = request.clone({
//           //     setHeaders: {
//           //       Authorization: `Basic `+window.btoa("admin" + ':' + "1234"),
//           //     }
//           // });
  
//   //  }

//     return next.handle(request);
//   }
// }
