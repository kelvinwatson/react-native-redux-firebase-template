import { connect } from 'react-redux';
import AddGaymerForm from '../components/AddGaymerForm';
// // import { fetchTwitchIdFromName } from '../../Actions/Actions';
//
const mapStateToProps = (state) => {
  return {

  }
}
//
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
//
const AddGaymerFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddGaymerForm)


export default AddGaymerFormContainer;
