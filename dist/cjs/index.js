'use strict';

var React = require('react');
var reactQuery = require('react-query');
var reactBootstrap = require('react-bootstrap');
var reactBootstrapIcons = require('react-bootstrap-icons');
var reactRouterBootstrap = require('react-router-bootstrap');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var HookApp = function (BACKEND_INSTANCE, GlobalDispatchContext) {
    var _a = React.useState(), response = _a[0], setResponse = _a[1];
    var dispatch = React.useContext(GlobalDispatchContext);
    reactQuery.setLogger({ error: function () { }, warn: function () { }, log: function () { } });
    var onSuccess = function (res) {
        dispatch({ type: 'SET_USER', payload: res.data.user });
        setResponse(res);
    };
    var onError = function (err) {
        setResponse(err.response);
    };
    var mutation = reactQuery.useMutation(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, BACKEND_INSTANCE.get('/')];
    }); }); }, { onSuccess: onSuccess, onError: onError });
    return {
        response: response,
        mutate: mutation.mutate,
    };
};

var HookAppLogin = function (BACKEND_INSTANCE) {
    var _a = React.useState(), response = _a[0], setResponse = _a[1];
    reactQuery.setLogger({ error: function () { }, warn: function () { }, log: function () { } });
    var onSuccess = function (res) {
        setResponse(res);
    };
    var onError = function (err) {
        setResponse(err.response);
    };
    var mutation = reactQuery.useMutation(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, BACKEND_INSTANCE.get('/')];
    }); }); }, { onSuccess: onSuccess, onError: onError });
    return {
        response: response,
        mutate: mutation.mutate,
    };
};

var HookLogout = function (BACKEND_INSTANCE, FRONTEND_AUTH) {
    reactQuery.setLogger({ error: function () { }, warn: function () { }, log: function () { } });
    var onSuccess = function () {
        window.location.href = FRONTEND_AUTH;
    };
    var mutation = reactQuery.useMutation(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, BACKEND_INSTANCE.delete('/logout')];
    }); }); }, { onSuccess: onSuccess });
    return {
        mutate: mutation.mutate,
    };
};

var Hook = {
    App: HookApp,
    AppLogin: HookAppLogin,
    Logout: HookLogout,
};

function TemplateForm(props) {
    var children = props.children;
    return (React.createElement(reactBootstrap.Row, { className: "p-1 g-2" },
        React.createElement(reactBootstrap.Col, { lg: { span: 6 } }, children)));
}

function TemplateLoading(props) {
    var children = props.children;
    return (React.createElement(reactBootstrap.Container, { fluid: true },
        React.createElement(reactBootstrap.Row, { className: "d-flex justify-content-center align-items-center min-vh-100" },
            React.createElement(reactBootstrap.Col, { md: 4 }, children))));
}

function TemplateTable(props) {
    var children = props.children;
    return (React.createElement(reactBootstrap.Row, { className: "p-1 g-2" },
        React.createElement(reactBootstrap.Col, null, children)));
}

var Template = {
    Form: TemplateForm,
    Loading: TemplateLoading,
    Table: TemplateTable,
};

function ButtonAdd(props) {
    var href = props.href;
    return (React.createElement(reactRouterBootstrap.LinkContainer, { to: href },
        React.createElement(reactBootstrap.Button, { variant: "success", size: "sm" },
            React.createElement(reactBootstrapIcons.PencilFill, null),
            ' ',
            "Add")));
}

function ButtonDelete(props) {
    var onClick = props.onClick;
    return (React.createElement(reactBootstrap.Button, { variant: "danger", size: "sm", onClick: onClick },
        React.createElement(reactBootstrapIcons.Trash3Fill, null),
        ' ',
        "Delete"));
}

function ButtonEdit(props) {
    var href = props.href;
    return (React.createElement(reactRouterBootstrap.LinkContainer, { to: href },
        React.createElement(reactBootstrap.Button, { variant: "warning", size: "sm" },
            React.createElement(reactBootstrapIcons.PencilFill, null),
            ' ',
            "Edit")));
}

var Button = {
    Add: ButtonAdd,
    Delete: ButtonDelete,
    Edit: ButtonEdit,
};

function ButtonGroupAction(props) {
    var onEdit = props.onEdit, onDelete = props.onDelete;
    return (React.createElement(reactBootstrap.ButtonToolbar, { "aria-label": "Toolbar button action" },
        React.createElement(reactBootstrap.ButtonGroup, { "aria-label": "Button group edit", className: "me-2" },
            React.createElement(ButtonEdit, { href: onEdit })),
        React.createElement(reactBootstrap.ButtonGroup, { "aria-label": "Button group delete" },
            React.createElement(ButtonDelete, { onClick: onDelete }))));
}

var ButtonGroup = {
    Action: ButtonGroupAction,
};

