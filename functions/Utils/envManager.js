exports.getProjectInfo = function (functions) {
    return {
        databaseURL: functions.config().project.database,
        storageBucket: functions.config().project.storage,
        projectId: functions.config().project.project_id
    }
}