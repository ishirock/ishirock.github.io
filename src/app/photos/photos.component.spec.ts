import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PhotosComponent } from './photos.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  beforeAll(() => {
    (window as any).gapi = {
      load: (name: string, callback: () => void) => callback(),
      auth2: {
        init: () => Promise.resolve(),
        getAuthInstance: () => ({
          signIn: () => Promise.resolve({
            getBasicProfile: () => ({}),
            getAuthResponse: () => ({ access_token: 'mock_token' })
          })
        })
      },
      signin2: {
        render: () => { }
      }
    };
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PhotosComponent],
      imports: [HttpClientTestingModule, MaterialModule, NoopAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
