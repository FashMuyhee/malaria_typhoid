import * as yup from 'yup';

export const validateEmail = email => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const formSchema = yup.object().shape({
  wbc_count: yup
    .number().required('Required')
    .min(0.5, ({ min }) => `Must be between ${min}`).max(53.90),
  rbc_count: yup
    .number().required('Required')
    .min(0.5, ({ min }) => `Must be between ${min}`).max(6.67),
  hb_level: yup
    .number().required('Required')
    .min(1.4, ({ min }) => `Must be between ${min}`).max(18.70),
  hematocrit: yup
    .number().required('Required')
    .min(4.3, ({ min }) => `Must be between ${min}`).max(52.70),
  mean_cell_volume: yup
    .number().required('Required')
    .min(7.8, ({ min }) => `Must be between ${min}`).max(121),
  mean_corp_hb: yup
    .number().required('Required')
    .min(2.1, ({ min }) => `Must be between ${min}`).max(38.8),
  mean_cell_hb_conc: yup
    .number().required('Required')
    .min(15.7, ({ min }) => `Must be between ${min}`).max(47.60),
  platelet_count: yup
    .number().required('Required')
    .min(3.0, ({ min }) => `Must be between ${min}`).max(1087.0),
  platelet_distr_width: yup
    .number().required('Required')
    .min(0.0, ({ min }) => `Must be between ${min}`).max(23.90),
  mean_platelet_vl: yup
    .number().required('Required')
    .min(3.3, ({ min }) => `Must be between ${min}`).max(18.60),
  neutrophils_percent: yup
    .number().required('Required')
    .min(9.3, ({ min }) => `Must be between ${min}`).max(93.30),
  lymphocytes_percent: yup
    .number().required('Required')
    .min(9.3, ({ min }) => `Must be between ${min}`).max(81.50),
  mixed_cells_percent: yup
    .number().required('Required')
    .min(0.3, ({ min }) => `Must be between ${min}`).max(27.30),
  neutrophils_count: yup
    .number().required('Required')
    .min(0.1, ({ min }) => `Must be between ${min}`).max(42.00),
  lymphocytes_count: yup
    .number().required('Required')
    .min(0.3, ({ min }) => `Must be between ${min}`).max(28.10),
  mixed_cells_count: yup
    .number().required('Required')
    .min(0.0, ({ min }) => `Must be between ${min}`).max(5.60),
  RBC_dist_width_Percent: yup
    .number().required('Required')
    .min(10.6, ({ min }) => `Must be between ${min}`).max(29.0),
});