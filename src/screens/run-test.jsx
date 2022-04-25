import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import axios from 'axios';
import {Button, Input} from '../components';
import {Formik} from 'formik';
import {formSchema} from '../helper/validateEmail';
import AlertModal from '../components/AlertModal';

const MalariaTest = ({route}) => {
  const [loading, setLoading] = useState(false);
  const [messageModal, setMessageModal] = useState({
    isVisible: false,
    isError: false,
    message: '',
  });
  const {type} = route.params;

  const handleAnalyze = async (values) => {
    let body = {};
    for (const key in values) {
      body[key] = parseFloat(values[key]);
    }
    console.log(body);
    try {
      setLoading(true);
      const res = await axios(
        'https://malaria-typhoid-prediction.herokuapp.com/api/analyse',
        {
          method: 'post',
          data: body,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const {predict_type} = res?.data?.analysis;
      console.log(predict_type);
      let message = predict_type;
      if (type === 'typhoid') {
        message = predict_type.toLowerCase().replace('malaria', 'typhoid');
      }
      setMessageModal({
        isError: false,
        message,
        isVisible: true,
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.response.data);
      setMessageModal({
        isError: true,
        message: 'Something went wrong',
        isVisible: true,
      });
    }
  };

  return (
    <ScrollView>
      <Formik
        validationSchema={formSchema}
        initialValues={{
          wbc_count: 0.0,
          rbc_count: 0.0,
          hb_level: 0,
          hematocrit: 0,
          mean_cell_volume: 0,
          mean_corp_hb: 0,
          mean_cell_hb_conc: 0,
          platelet_count: 0,
          platelet_distr_width: 0,
          mean_platelet_vl: 0,
          neutrophils_percent: 0,
          lymphocytes_percent: 0,
          mixed_cells_percent: 0,
          neutrophils_count: 0,
          lymphocytes_count: 0,
          mixed_cells_count: 0,
          RBC_dist_width_Percent: 0,
        }}
        onSubmit={handleAnalyze}>
        {({values, handleChange, handleSubmit, errors, isValid}) => (
          <View style={styles.form}>
            <Input
              question="white blood cell count"
              value={values.wbc_count}
              onChangeAnswer={handleChange('wbc_count')}
              error={errors.wbc_count}
            />
            <Input
              question="red blood cell count"
              value={values.rbc_count}
              error={errors.rbc_count}
              onChangeAnswer={handleChange('rbc_count')}
            />
            <Input
              question="hemoglobin level"
              value={values.hb_level}
              error={errors.hb_level}
              onChangeAnswer={handleChange('hb_level')}
            />
            <Input
              question="Hematocrit ?"
              value={values.hematocrit}
              error={errors.hematocrit}
              onChangeAnswer={handleChange('hematocrit')}
            />
            <Input
              question="mean cell volume"
              value={values.mean_cell_volume}
              error={errors.mean_cell_volume}
              onChangeAnswer={handleChange('mean_cell_volume')}
            />
            <Input
              question="mean corpuscular hemoglobin"
              value={values.mean_corp_hb}
              error={errors.mean_corp_hb}
              onChangeAnswer={handleChange('mean_corp_hb')}
            />
            <Input
              question="mean cell hemoglobin concentration "
              value={values.mean_cell_hb_conc}
              error={errors.mean_cell_hb_conc}
              onChangeAnswer={handleChange('mean_cell_hb_conc')}
            />
            <Input
              question="platelet count"
              value={values.platelet_count}
              error={errors.platelet_count}
              onChangeAnswer={handleChange('platelet_count')}
            />
            <Input
              question="platelet distribution width"
              value={values.platelet_distr_width}
              error={errors.platelet_distr_width}
              onChangeAnswer={handleChange('platelet_distr_width')}
            />
            <Input
              question="mean platelet vl"
              error={errors.mean_platelet_vl}
              value={values.mean_platelet_vl}
              onChangeAnswer={handleChange('mean_platelet_vl')}
            />
            <Input
              question="neutrophils count"
              value={values.neutrophils_count}
              error={errors.neutrophils_count}
              onChangeAnswer={handleChange('neutrophils_count')}
            />
            <Input
              question="lymphocytes percent"
              value={values.lymphocytes_percent}
              error={errors.lymphocytes_percent}
              onChangeAnswer={handleChange('lymphocytes_percent')}
            />
            <Input
              question="mixed cells percent"
              value={values.mixed_cells_percent}
              error={errors.mixed_cells_percent}
              onChangeAnswer={handleChange('mixed_cells_percent')}
            />
            <Input
              question="neutrophils percent"
              value={values.neutrophils_percent}
              error={errors.neutrophils_percent}
              onChangeAnswer={handleChange('neutrophils_percent')}
            />
            <Input
              question="lymphocytes count"
              value={values.lymphocytes_count}
              error={errors.lymphocytes_count}
              onChangeAnswer={handleChange('lymphocytes_count')}
            />
            <Input
              question="mixed cells count"
              value={values.mixed_cells_count}
              error={errors.mixed_cells_count}
              onChangeAnswer={handleChange('mixed_cells_count')}
            />
            <Input
              question="red cell distribution width percent"
              value={values.RBC_dist_width_Percent}
              error={errors.RBC_dist_width_Percent}
              onChangeAnswer={handleChange('RBC_dist_width_Percent')}
            />
            <Button
              style={{marginTop: 40, marginBottom: 30}}
              loading={loading}
              disabled={!isValid || loading}
              title="Analyze"
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
      <AlertModal
        isVisible={messageModal.isVisible}
        isError={messageModal.isError}
        message={messageModal.message}
        onClose={() => setMessageModal({...messageModal, isVisible: false})}
      />
    </ScrollView>
  );
};

export default MalariaTest;

const styles = StyleSheet.create({
  form: {
    width: '100%',
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 20,
    paddingBottom: 10,
    marginBottom: 10,
    padding: 10,
  },
});
