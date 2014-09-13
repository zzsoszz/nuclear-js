var keyMirror = require('../src/utils').keyMirror

module.exports = keyMirror({
  // View actions
  ENTITY_DELETED: null,
  ENTITY_UPDATED: null,
  CHANGE_CURRENT_PROJECT: null,

  // API actions
  ENTITY_SYNC: null,
  ENTITY_FETCH_START: null,
  ENTITY_FETCH_SUCCESS: null,
  ENTITY_FETCH_FAIL: null,

  ENTITY_PERSIST_START: null,
  ENTITY_PERSIST_SUCCESS: null,
  ENTITY_PERSIST_FAIL: null,

  ENTITY_DELETE_START: null,
  ENTITY_DELETE_SUCCESS: null,
  ENTITY_DELETE_FAIL: null,

  // DASHBOARD ACTIONS
  DASHBOARD_SWITCH_MAIN_TAB: null,
  DASHBOARD_SWITCH_SETTINGS_SUBTAB: null,
  DASHBOARD_SELECT_AUDIENCE: null,
  DASHBOARD_SELECT_EXPERIMENT: null,
});
