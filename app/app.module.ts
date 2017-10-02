/**
 * Created by pc on 22.09.2017.
 */
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from "./app.component";
import { List1Component } from "./list1/list1.component";
import { List2Component } from "./list2/list2.component";
import { List3Component } from "./list3/list3.component";
import { TodosComponent } from "./todolist/todolist.component";

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([ // настройка маршрутов
            { path: "list1", component: List1Component }, // при переходе по адресу localhost:3000/component1 должен активироваться компонент List1Component
            { path: "list3", component: List3Component },
            { path: "list2", component: List2Component },
            { path: "todolist", component: TodosComponent },
            { path: "", redirectTo: "list1", pathMatch: "full" }
        ])
    ],
    declarations: [AppComponent, List1Component, List2Component, List3Component , TodosComponent ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
