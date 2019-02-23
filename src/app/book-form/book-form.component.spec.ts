import appModuleDependencies from '../app.module.dependencies';
import { BookFormComponent } from './book-form.component';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

describe('BookFormComponent', () => {
  let component: BookFormComponent;
  let fixture: ComponentFixture<BookFormComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ...appModuleDependencies.imports,
      ],
      declarations: [
        ...appModuleDependencies.declarations,
      ],
      providers: [...appModuleDependencies.providers],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
