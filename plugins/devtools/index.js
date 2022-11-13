const {
  flux: { dispatcher },
} = shelter;

export function onLoad() {
  dispatcher.dispatch({
    type: 'DEV_TOOLS_SETTINGS_UPDATE',
    settings: { devToolsEnabled: true },
  });
}

export function onUnload() {
  dispatcher.dispatch({
    type: 'DEV_TOOLS_SETTINGS_UPDATE',
    settings: { devToolsEnabled: false },
  });
}
