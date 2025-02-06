export default function AuthenticationPage() {
    const backgroundTransition = React.createElement("div", {class: "transition"});
    const enterSign = React.createElement("div", {class: "input_border1"}, "Вход / Регистрация");

    const loginEmailLabelUnformatted = React.createElement("p", {class: "input_label"}, "Логин / почта");
    const passwordLabelUnformatted = React.createElement("p", {class: "input_label"}, "Пароль");
    const loginEmailLabel = React.createElement("div", {class: "input_left"}, loginEmailLabelUnformatted);
    const passwordLabel = React.createElement("div", {class: "input_left"}, passwordLabelUnformatted);

    const loginEmailInputboxUnformated = React.createElement("input", {type: "text", class: "input_text"});
    const passwordInputboxUnformated = React.createElement("input", {type: "password", class: "input_text"});
    const loginEmailInputbox = React.createElement("div", {class: "input_center"}, loginEmailInputboxUnformated);
    const passwordInputbox = React.createElement("div", {class: "input_center"}, passwordInputboxUnformated);

    const registrationHyperlink1 = React.createElement("a", {class: "hyper_register", href:"itmo.ru"}, "Ещё не зарегистрированы?");
    const registrationHyperlink2 = React.createElement("a", {class: "hyper_register", href:"itmo.ru"}, "Регистрация");

    const inputPart = React.createElement("div", {class: "input_piece"}, loginEmailLabel, loginEmailInputbox, passwordLabel, passwordInputbox)
    const hyperPart = React.createElement("div", {class: "caution_buttons"}, registrationHyperlink1, registrationHyperlink2);
    const inputBlock = React.createElement("div", {class: "input_border2"}, inputPart, hyperPart);
    
    const authenticationBlocks = React.createElement("div", {class: "enter_sign"}, enterSign, inputBlock);
    const authenticationPage = React.createElement("div", {}, backgroundTransition, authenticationBlocks);
    
    return authenticationPage;
}