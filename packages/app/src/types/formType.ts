import { type NavItem } from "~/types/navItem";

interface Section {
  id: string;
  label: string;
  name: string;
  type: string;
  placeholder: {
    active: boolean;
    text: string;
  };
  required: boolean;
  styleString: {
    labelStyle: string;
    inputStyle: string;
  };
}

interface CallToAction {
  id: string;
  type: string;
  label: string;
  href: string;
  styleString: string;
}

export interface Form {
  id: string;
  action: string;
  sections: Section[];
  callToAction: CallToAction;
  navSection?: NavItem;
  styleString?: string;
}
