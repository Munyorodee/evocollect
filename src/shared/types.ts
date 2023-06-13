export enum SelectedPage {
  Home = "home",
  About = "about",
  OurServices = "ourservices",
  Benefits = "benefit",
  ContactUs = "contactus",
}

export interface AboutType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ServiceType {
  name: string;
  description?: string;
  image: string;
}

export interface  BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}