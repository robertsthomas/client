import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddToolPage } from './add-tool.page';

describe('AddToolPage', () => {
  let component: AddToolPage;
  let fixture: ComponentFixture<AddToolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddToolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
