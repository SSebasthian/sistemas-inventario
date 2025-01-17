import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"sistemas-inventario","appId":"1:694019300740:web:5b9977bd6c259378b991d1","storageBucket":"sistemas-inventario.firebasestorage.app","apiKey":"AIzaSyBdIxaR0NHy3UEAlSiFLtqQvGFn_xQ_rmc","authDomain":"sistemas-inventario.firebaseapp.com","messagingSenderId":"694019300740"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
