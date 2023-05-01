const router = new VueRouter({
    routes: [
        { path: '/', component: HomePage }, // default page
        { name: 'home', path: '/home', component: HomePage },
        { name: 'mypotlucks', path: '/my-potlucks', component: MyPotlucksPage },
        { name: 'create', path: '/create', component: CreatePotluckPage },
        { name: 'potlucks', path: '/potlucks', component: PotlucksPage },
        { name: 'archive', path: '/archive', component: ArchivePage },
        { name: 'potluck', path: '/potluck/:id', component: PotluckPage, props: true},
        // { name: 'potluck', path: '/potluck/:id/edit', component: EditPotluckPage, props: true},
        // { name: 'potluck', path: '/new/:year/:month/:title', component: SignupPotluckPage, props: true},
    ],
});
