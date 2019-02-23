import appModuleDependencies from './app.module.dependencies';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { async, TestBed } from '@angular/core/testing';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListPageComponent } from './book-list-page/book-list-page.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [...appModuleDependencies.schemas],
      imports: [
        ...appModuleDependencies.imports,
      ],
      declarations: [
        ...appModuleDependencies.declarations,
      ],
      providers: [...appModuleDependencies.providers],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
