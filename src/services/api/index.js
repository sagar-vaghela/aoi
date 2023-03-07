import { createAxiosFor } from "../axios";

export const getTableRunConfigQAM = () => {
  return createAxiosFor.get('/downstream_qams/running')
};

export const getRCQAMUpdateTableRow = (ch_id, payload) => {
  return createAxiosFor.post(`/downstream_qams_single/running/update?ch_id=${ch_id}`, payload)
};

export const getRCQAMAddTableRow = (payload) => {
  return createAxiosFor.post(`/downstream_qams_single/running/create`, payload)
};

export const getRCQAMDeleteTableRow = (ch_id) => {
  return createAxiosFor.post(`/downstream_qams_single/running/delete?ch_id=${ch_id}`)
};

export const postSaveAsAPI = (filename) => {
  return createAxiosFor.post(`/downstream_config/copy?from_db=test_default.db&to_db=${filename}`);
};

export const makeDefaultAPI = () => {
  return createAxiosFor.post(`/downstream_config/startup/`);
};

export const getTableManageConfigQAM = (db_default_type) => {
  return createAxiosFor.get(`/downstream_config?db_default_type=${db_default_type}`)
}

export const postNewDataBaseAPI = (name) => {
  return createAxiosFor.post(`/downstream_config/new?dbname=${name}`);
};

export const addRangeConfiguration = (dbname, db_default_type, payload) => {
  return createAxiosFor.post(`/downstream_qams_single/create?dbname=${dbname}&db_default_type=${db_default_type}`, payload)
};

export const systemSettingsSplit = (split) => {
  return createAxiosFor.post(`/downstream_config/split?split=${split}`);
};

export const systemSettingsAnnex = (annex) => {
  return createAxiosFor.post(`/downstream_config/annex?annex=${annex}`);
};

export const getSystemSettingsSplitData = () => {
  return createAxiosFor.get('/downstream_config/split')
};

export const getSystemSettingsAnnexData = () => {
  return createAxiosFor.get('/downstream_config/annex')
};

export const getMangeConfigRowAPI = (dbname, db_default_type) => {
  return createAxiosFor.get(`/downstream_qams?dbname=${dbname}&db_default_type=${db_default_type}`)
};
