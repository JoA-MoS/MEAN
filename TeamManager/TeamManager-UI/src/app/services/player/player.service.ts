import { environment } from './../../../environments/environment';
import { RestApiServiceConfig } from './../../models/rest-api-service-config';
import { HttpClient } from '@angular/common/http';
import { Player } from './../../models/player';
import { Injectable } from '@angular/core';
import { AbstractRestApiService } from '../abstract-rest-api.service';

@Injectable()
export class PlayerService extends AbstractRestApiService<Player> {

  constructor(http: HttpClient, config: RestApiServiceConfig) {
    super(http, config);
    config.url = `${environment.apiUrl}/players`;
  }
}
