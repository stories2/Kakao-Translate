exports.translateStringToOtherLang = function (request, response, callbackFunc) {
    const action = JSON.parse(JSON.stringify(request.action))
    const responseManager = request.responseManager
    const reqText = request.body["userRequest"]["utterance"]
    const translate = require('google-translate-api')
    global.log.debug("translateAction", "translateStringToOtherLang", "user data: " + JSON.stringify(request.user) + " action data: " + JSON.stringify(action))
    global.log.debug("translateAction", "translateStringToOtherLang", "req text: " + reqText)
    translate(reqText, {to: action.lang})
        .then(result => {
            global.log.debug("translateAction", "translateStringToOtherLang", "translate result: " + JSON.stringify(result))
        })
        .catch(error => {
            global.log.error("translateAction", "translateStringToOtherLang", "cannot translate: " + JSON.stringify(error))
        })
}