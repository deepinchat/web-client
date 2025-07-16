import { Route } from "@angular/router";
import { Contacts } from "./contacts";

export default [
    {
        path: '',
        component: Contacts,
        children: [
            {
                path: 'new',
                loadComponent: () => import('./edit/edit').then(m => m.ContactEdit)
            },
            {
                path: ':id/edit',
                loadComponent: () => import('./edit/edit').then(m => m.ContactEdit)
            },
            {
                path: ':id',
                loadComponent: () => import('./details/details').then(m => m.ContactDetails)
            }
        ]
    }
] satisfies Route[];
