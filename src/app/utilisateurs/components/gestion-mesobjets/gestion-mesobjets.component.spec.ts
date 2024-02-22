import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionMesobjetsComponent } from './gestion-mesobjets.component';
import { BiensService } from 'src/app/services/biens.service';
import { of } from 'rxjs';

describe('GestionMesobjetsComponent', () => {
  let component: GestionMesobjetsComponent;
  let fixture: ComponentFixture<GestionMesobjetsComponent>;
  let biensServiceSpy: jasmine.SpyObj<BiensService>;

  beforeEach(() => {
    biensServiceSpy = jasmine.createSpyObj('BiensService', ['addAnnonce']);
    TestBed.configureTestingModule({
      declarations: [ GestionMesobjetsComponent ],
      providers: [
        { provide: BiensService, useValue: biensServiceSpy }
      ]
    });
    fixture = TestBed.createComponent(GestionMesobjetsComponent);
    component = fixture.componentInstance;
  });

  it('should call addAnnonce with correct data', () => {
    // Données valides
    const libelle = 'Test Libelle';
    const description = 'Test Description';
    const image = new File([''], 'image.jpg');
    const date = '2023-11-16';
    const categorie_id = 1;
    const lieu = 'Test Lieu';
    const type_bien = 'Perdu';

    component.libelle = libelle;
    component.description = description;
    component.image = image;
    component.date = date;
    component.categorie_id = categorie_id;
    component.lieu = lieu;
    component.type_bien = type_bien;

    const formData = new FormData();
    formData.append('libelle', libelle);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('date', date);
    formData.append('categorie_id', String(categorie_id));
    formData.append('lieu', lieu);
    formData.append('type_bien', type_bien);

    component.ajoutBien();

    expect(biensServiceSpy.addAnnonce).toHaveBeenCalledWith(formData);
  });

  it('should not call addAnnonce if libelle is empty', () => {
    // Libelle vide
    component.libelle = '';
    component.description = 'Test Description';
    component.image = new File([''], 'image.jpg');
    component.date = '2023-11-16';
    component.categorie_id = 1;
    component.lieu = 'Test Lieu';
    component.type_bien = 'Perdu';

    component.ajoutBien();

    expect(biensServiceSpy.addAnnonce).not.toHaveBeenCalled();
  });
});
