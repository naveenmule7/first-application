import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesServices } from './services/courses.service';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register/lpnames.service';
import { HeroComponent } from './hero/hero.component';

import { NaveenComponent } from './naveenapp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavregComponent } from './navreg/navreg.component';
import { CourseComponent } from './courses/course.componnt';
import { CourseService } from './courses/course.service';
import { HomeComponent } from './home/home.component';
import { ContactFormComponent } from './contactForm/contact-form.component';
import { PostService } from './services/post.services';
import { PostComponent } from './post/post.component';
import { MypostComponent } from './mypost/mypost.component';
import { MypostService } from './services/mypost.service';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { InvoiceModule } from './invoice/invoice.module';
import { ItemsComponent } from 'src/items/items.component';
import { ItemsService } from './services/items.service';
import { ItemComponent } from 'src/item/item.component';
import { AuthService } from './services/auth.service';
import { UnAuthorizedComponent } from './un-authorized/un-authorized.component';
import { AuthGuard } from './services/auth.guard';
import { AdminGuard } from './services/admin.guard';
import { environment } from '../environments/environment.development';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './services/employee.service';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { StudentComponent } from './student/student.component';
import { FlagComponent } from './flag/flag.component';



const routes: Routes = [
  // {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'register', component: RegisterComponent,canActivate: [AuthGuard]},
  {path: 'contact', component: ContactComponent,canActivate: [AuthGuard]},
  {path: 'reddyapp', component: NaveenComponent,canActivate: [AuthGuard]},
  {path: 'hero', component: HeroComponent,canActivate: [AuthGuard]},
  {path: 'course', component: CourseComponent, canActivate: [AuthGuard]},
  {path: 'navreg', component: NavregComponent,canActivate: [AuthGuard]},
  {path: 'contact-form', component: ContactFormComponent,canActivate: [AuthGuard]},
  {path: 'post/:id', component: PostDetailComponent,canActivate: [AuthGuard]},
  {path: 'post', component: PostComponent,canActivate: [AuthGuard]},
  {path: 'items', component: ItemsComponent,canActivate: [AuthGuard]},
  {path: 'invoice', loadChildren: ()=> InvoiceModule,canActivate: [AuthGuard,AdminGuard]},
  {path: 'employee/:id', component: EmployeeDetailComponent,canActivate: [AuthGuard]},
  {path: 'employee', component: EmployeeComponent,canActivate: [AuthGuard]},
  {path: 'student', component: StudentComponent,canActivate: [AuthGuard]},
  {path: 'un-authorized', component: UnAuthorizedComponent},
  {path: 'mypost', component: MypostComponent,canActivate: [AuthGuard]},
  {path: 'flag', component: FlagComponent,canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ContactComponent,
    RegisterComponent,
    HeroComponent,
    NaveenComponent,
    NavregComponent,
    CourseComponent,
    HomeComponent,
    ContactFormComponent,
    PostComponent,
    MypostComponent,
    NotFoundComponent,
    PostDetailComponent,
    ItemsComponent,
    ItemComponent,
    UnAuthorizedComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    StudentComponent,
    FlagComponent
   
    
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      timeOut: 5000,
    }),
    NgxPaginationModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot(routes),

    
  ],
  providers: [
    CoursesServices,
    RegisterService,
    CourseService,
    PostService,
    MypostService,
    ItemsService,
    AuthService,
    AuthGuard,
    AdminGuard,
    EmployeeService
    
    
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
