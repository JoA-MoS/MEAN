import { RequestOptions } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpObserve } from '@angular/common/http/src/client';

export class RestApiServiceConfig {
    options: {
        headers?: HttpHeaders
    };
    url: string;

}
