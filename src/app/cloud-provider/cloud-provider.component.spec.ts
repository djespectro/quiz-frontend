import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudProviderComponent } from './cloud-provider.component';

describe('CloudProviderComponent', () => {
  let component: CloudProviderComponent;
  let fixture: ComponentFixture<CloudProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
