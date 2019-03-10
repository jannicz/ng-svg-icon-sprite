import { TestBed, inject } from '@angular/core/testing';
import { IconSpriteService } from './icon-sprite.service';
import { IconSpriteModule } from './icon-sprite.module';

describe('IconSpriteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IconSpriteService]
    });
  });

  it('should set a default path', inject([IconSpriteService], (service: IconSpriteService) => {
    service.setPath('foo');
    expect(service).toBeTruthy();
    expect(service.getPath()).toEqual('foo');
  }));
});

describe('IconSpriteService forRoot', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconSpriteModule.forRoot({ path: 'bar' })]
    });
  });

  it('should set a default path via forRoot', inject([IconSpriteService], (service: IconSpriteService) => {
    expect(service).toBeTruthy();
    expect(service.getPath()).toEqual('bar');
  }));
});