function CardAdd(props) {
    var children = props.children, title = props.title, href = props.href;
    return (React.createElement(reactBootstrap.Card, { className: "shadow-sm" },
        React.createElement(reactBootstrap.Card.Body, null,
            React.createElement(reactBootstrap.Card.Title, { className: "d-flex justify-content-between lh-base" },
                title,
                React.createElement(ButtonAdd, { href: href })),
            React.createElement("hr", null),
            children)));
}

function CardLogin(props) {
    var children = props.children;
    return (React.createElement(reactBootstrap.Card, null,
        React.createElement(reactBootstrap.Card.Body, null,
            React.createElement(reactBootstrap.Card.Title, { className: "text-center" }, "Login"),
            React.createElement("hr", null),
            children)));
}

function Card(props) {
    var children = props.children, title = props.title;
    return (React.createElement(reactBootstrap.Card, { className: "shadow-sm" },
        React.createElement(reactBootstrap.Card.Body, null,
            React.createElement(reactBootstrap.Card.Title, { className: "lh-base" }, title),
            React.createElement("hr", null),
            children)));
}
var index$1 = Object.assign(Card, {
    Add: CardAdd,
    Login: CardLogin,
});

function SpinnerLarge() {
    return (React.createElement(reactBootstrap.Spinner, { className: "d-block m-auto", animation: "border", role: "status" },
        React.createElement("span", { className: "visually-hidden" }, "Loading...")));
}

function SpinnerSmall() {
    return (React.createElement(reactBootstrap.Spinner, { size: "sm", animation: "border", role: "status" },
        React.createElement("span", { className: "visually-hidden" }, "Loading...")));
}

var Spinner = {
    Large: SpinnerLarge,
    Small: SpinnerSmall,
};

function TableAction(props) {
    var rows = props.rows, columns = props.columns, onDelete = props.onDelete, onEdit = props.onEdit;
    return (React.createElement(reactBootstrap.Table, { striped: true, responsive: true, hover: true },
        React.createElement("thead", null,
            React.createElement("tr", null,
                columns.map(function (column) { return React.createElement("th", { key: column.id }, column.name); }),
                React.createElement("th", null, "Action"))),
        React.createElement("tbody", null, rows.map(function (row) { return (React.createElement("tr", { key: row.id },
            columns.map(function (column) { return (React.createElement("td", { key: "".concat(row.id).concat(column.id) }, row[column.name])); }),
            React.createElement("td", null,
                React.createElement(ButtonGroup.Action, { onDelete: function () { return onDelete.mutate({ _id: row.id }); }, onEdit: "".concat(onEdit, "/").concat(row.id) })))); }))));
}

function Table(props) {
    var columns = props.columns, rows = props.rows;
    return (React.createElement(reactBootstrap.Table, { striped: true, responsive: true, hover: true },
        React.createElement("thead", null,
            React.createElement("tr", null, columns.map(function (column) { return React.createElement("th", { key: column.id }, column.name); }))),
        React.createElement("tbody", null, rows.map(function (row) { return (React.createElement("tr", { key: row.id }, columns.map(function (column) { return (React.createElement("td", { key: "".concat(row.id).concat(column.id) }, row[column.name])); }))); }))));
}
var index = Object.assign(Table, {
    Action: TableAction,
});

function Navbar(props) {
    var brand = props.brand, username = props.username, axios = props.axios, auth = props.auth;
    var mutate = Hook.Logout(axios, auth).mutate;
    return (React.createElement(reactBootstrap.Navbar, { bg: "primary", sticky: "top", variant: "dark", expand: "lg" },
        React.createElement(reactBootstrap.Container, { fluid: true },
            React.createElement(reactBootstrap.Navbar.Brand, { href: "/" }, brand),
            React.createElement(reactBootstrap.Navbar.Toggle, { "aria-controls": "navbar-support" }),
            React.createElement(reactBootstrap.Navbar.Collapse, { id: "navbar-support", className: "justify-content-end" },
                React.createElement(reactBootstrap.Nav, null,
                    React.createElement(reactBootstrap.NavDropdown, { align: "end", className: "fw-bold", id: "basic-nav-dropdown", title: username },
                        React.createElement(reactBootstrap.NavDropdown.Item, { onClick: function () { mutate(); } }, "Log Out")))))));
}

function Sidebar(props) {
    var data = props.data;
    return (React.createElement(reactBootstrap.Card, null,
        React.createElement(reactBootstrap.ListGroup, { variant: "flush" }, data.map(function (item) { return (React.createElement(reactRouterBootstrap.LinkContainer, { to: item.link, key: item.id },
            React.createElement(reactBootstrap.ListGroupItem, { action: true, href: item.link }, item.label))); }))));
}

exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.Card = index$1;
exports.Hook = Hook;
exports.Navbar = Navbar;
exports.Sidebar = Sidebar;
exports.Spinner = Spinner;
exports.Table = index;
exports.Template = Template;
//# sourceMappingURL=index.js.map
