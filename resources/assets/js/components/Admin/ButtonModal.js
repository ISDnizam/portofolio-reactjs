import Modal from './Modal';
class ButtonModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleModalShowClick = this.handleModalShowClick.bind(this);
    this.handleModalCloseClick = this.handleModalCloseClick.bind(this);
    this.state = {
      showModal: false,
    }
  }

  handleModalShowClick(e) {
    e.preventDefault();
    this.setState({
      showModal: true
    })
  }

  handleModalCloseClick() {

    this.setState({
      showModal: false
    })
  }



  render() {
    console.log(this.state)
    const { showModal } = this.state;
    return(
      <div className="container">
        <div className="row">
          <div className="col text-center"><button type="button" className="btn btn-primary" onClick={this.handleModalShowClick}>Show Modal</button></div>
          {showModal ? (<Modal handleModalCloseClick={this.handleModalCloseClick} />) : null}
          <div className="col text-center"><button type="button" id="close_mod" className="btn btn-primary" onClick={this.handleModalCloseClick}>Hide Modal</button></div>
        </div>
        <Modal />
      
      </div>
    );
  }
}
export default ButtonModal;
