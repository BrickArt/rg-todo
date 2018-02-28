webpackJsonp(["system.module"],{

/***/ "../../../../../src/app/shared/animations/fade.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeStateTrigger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var fadeStateTrigger = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('fade', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])(':enter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
            opacity: 0
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(500)
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(500, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
        opacity: 0
    })))
]);


/***/ }),

/***/ "../../../../../src/app/shared/models/task.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(title, status, id) {
        this.title = title;
        this.status = status;
        this.id = id;
    }
    return Task;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/taskboard.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskBoard; });
var TaskBoard = /** @class */ (function () {
    function TaskBoard(user_id, title, tasks, id) {
        this.user_id = user_id;
        this.title = title;
        this.tasks = tasks;
        this.id = id;
    }
    return TaskBoard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_base_api__ = __webpack_require__("../../../../../src/app/shared/core/base-api.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskService = /** @class */ (function (_super) {
    __extends(TaskService, _super);
    function TaskService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    TaskService.prototype.getTaskBoardByUserId = function (user_id) {
        return this.get("tasksboards?user_id=" + user_id);
    };
    TaskService.prototype.createNewTaskBoard = function (taskBoard) {
        console.log('service', taskBoard);
        return this.post('tasksboards', taskBoard);
    };
    TaskService.prototype.deleteTaskBoard = function (id) {
        return this.delete("tasksboards/" + id);
    };
    TaskService.prototype.editTaskBoard = function (taskBoard) {
        return this.put("tasksboards/" + taskBoard.id, taskBoard);
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], TaskService);
    return TaskService;
}(__WEBPACK_IMPORTED_MODULE_2__core_base_api__["a" /* BaseApi */]));



/***/ }),

