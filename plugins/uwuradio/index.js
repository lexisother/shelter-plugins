const {
  flux: { dispatcher },
} = shelter;

export function onLoad() {
  dispatcher.dispatch({
    type: 'DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS',
    applicationId: '1046075841706217522',
    originURL: `https://radio.uwu.network/`,
  });
}

export function onUnload() {
  dispatcher.dispatch({
    type: 'DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS',
    applicationId: undefined,
    originURL: `https://radio.uwu.network/`,
  });
}
