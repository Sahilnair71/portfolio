import { Component, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';

type Education = { degree: string; school: string; year: string; location: string };
type Certificate = { name: string; issuer: string; year: string };
type Language = { name: string; level: string };

type Payload = {
  education: Education[];
  certificates: Certificate[];
  languages: Language[];
};

@Component({
  selector: 'app-edu-cert-lang',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './edu-cert-lang.component.html',
  styleUrl: './edu-cert-lang.component.scss'
})
export class EduCertLangComponent {
  private http = inject(HttpClient);

  private data$ = this.http.get<Payload>('assets/backend_data/edu-cert-lang.json');

  education = toSignal(this.data$.pipe(map(d => d.education)), { initialValue: [] as Education[] });
  certificates = toSignal(this.data$.pipe(map(d => d.certificates)), { initialValue: [] as Certificate[] });
  languages = toSignal(this.data$.pipe(map(d => d.languages)), { initialValue: [] as Language[] });
}