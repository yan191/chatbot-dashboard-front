import { TestBed } from '@angular/core/testing';

import { DataBoardService } from './data-board.service';

describe('DataBoardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataBoardService = TestBed.get(DataBoardService);
    expect(service).toBeTruthy();
  });
});
