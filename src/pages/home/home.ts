import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import jsencrypt from 'jsencrypt';
import { MoipCreditCard } from 'moip-sdk-js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  hash: string;

  constructor(public navCtrl: NavController) {
  	this.hash = 'Gerando hash...';

  	const pubKey = `-----BEGIN PUBLIC KEY-----
                MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoBttaXwRoI1Fbcond5mS
                7QOb7X2lykY5hvvDeLJelvFhpeLnS4YDwkrnziM3W00UNH1yiSDU+3JhfHu5G387
                O6uN9rIHXvL+TRzkVfa5iIjG+ap2N0/toPzy5ekpgxBicjtyPHEgoU6dRzdszEF4
                ItimGk5ACx/lMOvctncS5j3uWBaTPwyn0hshmtDwClf6dEZgQvm/dNaIkxHKV+9j
                Mn3ZfK/liT8A3xwaVvRzzuxf09xJTXrAd9v5VQbeWGxwFcW05oJulSFjmJA9Hcmb
                DYHJT+sG2mlZDEruCGAzCVubJwGY1aRlcs9AQc1jIm/l8JwH7le2kpk3QoX+gz0w
                WwIDAQAB
                -----END PUBLIC KEY-----`;


  	MoipCreditCard
    .setEncrypter(jsencrypt, 'ionic')
    .setPubKey(pubKey)
    .setCreditCard({
        number: '4012001037141112',
        cvc: '123',
        expirationMonth: '05',
        expirationYear: '18'
    })
    .hash()
    .then(hash => this.hash = hash);
  }

}
