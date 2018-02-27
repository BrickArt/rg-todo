import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbEditComponent } from './tb-edit.component';

describe('TbEditComponent', () => {
  let component: TbEditComponent;
  let fixture: ComponentFixture<TbEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
