import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreServiceComponent } from './explore-service.component';

describe('ExploreServiceComponent', () => {
  let component: ExploreServiceComponent;
  let fixture: ComponentFixture<ExploreServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
