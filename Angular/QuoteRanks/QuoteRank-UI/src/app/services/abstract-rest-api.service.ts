
import { RestApiServiceConfig } from './../models/rest-api-service-config';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


export abstract class AbstractRestApiService<T> {


  constructor(protected http: HttpClient, protected config: RestApiServiceConfig) {

  }

  getAll(options = this.config.options): Observable<T[]> {
    return this.http.get<T[]>(this.config.url, options);
  }

  getById(id, options = this.config.options): Observable<T> {
    return this.http.get<T>(`${this.config.url}/${id}`, options);
  }

  create(obj: T, options = this.config.options): Observable<Object> {
    return this.http.post(this.config.url, obj, options);
  }

  update(id, obj: T, options = this.config.options): Observable<Object> {
    return this.http.put(`${this.config.url}/${id}`, obj, options);
  }

  delete(id, options = this.config.options): Observable<Object> {
    return this.http.delete(`${this.config.url}/${id}`, options);
  }
}
