import appModuleDependencies from '../app.module.dependencies';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookListComponent } from './book-list.component';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

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
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
