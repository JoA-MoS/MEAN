import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerGameStatusesComponent } from './player-game-statuses.component';

describe('PlayerGameStatusesComponent', () => {
  let component: PlayerGameStatusesComponent;
  let fixture: ComponentFixture<PlayerGameStatusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerGameStatusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerGameStatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
