import { TestBed, inject } from '@angular/core/testing';
import { IconSpriteService } from './icon-sprite.service';

describe('IconSpriteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IconSpriteService]
    });
  });

  it('should be created', inject([IconSpriteService], (service: IconSpriteService) => {
    expect(service).toBeTruthy();
  }));

  it('should set a default path', inject([IconSpriteService], (service: IconSpriteService) => {
    service.setPath('foo');
    expect(service).toBeTruthy();
    expect(service.getPath()).toEqual('foo');
  }));
});
