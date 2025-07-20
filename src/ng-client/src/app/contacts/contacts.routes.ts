import { Route } from "@angular/router";
import { Contacts } from "./contacts";

export default [
    {
        path: '',
        component: Contacts,
        children: [
            {
                path: ':id',
                loadComponent: () => import('./details/details').then(m => m.ContactDetails)
            }
        ]
    }
] satisfies Route[];
