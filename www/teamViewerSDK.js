var exec = require('cordova/exec');

function TeamViewer() {}

TeamViewer.prototype.openSessionWithConfigurationId = function(token, configurationId, name, description, successCallback, failureCallback)
{
  exec(successCallback,
               failureCallback,
               "TeamViewerSDK",
               "openSessionWithConfigurationId",
               [token, configurationId, name, description]);
};
TeamViewer.prototype.openSessionWithSessionCode = function(token, sessionCode, successCallback, failureCallback)
{
  exec(successCallback,
               failureCallback,
               "TeamViewerSDK",
               "openSessionWithSessionCode",
               [token, sessionCode]);
};

TeamViewer.prototype.closeCurrentSession = function(successcallback, failureCallback)
{
  exec(successcallback,
               failureCallback,
               "TeamViewerSDK",
               "closeCurrentSession",
               null);
}

module.exports = new TeamViewer();