/***/ "../../../../../src/app/system/components/system-add/system-add.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n<form [formGroup]=\"form\" class=\"form\" (ngSubmit)=\"onSubmit()\">\n    <mat-form-field class=\"inp\">\n        <input formControlName=\"title\" matInput placeholder=\"Block title\">\n        <mat-error *ngIf=\"form.get('title').invalid && form.get('title').touched\">You must enter a value.</mat-error>\n    </mat-form-field>\n    <button mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"form.invalid\" class=\"btn\">Add</button>\n    <button mat-raised-button color=\"warn\" (click)=\"onCancel()\" class=\"btn\">Cancel</button>\n</form>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/system/components/system-add/system-add.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".inp {\n  width: 70%; }\n\n.btn {\n  height: 2.5em;\n  margin-top: 1em; }\n\n.form {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/system/components/system-add/system-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SystemAddComponent = /** @class */ (function () {
    function SystemAddComponent() {
        this.addBoardCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */];
        this.addBoard = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */];
    }
    SystemAddComponent.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required])
        });
    };
    SystemAddComponent.prototype.onCancel = function () {
        this.addBoardCancel.emit();
    };
    SystemAddComponent.prototype.onSubmit = function () {
        var user = JSON.parse(window.localStorage.getItem('user'));
        this.addBoard.emit({
            user_id: user.id,
            title: this.form.value['title']
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], SystemAddComponent.prototype, "addBoardCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], SystemAddComponent.prototype, "addBoard", void 0);
    SystemAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-system-add',
            template: __webpack_require__("../../../../../src/app/system/components/system-add/system-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/system/components/system-add/system-add.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], SystemAddComponent);
    return SystemAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/system/components/task-add/task-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"add\">\n    <form [formGroup]=\"form\" class=\"form\" (ngSubmit)=\"onSubmit()\">\n        <mat-form-field class=\"inp\">\n            <textarea matInput formControlName=\"title\" placeholder=\"Task\"></textarea>\n            <mat-error *ngIf=\"form.get('title').invalid && form.get('title').touched\">You must enter a value.</mat-error>\n        </mat-form-field>\n        <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"form.invalid\" class=\"btn\">+ Add task</button>\n    </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/system/components/task-add/task-add.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add {\n  width: 100%; }\n\n.form {\n  width: 100%; }\n\n.inp {\n  width: 80%;\n  margin-right: 2%; }\n\n.btn {\n  width: 17%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/system/components/task-add/task-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskAddComponent = /** @class */ (function () {
    function TaskAddComponent() {
        this.taskAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    TaskAddComponent.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required])
        });
    };
    TaskAddComponent.prototype.onSubmit = function () {
        this.taskAdd.emit({
            title: this.form.value['title'],
            status: false
        });
        this.form.reset();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TaskAddComponent.prototype, "taskAdd", void 0);
    TaskAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-task-add',
            template: __webpack_require__("../../../../../src/app/system/components/task-add/task-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/system/components/task-add/task-add.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskAddComponent);
    return TaskAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/system/components/task-edit/task-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"editor\">\n    <form [formGroup]=\"form\" class=\"form\" (ngSubmit)=\"onSubmit()\">\n        <mat-form-field class=\"inp\">\n            <input formControlName=\"title\" matInput placeholder=\"Task title\" [value]=\"t.title\">\n            <mat-error *ngIf=\"form.get('title').invalid && form.get('title').touched\">You must enter a value.</mat-error>\n        </mat-form-field>\n        <div class=\"btns\">\n            <button mat-button color=\"accent\" type=\"submit\" [disabled]=\"form.invalid\" class=\"btn\">Save</button>\n            <button mat-button color=\"warn\" (click)=\"onCancel()\" class=\"btn\">Cancel</button>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/system/components/task-edit/task-edit.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".editor, .form {\n  width: 100%; }\n\n.form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.inp {\n  width: 70%; }\n\n.btns {\n  width: 20%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/system/components/task-edit/task-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_task_model__ = __webpack_require__("../../../../../src/app/shared/models/task.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskEditComponent = /** @class */ (function () {
    function TaskEditComponent() {
        this.taskEditCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */];
        this.taskEdit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    TaskEditComponent.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.t.title, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required])
        });
    };
    TaskEditComponent.prototype.onCancel = function () {
        this.taskEditCancel.emit();
    };
    TaskEditComponent.prototype.onSubmit = function () {
        this.taskEdit.emit(this.form.value['title']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_models_task_model__["a" /* Task */])
    ], TaskEditComponent.prototype, "t", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TaskEditComponent.prototype, "taskEditCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TaskEditComponent.prototype, "taskEdit", void 0);
    TaskEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-task-edit',
            template: __webpack_require__("../../../../../src/app/system/components/task-edit/task-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/system/components/task-edit/task-edit.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskEditComponent);
    return TaskEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/system/components/task-editor/task-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  task-editor works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/system/components/task-editor/task-editor.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/system/components/task-editor/task-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskEditorComponent = /** @class */ (function () {
    function TaskEditorComponent() {
    }
    TaskEditorComponent.prototype.ngOnInit = function () {
    };
    TaskEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-task-editor',
            template: __webpack_require__("../../../../../src/app/system/components/task-editor/task-editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/system/components/task-editor/task-editor.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskEditorComponent);
    return TaskEditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/system/components/task/task.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"t\">\n    <div class=\"task\" *ngIf=\"!edit\">\n        <mat-checkbox [checked]=\"t.status\" (change)=\"onChange()\" class=\"check\">{{ t.title }}</mat-checkbox>\n        <div class=\"buttons\">\n            <button mat-icon-button (mousedown)=\"onKeydown()\" (mouseup)=\"onKeyup()\"><mat-icon>swap_vert</mat-icon></button>\n            <button mat-icon-button (click)=\"edit = true\"><mat-icon>edit</mat-icon></button>\n            <button mat-icon-button (click)=\"onDelete()\"><mat-icon>delete</mat-icon></button>\n        </div>\n    </div>\n    <div class=\"editor\" *ngIf=\"edit\">\n        <app-task-edit\n            class=\"editor\"\n            [t]=\"t\"\n            (taskEdit)=\"onEdit($event)\"\n            (taskEditCancel)=\"onEditCancel()\"\n        ></app-task-edit>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/system/components/task/task.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task, .editor {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding: 0.5em;\n  border-bottom: 1px solid #efefef; }\n\n.check {\n  padding: 0.7em 0;\n  width: 80%; }\n\n.buttons {\n  width: 20%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0 1em;\n  border-left: 1px solid #efefef;\n  color: gray;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.editor {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/system/components/task/task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_task_model__ = __webpack_require__("../../../../../src/app/shared/models/task.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_animations_fade_animation__ = __webpack_require__("../../../../../src/app/shared/animations/fade.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskComponent = /** @class */ (function () {
    function TaskComponent() {
        this.hide = true;
        this.edit = false;
        this.taskCange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.taskDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.keyup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.keydown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    TaskComponent.prototype.ngOnInit = function () {
    };
    TaskComponent.prototype.onChange = function () {
        this.t.status = !this.t.status;
        this.taskCange.emit();
    };
    TaskComponent.prototype.onDelete = function () {
        this.taskDelete.emit(this.idx);
        console.log('del');
    };
    TaskComponent.prototype.onEditCancel = function () {
        this.edit = false;
    };
    TaskComponent.prototype.onEdit = function (title) {
        this.t.title = title;
        this.edit = false;
        this.taskCange.emit(this.t);
    };
    TaskComponent.prototype.onKeydown = function () {
        this.keydown.emit();
    };
    TaskComponent.prototype.onKeyup = function () {
        this.keyup.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_models_task_model__["a" /* Task */])
    ], TaskComponent.prototype, "t", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], TaskComponent.prototype, "idx", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TaskComponent.prototype, "taskCange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TaskComponent.prototype, "taskDelete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TaskComponent.prototype, "keyup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TaskComponent.prototype, "keydown", void 0);
    TaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-task',
            template: __webpack_require__("../../../../../src/app/system/components/task/task.component.html"),
            styles: [__webpack_require__("../../../../../src/app/system/components/task/task.component.sass")],
            animations: [__WEBPACK_IMPORTED_MODULE_2__shared_animations_fade_animation__["a" /* fadeStateTrigger */]]
        }),
        __metadata("design:paramtypes", [])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/system/components/taskboard/taskboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tb\">\n\n    <mat-card>\n        <mat-card-header >\n            <div class=\"header\" (mouseover)=\"hide = false\" (mouseleave)=\"hide = true\" *ngIf=\"!edited\">\n                <div class=\"header-title\">\n                    <span>Title</span>\n                    <h1>{{ tb.title }}</h1>\n                </div>\n                <div @fade class=\"buttons\" *ngIf=\"!hide\">\n                    <button mat-icon-button (click)=\"edited = true\">\n                        <mat-icon>edit</mat-icon>\n                    </button>\n                    <button mat-icon-button (click)=\"openDialog()\">\n                        <mat-icon>delete</mat-icon>\n                    </button>\n                </div>\n\n            </div>\n            <div class=\"editor\" *ngIf=\"edited\">\n                <app-tb-edit [tb]=\"tb\" (taskBoardEditCancel)=\"edited = false\" (taskBoardEdit)=\"onEdit($event)\"></app-tb-edit>\n            </div>\n\n        </mat-card-header>\n        <mat-card-content>\n            <div class=\"sortable\" dnd-sortable-container [sortableData]=\"tb.tasks\">\n                <div\n                    class=\"task\"\n                    *ngFor=\"let t of tb.tasks; let idx = index\"\n                    dnd-sortable\n                    [dragEnabled]=\"sortable\"\n                    [sortableIndex]=\"idx\" (onDropSuccess)=\"onDrop($event)\"\n                >\n                    <app-task\n                       class=\"item\"\n                       [t]=\"t\"\n                       [idx]=\"idx\"\n                       (taskCange)=\"onTaskChange($event)\"\n                       (taskDelete)=\"onTaskDelete($event)\"\n                       (keyup)=\"sortable = false\"\n                       (keydown)=\"sortable = true\"\n                   ></app-task>\n                </div>\n            </div>\n\n        </mat-card-content>\n        <mat-card-footer class=\"footer\">\n            <app-task-add (taskAdd)=\"taskAdd($event)\"></app-task-add>\n        </mat-card-footer>\n    </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/system/components/taskboard/taskboard.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tb {\n  margin-top: 1em; }\n\nspan {\n  font-size: 12px; }\n\nh1 {\n  margin: 0 0 0 0; }\n\n.header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  border-bottom: 1px solid #eeeeee;\n  margin-bottom: 1em; }\n\n.header-title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.editor {\n  width: 100%; }\n\n.footer {\n  padding: 1em;\n  background-color: #efefef; }\n\n.item {\n  height: 3em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/system/components/taskboard/taskboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_taskboard_model__ = __webpack_require__("../../../../../src/app/shared/models/taskboard.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_animations_fade_animation__ = __webpack_require__("../../../../../src/app/shared/animations/fade.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_dialog_dialog_component__ = __webpack_require__("../../../../../src/app/shared/components/dialog/dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaskboardComponent = /** @class */ (function () {
    function TaskboardComponent(dialog) {
        this.dialog = dialog;
        this.hide = true;
        this.edited = false;
        this.sortable = false;
        this.tbDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */];
        this.tbEdit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.tbChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    TaskboardComponent.prototype.ngOnInit = function () {
    };
    TaskboardComponent.prototype.onDrop = function () {
        this.tbChange.emit(this.tb);
        this.sortable = false;
        console.log(event);
    };
    TaskboardComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__shared_components_dialog_dialog_component__["a" /* DialogComponent */], { data: { title: this.tb.title } });
        dialogRef.beforeClose().subscribe(function (result) {
            if (result) {
                _this.tbDelete.emit(_this.tb);
            }
        });
    };
    TaskboardComponent.prototype.onEdit = function (tbEdited) {
        this.tbEdit.emit(tbEdited);
    };
    TaskboardComponent.prototype.taskAdd = function (task) {
        if (this.tb.tasks) {
            this.tb.tasks = this.tb.tasks.concat([task]);
        }
        else {
            this.tb.tasks = [task];
        }
        this.tbChange.emit(this.tb);
        // this.onEdit(t)
    };
    TaskboardComponent.prototype.onTaskChange = function (result) {
        this.tbChange.emit(this.tb);
        console.log(this.tb);
    };
    TaskboardComponent.prototype.onTaskDelete = function (idx) {
        this.tb.tasks.splice(idx, 1);
        this.tbChange.emit(this.tb);
        console.log(idx);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_models_taskboard_model__["a" /* TaskBoard */])
    ], TaskboardComponent.prototype, "tb", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TaskboardComponent.prototype, "tbDelete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TaskboardComponent.prototype, "tbEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TaskboardComponent.prototype, "tbChange", void 0);
    TaskboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-taskboard',
            template: __webpack_require__("../../../../../src/app/system/components/taskboard/taskboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/system/components/taskboard/taskboard.component.sass")],
            animations: [__WEBPACK_IMPORTED_MODULE_2__shared_animations_fade_animation__["a" /* fadeStateTrigger */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialog */]])
    ], TaskboardComponent);
    return TaskboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/system/components/tb-edit/tb-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"editor\">\n    <form [formGroup]=\"form\" class=\"form\" (ngSubmit)=\"onSubmit()\">\n        <mat-form-field class=\"inp\">\n            <input formControlName=\"title\" matInput placeholder=\"Block title\" [value]=\"tb.title\">\n            <mat-error *ngIf=\"form.get('title').invalid && form.get('title').touched\">You must enter a value.</mat-error>\n        </mat-form-field>\n        <button mat-button color=\"accent\" type=\"submit\" [disabled]=\"form.invalid\" class=\"btn\">Save</button>\n        <button mat-button color=\"warn\" (click)=\"onCancel()\" class=\"btn\">Cancel</button>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/system/components/tb-edit/tb-edit.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.editor {\n  width: 100%; }\n\n.inp {\n  width: 70%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/system/components/tb-edit/tb-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TbEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_taskboard_model__ = __webpack_require__("../../../../../src/app/shared/models/taskboard.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TbEditComponent = /** @class */ (function () {
    function TbEditComponent() {
        this.taskBoardEditCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */];
        this.taskBoardEdit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */];
    }
    TbEditComponent.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](this.tb.title, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required])
        });
    };
    TbEditComponent.prototype.onCancel = function () {
        this.taskBoardEditCancel.emit();
    };
    TbEditComponent.prototype.onSubmit = function () {
        this.taskBoardEdit.emit(__assign({}, this.tb, { title: this.form.value['title'] }));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_models_taskboard_model__["a" /* TaskBoard */])
    ], TbEditComponent.prototype, "tb", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TbEditComponent.prototype, "taskBoardEditCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TbEditComponent.prototype, "taskBoardEdit", void 0);
    TbEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tb-edit',
            template: __webpack_require__("../../../../../src/app/system/components/tb-edit/tb-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/system/components/tb-edit/tb-edit.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], TbEditComponent);
    return TbEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/system/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-button [matMenuTriggerFor]=\"menu\">{{ user.username }}</button>\n<mat-menu #menu=\"matMenu\">\n    <button mat-menu-item (click)=\"onExit()\">Exit</button>\n</mat-menu>\n"

/***/ }),

