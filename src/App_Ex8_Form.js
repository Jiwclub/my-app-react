import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <form action="" onSubmit={()=>alert(JSON.stringify(this.state))}>
              <legend>Log in</legend>

              {/* username */}
              <div class="form-group">
                <label for="">username</label>
                <input
//                 onChange เป็นการดักข้อมูลที่พิมพ์เข้ามา
                onChange={e=>{
                    this.setState({username: e.target.value})
                }}
                value={this.state.username}
                  type="text"
                  class="form-control"
                  id=""
                  
                />
              </div>
              {/* password */}
              <div class="form-group">
                <label for="">password</label>
                <input
                onChange={e=>{
                    this.setState({password: e.target.value})
                }}
                value={this.state.password}
                  type="password"
                  class="form-control"
                  id=""
                  
                />
              </div>

              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
