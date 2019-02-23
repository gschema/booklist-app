import appModuleDependencies from './app.module.dependencies';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ...appModuleDependencies.declarations,
  ],
  imports: [
    ...appModuleDependencies.imports,
  ],
  bootstrap: [...appModuleDependencies.bootstrap],
  providers: [...appModuleDependencies.providers],
})
export class AppModule {}
