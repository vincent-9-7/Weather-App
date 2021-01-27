import React from 'react';
// import ReactDOM from 'react';
import './Search.css';


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { username: '' };
    this.state = { enterInformation: '' };
  }

  submit = () => {
    //   mySubmitHandler = (event) => {
    // event.preventDefault();  //防止实际提交表单
    const {enterInformation} = this.state;
    alert(`You are submitting ${ enterInformation }`);
  }

  changeHandle = (event) => {
    this.setState({enterInformation: event.target.value});
  }

  render() {
    const {enterInformation} = this.state;
    console.log(enterInformation)

    return (
      <div>
        <form onSubmit={this.submit}>
          <input
            onChange={this.changeHandle}
            className="mainPage__search" 
            type="text"
            name="search"
            placeholder="enter your city"
          />
        </form>

        <form onSubmit={this.submit}>
          <h1>
            Hello
            {enterInformation}
          </h1>
        
          <input
            type='text'
            onChange={this.changeHandle}
          />

          {/* //submite 按钮 */}
          <input
            type='submit'
          />
        </form>
      </div>
    );
  }
}

// ReactDOM.render(<MyForm />, document.getElementById('root'));
export default MyForm