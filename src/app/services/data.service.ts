import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
//import { HttpClient, HttpHeaders  } from '@angular/common/http';
//import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  //private IPAddrss = "192.168.0.5";
  private Menu:Array<any> = [];

  private IPAddrss = "54.171.87.35";

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor() { }

  // getDashboardData():Observable<any[]>{
  //   return this.http.get<any[]>()
  //   .pipe(
  //     catchError(this.handleError('getDashboardData', []))
  //   );
  //
  // }

  setMenuValue(menuValue){
    this.Menu = menuValue;
  }
  getMenuValue():Array<any>{
    return this.Menu;
  }

}