/***/ "../../../../../src/app/system/components/user/user.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/system/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = /** @class */ (function () {
    function UserComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(window.localStorage.getItem('user'));
    };
    UserComponent.prototype.onExit = function () {
        this.authService.logout();
        this.router.navigate(['login']);
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/system/components/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/system/components/user/user.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/system/system-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__system_component__ = __webpack_require__("../../../../../src/app/system/system.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_guard__ = __webpack_require__("../../../../../src/app/shared/services/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_services_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_2__system_component__["a" /* SystemComponent */] }
];
var SystemRoutingModule = /** @class */ (function () {
    function SystemRoutingModule() {
    }
    SystemRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], SystemRoutingModule);
    return SystemRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/system/system.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"system\">\n    <div class=\"user\">\n        <app-user></app-user>\n    </div>\n\n    <div class=\"main-block\">\n\n        <div class=\"taskboards\" *ngIf=\"isLoaded\">\n            <app-taskboard\n                class=\"tb\"\n                *ngFor=\"let tb of tasksBoards\"\n                [tb]=\"tb\"\n\n                (tbDelete)=\"TaskBoardDelete($event)\"\n                (tbEdit)=\"tbEdit($event)\"\n                (tbChange)=\"tbChange($event)\"\n            ></app-taskboard>\n\n        </div>\n        <div class=\"add\">\n             <app-system-add\n                *ngIf=\"!hide\"\n                (addBoardCancel)=\"onAddWindowClose()\"\n                (addBoard)=\"onAddBoard($event)\"\n             ></app-system-add>\n\n             <div\n                class=\"add-btn\"\n                *ngIf=\"hide\"\n\n             >\n                 <button\n                    mat-raised-button\n                    color=\"accent\"\n                    (click)=\"hide = false\"\n                >Add new task board +</button>\n             </div>\n        </div>\n\n\n\n\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/system/system.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".system {\n  padding-top: 4em;\n  width: 100%; }\n\n.main-block {\n  width: 70%;\n  margin: 0 auto; }\n\n.add {\n  margin-top: 1em; }\n\n.add-btn {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.user {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 1em;\n  color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/system/system.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_task_service__ = __webpack_require__("../../../../../src/app/shared/services/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SystemComponent = /** @class */ (function () {
    function SystemComponent(taskService) {
        this.taskService = taskService;
        this.isLoaded = false;
        this.tasksBoards = [];
        this.hide = true;
    }
    SystemComponent.prototype.ngOnInit = function () {
        this.loadTaskBoards();
    };
    SystemComponent.prototype.onAddWindowClose = function () {
        this.hide = true;
    };
    SystemComponent.prototype.onAddBoard = function (taskBoard) {
        var _this = this;
        this.taskService.createNewTaskBoard(taskBoard).subscribe(function (taskb) {
            _this.hide = true;
            _this.tasksBoards.push(taskBoard);
        });
    };
    SystemComponent.prototype.loadTaskBoards = function () {
        var _this = this;
        var user = JSON.parse(window.localStorage.getItem('user'));
        this.taskService.getTaskBoardByUserId(user.id).subscribe(function (tskb) {
            _this.tasksBoards = tskb;
            _this.isLoaded = true;
        });
    };
    SystemComponent.prototype.TaskBoardDelete = function (tb) {
        var _this = this;
        this.taskService.deleteTaskBoard(tb.id).subscribe(function (deleted) {
            _this.isLoaded = false;
            _this.loadTaskBoards();
        });
    };
    SystemComponent.prototype.tbEdit = function (tbEdited) {
        var _this = this;
        this.taskService.editTaskBoard(tbEdited).subscribe(function (tbNew) {
            _this.isLoaded = false;
            _this.loadTaskBoards();
        });
    };
    SystemComponent.prototype.tbChange = function (tbChanged) {
        this.taskService.editTaskBoard(tbChanged).subscribe(function (result) {
            console.log('Changes saved');
        });
    };
    SystemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-system',
            template: __webpack_require__("../../../../../src/app/system/system.component.html"),
            styles: [__webpack_require__("../../../../../src/app/system/system.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_task_service__["a" /* TaskService */]])
    ], SystemComponent);
    return SystemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/system/system.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemModule", function() { return SystemModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/ng2-dnd.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__system_component__ = __webpack_require__("../../../../../src/app/system/system.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_task_task_component__ = __webpack_require__("../../../../../src/app/system/components/task/task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_taskboard_taskboard_component__ = __webpack_require__("../../../../../src/app/system/components/taskboard/taskboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__system_routing_module__ = __webpack_require__("../../../../../src/app/system/system-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_system_add_system_add_component__ = __webpack_require__("../../../../../src/app/system/components/system-add/system-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_task_service__ = __webpack_require__("../../../../../src/app/shared/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_components_dialog_dialog_component__ = __webpack_require__("../../../../../src/app/shared/components/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_tb_edit_tb_edit_component__ = __webpack_require__("../../../../../src/app/system/components/tb-edit/tb-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_task_add_task_add_component__ = __webpack_require__("../../../../../src/app/system/components/task-add/task-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_task_edit_task_edit_component__ = __webpack_require__("../../../../../src/app/system/components/task-edit/task-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_task_editor_task_editor_component__ = __webpack_require__("../../../../../src/app/system/components/task-editor/task-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_user_user_component__ = __webpack_require__("../../../../../src/app/system/components/user/user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var SystemModule = /** @class */ (function () {
    function SystemModule() {
    }
    SystemModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_7__system_routing_module__["a" /* SystemRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng2_dnd__["a" /* DndModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__system_component__["a" /* SystemComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_task_task_component__["a" /* TaskComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_taskboard_taskboard_component__["a" /* TaskboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_system_add_system_add_component__["a" /* SystemAddComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_tb_edit_tb_edit_component__["a" /* TbEditComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_task_add_task_add_component__["a" /* TaskAddComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_task_edit_task_edit_component__["a" /* TaskEditComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_task_editor_task_editor_component__["a" /* TaskEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_user_user_component__["a" /* UserComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__shared_services_task_service__["a" /* TaskService */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_10__shared_components_dialog_dialog_component__["a" /* DialogComponent */]]
        })
    ], SystemModule);
    return SystemModule;
}());



/***/ }),

/***/ "../../../../ng2-dnd/ng2-dnd.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export providers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DndModule; });
/* unused harmony export AbstractComponent */
/* unused harmony export AbstractHandleComponent */
/* unused harmony export DataTransferEffect */
/* unused harmony export DragImage */
/* unused harmony export DragDropConfig */
/* unused harmony export DragDropData */
/* unused harmony export dragDropServiceFactory */
/* unused harmony export DragDropService */
/* unused harmony export dragDropSortableServiceFactory */
/* unused harmony export DragDropSortableService */
/* unused harmony export DraggableComponent */
/* unused harmony export DraggableHandleComponent */
/* unused harmony export DroppableComponent */
/* unused harmony export SortableContainer */
/* unused harmony export SortableComponent */
/* unused harmony export SortableHandleComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
/**
 * Check and return true if an object is type of string
 */
function isString(obj) {
    return typeof obj === "string";
}
/**
 * Check and return true if an object not undefined or null
 */
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
/**
 * Check and return true if an object is type of Function
 */
function isFunction(obj) {
    return typeof obj === "function";
}
/**
 * Create Image element with specified url string
 */
function createImage(src) {
    var img = new HTMLImageElement();
    img.src = src;
    return img;
}
/**
 * Call the function
 */
function callFun(fun) {
    return fun();
}
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var DataTransferEffect = /** @class */ (function () {
    function DataTransferEffect(name) {
        this.name = name;
    }
    return DataTransferEffect;
}());
DataTransferEffect.COPY = new DataTransferEffect('copy');
DataTransferEffect.LINK = new DataTransferEffect('link');
DataTransferEffect.MOVE = new DataTransferEffect('move');
DataTransferEffect.NONE = new DataTransferEffect('none');
var DragImage = /** @class */ (function () {
    function DragImage(imageElement, x_offset, y_offset) {
        if (x_offset === void 0) { x_offset = 0; }
        if (y_offset === void 0) { y_offset = 0; }
        this.imageElement = imageElement;
        this.x_offset = x_offset;
        this.y_offset = y_offset;
        if (isString(this.imageElement)) {
            // Create real image from string source
            var imgScr = this.imageElement;
            this.imageElement = new HTMLImageElement();
            this.imageElement.src = imgScr;
        }
    }
    return DragImage;
}());
var DragDropConfig = /** @class */ (function () {
    function DragDropConfig() {
        this.onDragStartClass = "dnd-drag-start";
        this.onDragEnterClass = "dnd-drag-enter";
        this.onDragOverClass = "dnd-drag-over";
        this.onSortableDragClass = "dnd-sortable-drag";
        this.dragEffect = DataTransferEffect.MOVE;
        this.dropEffect = DataTransferEffect.MOVE;
        this.dragCursor = "move";
        this.defaultCursor = "pointer";
    }
    return DragDropConfig;
}());
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var DragDropData = /** @class */ (function () {
    function DragDropData() {
    }
    return DragDropData;
}());
function dragDropServiceFactory() {
    return new DragDropService();
}
var DragDropService = /** @class */ (function () {
    function DragDropService() {
        this.allowedDropZones = [];
    }
    return DragDropService;
}());
DragDropService = __decorate$1([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], DragDropService);
function dragDropSortableServiceFactory(config) {
    return new DragDropSortableService(config);
}
var DragDropSortableService = /** @class */ (function () {
    function DragDropSortableService(_config) {
        this._config = _config;
    }
    Object.defineProperty(DragDropSortableService.prototype, "elem", {
        get: function () {
            return this._elem;
        },
        enumerable: true,
        configurable: true
    });
    DragDropSortableService.prototype.markSortable = function (elem) {
        if (isPresent(this._elem)) {
            this._elem.classList.remove(this._config.onSortableDragClass);
        }
        if (isPresent(elem)) {
            this._elem = elem;
            this._elem.classList.add(this._config.onSortableDragClass);
        }
    };
    return DragDropSortableService;
}());
DragDropSortableService = __decorate$1([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [DragDropConfig])
], DragDropSortableService);
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var AbstractComponent = /** @class */ (function () {
    function AbstractComponent(elemRef, _dragDropService, _config, _cdr) {
        var _this = this;
        this._dragDropService = _dragDropService;
        this._config = _config;
        this._cdr = _cdr;
        /**
         * Whether the object is draggable. Default is true.
         */
        this._dragEnabled = false;
        /**
         * Allows drop on this element
         */
        this.dropEnabled = false;
        this.dropZones = [];
        this.cloneItem = false;
        // Assign default cursor unless overridden
        this._defaultCursor = _config.defaultCursor;
        this._elem = elemRef.nativeElement;
        this._elem.style.cursor = this._defaultCursor; // set default cursor on our element
        //
        // DROP events
        //
        this._elem.ondragenter = function (event) {
            _this._onDragEnter(event);
        };
        this._elem.ondragover = function (event) {
            _this._onDragOver(event);
            //
            if (event.dataTransfer != null) {
                event.dataTransfer.dropEffect = _this._config.dropEffect.name;
            }
            return false;
        };
        this._elem.ondragleave = function (event) {
            _this._onDragLeave(event);
        };
        this._elem.ondrop = function (event) {
            _this._onDrop(event);
        };
        //
        // Drag events
        //
        this._elem.onmousedown = function (event) {
            _this._target = event.target;
        };
        this._elem.ondragstart = function (event) {
            if (_this._dragHandle) {
                if (!_this._dragHandle.contains(_this._target)) {
                    event.preventDefault();
                    return;
                }
            }
            _this._onDragStart(event);
            //
            if (event.dataTransfer != null) {
                event.dataTransfer.setData('text', '');
                // Change drag effect
                event.dataTransfer.effectAllowed = _this.effectAllowed || _this._config.dragEffect.name;
                // Change drag image
                if (isPresent(_this.dragImage)) {
                    if (isString(_this.dragImage)) {
                        event.dataTransfer.setDragImage(createImage(_this.dragImage));
                    }
                    else if (isFunction(_this.dragImage)) {
                        event.dataTransfer.setDragImage(callFun(_this.dragImage));
                    }
                    else {
                        var img = _this.dragImage;
                        event.dataTransfer.setDragImage(img.imageElement, img.x_offset, img.y_offset);
                    }
                }
                else if (isPresent(_this._config.dragImage)) {
                    var dragImage = _this._config.dragImage;
                    event.dataTransfer.setDragImage(dragImage.imageElement, dragImage.x_offset, dragImage.y_offset);
                }
                else if (_this.cloneItem) {
                    _this._dragHelper = _this._elem.cloneNode(true);
                    _this._dragHelper.classList.add('dnd-drag-item');
                    _this._dragHelper.style.position = "absolute";
                    _this._dragHelper.style.top = "0px";
                    _this._dragHelper.style.left = "-1000px";
                    _this._elem.parentElement.appendChild(_this._dragHelper);
                    event.dataTransfer.setDragImage(_this._dragHelper, event.offsetX, event.offsetY);
                }
                // Change drag cursor
                var cursorelem = (_this._dragHandle) ? _this._dragHandle : _this._elem;
                if (_this._dragEnabled) {
                    cursorelem.style.cursor = _this.effectCursor ? _this.effectCursor : _this._config.dragCursor;
                }
                else {
                    cursorelem.style.cursor = _this._defaultCursor;
                }
            }
        };
        this._elem.ondragend = function (event) {
            if (_this._elem.parentElement && _this._dragHelper) {
                _this._elem.parentElement.removeChild(_this._dragHelper);
            }
            // console.log('ondragend', event.target);
            _this._onDragEnd(event);
            // Restore style of dragged element
            var cursorelem = (_this._dragHandle) ? _this._dragHandle : _this._elem;
            cursorelem.style.cursor = _this._defaultCursor;
        };
    }
    Object.defineProperty(AbstractComponent.prototype, "dragEnabled", {
        get: function () {
            return this._dragEnabled;
        },
        set: function (enabled) {
            this._dragEnabled = !!enabled;
            this._elem.draggable = this._dragEnabled;
        },
        enumerable: true,
        configurable: true
    });
    AbstractComponent.prototype.setDragHandle = function (elem) {
        this._dragHandle = elem;
    };
    /******* Change detection ******/
    AbstractComponent.prototype.detectChanges = function () {
        var _this = this;
        // Programmatically run change detection to fix issue in Safari
        setTimeout(function () {
            if (_this._cdr && !_this._cdr.destroyed) {
                _this._cdr.detectChanges();
            }
        }, 250);
    };
    //****** Droppable *******//
    AbstractComponent.prototype._onDragEnter = function (event) {
        // console.log('ondragenter._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // event.preventDefault();
            this._onDragEnterCallback(event);
        }
    };
    AbstractComponent.prototype._onDragOver = function (event) {
        // // console.log('ondragover._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // The element is over the same source element - do nothing
            if (event.preventDefault) {
                // Necessary. Allows us to drop.
                event.preventDefault();
            }
            this._onDragOverCallback(event);
        }
    };
    AbstractComponent.prototype._onDragLeave = function (event) {
        // console.log('ondragleave._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // event.preventDefault();
            this._onDragLeaveCallback(event);
        }
    };
    AbstractComponent.prototype._onDrop = function (event) {
        // console.log('ondrop._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // Necessary. Allows us to drop.
            this._preventAndStop(event);
            this._onDropCallback(event);
            this.detectChanges();
        }
    };
    AbstractComponent.prototype._isDropAllowed = function (event) {
        if ((this._dragDropService.isDragged || (event.dataTransfer && event.dataTransfer.files)) && this.dropEnabled) {
            // First, if `allowDrop` is set, call it to determine whether the
            // dragged element can be dropped here.
            if (this.allowDrop) {
                return this.allowDrop(this._dragDropService.dragData);
            }
            // Otherwise, use dropZones if they are set.
            if (this.dropZones.length === 0 && this._dragDropService.allowedDropZones.length === 0) {
                return true;
            }
            for (var i = 0; i < this._dragDropService.allowedDropZones.length; i++) {
                var dragZone = this._dragDropService.allowedDropZones[i];
                if (this.dropZones.indexOf(dragZone) !== -1) {
                    return true;
                }
            }
        }
        return false;
    };
    AbstractComponent.prototype._preventAndStop = function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        if (event.stopPropagation) {
            event.stopPropagation();
        }
    };
    //*********** Draggable **********//
    AbstractComponent.prototype._onDragStart = function (event) {
        //console.log('ondragstart.dragEnabled', this._dragEnabled);
        if (this._dragEnabled) {
            this._dragDropService.allowedDropZones = this.dropZones;
            // console.log('ondragstart.allowedDropZones', this._dragDropService.allowedDropZones);
            this._onDragStartCallback(event);
        }
    };
    AbstractComponent.prototype._onDragEnd = function (event) {
        this._dragDropService.allowedDropZones = [];
        // console.log('ondragend.allowedDropZones', this._dragDropService.allowedDropZones);
        this._onDragEndCallback(event);
    };
    //**** Drop Callbacks ****//
    AbstractComponent.prototype._onDragEnterCallback = function (event) { };
    AbstractComponent.prototype._onDragOverCallback = function (event) { };
    AbstractComponent.prototype._onDragLeaveCallback = function (event) { };
    AbstractComponent.prototype._onDropCallback = function (event) { };
    //**** Drag Callbacks ****//
    AbstractComponent.prototype._onDragStartCallback = function (event) { };
    AbstractComponent.prototype._onDragEndCallback = function (event) { };
    return AbstractComponent;
}());
AbstractComponent = __decorate$3([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata$2("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], DragDropService, DragDropConfig,
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
], AbstractComponent);
var AbstractHandleComponent = /** @class */ (function () {
    function AbstractHandleComponent(elemRef, _dragDropService, _config, _Component, _cdr) {
        this._dragDropService = _dragDropService;
        this._config = _config;
        this._Component = _Component;
        this._cdr = _cdr;
        this._elem = elemRef.nativeElement;
        this._Component.setDragHandle(this._elem);
    }
    return AbstractHandleComponent;
}());
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var DraggableComponent = /** @class */ (function (_super) {
    __extends(DraggableComponent, _super);
    function DraggableComponent(elemRef, dragDropService, config, cdr) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        /**
         * Callback function called when the drag actions happened.
         */
        _this.onDragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        _this.onDragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /**
         * Callback function called when the drag action ends with a valid drop action.
         * It is activated after the on-drop-success callback
         */
        _this.onDragSuccessCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        _this._defaultCursor = _this._elem.style.cursor;
        _this.dragEnabled = true;
        return _this;
    }
    Object.defineProperty(DraggableComponent.prototype, "draggable", {
        set: function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "dropzones", {
        set: function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    DraggableComponent.prototype._onDragStartCallback = function (event) {
        this._dragDropService.isDragged = true;
        this._dragDropService.dragData = this.dragData;
        this._dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
        this._elem.classList.add(this._config.onDragStartClass);
        //
        this.onDragStart.emit({ dragData: this.dragData, mouseEvent: event });
    };
    DraggableComponent.prototype._onDragEndCallback = function (event) {
        this._dragDropService.isDragged = false;
        this._dragDropService.dragData = null;
        this._dragDropService.onDragSuccessCallback = null;
        this._elem.classList.remove(this._config.onDragStartClass);
        //
        this.onDragEnd.emit({ dragData: this.dragData, mouseEvent: event });
    };
    return DraggableComponent;
}(AbstractComponent));
__decorate$2([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])("dragEnabled"),
    __metadata$1("design:type", Boolean),
    __metadata$1("design:paramtypes", [Boolean])
], DraggableComponent.prototype, "draggable", null);
__decorate$2([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata$1("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
], DraggableComponent.prototype, "onDragStart", void 0);
__decorate$2([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata$1("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
], DraggableComponent.prototype, "onDragEnd", void 0);
__decorate$2([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata$1("design:type", Object)
], DraggableComponent.prototype, "dragData", void 0);
__decorate$2([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])("onDragSuccess"),
    __metadata$1("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
], DraggableComponent.prototype, "onDragSuccessCallback", void 0);
__decorate$2([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])("dropZones"),
    __metadata$1("design:type", Array),
    __metadata$1("design:paramtypes", [Array])
], DraggableComponent.prototype, "dropzones", null);
__decorate$2([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])("effectAllowed"),
    __metadata$1("design:type", String),
    __metadata$1("design:paramtypes", [String])
], DraggableComponent.prototype, "effectallowed", null);
__decorate$2([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])("effectCursor"),
    __metadata$1("design:type", String),
    __metadata$1("design:paramtypes", [String])
], DraggableComponent.prototype, "effectcursor", null);
__decorate$2([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata$1("design:type", Object)
], DraggableComponent.prototype, "dragImage", void 0);
__decorate$2([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata$1("design:type", Boolean)
], DraggableComponent.prototype, "cloneItem", void 0);
DraggableComponent = __decorate$2([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[dnd-draggable]' }),
    __metadata$1("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], DragDropService, DragDropConfig,
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
], DraggableComponent);
var DraggableHandleComponent = /** @class */ (function (_super) {
    __extends(DraggableHandleComponent, _super);
    function DraggableHandleComponent(elemRef, dragDropService, config, _Component, cdr) {
        return _super.call(this, elemRef, dragDropService, config, _Component, cdr) || this;
    }
    return DraggableHandleComponent;
}(AbstractHandleComponent));
DraggableHandleComponent = __decorate$2([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[dnd-draggable-handle]' }),
    __metadata$1("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], DragDropService, DragDropConfig, DraggableComponent,
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
], DraggableHandleComponent);
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var DroppableComponent = /** @class */ (function (_super) {
    __extends(DroppableComponent, _super);
    function DroppableComponent(elemRef, dragDropService, config, cdr) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        /**
         * Callback function called when the drop action completes correctly.
         * It is activated before the on-drag-success callback.
         */
        _this.onDropSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        _this.onDragEnter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        _this.onDragOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        _this.onDragLeave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        _this.dropEnabled = true;
        return _this;
    }
    Object.defineProperty(DroppableComponent.prototype, "droppable", {
        set: function (value) {
            this.dropEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "allowdrop", {
        set: function (value) {
            this.allowDrop = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "dropzones", {
        set: function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    DroppableComponent.prototype._onDragEnterCallback = function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.add(this._config.onDragEnterClass);
            this.onDragEnter.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    DroppableComponent.prototype._onDragOverCallback = function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.add(this._config.onDragOverClass);
            this.onDragOver.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    ;
    DroppableComponent.prototype._onDragLeaveCallback = function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.remove(this._config.onDragOverClass);
            this._elem.classList.remove(this._config.onDragEnterClass);
            this.onDragLeave.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    ;
    DroppableComponent.prototype._onDropCallback = function (event) {
        var dataTransfer = event.dataTransfer;
        if (this._dragDropService.isDragged || (dataTransfer && dataTransfer.files)) {
            this.onDropSuccess.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
            if (this._dragDropService.onDragSuccessCallback) {
                this._dragDropService.onDragSuccessCallback.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
            }
            this._elem.classList.remove(this._config.onDragOverClass);
            this._elem.classList.remove(this._config.onDragEnterClass);
        }
    };
    return DroppableComponent;
}(AbstractComponent));
__decorate$4([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])("dropEnabled"),
    __metadata$3("design:type", Boolean),
    __metadata$3("design:paramtypes", [Boolean])
], DroppableComponent.prototype, "droppable", null);
__decorate$4([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata$3("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
], DroppableComponent.prototype, "onDropSuccess", void 0);
__decorate$4([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata$3("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
], DroppableComponent.prototype, "onDragEnter", void 0);
__decorate$4([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata$3("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
], DroppableComponent.prototype, "onDragOver", void 0);
__decorate$4([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata$3("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
], DroppableComponent.prototype, "onDragLeave", void 0);
__decorate$4([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])("allowDrop"),
    __metadata$3("design:type", Function),
    __metadata$3("design:paramtypes", [Function])
], DroppableComponent.prototype, "allowdrop", null);
__decorate$4([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])("dropZones"),
    __metadata$3("design:type", Array),
    __metadata$3("design:paramtypes", [Array])
], DroppableComponent.prototype, "dropzones", null);
__decorate$4([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])("effectAllowed"),
    __metadata$3("design:type", String),
    __metadata$3("design:paramtypes", [String])
], DroppableComponent.prototype, "effectallowed", null);
__decorate$4([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])("effectCursor"),
    __metadata$3("design:type", String),
    __metadata$3("design:paramtypes", [String])
], DroppableComponent.prototype, "effectcursor", null);
DroppableComponent = __decorate$4([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[dnd-droppable]' }),
    __metadata$3("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], DragDropService, DragDropConfig,
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
], DroppableComponent);
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __decorate$5 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var SortableContainer = /** @class */ (function (_super) {
    __extends(SortableContainer, _super);
    function SortableContainer(elemRef, dragDropService, config, cdr, _sortableDataService) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        _this._sortableDataService = _sortableDataService;
        _this._sortableData = [];
        _this.dragEnabled = false;
        return _this;
    }
    Object.defineProperty(SortableContainer.prototype, "draggable", {
        set: function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableContainer.prototype, "sortableData", {
        get: function () {
            return this._sortableData;
        },
        set: function (sortableData) {
            this._sortableData = sortableData;
            if (sortableData instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormArray */]) {
                this.sortableHandler = new SortableFormArrayHandler();
            }
            else {
                this.sortableHandler = new SortableArrayHandler();
            }
            //
            this.dropEnabled = !!this._sortableData;
            // console.log("collection is changed, drop enabled: " + this.dropEnabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableContainer.prototype, "dropzones", {
        set: function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    SortableContainer.prototype._onDragEnterCallback = function (event) {
        if (this._sortableDataService.isDragged) {
            var item = this._sortableDataService.sortableContainer.getItemAt(this._sortableDataService.index);
            // Check does element exist in sortableData of this Container
            if (this.indexOf(item) === -1) {
                // Let's add it
                // console.log('Container._onDragEnterCallback. drag node [' + this._sortableDataService.index.toString() + '] over parent node');
                // Remove item from previouse list
                this._sortableDataService.sortableContainer.removeItemAt(this._sortableDataService.index);
                if (this._sortableDataService.sortableContainer._sortableData.length === 0) {
                    this._sortableDataService.sortableContainer.dropEnabled = true;
                }
                // Add item to new list
                this.insertItemAt(item, 0);
                this._sortableDataService.sortableContainer = this;
                this._sortableDataService.index = 0;
            }
            // Refresh changes in properties of container component
            this.detectChanges();
        }
    };
    SortableContainer.prototype.getItemAt = function (index) {
        return this.sortableHandler.getItemAt(this._sortableData, index);
    };
    SortableContainer.prototype.indexOf = function (item) {
        return this.sortableHandler.indexOf(this._sortableData, item);
    };
    SortableContainer.prototype.removeItemAt = function (index) {
        this.sortableHandler.removeItemAt(this._sortableData, index);
    };
    SortableContainer.prototype.insertItemAt = function (item, index) {
        this.sortableHandler.insertItemAt(this._sortableData, item, index);
    };
    return SortableContainer;
}(AbstractComponent));
__decorate$5([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])("dragEnabled"),
    __metadata$4("design:type", Boolean),
    __metadata$4("design:paramtypes", [Boolean])
], SortableContainer.prototype, "draggable", null);
__decorate$5([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata$4("design:type", Object),
    __metadata$4("design:paramtypes", [Object])
], SortableContainer.prototype, "sortableData", null);
__decorate$5([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])("dropZones"),
    __metadata$4("design:type", Array),
    __metadata$4("design:paramtypes", [Array])
], SortableContainer.prototype, "dropzones", null);
SortableContainer = __decorate$5([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[dnd-sortable-container]' }),
    __metadata$4("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], DragDropService, DragDropConfig, __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
        DragDropSortableService])
], SortableContainer);
var SortableArrayHandler = /** @class */ (function () {
    function SortableArrayHandler() {
    }
    SortableArrayHandler.prototype.getItemAt = function (sortableData, index) {
        return sortableData[index];
    };
    SortableArrayHandler.prototype.indexOf = function (sortableData, item) {
        return sortableData.indexOf(item);
    };
    SortableArrayHandler.prototype.removeItemAt = function (sortableData, index) {
        sortableData.splice(index, 1);
    };
    SortableArrayHandler.prototype.insertItemAt = function (sortableData, item, index) {
        sortableData.splice(index, 0, item);
    };
    return SortableArrayHandler;
}());
var SortableFormArrayHandler = /** @class */ (function () {
    function SortableFormArrayHandler() {
    }
    SortableFormArrayHandler.prototype.getItemAt = function (sortableData, index) {
        return sortableData.at(index);
    };
    SortableFormArrayHandler.prototype.indexOf = function (sortableData, item) {
        return sortableData.controls.indexOf(item);
    };
    SortableFormArrayHandler.prototype.removeItemAt = function (sortableData, index) {
        sortableData.removeAt(index);
    };
    SortableFormArrayHandler.prototype.insertItemAt = function (sortableData, item, index) {
        sortableData.insert(index, item);
    };
    return SortableFormArrayHandler;
}());
var SortableComponent = /** @class */ (function (_super) {
    __extends(SortableComponent, _super);
    function SortableComponent(elemRef, dragDropService, config, _sortableContainer, _sortableDataService, cdr) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        _this._sortableContainer = _sortableContainer;
        _this._sortableDataService = _sortableDataService;
        /**
         * Callback function called when the drag action ends with a valid drop action.
         * It is activated after the on-drop-success callback
         */
        _this.onDragSuccessCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        _this.onDragStartCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        _this.onDragOverCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        _this.onDragEndCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        _this.onDropSuccessCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        _this.dropZones = _this._sortableContainer.dropZones;
        _this.dragEnabled = true;
        _this.dropEnabled = true;
        return _this;
    }
    Object.defineProperty(SortableComponent.prototype, "draggable", {
        set: function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "droppable", {
        set: function (value) {
            this.dropEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    SortableComponent.prototype._onDragStartCallback = function (event) {
        // console.log('_onDragStartCallback. dragging elem with index ' + this.index);
        this._sortableDataService.isDragged = true;
        this._sortableDataService.sortableContainer = this._sortableContainer;
        this._sortableDataService.index = this.index;
        this._sortableDataService.markSortable(this._elem);
        // Add dragData
        this._dragDropService.isDragged = true;
        this._dragDropService.dragData = this.dragData;
        this._dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
        //
        this.onDragStartCallback.emit(this._dragDropService.dragData);
    };
    SortableComponent.prototype._onDragOverCallback = function (event) {
        if (this._sortableDataService.isDragged && this._elem !== this._sortableDataService.elem) {
            // console.log('_onDragOverCallback. dragging elem with index ' + this.index);
            this._sortableDataService.sortableContainer = this._sortableContainer;
            this._sortableDataService.index = this.index;
            this._sortableDataService.markSortable(this._elem);
            this.onDragOverCallback.emit(this._dragDropService.dragData);
        }
    };
    SortableComponent.prototype._onDragEndCallback = function (event) {
        // console.log('_onDragEndCallback. end dragging elem with index ' + this.index);
        this._sortableDataService.isDragged = false;
        this._sortableDataService.sortableContainer = null;
        this._sortableDataService.index = null;
        this._sortableDataService.markSortable(null);
        // Add dragGata
        this._dragDropService.isDragged = false;
        this._dragDropService.dragData = null;
        this._dragDropService.onDragSuccessCallback = null;
        //
        this.onDragEndCallback.emit(this._dragDropService.dragData);
    };
    SortableComponent.prototype._onDragEnterCallback = function (event) {
        if (this._sortableDataService.isDragged) {
            this._sortableDataService.markSortable(this._elem);
            if ((this.index !== this._sortableDataService.index) ||
                (this._sortableDataService.sortableContainer.sortableData !== this._sortableContainer.sortableData)) {
                // console.log('Component._onDragEnterCallback. drag node [' + this.index + '] over node [' + this._sortableDataService.index + ']');
                // Get item
                var item = this._sortableDataService.sortableContainer.getItemAt(this._sortableDataService.index);
                // Remove item from previouse list
                this._sortableDataService.sortableContainer.removeItemAt(this._sortableDataService.index);
                if (this._sortableDataService.sortableContainer.sortableData.length === 0) {
                    this._sortableDataService.sortableContainer.dropEnabled = true;
                }
                // Add item to new list
                this._sortableContainer.insertItemAt(item, this.index);
                if (this._sortableContainer.dropEnabled) {
                    this._sortableContainer.dropEnabled = false;
                }
                this._sortableDataService.sortableContainer = this._sortableContainer;
                this._sortableDataService.index = this.index;
                this.detectChanges();
            }
        }
    };
    SortableComponent.prototype._onDropCallback = function (event) {
        if (this._sortableDataService.isDragged) {
            // console.log('onDropCallback.onDropSuccessCallback.dragData', this._dragDropService.dragData);
            this.onDropSuccessCallback.emit(this._dragDropService.dragData);
            if (this._dragDropService.onDragSuccessCallback) {
                // console.log('onDropCallback.onDragSuccessCallback.dragData', this._dragDropService.dragData);
                this._dragDropService.onDragSuccessCallback.emit(this._dragDropService.dragData);
            }
            // Refresh changes in properties of container component
            this._sortableContainer.detectChanges();
        }
    };
    return SortableComponent;
}(AbstractComponent));
__decorate$5([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('sortableIndex'),
    __metadata$4("design:type", Number)
], SortableComponent.prototype, "index", void 0);
__decorate$5([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])("dragEnabled"),
    __metadata$4("design:type", Boolean),
    __metadata$4("design:paramtypes", [Boolean])
], SortableComponent.prototype, "draggable", null);
__decorate$5([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])("dropEnabled"),
    __metadata$4("design:type", Boolean),
    __metadata$4("design:paramtypes", [Boolean])
], SortableComponent.prototype, "droppable", null);
__decorate$5([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata$4("design:type", Object)
], SortableComponent.prototype, "dragData", void 0);
__decorate$5([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])("effectAllowed"),
    __metadata$4("design:type", String),
    __metadata$4("design:paramtypes", [String])
], SortableComponent.prototype, "effectallowed", null);
__decorate$5([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])("effectCursor"),
    __metadata$4("design:type", String),
    __metadata$4("design:paramtypes", [String])
], SortableComponent.prototype, "effectcursor", null);
__decorate$5([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])("onDragSuccess"),
    __metadata$4("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
], SortableComponent.prototype, "onDragSuccessCallback", void 0);
__decorate$5([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])("onDragStart"),
    __metadata$4("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
], SortableComponent.prototype, "onDragStartCallback", void 0);
__decorate$5([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])("onDragOver"),
    __metadata$4("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
], SortableComponent.prototype, "onDragOverCallback", void 0);
__decorate$5([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])("onDragEnd"),
    __metadata$4("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
], SortableComponent.prototype, "onDragEndCallback", void 0);
__decorate$5([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])("onDropSuccess"),
    __metadata$4("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
], SortableComponent.prototype, "onDropSuccessCallback", void 0);
SortableComponent = __decorate$5([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[dnd-sortable]' }),
    __metadata$4("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], DragDropService, DragDropConfig,
        SortableContainer,
        DragDropSortableService,
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
], SortableComponent);
var SortableHandleComponent = /** @class */ (function (_super) {
    __extends(SortableHandleComponent, _super);
    function SortableHandleComponent(elemRef, dragDropService, config, _Component, cdr) {
        return _super.call(this, elemRef, dragDropService, config, _Component, cdr) || this;
    }
    return SortableHandleComponent;
}(AbstractHandleComponent));
SortableHandleComponent = __decorate$5([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[dnd-sortable-handle]' }),
    __metadata$4("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], DragDropService, DragDropConfig, SortableComponent,
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
], SortableHandleComponent);
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var providers = [
    DragDropConfig,
    { provide: DragDropService, useFactory: dragDropServiceFactory },
    { provide: DragDropSortableService, useFactory: dragDropSortableServiceFactory, deps: [DragDropConfig] }
];
var DndModule = DndModule_1 = /** @class */ (function () {
    function DndModule() {
    }
    DndModule.forRoot = function () {
        return {
            ngModule: DndModule_1,
            providers: providers
        };
    };
    return DndModule;
}());
DndModule = DndModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [DraggableComponent, DraggableHandleComponent, DroppableComponent, SortableContainer, SortableComponent, SortableHandleComponent],
        exports: [DraggableComponent, DraggableHandleComponent, DroppableComponent, SortableContainer, SortableComponent, SortableHandleComponent],
    })
], DndModule);
var DndModule_1;
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng2-dnd.es5.js.map


/***/ })

});
//# sourceMappingURL=system.module.chunk.js.map