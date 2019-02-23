import appModuleDependencies from '../app.module.dependencies';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookListPageComponent } from './book-list-page.component';

describe('BookListPageComponent', () => {
  let component: BookListPageComponent;
  let fixture: ComponentFixture<BookListPageComponent>;

  beforeEach(async(() => {
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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
