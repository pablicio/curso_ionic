import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Teste } from './teste';

@NgModule({
  declarations: [
    Teste,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    Teste
  ]
})
export class TesteModule {}
