import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HombreComponent } from './hombre/hombre.component';
import { MujerComponent } from './mujer/mujer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            HeaderComponent, 
            HomeComponent, 
            FooterComponent,
            HombreComponent,
            MujerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoFinal_Angular';
}
