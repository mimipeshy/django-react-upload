import React, {Component } from 'react';
import axios from 'axios';


class App extends Component {
  state = {
    files: []

  }
    componentDidMount() {
      axios.get('http://127.0.0.1:8000/uploads/').then(response => response.data)
          .then((data) => {
              this.setState({files: data})
              console.log(this.state.files)
          })
  }
  render() {
    return (
       <div className="container">
        <div className="col-xs-8">
        <h6>Uploaded Files</h6>
        {this.state.files.map((file) => (
          <div className="card">
           <div className="card-body">
               <h6 className="card-title">{file.file_license}</h6>
              <h6 className="card-subtitle mb-2 ">
              {file.file_signatories}
              </h6>
                <h6 className="card-subtitle mb-2 ">
              {file.file_collection}
              </h6>
            </div>
          </div>
        ))}
        </div>
       </div>
    );
  }
}
export default App;