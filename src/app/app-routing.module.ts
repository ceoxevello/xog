  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { IndexhomeComponent } from './components/indexhome/indexhome.component';
  import { TopnavComponent } from './components/topnav/topnav.component';
import { AdvertisingComponent } from './desktop/views/advertising/advertising.component';
import { AppDevComponent } from './desktop/views/app-dev/app-dev.component';
import { AppDevelopmentComponent } from './desktop/views/app-development/app-development.component';
import { ApplicationServicesComponent } from './desktop/views/application-services/application-services.component';
import { BrandingComponent } from './desktop/views/branding/branding.component';
import { BusinessStrategyComponent } from './desktop/views/business-strategy/business-strategy.component';
import { CloudSolutionsComponent } from './desktop/views/cloud-solutions/cloud-solutions.component';
import { CyberSecurityComponent } from './desktop/views/cyber-security/cyber-security.component';
import { DigitalStrategyComponent } from './desktop/views/digital-strategy/digital-strategy.component';
import { ECommerceComponent } from './desktop/views/e-commerce/e-commerce.component';
import { HomeGroceryComponent } from './desktop/views/home-grocery/home-grocery.component';
import { LogoDesignComponent } from './desktop/views/logo-design/logo-design.component';
import { ProductPackagingComponent } from './desktop/views/product-packaging/product-packaging.component';
import { QualityEngineeringComponent } from './desktop/views/quality-engineering/quality-engineering.component';
import { SeoComponent } from './desktop/views/seo/seo.component';
import { SoftwareDevelopmentComponent } from './desktop/views/software-development/software-development.component';
import { UserExperienceComponent } from './desktop/views/user-experience/user-experience.component';
import { WebDesignComponent } from './desktop/views/web-design/web-design.component';
import { WebDevComponent } from './desktop/views/web-dev/web-dev.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { CareersComponent } from './views/careers/careers.component';
import { ComingSoonComponent } from './views/coming-soon/coming-soon.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';

  const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    {path: 'home', component: IndexhomeComponent, data: { title : "Xevello | India's leading Technology Consultancy services"}},
    {path: 'contact-us', component: ContactUsComponent, data: { title : "Xevello | Contact Us | Response server is busy "}},
    {path: 'coming-soon', component: ComingSoonComponent, data: { title : "Welcome "}},
    {path: 'grocery', component: HomeGroceryComponent, data: { title : "Xevello | Build your grocery store."}},
    {path: 'careers', component: CareersComponent, data: { title : "Xevello | Careers - Find your perfect job "}},
    {path: 'about-us', component: AboutUsComponent, data: { title : "About Us | Xevello Consulting Services"}},
    // {path: 'application-services', component: ApplicationServicesComponent, data: { title : "Xevello | Application Services"}},
    // {path: 'application-development', component: AppDevelopmentComponent, data: { title : "Xevello | App Development & Management"}},
    // {path: 'business-strategy', component: BusinessStrategyComponent, data: { title : "Xevello | Business & Strategy"}},
    {path: 'web-design', component: WebDesignComponent, data: { title : "Xevello | World's leading web designers"}},
    {path: 'app-development', component: AppDevComponent, data: { title : "Xevello | App Development"}},
    {path: 'web-development', component: WebDevComponent, data: { title : "Xevello | Web Development"}},
    {path: 'branding', component: BrandingComponent, data: { title : "Xevello | Branding"}},
    {path: 'cloud-solutions', component: CloudSolutionsComponent, data: { title : "Xevello | Cloud Solutions"}},
    {path: 'cyber-security', component: CyberSecurityComponent, data: { title : "Xevello | Cyber Security"}},
    {path: 'digital-strategy', component: DigitalStrategyComponent, data: { title : "Xevello | Digital Strategy"}},
    {path: 'e-commerce', component: ECommerceComponent, data: { title : "Xevello | E-Commerce : Build your custom online store"}},
    {path: 'logo-design', component: LogoDesignComponent, data: { title : "Xevello | Logo Designing"}},
    {path: 'marketing', component: AdvertisingComponent, data: { title : "Xevello | Marketing "}},
    {path: 'seo', component: SeoComponent, data: { title : "Xevello | Build your mobile apps"}},
    {path: 'software-development', component: SoftwareDevelopmentComponent, data: { title : "Xevello | Software Development"}},
    {path: 'ui-ux', component: UserExperienceComponent, data: { title : "Xevello | Build your ui-ux with modern tech"}},
    {path: 'product-packaging', component: ProductPackagingComponent, data: { title : "Xevello | Product Packaging | Make your product look goods"}},
    {path: 'quality-engineering', component: QualityEngineeringComponent, data: { title : "Xevello | Quality Engineering & Testing"}},
  ]

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  export const routingComponent = []
