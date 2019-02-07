exports.LOGGING_STRING_FORMAT = "[%s] {%s} (%s)"
exports.LOGGING_STRING_FORMAT_INFO = "%s I: [%s] {%s} (%s)"
exports.LOGGING_STRING_FORMAT_DEBUG = "%s D: [%s] {%s} (%s)"
exports.LOGGING_STRING_FORMAT_WARN = "%s W: [%s] {%s} (%s)"
exports.LOGGING_STRING_FORMAT_ERROR = "%s E: [%s] {%s} (%s)"

exports.HEADERS_CONTENT_TYPE = "Content-Type"
exports.HEADERS_CONTENT_TYPE_APPLICATION_JSON = "application/json"

exports.MAXIMUM_OF_OUTPUTS_LENGTH = 3
exports.MAXIMUM_OF_QUICK_REPLIES_LENGTH = 10

exports.HTTP_STATUS_CODE_OK = 200
exports.HTTP_STATUS_CODE_BAD_REQUEST = 400
exports.HTTP_STATUS_CODE_UNAUTHORIZED = 401
exports.HTTP_STATUS_CODE_FORBIDDEN = 403
exports.HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR = 500

exports.ZERO = 0
exports.ONE = 1

exports.DB_PATH_ACTIONS_ACTION_INDEX = "/actions/%s"
exports.DB_PATH_USERS_USER_KEY = "/users/%s"
exports.DB_PATH_USERS_USER_KEY_UPDATE = "/users/%s/update"

exports.DEFAULT_USER_DATA = {
    "action": "1",
    "register": "1990-01-01T00:00:00",
    "update": "1990-01-01T00:00:00"
}
exports.DEFAULT_RESPONSE_TYPE_ZERO = "0"

exports.GMT_KOREA_TIME_MIN = 540
exports.HOUR_TO_MILE = 60000
exports.TIME_SEC_10MIN = 600