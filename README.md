# Angular Router

# App Main Module

const mainModuleRoutes = [
    {path: '', loadChildren: 'app/home/home.module'}, 
    {path: 'contacts', loadChildren: 'app/contacts/contacts.module'}
];

and then you import: RouterModule.forRoot(mainModuleRoutes);

# App Some Other Child Module

const someOtherModuleRoutes = [
    {path: '', component: HomeComponent}
];

and then you import: RouterModule.forChild(someOtherModuleRoutes)
