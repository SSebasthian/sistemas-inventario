import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp, getApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http'
import { provideStorage, getStorage } from '@angular/fire/storage'


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideFirebaseApp(() => 
      initializeApp({
        "projectId":"sistemas-inventario",
        "appId":"1:694019300740:web:5b9977bd6c259378b991d1",
        "storageBucket":"gs://sistemas-inventario.firebasestorage.app",
        "apiKey":"AIzaSyBdIxaR0NHy3UEAlSiFLtqQvGFn_xQ_rmc",
        "authDomain":"sistemas-inventario.firebaseapp.com",
        "messagingSenderId":"694019300740"
      })
    ), 
    //configura componentes de Firestore 
    provideFirestore(() => getFirestore()),

    //configura componentes de Autenticacion
    provideAuth(() => getAuth()), 

    //configura componentes de Storage
    provideStorage(() => getStorage()),
  ],

};
