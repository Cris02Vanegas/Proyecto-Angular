import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { of, throwError } from 'rxjs';
import { InicioComponent } from './inicio.component';
import { ContactService } from '../../services/contact.service';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;
  let mockContactService: jasmine.SpyObj<ContactService>;
  let mockToastrService: jasmine.SpyObj<ToastrService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    // Crear mocks para los servicios
    mockContactService = jasmine.createSpyObj('ContactService', ['login']);
    mockToastrService = jasmine.createSpyObj('ToastrService', [
      'success',
      'warning',
    ]);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [InicioComponent, ReactiveFormsModule],
      providers: [
        { provide: ContactService, useValue: mockContactService },
        { provide: ToastrService, useValue: mockToastrService },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with 3 controls', () => {
    expect(component.formularioContacto.contains('nombre')).toBeTrue();
    expect(component.formularioContacto.contains('email')).toBeTrue();
    expect(component.formularioContacto.contains('mensaje')).toBeTrue();
  });

  it('should require the nombre and email fields', () => {
    let nombreControl = component.formularioContacto.get('nombre');
    let emailControl = component.formularioContacto.get('email');

    nombreControl?.setValue('');
    emailControl?.setValue('');

    expect(nombreControl?.valid).toBeFalse();
    expect(emailControl?.valid).toBeFalse();
  });

  it('should call contactService.login() and show success message on valid form', () => {
    component.formularioContacto.setValue({
      nombre: 'John Doe',
      email: 'john.doe@example.com',
      mensaje: 'Hello!',
    });

    mockContactService.login.and.returnValue(of({ resultado: 'Bien' }));

    component.envioContacto();

    expect(mockContactService.login).toHaveBeenCalled();
    expect(mockToastrService.success).toHaveBeenCalledWith('Mensaje Enviado');
    expect(component.formularioContacto.value).toEqual({
      nombre: '',
      email: '',
      mensaje: '',
    });
  });

  it('should show warning message if form is invalid', () => {
    component.formularioContacto.setValue({
      nombre: '',
      email: '',
      mensaje: '',
    });

    component.envioContacto();

    expect(mockToastrService.warning).toHaveBeenCalledWith(
      'Todos los campos son obligatorios'
    );
  });

  it('should handle login failure', () => {
    component.formularioContacto.setValue({
      nombre: 'John Doe',
      email: 'john.doe@example.com',
      mensaje: 'Hello!',
    });

    mockContactService.login.and.returnValue(
      throwError(() => new Error('Error'))
    );

    component.envioContacto();

    expect(mockContactService.login).toHaveBeenCalled();
    expect(mockToastrService.success).not.toHaveBeenCalled();
  });
});
