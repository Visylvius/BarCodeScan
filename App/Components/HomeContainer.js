import { connect } from 'react-redux';
import { HomeViewIos } from './HomeViewIos';
import { checkUpcCode } from '../Actions/barcode-actions';

import { closeModal } from '../Reducers/ui-reducer';

export default connect(
  state => ({
    code: state.code,
    ui: state.ui
  }),
  { checkUpcCode, closeModal }
)(HomeViewIos);
