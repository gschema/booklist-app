import { BookService } from './book.service';
import { TestBed } from '@angular/core/testing';

describe('BooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookService = TestBed.get(BookService);
    expect(service).toBeTruthy();
  });
});
