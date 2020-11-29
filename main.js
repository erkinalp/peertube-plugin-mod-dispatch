async function register ({
  registerHook,
  registerSetting,
  settingsManager,
  storageManager,
  videoCategoryManager,
  videoLicenceManager,
  videoLanguageManager
}) {
registerSetting ({
  name: "moderator-pools",
  label: "Enable moderator pools",
  type: "input-checkbox",
  private: true
})
}

async function unregister () {
  return
}

module.exports = {
  register,
  unregister
}
